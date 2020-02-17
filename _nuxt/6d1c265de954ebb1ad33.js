(window.webpackJsonp=window.webpackJsonp||[]).push([[65,818,819,820,821],{1001:function(t,n,e){t.exports=e.p+"img/0ca3e22.png"},1002:function(t,n,e){t.exports=e.p+"img/d1213a8.png"},1003:function(t,n,e){t.exports=e.p+"img/c27f698.png"},1004:function(t,n,e){t.exports=e.p+"img/0c7041a.png"},1161:function(t,n,e){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"frontmatter-markdown"},[o("h2",[t._v("程序添加图标")]),t._v(" "),o("p",[t._v("以最近写的ToDoStack为例")]),t._v(" "),o("p",[t._v("首先确保"),o("strong",[t._v("图标文件在源码目录中")])]),t._v(" "),o("p",[t._v("打开项目文件"),o("strong",[t._v("ToDoStack.pro")]),t._v("，在最后一行添加")]),t._v(" "),o("pre",[o("code",{pre:!0},[t._v("//ToDoStack.ico是此程序的图标文件\nRC_ICONS = ToDoStack.ico\n")])]),t._v(" "),o("p",[t._v("这样程序就会以ToDoStack.ico作为图标")]),t._v(" "),o("h2",[t._v("最小化托盘需要的图标")]),t._v(" "),o("p",[t._v("最小化托盘时显示的图标在"),o("strong",[t._v("资源文件")]),t._v("中")]),t._v(" "),o("p",[t._v("项目-新建文件-Qt-Qt Resource File")]),t._v(" "),o("p",[o("img",{attrs:{src:e(1001),alt:"2-1"}})]),t._v(" "),o("p",[t._v("命名(本项目中命名为myicon)")]),t._v(" "),o("p",[o("img",{attrs:{src:e(1002),alt:"2-2"}})]),t._v(" "),o("p",[t._v("这样在左侧项目视图中会出现"),o("strong",[t._v("资源")]),t._v("文件夹")]),t._v(" "),o("p",[o("img",{attrs:{src:e(1003),alt:"2-3"}})]),t._v(" "),o("p",[t._v("编辑资源文件，点击"),o("strong",[t._v("添加-添加前缀")]),t._v("(前缀类似于文件夹的作用),默认会出现一个名为 "),o("strong",[t._v("/new/prefix1")]),t._v(" 的前缀")]),t._v(" "),o("p",[t._v("在本项目中，我将它改名为**/img**")]),t._v(" "),o("p",[o("img",{attrs:{src:e(1004),alt:"2-4"}})]),t._v(" "),o("p",[t._v("然后点击"),o("strong",[t._v("添加-添加文件")]),t._v("，选中我们的托盘图标文件添加进来即可")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("注意:托盘图标文件不建议使用ico而建议使用png，否则可能无法正常显示")])])]),t._v(" "),o("h2",[t._v("实现最小化到托盘")]),t._v(" "),o("p",[t._v("需要的头文件")]),t._v(" "),o("pre",{staticClass:"language-c++"},[o("code",{pre:!0,attrs:{class:"language-c++"}},[t._v("#include <QAction>//用来生成鼠标点击托盘图标后出现的菜单\n#include <QMenu>//用来生成鼠标点击托盘图标后出现的菜单\n#include <QSystemTrayIcon>//托盘图标类\n")])]),t._v(" "),o("p",[t._v("给MainWindow.h添加私有子控件指针")]),t._v(" "),o("pre",{staticClass:"language-c++"},[o("code",{pre:!0,attrs:{class:"language-c++"}},[t._v("QSystemTrayIcon * icon;//托盘图标\nQAction * actionShow;//显示窗口操作\nQAction * actionClose;//退出程序操作\nQMenu * menu;//菜单\n")])]),t._v(" "),o("p",[t._v("在构造函数中初始化")]),t._v(" "),o("p",[t._v("注意从资源文件获取图标的时候路径"),o("strong",[t._v("不是:/myicon/img/ToDoStack.png而是:/img/ToDoStack.png")])]),t._v(" "),o("pre",{staticClass:"language-c++"},[o("code",{pre:!0,attrs:{class:"language-c++"}},[t._v('icon = new QSystemTrayIcon(this);//获取托盘图标对象\nQIcon thisIcon(":/img/ToDoStack.png");//从资源文件获取托盘图标的图标文件\nicon->setIcon(thisIcon);//设置托盘图标的图标文件\nconnect(icon, &QSystemTrayIcon::activated, this, &MainWindow::trayClicked);//点击托盘图标发生的事件\nicon->show();//在托盘显示此图标\nactionShow = new QAction(tr("Show(&S)"), this);//显示窗口操作\nactionClose = new QAction(tr("Exit(&E)"), this);//退出程序操作\nmenu = new QMenu(this);\nmenu->addAction(actionShow);//添加至菜单\nmenu->addAction(actionClose);\nconnect(actionShow, &QAction::triggered, this, &MainWindow::getShow);\nconnect(actionClose, &QAction::triggered, this, &MainWindow::getExit);\n')])]),t._v(" "),o("p",[t._v("在头文件添加对应的槽")]),t._v(" "),o("pre",{staticClass:"language-c++"},[o("code",{pre:!0,attrs:{class:"language-c++"}},[t._v("void trayClicked(QSystemTrayIcon::ActivationReason reason);//此处参数类型不能改动，因为要匹配对应的信号\nvoid getShow();\nvoid getExit();\n")])]),t._v(" "),o("p",[t._v("在源文件中完成函数")]),t._v(" "),o("pre",{staticClass:"language-c++"},[o("code",{pre:!0,attrs:{class:"language-c++"}},[t._v("void MainWindow::trayClicked(QSystemTrayIcon::ActivationReason reason)\n{\n\tswitch (reason){//reason为托盘图标被触发的形式\n\tcase QSystemTrayIcon::Context://鼠标右键点击\n\t\tmenu->exec(this->cursor().pos());//显示菜单 注意不是show()\n\t\tbreak;\n\tcase QSystemTrayIcon::Trigger://鼠标左键点击\n\t\tshow();//显示主窗口\n\t\tbreak;\n\t}\n}\n\nvoid MainWindow::getShow()\n{\n\tshow();//显示主窗口\n}\n\nvoid MainWindow::getExit()\n{\n\tqApp->quit();//退出程序\n}\n")])]),t._v(" "),o("p",[t._v("最后，拦截主窗口自身的关闭操作，实现点击关闭按钮时默认隐藏到托盘的效果")]),t._v(" "),o("pre",{staticClass:"language-c++"},[o("code",{pre:!0,attrs:{class:"language-c++"}},[t._v("#include <QCloseEvent>//用来拦截窗口关闭事件\n")])]),t._v(" "),o("p",[t._v("在头文件中添加protected方法")]),t._v(" "),o("pre",{staticClass:"language-c++"},[o("code",{pre:!0,attrs:{class:"language-c++"}},[t._v("void closeEvent(QCloseEvent * e);\n")])]),t._v(" "),o("p",[t._v("会发现这里的方法名"),o("em",[t._v("closeEvent")]),t._v("变成了斜体，表示我们"),o("strong",[t._v("不能")]),t._v("改动这个方法名")]),t._v(" "),o("p",[t._v("最后在源文件完善函数")]),t._v(" "),o("pre",{staticClass:"language-c++"},[o("code",{pre:!0,attrs:{class:"language-c++"}},[t._v("void MainWindow::closeEvent(QCloseEvent *e)\n{\n\te->ignore();//忽略原本的关闭操作\n\thide();//仅仅隐藏主窗口\n}\n")])]),t._v(" "),o("h2",[t._v("添加托盘注释")]),t._v(" "),o("p",[t._v("QSystemTrayIcon类的方法setToolTip可以设置托盘图标注释")]),t._v(" "),o("p",[t._v("参考：")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"http://www.qter.org/portal.php?mod=view&aid=25&page=3"}},[t._v("Qt开发环境的搭建和HelloWorld")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://blog.csdn.net/bzhxuexi/article/details/24787103"}},[t._v("Qt中如何使窗口隐藏/最小化到托盘")])])])])}]};t.exports={attributes:{title:"Qt添加图标、资源文件相关、最小化到托盘",date:"2018-03-04T00:00:00.000Z",tags:["qt"]},vue:{render:o.render,staticRenderFns:o.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}}}]);