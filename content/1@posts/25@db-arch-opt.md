---
title: Database Architecture Optimization
description: Sharding & Read-Write Splitting
tags:
  - Database
  - 系统设计
  - SQL
---

## 概述

本文是观看[此视频](https://www.bilibili.com/video/av68719044)时整理的笔记。

## Sharding

### Sharding策略

#### 垂直分表

把原本属于一个table的fields拆分到多个table中。

例：电商场景，原本一个item表中包括name, description, price, owner, id等字段。但是name, price, owner等字段查询频率较高，且通常会被一起查询，而description通常只有点开商品详情页面才会显示，且通常使用blob等大容量数据类型进行存储，数据量大、涉及跨页操作导致速度慢。

那么就可以把description单独拆分到另一个表，使用外键进行查询。

常见原则：
- 不常用的字段放在单独的表
- text/blob类型大字段放在单独的表
- 经常组合查询的内容放在一张表

优点：
- 避免IO争抢
- 减少锁表的几率
- 提升缓存效率（页）

#### 垂直分库

根据业务把table进行分类，放在不同的服务器上

例：电商场景，用户登录管理放在一个库，商品信息管理放在另一个库

优点：
- 专库专用，低耦合。便于实现微服务、业务中台
- 便于维护、监控、管理、扩展
- 避免单个服务器性能瓶颈，比如网络IO、磁盘IO、数据库连接数等

#### 水平分库

把原本属于一个table的多个item根据某个field的值拆分到多个schema相同的table中并放在不同的服务器

例：店铺id为奇数的店铺在一个table，id为偶数的店铺在另一个table。代码里面可以写`tables[id % 2]`

优点：
- 防止单库高并发性能瓶颈
- 提高系统稳定性（IO冲突减少，锁减少）与可用性（部分库可用）

#### 水平分表

水平分库，但是把schema相同的table也放在同一个服务器，防止数据库服务器数量太多

### 策略选择

1. 在系统设计阶段就应该根据业务耦合情况把表和库进行垂直拆分
2. 压力不是特别大的情况下，优化时优先选择缓存、读写分离与只读副本、索引技术
3. 数据量极大，持续增长，再考虑水平分库分表

> 其实可以考虑下NoSQL

### 分库分表带来的问题

- 分布式事务问题
- 无法跨节点关联查询
  - 因为数据不在一个数据库，无法一条SQL语句查询到目标数据
- 无法跨节点分页、排序、聚合函数
- 主键避重问题、自增主键无法实现
- 公共表问题（字典表）
  - 位于不同服务器的表需要查询一个相同的表，如何避免重复查询

## 读写分离

数据库集群使用主从架构。主库负责写（当然也可以读），众多从库负责读。数据库需要配置数据同步，中间件实现读写分离

> 显然读写分离常用于读负载远高于写负载的场景。如果写负载很高，可以思考下是不是使用NoSQL更合适，或者业务场景是OLAP，应该使用数据仓库或其他大数据组件

## Sharding-JDBC

### 概述

是当当网研发的开源分布式数据库中间件（jar包，相当于增强版JDBC驱动），从3.0开始被包含在Sharding-Sphere项目中，之后进入Apache孵化器，4.0之后为Apache版本

ShardingSphere是一套开源分布式数据库中间件解决方案生态圈，包括Sharding-JDBC、Sharding-Proxy、Sharding-Sidecar

Sharding-JDBC的核心功能为**数据分片**和**读写分离**，用来**透明**地操作多库多表，降低开发复杂度

单库单表时Sharding-JDBC相比于JDBC性能损耗不超过7%，多库多表情况性能有接近2倍的提升

**注意**：Sharding-JDBC只是减少分库分表后业务逻辑代码的开发成本，代码只需要操作**逻辑表**，中间件负责把操作作用在**真实表**。具体分库分表仍然需要数据库管理员进行设计

### 功能

- 水平分库/分表
- 垂直分库
- 主键避重
  - 常用雪花算法SNOWFLAKE
    - 全局递增（当然全局唯一），不过步长不固定。生成规则和时间有关
    - 长度比uuid短
- 绑定表
  - 绑定分片规则一致的主表和子表
  - 比如order表和order_item表的主键都是order_id，分片规则根据order_id分片，那么在关联查询order表和order_item表的时候就不会出现跨服务器笛卡尔乘积（即服务器A上的order不会对应服务器B上的order_item）
- 广播表
  - 把需要经常关联查询且数据量不大的表放在每个服务器中
  - 用来解决公共表/字典表问题
  - 示例字典表：比如status_id到status_name的映射
- 读写分离

### 原理（执行过程）

1. SQL解析
2. 查询优化
3. SQL路由
4. SQL改写
5. SQL执行
   1. 两种模式
      1. 内存限制模式
         1. 不限制连接数量，对于每个表创建一个数据库连接
         2. 多线程并发处理
         3. 执行效率最高
         4. 适用于OLAP提升吞吐
      2. 连接限制模式
         1. 尽可能少地使用连接数量。只有【一次操作需要处理不同数据库】时才会使用多线程
         2. 尽可能串行处理，防止多线程影响事务
         3. 适用于OLTP保证系统可用。而且通常OLTP的SQL会路由到单一的分片，用多线程没意义
6. 结果归并
   1. 从功能可以划分为：遍历、排序、分组、分页、聚合。这些操作可以组合出现
   2. 从结构上进行划分：
      1. 内存归并
         1. 所有结果放在内存然后进行归并
         2. 内存耗费高
         3. 速度快
      2. **流式归并**（常用
         1. 边处理边归并。比如从3个分片中合并正序id，查询得到三个游标，然后从这三个游标一个一个取数据进行比较并归并
      3. 装饰器归并
         1. 基于【装饰器】设计模式
         2. 在上述两种其他归并类型上追加的归并能力

## 其他常见数据库中间件

- ProxySQL
- MyCat
- Heimdall Proxy
