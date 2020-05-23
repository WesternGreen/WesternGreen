(window.webpackJsonp=window.webpackJsonp||[]).push([[93,235],{1111:function(t,v,_){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),e("p",[t._v("OpenGL是一种3D API，是3D图形加速卡和3D图形应用程序之间的桥梁")]),t._v(" "),e("p",[t._v("主要特点：")]),t._v(" "),e("ul",[e("li",[t._v("硬件无关，可以一直")]),t._v(" "),e("li",[t._v("可以在CS系统工作，拥有网络功能")])]),t._v(" "),e("p",[t._v("在Open GL之上还有更多高级专用图形库")]),t._v(" "),e("h2",{attrs:{id:"api结构"}},[t._v("API结构")]),t._v(" "),e("p",[e("img",{attrs:{src:_(483),alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("Open GL表示基本API，包括物体描述、平移、旋转、光照、纹理、文字等")]),t._v(" "),e("li",[t._v("GLU表示utility api，包括绘制二次曲面、复杂多边形与纹理、矩阵管理等")]),t._v(" "),e("li",[t._v("WGL是为win32支持的OPEN GL接口")]),t._v(" "),e("li",[t._v("GLX是为UNIX支持的OPEN GL接口")])]),t._v(" "),e("h2",{attrs:{id:"open-gl工作流程"}},[t._v("OPEN GL工作流程")]),t._v(" "),e("ol",[e("li",[t._v("构造几何要素 ，创建对象的数学描述")]),t._v(" "),e("li",[t._v("在3D空间放置对象，选择合适的观察点")]),t._v(" "),e("li",[t._v("直接定义或由光照条件与贴图纹理给出对象的颜色")]),t._v(" "),e("li",[t._v("将对象的数学描述和颜色信息转换为屏幕像素")])]),t._v(" "),e("h2",{attrs:{id:"open-gl程序设计"}},[t._v("OPEN GL程序设计")]),t._v(" "),e("h3",{attrs:{id:"api-变量与常量的命名"}},[t._v("API、变量与常量的命名")]),t._v(" "),e("ul",[e("li",[t._v("基本库 - 以gl开头的函数")]),t._v(" "),e("li",[t._v("实用库 - 以glu开头")]),t._v(" "),e("li",[t._v("辅助库 - 以glut开头")]),t._v(" "),e("li",[t._v("windows专用库 - 以wgl开头")]),t._v(" "),e("li",[t._v("X-Windows专用库 - 以glx开头")]),t._v(" "),e("li",[t._v("常数 - 以"),e("code",{pre:!0},[t._v("GL_")]),t._v("开头")])]),t._v(" "),e("p",[t._v("函数后缀表明了API的数据类型")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("后缀")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("C语言变量")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("b")]),t._v(" "),e("td",[t._v("8 bit int")]),t._v(" "),e("td",[t._v("signed char")])]),t._v(" "),e("tr",[e("td",[t._v("s")]),t._v(" "),e("td",[t._v("16 bit int")]),t._v(" "),e("td",[t._v("short")])]),t._v(" "),e("tr",[e("td",[t._v("i")]),t._v(" "),e("td",[t._v("32 bit int")]),t._v(" "),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("f")]),t._v(" "),e("td",[t._v("32 bit float")]),t._v(" "),e("td",[t._v("float")])]),t._v(" "),e("tr",[e("td",[t._v("d")]),t._v(" "),e("td",[t._v("64 bit float")]),t._v(" "),e("td",[t._v("double")])]),t._v(" "),e("tr",[e("td",[t._v("ub")]),t._v(" "),e("td",[t._v("8 bit unsigned int")]),t._v(" "),e("td",[t._v("unsigned char")])]),t._v(" "),e("tr",[e("td",[t._v("us")]),t._v(" "),e("td",[t._v("16 bit unsigned int")]),t._v(" "),e("td",[t._v("unsigned short")])]),t._v(" "),e("tr",[e("td",[t._v("ui")]),t._v(" "),e("td",[t._v("32 bit unsigned int")]),t._v(" "),e("td",[t._v("unsigned long")])])])]),t._v(" "),e("p",[t._v("比如函数"),e("code",{pre:!0},[t._v("glVertex2i(100, 200)")]),t._v("表明：")]),t._v(" "),e("ul",[e("li",[t._v("gl - 是OPEN GL基本函数")]),t._v(" "),e("li",[t._v("vertex - 绘点函数")]),t._v(" "),e("li",[t._v("2i - 两个整型参数")])]),t._v(" "),e("h3",{attrs:{id:"open-gl工作方式"}},[t._v("OPEN GL工作方式")]),t._v(" "),e("p",[t._v("OPEN GL工作方式是状态机。可以进行状态或模式设置。没有重新改变之前一直生效")]),t._v(" "),e("p",[t._v("许多变量可以通过"),e("code",{pre:!0},[t._v("glEnable()")]),t._v("和"),e("code",{pre:!0},[t._v("glDisable()")]),t._v("两个函数来启动、关闭")]),t._v(" "),e("p",[t._v("可以使用"),e("code",{pre:!0},[t._v("glGetBooleanv()/glGetDouble()/glGetGloatv()/glGetIntegerv()")]),t._v("等函数获取某个状态变量")]),t._v(" "),e("p",[t._v("使用"),e("code",{pre:!0},[t._v("glPushAttrib()/glPopAttrib()")]),t._v("可以存储和恢复最近使用的状态变量")]),t._v(" "),e("h3",{attrs:{id:"程序基本结构"}},[t._v("程序基本结构")]),t._v(" "),e("ul",[e("li",[t._v("初始化部分\n"),e("ul",[e("li",[t._v("设置状态开关、颜色模式、是否光照等")])])]),t._v(" "),e("li",[t._v("设置观察坐标系的取景模式和取景框位置大小\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("void glViewPort(left, top, right, bottom)")]),t._v("设置屏幕窗口大小")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("void glOrtho(left, rright, bottom, top, near, far)")]),t._v("设置投影方式为正交投影（平行投影），取景体积是一个长方体")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("void gluPerspective(fovy, aspect, zNear, zFar)")]),t._v("设置投影为透视投影，取景体积是一个截头锥体")])])]),t._v(" "),e("li",[t._v("使用OPEN GL进行几何物体对象的数学描述\n"),e("ul",[e("li",[t._v("包括点线面的位置与拓扑，几何变换，光照处理")])])])]),t._v(" "),e("h2",{attrs:{id:"配置环境windows"}},[t._v("配置环境（windows")]),t._v(" "),e("p",[t._v("安装宇宙最强IDE - Visual Studio")]),t._v(" "),e("p",[t._v("在"),e("a",{attrs:{href:"http://freeglut.sourceforge.net/index.php#download"}},[t._v("GLUT的网址")]),t._v("下载最新的GLUT版本源文件")]),t._v(" "),e("p",[t._v("跟着README或自行百度即可")])])}]};t.exports={attributes:{layout:"collection",title:"OPEN GL",collection:"ComputerGraphics"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},483:function(t,v,_){t.exports=_.p+"img/3c65f83.png"}}]);