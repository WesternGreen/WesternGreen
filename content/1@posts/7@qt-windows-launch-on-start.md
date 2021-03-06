---
date: 2018-04-09
title: Qt-Windows应用开机自启动相关
tags:
  - windows
  - qt
---

## 实现开机自启动

实现开机自启动需要修改注册表文件

```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
```

第一个为所有用户登陆时启动的项目 第二个是当前用户登陆时启动的项目

编辑第一个注册表项需要管理员权限 推荐使用第二个

参考代码:

```cpp
/* if auto start for all users
 * HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
 * else if auto start for current user
 * HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
 */
QSettings reg("HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run", QSettings::NativeFormat);

QString appName = QApplication::applicationName();

if (autoStart){
	QString strAppPath=QDir::toNativeSeparators(QCoreApplication::applicationFilePath());
	reg.setValue(appName,strAppPath);
} else {
	reg.remove(appName);
}
```

上述代码中的autoStart变量是判断是否自动启动的变量

执行上述函数后可以使用Win + R运行regedit定位到对应注册表位置查看是否更改成功

## 自启动时找不到文件的原因与解决方案

如果程序运行时需要用到exe所在目录下的文件(即只有一个文件名作为相对路径)

开机自启动后会找不到这些文件

原因**可能**是注册表里面的启动项的工作目录继承了父进程的工作目录，也就是system32目录

所以程序实际运行目录并不是exe所在的目录(虽然任务管理器说是)

因为我要保存的文件比较小 索性直接用绝对路径把文件保存到C盘Program Files中的一个文件夹里面了

复杂的解决方案可以参考[Qt5 windows开机启动](http://blog.51cto.com/2161404/1825573)

## 判断应用是否为开机自启动

>为什么要判断应用是开机自启动而不是手动启动的？
>
>案例：某软件开机自启动时会默认最小化到托盘而不显示窗口，但是手动启动时会显示窗口

实现方案: 增加命令行参数

在注册表文件的命令后面添加参数

```cpp
//reg.setValue(appName,strAppPath);
reg.setValue(appName, strAppPath + tr(" autoStart")); //注意tr函数中有一个空格
```

然后修改main.cpp

添加如下代码

```cpp
//MainWindow w;
//如果有命令行参数而且参数是开机自启动
if (argc > 1 && (argv[1] == MainWindow::tr("autoStart"))){//注意tr函数中没有空格
	w.hide();//不显示窗口
} else {
	w.show();//正常显示
}
```

即可实现开机自启动时不显示窗口

参考:

- [Qt:Qt5程序开机自启动(windows)](https://blog.csdn.net/x356982611/article/details/53183144)
- [Qt5 windows开机启动](http://blog.51cto.com/2161404/1825573)
- [设置Qt程序在Windows开机后自动运行](https://www.cnblogs.com/FindSelf/p/3716741.html)
- [vb判断程序是否是开机启动还是手动启动](https://zhidao.baidu.com/question/520965055.html)

