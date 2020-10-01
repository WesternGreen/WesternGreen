(window.webpackJsonp=window.webpackJsonp||[]).push([[25,684,685,686,687,688,689,690,691,692,693,694,695,696],{1227:function(v,_,t){const l={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"可编程并行接口8255a"}},[v._v("可编程并行接口8255A")]),v._v(" "),l("h3",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),l("p",[v._v("并口特点：")]),v._v(" "),l("ul",[l("li",[v._v("多条数据线，传送距离短")]),v._v(" "),l("li",[v._v("需要握手信号进行控制")]),v._v(" "),l("li",[v._v("数据传输率高")])]),v._v(" "),l("h3",{attrs:{id:"8255a结构与引脚"}},[v._v("8255A结构与引脚")]),v._v(" "),l("p",[l("img",{attrs:{src:t(842),alt:""}})]),v._v(" "),l("ul",[l("li",[v._v("数据总线缓冲器 - 用于收发数据总线上面的数据")]),v._v(" "),l("li",[v._v("读写控制逻辑 - 控制总线的开放、关闭以及数据的传送方向")]),v._v(" "),l("li",[v._v("数据端口ABC - AB具有输入输出锁存、三态缓冲功能，C具有输出锁存、输入缓冲功能，可以拆分为两个4位端口")]),v._v(" "),l("li",[v._v("AB组控制电路 - A组控制A口和C口高四位，B组控制B口和C口低四位")]),v._v(" "),l("li",[v._v("两根地址线A0A1 - 11为设置命令寄存器")])]),v._v(" "),l("p",[l("img",{attrs:{src:t(843),alt:"7-2"}})]),v._v(" "),l("h3",{attrs:{id:"编程"}},[v._v("编程")]),v._v(" "),l("ul",[l("li",[v._v("方式0 - 基本输入输出方式\n"),l("ul",[l("li",[v._v("用于无条件传送和查询方式的输入输出")])])]),v._v(" "),l("li",[v._v("方式1 - "),l("strong",[v._v("选通输入输出方式")]),v._v(" "),l("ul",[l("li",[v._v("用户查询和中断方式的输入输出")])])]),v._v(" "),l("li",[v._v("方式2 - 双向传送方式")])]),v._v(" "),l("p",[l("strong",[v._v("方式选择控制字")]),v._v("：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(844),alt:""}})]),v._v(" "),l("p",[v._v("例：端口地址60-63H，初始化A口味方式1输入，C口高四位为输出，B口方式0输出，C口低四位为输入：")]),v._v(" "),l("pre",{staticClass:"language-bash"},[l("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("mov dx, 63h "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 控制寄存器地址\nmov al, 10110001b\nout dx, al\n")])]),v._v(" "),l("p",[l("strong",[v._v("置为、复位控制字")]),v._v("：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(845),alt:""}})]),v._v(" "),l("p",[v._v("控制C口。如把C口的bit3值1：")]),v._v(" "),l("pre",{staticClass:"language-bash"},[l("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("mov dx, 63h\nmov al, 00000111b\nout dx, al\n")])]),v._v(" "),l("p",[v._v("也可以直接写入C口：")]),v._v(" "),l("pre",{staticClass:"language-bash"},[l("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("mov dx, 62h "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" C口地址\n"),l("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("in")]),v._v(" al, dx "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 读取原值\nor al, 00001000b "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" PC3置1\nand al, 11111101b "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" PC1清零\nout dx, al "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" 输出\n")])]),v._v(" "),l("p",[v._v("在对输出信号有严格要求的时候建议使用控制字修改C口（即第一种方式")]),v._v(" "),l("h3",{attrs:{id:"工作方式"}},[v._v("工作方式")]),v._v(" "),l("ul",[l("li",[v._v("方式0 - 基本输入输出方式\n"),l("ul",[l("li",[v._v("用于无条件传送和查询方式的输入输出")]),v._v(" "),l("li",[v._v("无专用握手信号（不过可以使用C口的一条或多条作为握手线")]),v._v(" "),l("li",[v._v("输出有锁存功能，输入有缓冲而无锁存")])])]),v._v(" "),l("li",[v._v("方式1 - "),l("strong",[v._v("选通输入输出方式")]),v._v(" "),l("ul",[l("li",[v._v("用户查询和中断方式的输入输出")]),v._v(" "),l("li",[v._v("AB口作为数据传送口，可输入或输出")]),v._v(" "),l("li",[v._v("使用C口中的若干线作为"),l("strong",[v._v("专用的握手信号")])]),v._v(" "),l("li",[v._v("输出有锁存，输入有缓冲和锁存")])])]),v._v(" "),l("li",[v._v("方式2 - 双向传送方式\n"),l("ul",[l("li",[v._v("A口在某一时刻可以输入数据，在不同时刻可以输出数据")]),v._v(" "),l("li",[v._v("可以采用中断方式或查询方式传送数据")]),v._v(" "),l("li",[v._v("B口只能工作在方式1或0")]),v._v(" "),l("li",[v._v("使用C口的若干线作为专用的握手信号")])])])]),v._v(" "),l("h2",{attrs:{id:"可编程串行接口"}},[v._v("可编程串行接口")]),v._v(" "),l("h3",{attrs:{id:"概述-2"}},[v._v("概述")]),v._v(" "),l("ul",[l("li",[v._v("串行传送 - 把数据按照二进制一位一位地传送")]),v._v(" "),l("li",[v._v("使用的传输线少，适合远距离传输")]),v._v(" "),l("li",[v._v("数据信息和控制信息在同一条线上传送")]),v._v(" "),l("li",[v._v("双方需要约定传输的波特率")]),v._v(" "),l("li",[v._v("抗干扰能力强，串行通信信号之间的相互干扰可以忽略不计")])]),v._v(" "),l("p",[v._v("数据传送方式：")]),v._v(" "),l("ul",[l("li",[v._v("单工")]),v._v(" "),l("li",[v._v("半双工")]),v._v(" "),l("li",[v._v("全双工")])]),v._v(" "),l("h3",{attrs:{id:"异步通信"}},[v._v("异步通信")]),v._v(" "),l("ul",[l("li",[v._v("以字符为单位进行传送")]),v._v(" "),l("li",[v._v("收发双方使用不同的时钟，两个时钟允许存在一定偏差")]),v._v(" "),l("li",[v._v("无数据传送时，传送高电平")]),v._v(" "),l("li",[v._v("成本低，速率不高")])]),v._v(" "),l("p",[v._v("异步通信数据格式：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(846),alt:""}})]),v._v(" "),l("p",[v._v("异步数据帧的构成：")]),v._v(" "),l("ul",[l("li",[v._v("一个起始位（低电平")]),v._v(" "),l("li",[v._v("5-8个数据位")]),v._v(" "),l("li",[v._v("0或1个奇偶校验为")]),v._v(" "),l("li",[v._v("1、1.5或2个停止位")])]),v._v(" "),l("h3",{attrs:{id:"同步通信"}},[v._v("同步通信")]),v._v(" "),l("ul",[l("li",[v._v("以数据块（或字符块）为单位进行传送")]),v._v(" "),l("li",[v._v("接收方和发送方的时钟完全同步")]),v._v(" "),l("li",[v._v("数据传输效率高")]),v._v(" "),l("li",[v._v("需要"),l("strong",[v._v("界定符")])]),v._v(" "),l("li",[v._v("没有数据传送的时候发送"),l("strong",[v._v("同步字符")])])]),v._v(" "),l("p",[l("strong",[v._v("面向字符的同步通信数据帧格式")]),v._v("：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(847),alt:""}})]),v._v(" "),l("ul",[l("li",[v._v("规定了10个特殊字符为控制字符")]),v._v(" "),l("li",[v._v("在数据块中如果传送了控制字符，则采用转义字符DLE进行字符填充")])]),v._v(" "),l("p",[l("strong",[v._v("面向比特的同步通信数据格式")]),v._v("：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(848),alt:""}})]),v._v(" "),l("ul",[l("li",[v._v("使用比特填充技术")])]),v._v(" "),l("h3",{attrs:{id:"数据传输单位"}},[v._v("数据传输单位")]),v._v(" "),l("ul",[l("li",[v._v("比特率\n"),l("ul",[l("li",[v._v("单位时间传输的二进制比特的数量")])])]),v._v(" "),l("li",[v._v("波特率\n"),l("ul",[l("li",[v._v("单位时间内载波调制状态改变的次数，是对符号传输率的一种度量")])])])]),v._v(" "),l("h2",{attrs:{id:"可编程串行接口芯片8251"}},[v._v("可编程串行接口芯片8251")]),v._v(" "),l("h3",{attrs:{id:"概述-3"}},[v._v("概述")]),v._v(" "),l("p",[v._v("基本功能：")]),v._v(" "),l("ul",[l("li",[v._v("数据格式的自动生成")]),v._v(" "),l("li",[v._v("串并转换")]),v._v(" "),l("li",[v._v("传输速率控制")]),v._v(" "),l("li",[v._v("错误检测")]),v._v(" "),l("li",[v._v("电平转换")])]),v._v(" "),l("h3",{attrs:{id:"结构"}},[v._v("结构")]),v._v(" "),l("p",[l("img",{attrs:{src:t(849),alt:""}})]),v._v(" "),l("ul",[l("li",[v._v("面向CPU的连接信号\n"),l("ul",[l("li",[v._v("D0-D7三态双向数据线")]),v._v(" "),l("li",[v._v("~RD & ~WR读写信号线")]),v._v(" "),l("li",[v._v("~CS片选")]),v._v(" "),l("li",[v._v("RESET芯片复位，需要宽度大于6个时钟周期的高电平")]),v._v(" "),l("li",[v._v("C/~D地址线。高电平访问控制寄存器，低电平访问数据寄存器")])])]),v._v(" "),l("li",[v._v("状态信号\n"),l("ul",[l("li",[v._v("TxRDY(out)发送器准备好。可以作为中断请求信号")]),v._v(" "),l("li",[v._v("RxRDY(out)接收器准备好。可以作为中断请求信号")]),v._v(" "),l("li",[v._v("TxE(out)发送器空")])])]),v._v(" "),l("li",[v._v("时钟信号\n"),l("ul",[l("li",[v._v("~TxC(in)发送时钟，异步方式下为x1/x16/x64倍波特率。下降沿移出数据")]),v._v(" "),l("li",[v._v("~RxC(in)接受时钟，同上")]),v._v(" "),l("li",[v._v("CLK(in)工作始终")])])])]),v._v(" "),l("h3",{attrs:{id:"编程-2"}},[v._v("编程")]),v._v(" "),l("ul",[l("li",[v._v("方式命令字 - 设定通信方式和数据格式")]),v._v(" "),l("li",[v._v("工作命令字 - 指定芯片完成某种操作（如发送、接收、内部复位、检测同步字符等")]),v._v(" "),l("li",[v._v("状态字 - 报告芯片状态")])]),v._v(" "),l("p",[v._v("异步方式命令字：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(850),alt:""}})]),v._v(" "),l("p",[v._v("同步方式命令字：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(851),alt:""}})]),v._v(" "),l("p",[v._v("工作命令字：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(852),alt:""}})]),v._v(" "),l("p",[l("strong",[v._v("间断符")]),v._v("（中止符） - 大于连续10个0，通知对方停止发送")]),v._v(" "),l("p",[v._v("状态字：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(853),alt:""}})]),v._v(" "),l("p",[v._v("错误标志：")]),v._v(" "),l("ul",[l("li",[v._v("奇偶错误PE(Parity Error) - 奇偶校验失败")]),v._v(" "),l("li",[v._v("帧错误FE(Frame Error) - 收到的字符格式不符合规定（如缺少停止位")]),v._v(" "),l("li",[v._v("重叠错误OE(Overrun Error) - 接收寄存器还没有把数据送出时就受到新的数据")])]),v._v(" "),l("p",[v._v("8251A初始化流程：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(854),alt:""}})])])}]};v.exports={attributes:{layout:"collection",title:"常用接口技术",collection:"MicrocomputerPrincipleAndInterfaceTechnology"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}},842:function(v,_,t){v.exports=t.p+"img/f768c6e.png"},843:function(v,_,t){v.exports=t.p+"img/d265ed9.png"},844:function(v,_,t){v.exports=t.p+"img/e9fe896.png"},845:function(v,_,t){v.exports=t.p+"img/903bf7b.png"},846:function(v,_,t){v.exports=t.p+"img/f9dcfc0.png"},847:function(v,_,t){v.exports=t.p+"img/801eb17.png"},848:function(v,_,t){v.exports=t.p+"img/5129661.png"},849:function(v,_,t){v.exports=t.p+"img/837322b.png"},850:function(v,_,t){v.exports=t.p+"img/2acf83e.png"},851:function(v,_,t){v.exports=t.p+"img/b59215d.png"},852:function(v,_,t){v.exports=t.p+"img/ff82bc7.png"},853:function(v,_,t){v.exports=t.p+"img/cf6b64e.png"},854:function(v,_,t){v.exports=t.p+"img/50b666a.png"}}]);