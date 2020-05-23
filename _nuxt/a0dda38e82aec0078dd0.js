(window.webpackJsonp=window.webpackJsonp||[]).push([[72,599,600,601],{1168:function(_,v,t){const l={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"8086微处理器内部结构"}},[_._v("8086微处理器内部结构")]),_._v(" "),l("ul",[l("li",[_._v("总线接口部件BIU\n"),l("ul",[l("li",[_._v("形成访问存储器和IO设备的地址，完成指令预取，存放运算结果")]),_._v(" "),l("li",[_._v("包括：\n"),l("ul",[l("li",[_._v("地址加法器")]),_._v(" "),l("li",[_._v("专用寄存器组")]),_._v(" "),l("li",[_._v("指令队列")]),_._v(" "),l("li",[_._v("总线控制电路")])])])])]),_._v(" "),l("li",[_._v("执行部件EU - 负责执行指令，包括：\n"),l("ul",[l("li",[_._v("算数逻辑单元ALU")]),_._v(" "),l("li",[_._v("标志寄存器FR")]),_._v(" "),l("li",[_._v("通用寄存器组")]),_._v(" "),l("li",[_._v("EU控制器")])])])]),_._v(" "),l("p",[_._v("EU和BIU可以并行工作以提高效率")]),_._v(" "),l("p",[l("img",{attrs:{src:t(789),alt:"2-1"}})]),_._v(" "),l("h2",{attrs:{id:"8086寄存器"}},[_._v("8086寄存器")]),_._v(" "),l("h3",{attrs:{id:"通用寄存器"}},[_._v("通用寄存器")]),_._v(" "),l("p",[l("img",{attrs:{src:t(790),alt:"2-2"}})]),_._v(" "),l("p",[_._v("80386之前的处理器都是16位，80386之后变为32位。本课程只考虑16位，即忽略上图绿色区域")]),_._v(" "),l("p",[_._v("以下所有通用寄存器均为16位。其中AX/BX/CX/DX都可以拆成两个8位寄存器（即?H/?L）来使用。虽然是通用寄存器，但是他们也有一些约定俗成的用法")]),_._v(" "),l("ul",[l("li",[_._v("AX\n"),l("ul",[l("li",[_._v("累加器")]),_._v(" "),l("li",[_._v("算术运算的主要寄存器，保存计算结果")]),_._v(" "),l("li",[_._v("IO指令使用AX和外设传送信息")])])]),_._v(" "),l("li",[_._v("BX\n"),l("ul",[l("li",[_._v("基址寄存器，保存"),l("strong",[_._v("基址")])])])]),_._v(" "),l("li",[_._v("CX\n"),l("ul",[l("li",[_._v("loop循环中隐含的计数器")]),_._v(" "),l("li",[_._v("串处理中隐含的计数器")])])]),_._v(" "),l("li",[_._v("DX\n"),l("ul",[l("li",[_._v("保存数据")]),_._v(" "),l("li",[_._v("可以和AX一起存储双字，DX为高位，表示为DX:AX")])])]),_._v(" "),l("li",[_._v("SP\n"),l("ul",[l("li",[_._v("堆栈指针，可以指示栈顶的偏移地址")])])]),_._v(" "),l("li",[_._v("BP\n"),l("ul",[l("li",[_._v("基址指针寄存器，可以指向栈底")])])]),_._v(" "),l("li",[_._v("SI\n"),l("ul",[l("li",[_._v("源变址，能够自动增减")])])]),_._v(" "),l("li",[_._v("DI\n"),l("ul",[l("li",[_._v("目的变址，能够自动增减")])])])]),_._v(" "),l("h3",{attrs:{id:"段寄存器"}},[_._v("段寄存器")]),_._v(" "),l("ul",[l("li",[_._v("CS - 代码段")]),_._v(" "),l("li",[_._v("DS - 数据段")]),_._v(" "),l("li",[_._v("ES - 附加段")]),_._v(" "),l("li",[_._v("SS - 堆栈段")])]),_._v(" "),l("h3",{attrs:{id:"专用寄存器"}},[_._v("专用寄存器")]),_._v(" "),l("ul",[l("li",[_._v("IP - 指令指针寄存器，存放代码段中的偏移地址。和CS一起使用，表示为CS:IP，即某代码段中的某一句代码")]),_._v(" "),l("li",[_._v("PSW（或FR） - 程序状态字寄存器，也称为标志寄存器，如图：")])]),_._v(" "),l("p",[l("img",{attrs:{src:t(791),alt:"2-3"}})]),_._v(" "),l("p",[_._v("标志寄存器中的常用位：")]),_._v(" "),l("ul",[l("li",[_._v("CF - 是否进位")]),_._v(" "),l("li",[_._v("ZF - 是否为0")]),_._v(" "),l("li",[_._v("OF - 是否溢出")])]),_._v(" "),l("h2",{attrs:{id:"指令的执行过程"}},[_._v("指令的执行过程")]),_._v(" "),l("p",[_._v("从CS:IP指向的内存地址取指令（并执行），然后CS:IP指向下一条指令")]),_._v(" "),l("p",[_._v("执行过程：")]),_._v(" "),l("ul",[l("li",[_._v("取指 - BIU把指令从内存取到指令队列")]),_._v(" "),l("li",[_._v("译码 - EU控制器发出控制信号")]),_._v(" "),l("li",[_._v("执行 - ALU执行计算结果并影响标志寄存器FR")]),_._v(" "),l("li",[_._v("写回 - 可能需要把结果放回寄存器")])]),_._v(" "),l("h2",{attrs:{id:"8086存储器"}},[_._v("8086存储器")]),_._v(" "),l("h3",{attrs:{id:"实模式real-address-mode"}},[_._v("实模式Real-Address mode")]),_._v(" "),l("p",[_._v("8086处理器的存储器模式，使用20位物理地址、单任务工作方式、独占系统所有资源")]),_._v(" "),l("p",[_._v("存储器空间：00000H-FFFFFH")]),_._v(" "),l("p",[_._v("处理器上电后首先进入实模式")]),_._v(" "),l("p",[_._v("DOS系统要求实模式")]),_._v(" "),l("p",[_._v("使用两个16位地址来形成一个20位地址。计算方式："),l("strong",[_._v("16位段地址左移四位加上16位偏移地址")])]),_._v(" "),l("p",[_._v("存储器被分为很多"),l("strong",[_._v("大小不同的段")]),_._v("，因为段内偏移地址为16位，所以每个段最大为64KB")]),_._v(" "),l("p",[_._v("段寄存器用来保存这些段的段地址")]),_._v(" "),l("h3",{attrs:{id:"保护模式protected-mode略"}},[_._v("保护模式Protected mode（略")]),_._v(" "),l("ul",[l("li",[_._v("为实现虚拟存储器提供硬件支持")]),_._v(" "),l("li",[_._v("为存储器共享和保护提供硬件支持")]),_._v(" "),l("li",[_._v("支持多任务处理")])])])}]};_.exports={attributes:{layout:"collection",title:"微处理器的功能结构",collection:"MicrocomputerPrincipleAndInterfaceTechnology"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}},789:function(_,v,t){_.exports=t.p+"img/73645b3.png"},790:function(_,v,t){_.exports=t.p+"img/cc1ea97.png"},791:function(_,v,t){_.exports=t.p+"img/a7cbab7.png"}}]);