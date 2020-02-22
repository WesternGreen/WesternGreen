(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1127:function(v,_){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),e("ul",[e("li",[v._v("汇编源代码.asm+汇编程序(masm)=目标程序.obj")]),v._v(" "),e("li",[v._v("目标程序.obj+连接程序(link)=可执行程序.exe")])]),v._v(" "),e("p",[v._v("汇编源码中的语句种类：")]),v._v(" "),e("ul",[e("li",[v._v("指令 - 执行性语句，在程序运行期间由CPU来执行")]),v._v(" "),e("li",[v._v("伪指令 - 源码中的说明性语句，并不是指令（包括数据说明、变量定义等），也称为伪操作")]),v._v(" "),e("li",[v._v("宏指令")])]),v._v(" "),e("h2",{attrs:{id:"汇编源码举例"}},[v._v("汇编源码举例")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("stack segment stack\n\tdb 100 dup(?)\nstack ends\n\ndata segment\n\tmsg db 'hello world!', 0dh, 0ah, '$'\ndata ends\n\ncode segment\n\tassume cs:code, ds:data, ss:stack\n\tmain:\n\t\tmov ax, data\n\t\tmov ds, ax\n\t\t...\n\t\tmov ax, 4c00h\n\t\tint 21h\ncode ends\n\nend main\n")])]),v._v(" "),e("h2",{attrs:{id:"伪指令directive"}},[v._v("伪指令Directive")]),v._v(" "),e("ul",[e("li",[v._v("段定义伪指令和段指定伪指令")]),v._v(" "),e("li",[v._v("程序开始和结束伪指令")]),v._v(" "),e("li",[v._v("数据定义与存储器分配伪指令")]),v._v(" "),e("li",[v._v("表达式赋值伪指令")]),v._v(" "),e("li",[v._v("…")])]),v._v(" "),e("h3",{attrs:{id:"段定义伪指令和段指定伪指令"}},[v._v("段定义伪指令和段指定伪指令")]),v._v(" "),e("p",[v._v("段定义伪指令：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("[segment] <name> segment\n...\n[segment] <name> ends\n")])]),v._v(" "),e("p",[v._v("ends为end segment的缩写")]),v._v(" "),e("p",[v._v("在code段中通常会有"),e("strong",[v._v("段指定伪指令")]),v._v("：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("code segment\n\tassume <sreg>:<name>, <sreg>:<name>, ...\ncode ends\n")])]),v._v(" "),e("p",[v._v("其中sreg为段寄存器的名字。"),e("strong",[v._v("段指定伪指令意为把段名和段寄存器关联起来")]),v._v("。段指定伪指令的位置通常为代码段code segment的开始处")]),v._v(" "),e("p",[v._v("其中"),e("strong",[v._v("DS无法直接指定")]),v._v("，即使在伪指令里面指定了，还是要在代码中赋值：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("assume ds:data\nmov ax, data\nmov ds, ax\n")])]),v._v(" "),e("h3",{attrs:{id:"程序开始和结束伪指令"}},[v._v("程序开始和结束伪指令")]),v._v(" "),e("p",[v._v("程序开始伪指令：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("name <module_name>")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("title <text>")])])]),v._v(" "),e("p",[v._v("上面两种操作可以同时拥有，可以只有一个，也可以都没有（通常都没有")]),v._v(" "),e("p",[v._v("结束伪指令："),e("code",{pre:!0},[v._v("end [label]")])]),v._v(" "),e("p",[v._v("其中label指明程序开始执行的"),e("strong",[v._v("起始地址")])]),v._v(" "),e("h3",{attrs:{id:"数据定义与存储器分配伪指令"}},[v._v("数据定义与存储器分配伪指令")]),v._v(" "),e("p",[v._v("格式：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("[variable] mnemonic operand, ..., operand\n")])]),v._v(" "),e("ul",[e("li",[v._v("viariable - 变量名，可有可无，作用类似于label，用于表示地址")]),v._v(" "),e("li",[v._v("mnemonic - 助记符，用于表示数据类型\n"),e("ul",[e("li",[v._v("db(byte) - 字节")]),v._v(" "),e("li",[v._v("dw(word) - 字")]),v._v(" "),e("li",[v._v("dd(dword) - 双字")]),v._v(" "),e("li",[v._v("dt(tbyte) - 十个字节")])])]),v._v(" "),e("li",[v._v("operand - 逗号隔开的多个操作数\n"),e("ul",[e("li",[v._v("常数")]),v._v(" "),e("li",[v._v("常量表达式")]),v._v(" "),e("li",[v._v("字符串")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("?")]),v._v("表示预留空间而不初始化")]),v._v(" "),e("li",[v._v("…")])])])]),v._v(" "),e("p",[v._v("举例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("table db 10, 20, ?, 30, 40, ?\ncount dw 1000h\nvar1 db 10*3-10\nmsg db 'Input data', '123', '456$'\nindex dw table\n")])]),v._v(" "),e("p",[v._v("可以使用"),e("code",{pre:!0},[v._v("dup")]),v._v("来复制操作数，格式："),e("code",{pre:!0},[v._v("repeat_count dup (operand, ..., operand)")]),v._v("，且dup可嵌套，如：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("var dw 100 dup(?)\narray db 2 dup(10 dup(1, 2, 3))\n")])]),v._v(" "),e("p",[v._v("强制类型转换：使用"),e("code",{pre:!0},[v._v("ptr")]),v._v("属性操作符或"),e("code",{pre:!0},[v._v("label")]),v._v("伪指令，例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("var dw 1234h\nmov al, byte ptr var ; 转换双字为字节 al=34h\n")])]),v._v(" "),e("h3",{attrs:{id:"表达式赋值伪指令"}},[v._v("表达式赋值伪指令")]),v._v(" "),e("p",[v._v("类似于高级语言的常量定义")]),v._v(" "),e("p",[v._v("格式：")]),v._v(" "),e("ul",[e("li",[v._v("equ伪指令\n"),e("ul",[e("li",[v._v("expression_name equ expression")])])]),v._v(" "),e("li",[v._v("=伪指令\n"),e("ul",[e("li",[v._v("expression_name = expression")])])])]),v._v(" "),e("p",[v._v("equ伪指令中的表达式名不允许重复定义，而=伪指令中则允许")]),v._v(" "),e("h2",{attrs:{id:"操作符"}},[v._v("操作符")]),v._v(" "),e("h3",{attrs:{id:"算数-逻辑-关系操作符"}},[v._v("算数、逻辑、关系操作符")]),v._v(" "),e("p",[v._v("这些操作符都要求最多只能有一个操作数是变量，其他操作数都是常量")]),v._v(" "),e("p",[v._v("例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("mov dx, var+6*2\nmov al, port and 0feh\nmov bx, port lt 5 ; lt=lower than\n")])]),v._v(" "),e("h3",{attrs:{id:"数值回送操作符"}},[v._v("数值回送操作符")]),v._v(" "),e("p",[v._v("返回数据类型，格式："),e("code",{pre:!0},[v._v("type variable/label")])]),v._v(" "),e("ul",[e("li",[v._v("如果是变量，返回变量类型的"),e("strong",[v._v("字节数")])]),v._v(" "),e("li",[v._v("如果是常数，返回0")]),v._v(" "),e("li",[v._v("如果是标号，near返回-1，far返回-2")])]),v._v(" "),e("p",[v._v("例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("array dw 1, 2\nadd si, type array ; 2\n")])]),v._v(" "),e("p",[v._v("返回变量长度，格式："),e("code",{pre:!0},[v._v("length variable")]),v._v("，对于dup，返回dup的个数，否则返回1")]),v._v(" "),e("p",[v._v("例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("buffer dw 200 dup(0)\nmov cx, length buffer ; 200\n\narray dw 1, 2, 3\nmov cx, length array ; 1\n")])]),v._v(" "),e("p",[v._v("返回变量大小，格式"),e("code",{pre:!0},[v._v("size variable")]),v._v("，"),e("strong",[v._v("返回字节数")])]),v._v(" "),e("p",[v._v("例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("buffer dw 200 dup(0)\narray dw 1, 2, 3\nmov cx, size buffer ; 400\nmov cx, size array ; 2\n")])]),v._v(" "),e("p",[v._v("返回目标偏移地址，格式"),e("code",{pre:!0},[v._v("offset variable/label")])]),v._v(" "),e("p",[v._v("例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("mov bx, offset message ; ==> lea bx, message\n")])]),v._v(" "),e("p",[v._v("返回段基址，格式"),e("code",{pre:!0},[v._v("seg variable/label")]),v._v("，例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("mov bx, seg message\n")])]),v._v(" "),e("h2",{attrs:{id:"com文件"}},[v._v("COM文件")]),v._v(" "),e("p",[v._v("是DOS系统下的一种可执行文件，类似于exe文件")]),v._v(" "),e("p",[v._v("特点：")]),v._v(" "),e("ul",[e("li",[v._v("整个程序只有一个段")]),v._v(" "),e("li",[v._v("程序的开始地址为CS:100H")]),v._v(" "),e("li",[v._v("从0000-00FFH为程序前缀PSP")]),v._v(" "),e("li",[v._v("程序的第一条必须是可执行指令")]),v._v(" "),e("li",[v._v("装入速度比exe快")])]),v._v(" "),e("p",[v._v("执行流程：")]),v._v(" "),e("ol",[e("li",[v._v("检查内存是否足够")]),v._v(" "),e("li",[v._v("分配内存空间")]),v._v(" "),e("li",[v._v("建立程序段前缀，将PSP放置于前100H")]),v._v(" "),e("li",[v._v("从外存把程序放入100H开始的内存中")]),v._v(" "),e("li",[v._v("CS指向所分配的段，DS=ES=SS=CS, SP=fffeh")]),v._v(" "),e("li",[v._v("程序开始，执行CS:IP")])]),v._v(" "),e("h2",{attrs:{id:"exe文件"}},[v._v("EXE文件")]),v._v(" "),e("p",[v._v("特点：")]),v._v(" "),e("ul",[e("li",[v._v("开始为文件头，后面是程序本体")]),v._v(" "),e("li",[v._v("程序可以有多个段")]),v._v(" "),e("li",[v._v("代码、数据、堆栈在不同的段")]),v._v(" "),e("li",[v._v("程序前缀放在独立的段，由DS或ES指向")]),v._v(" "),e("li",[v._v("数据都在数据段")]),v._v(" "),e("li",[v._v("代码超过一个段时，由程序员控制")])]),v._v(" "),e("p",[v._v("执行流程：")]),v._v(" "),e("ol",[e("li",[v._v("检查内存是否足够")]),v._v(" "),e("li",[v._v("分配内存空间")]),v._v(" "),e("li",[v._v("处理文件头，建立程序段前缀")]),v._v(" "),e("li",[v._v("把程序装入CS指向的代码段，IP指向入口地址")]),v._v(" "),e("li",[v._v("DS、ES指向PSP前缀，SS指向堆栈段，SP置初值")]),v._v(" "),e("li",[v._v("程序开始，执行CS:IP")])]),v._v(" "),e("h2",{attrs:{id:"中断"}},[v._v("中断")]),v._v(" "),e("h3",{attrs:{id:"概述-2"}},[v._v("概述")]),v._v(" "),e("p",[v._v("DOS系统的系统中断：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("mov ah, ??\nint 21h\n")])]),v._v(" "),e("p",[v._v("其中int表示中断，21h表示系统的中断，ah中的内容表示不同的中断内容。")]),v._v(" "),e("h3",{attrs:{id:"常用中断"}},[v._v("常用中断")]),v._v(" "),e("ul",[e("li",[v._v("4ch - 返回操作系统")]),v._v(" "),e("li",[v._v("1 - 接收键盘输入并回显，结果保存在al")]),v._v(" "),e("li",[v._v("2 - 显示dl中保存的字符")]),v._v(" "),e("li",[v._v("9 - 显示ds:dx指向的以’$'结束的字符串")]),v._v(" "),e("li",[v._v("0ah - 输入多个字符到ds:dx指向的缓冲区，以回车符终止")])]),v._v(" "),e("h2",{attrs:{id:"子程序"}},[v._v("子程序")]),v._v(" "),e("h3",{attrs:{id:"概述-3"}},[v._v("概述")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("main:\n\t...\n\tcall sub\n\nsub proc\n\t...\n\tret\nsub endp\n")])]),v._v(" "),e("p",[v._v("子程序使用proc来定义，使用endp结束，结尾要加上ret。父程序使用call来调用")]),v._v(" "),e("p",[v._v("如果是段内子程序，则堆栈中会被压入IP，如果是不同段的子程序，则堆栈段会被压入CS:IP。所以"),e("strong",[v._v("子程序中一定要平衡堆栈")]),v._v("，即压入多少弹出多少，否则程序无法回到正确的位置")]),v._v(" "),e("h3",{attrs:{id:"参数传递"}},[v._v("参数传递")]),v._v(" "),e("ul",[e("li",[v._v("通过寄存器传递（略")]),v._v(" "),e("li",[v._v("通过存储器传递（略")]),v._v(" "),e("li",[v._v("通过地址表传递（把地址放到存储器，略")]),v._v(" "),e("li",[v._v("通过堆栈传递")])]),v._v(" "),e("p",[v._v("使用堆栈传递时，主要思想是使用bp作为基址，使用偏移量访问参数，过程：")]),v._v(" "),e("ul",[e("li",[v._v("主程序中把参数压入栈")]),v._v(" "),e("li",[v._v("调用子程序，把IP（或CS:IP）压入栈")]),v._v(" "),e("li",[v._v("子程序中\n"),e("ul",[e("li",[v._v("push bp保存bp")]),v._v(" "),e("li",[v._v("mov bp, sp把sp作为基址，保存在bp中")]),v._v(" "),e("li",[v._v("使用[bp+?]来访问参数\n"),e("ul",[e("li",[v._v("如果是把IP压入栈了，那么栈里面有IP和BP，[bp+4]是第一个参数，[bp+6]是第二个参数，以此类推")]),v._v(" "),e("li",[v._v("如果把CS:IP压入栈了，那么[bp+6]是第一个参数，以此类推")])])])])]),v._v(" "),e("li",[v._v("子程序执行结束后要抛弃参数，而且是在CS:IP弹出之后抛弃。抛弃参数的过程可以在主程序手动抛弃，也可以在子程序，使用"),e("code",{pre:!0},[v._v("ret n")]),v._v("来抛弃n个"),e("strong",[v._v("字节")]),v._v("，因为每个参数2字节，所以"),e("strong",[v._v("n一定是偶数")])])]),v._v(" "),e("h2",{attrs:{id:"宏"}},[v._v("宏")]),v._v(" "),e("p",[v._v("宏定义：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("macro_name macro [哑元表]\n...\nendm\n")])]),v._v(" "),e("p",[v._v("宏调用："),e("code",{pre:!0},[v._v("macro_name [实元表]")])]),v._v(" "),e("p",[v._v("例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("保存寄存器\npushr macro\n\tpush ax\n\tpush bx\n\tpush cx\n\tpush dx\nendm\n\n调用时使用pushr即可\n")])]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("输出字符串\nprintstr macro addr\n\tpush dx\n\tpush ax\n\n\tmov dx, addr ; copy address\n\tmov ah, 9 ; output a string end with '$'\n\tint 21h\n\n\tpop ax\n\tpop dx\n\n调用时使用printstr str即可\n")])]),v._v(" "),e("p",[v._v("因为宏在指定位置展开（即"),e("strong",[v._v("宏展开")]),v._v("），所以如果宏里面出现label，多次调用宏会导致重复Label的出现。可以使用"),e("strong",[v._v("局部标号")]),v._v("，宏展开时会自动建立一个局部唯一的标号。例：")]),v._v(" "),e("pre",[e("code",{pre:!0},[v._v("dead_loop macro\n\tlocal here\n\tjmp here\nendm\n")])]),v._v(" "),e("p",[v._v("宏和子程序的区别：和高级语言差不多")])])}]};v.exports={attributes:{layout:"collection",title:"汇编语言程序设计",collection:"MicrocomputerPrincipleAndInterfaceTechnology"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);