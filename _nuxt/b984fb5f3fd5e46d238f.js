(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1130:function(t,e){const v={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"frontmatter-markdown"},[v("h2",{attrs:{id:"发展"}},[t._v("发展")]),t._v(" "),v("ul",[v("li",[t._v("数据和应用对应，数据不能共用。数据手工管理")]),t._v(" "),v("li",[t._v("文件管理，使用文件管理系统实现数据管理\n"),v("ul",[v("li",[t._v("数据冗余导致一致性问题，产生垃圾数据")]),t._v(" "),v("li",[t._v("原子性")]),t._v(" "),v("li",[t._v("…")])])]),t._v(" "),v("li",[t._v("数据库系统")])]),t._v(" "),v("h2",{attrs:{id:"数据库内结构"}},[t._v("数据库内结构")]),t._v(" "),v("p",[t._v("三层结构：")]),t._v(" "),v("ul",[v("li",[t._v("view level（外模式、用户模式")]),t._v(" "),v("li",[t._v("logical level（逻辑模式")]),t._v(" "),v("li",[t._v("physical level（物理模式、内模式")])]),t._v(" "),v("p",[t._v("对应三层抽象：")]),t._v(" "),v("ul",[v("li",[t._v("view abstraction")]),t._v(" "),v("li",[t._v("logical abstraction")]),t._v(" "),v("li",[t._v("physical abstraction")])]),t._v(" "),v("p",[t._v("三级模式，两级映像(mappings)，即外模式向逻辑模式的映射和逻辑模式向物理模式的映射")]),t._v(" "),v("p",[t._v("其他相关名词：")]),t._v(" "),v("ul",[v("li",[t._v("schema - 模式，描述存储结构（静态")]),t._v(" "),v("li",[t._v("instance - 实例、快照，某一时刻整个数据库的内容（动态")])]),t._v(" "),v("h2",{attrs:{id:"数据库的独立性"}},[t._v("数据库的独立性")]),t._v(" "),v("ul",[v("li",[t._v("物理数据独立性\n"),v("ul",[v("li",[t._v("修改物理存储模式时不需要改app")])])]),t._v(" "),v("li",[t._v("逻辑数据独立性\n"),v("ul",[v("li",[t._v("修改table schema的时候不需要改不用新schema的app")])])])]),t._v(" "),v("h2",{attrs:{id:"data-models"}},[t._v("Data Models")]),t._v(" "),v("p",[t._v("数据库的数据模型")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("支持的数据结构")])]),t._v(" "),v("li",[v("p",[t._v("支持的数据操作")])]),t._v(" "),v("li",[v("p",[t._v("完整性约束")])]),t._v(" "),v("li",[v("p",[t._v("基于对象数据模型")]),t._v(" "),v("ul",[v("li",[t._v("ER数据模型")]),t._v(" "),v("li",[t._v("面向对象模型")])])]),t._v(" "),v("li",[v("p",[t._v("基于记录数据模型")]),t._v(" "),v("ul",[v("li",[t._v("层次数据模型")]),t._v(" "),v("li",[t._v("网状数据模型")]),t._v(" "),v("li",[t._v("关系数据模型")])])])]),t._v(" "),v("h2",{attrs:{id:"语言"}},[t._v("语言")]),t._v(" "),v("h3",{attrs:{id:"ddl"}},[t._v("DDL")]),t._v(" "),v("p",[t._v("database definition language数据定义语言（如SQL中的"),v("code",{pre:!0},[t._v("create table")])]),t._v(" "),v("h3",{attrs:{id:"dml"}},[t._v("DML")]),t._v(" "),v("p",[t._v("data manipulation language数据操作语言（增删改查，如SQL中的"),v("code",{pre:!0},[t._v("insert/delete")])]),t._v(" "),v("h3",{attrs:{id:"dcl"}},[t._v("DCL")]),t._v(" "),v("p",[t._v("data control language数据控制语言，控制完整性与安全性，如SQL中的"),v("code",{pre:!0},[t._v("grant")])])])}]};t.exports={attributes:{layout:"collection",title:"Introduction",collection:"DatabaseConcept"},vue:{render:v.render,staticRenderFns:v.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=v.render,this.$options.staticRenderFns=v.staticRenderFns}}}}}}]);