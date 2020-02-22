(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1186:function(t,e){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"实现开机自启动"}},[t._v("实现开机自启动")]),t._v(" "),n("p",[t._v("实现开机自启动需要修改注册表文件")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\nHKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\n")])]),t._v(" "),n("p",[t._v("第一个为所有用户登陆时启动的项目 第二个是当前用户登陆时启动的项目")]),t._v(" "),n("p",[t._v("编辑第一个注册表项需要管理员权限 推荐使用第二个")]),t._v(" "),n("p",[t._v("参考代码:")]),t._v(" "),n("pre",{staticClass:"language-c++"},[n("code",{pre:!0,attrs:{class:"language-c++"}},[t._v('/* if auto start for all users\n * HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\n * else if auto start for current user\n * HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\n */\nQSettings reg("HKEY_CURRENT_USER\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run", QSettings::NativeFormat);\n\nQString appName = QApplication::applicationName();\n\nif (autoStart){\n\tQString strAppPath=QDir::toNativeSeparators(QCoreApplication::applicationFilePath());\n\treg.setValue(appName,strAppPath);\n} else {\n\treg.remove(appName);\n}\n')])]),t._v(" "),n("p",[t._v("上述代码中的autoStart变量是判断是否自动启动的变量")]),t._v(" "),n("p",[t._v("执行上述函数后可以使用Win + R运行regedit定位到对应注册表位置查看是否更改成功")]),t._v(" "),n("h2",{attrs:{id:"自启动时找不到文件的原因与解决方案"}},[t._v("自启动时找不到文件的原因与解决方案")]),t._v(" "),n("p",[t._v("如果程序运行时需要用到exe所在目录下的文件(即只有一个文件名作为相对路径)")]),t._v(" "),n("p",[t._v("开机自启动后会找不到这些文件")]),t._v(" "),n("p",[t._v("原因"),n("strong",[t._v("可能")]),t._v("是注册表里面的启动项的工作目录继承了父进程的工作目录，也就是system32目录")]),t._v(" "),n("p",[t._v("所以程序实际运行目录并不是exe所在的目录(虽然任务管理器说是)")]),t._v(" "),n("p",[t._v("因为我要保存的文件比较小 索性直接用绝对路径把文件保存到C盘Program Files中的一个文件夹里面了")]),t._v(" "),n("p",[t._v("复杂的解决方案可以参考"),n("a",{attrs:{href:"http://blog.51cto.com/2161404/1825573"}},[t._v("Qt5 windows开机启动")])]),t._v(" "),n("h2",{attrs:{id:"判断应用是否为开机自启动"}},[t._v("判断应用是否为开机自启动")]),t._v(" "),n("blockquote",[n("p",[t._v("为什么要判断应用是开机自启动而不是手动启动的？")]),t._v(" "),n("p",[t._v("案例：某软件开机自启动时会默认最小化到托盘而不显示窗口，但是手动启动时会显示窗口")])]),t._v(" "),n("p",[t._v("实现方案: 增加命令行参数")]),t._v(" "),n("p",[t._v("在注册表文件的命令后面添加参数")]),t._v(" "),n("pre",{staticClass:"language-c++"},[n("code",{pre:!0,attrs:{class:"language-c++"}},[t._v('//reg.setValue(appName,strAppPath);\nreg.setValue(appName, strAppPath + tr(" autoStart")); //注意tr函数中有一个空格\n')])]),t._v(" "),n("p",[t._v("然后修改main.cpp")]),t._v(" "),n("p",[t._v("添加如下代码")]),t._v(" "),n("pre",{staticClass:"language-c++"},[n("code",{pre:!0,attrs:{class:"language-c++"}},[t._v('//MainWindow w;\n//如果有命令行参数而且参数是开机自启动\nif (argc > 1 && (argv[1] == MainWindow::tr("autoStart"))){//注意tr函数中没有空格\n\tw.hide();//不显示窗口\n} else {\n\tw.show();//正常显示\n}\n')])]),t._v(" "),n("p",[t._v("即可实现开机自启动时不显示窗口")]),t._v(" "),n("p",[t._v("参考:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.csdn.net/x356982611/article/details/53183144"}},[t._v("Qt:Qt5程序开机自启动(windows)")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://blog.51cto.com/2161404/1825573"}},[t._v("Qt5 windows开机启动")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/FindSelf/p/3716741.html"}},[t._v("设置Qt程序在Windows开机后自动运行")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://zhidao.baidu.com/question/520965055.html"}},[t._v("vb判断程序是否是开机启动还是手动启动")])])])])}]};t.exports={attributes:{date:"2018-04-09T00:00:00.000Z",title:"Qt-Windows应用开机自启动相关",tags:["windows","qt"]},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);