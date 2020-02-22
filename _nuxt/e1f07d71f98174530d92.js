(window.webpackJsonp=window.webpackJsonp||[]).push([[14,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503],{1112:function(v,_,t){const r={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),r("p",[v._v("静态语义处理的目的 - 验证语法结构合法的程序是否有意义，如：")]),v._v(" "),r("ul",[r("li",[v._v("类型检查")]),v._v(" "),r("li",[v._v("控制流检查")]),v._v(" "),r("li",[v._v("一致性检查")]),v._v(" "),r("li",[v._v("名字作用域分析")])]),v._v(" "),r("p",[v._v("如果静态语义正确，语义处理程序才会开始把源码翻译成中间或目标代码")]),v._v(" "),r("p",[v._v("语义分析比较复杂，目前多数编译程序进行语义分析使用的方法是"),r("strong",[v._v("语法制导翻译")]),v._v("，是一种搭建在语法分析基础上的翻译技术。")]),v._v(" "),r("p",[v._v("思路："),r("strong",[v._v("给每个符号（特别是非终结符）设置一系列属性，在语法翻译的时候对属性进行求值")])]),v._v(" "),r("p",[v._v("例如，翻译目标是计算表达式的值，则可以这样设置语义规则：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(346),alt:"5-1"}})]),v._v(" "),r("p",[v._v("为了输出表达式的值，可以拓广文法：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(690),alt:"5-2"}})]),v._v(" "),r("p",[v._v("实际应用时，对应的"),r("strong",[v._v("注释分析树")]),v._v("（结点带有属性值的分析树）：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(691),alt:"5-3"}})]),v._v(" "),r("p",[v._v("可见，"),r("strong",[v._v("翻译目标决定了语义规则")]),v._v("，不同的目标需要不同的语义规则，同样的目标也可以有不同的语义规则")]),v._v(" "),r("p",[r("strong",[v._v("语法翻译制导的一般步骤")]),v._v("：")]),v._v(" "),r("ol",[r("li",[v._v("输入符号串")]),v._v(" "),r("li",[v._v("分析树")]),v._v(" "),r("li",[v._v("依赖图")]),v._v(" "),r("li",[v._v("语义规则的计算顺序")]),v._v(" "),r("li",[v._v("计算结果")])]),v._v(" "),r("h2",{attrs:{id:"语法制导定义sdd"}},[v._v("语法制导定义SDD")]),v._v(" "),r("h3",{attrs:{id:"概述-2"}},[v._v("概述")]),v._v(" "),r("p",[r("strong",[v._v("仅定义操作，忽略顺序")])]),v._v(" "),r("p",[v._v("SDD是对上下文无关文法的推广，为每个生成式关联一个或多个语义规则。")]),v._v(" "),r("p",[v._v("SDD的格式为一个表，如下图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(346),alt:"5-1"}})]),v._v(" "),r("h3",{attrs:{id:"综合属性和继承属性"}},[v._v("综合属性和继承属性")]),v._v(" "),r("p",[v._v("定义SDD时需要说明每个属性或函数的意义，以及它们的类型（综合属性还是继承属性）")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("综合属性Synthesized")]),v._v(" Attribute\n"),r("ul",[r("li",[v._v("生成式左侧非终结符的、值由子节点计算得到的属性为综合属性")]),v._v(" "),r("li",[v._v("也就是自底向上进行计算的属性")]),v._v(" "),r("li",[v._v("分析树中从树叶到树根计算")]),v._v(" "),r("li",[v._v("常被命名为val(value)")])])]),v._v(" "),r("li",[r("strong",[v._v("继承属性Inherited")]),v._v(" Attribute\n"),r("ul",[r("li",[v._v("生成式右侧符号的、值由生成式左部非终结符的继承属性或/和生成式右部任何文法符号的属性值决定的属性为继承属性")]),v._v(" "),r("li",[v._v("分析树中由父节点或兄弟节点的属性值计算")]),v._v(" "),r("li",[v._v("可以用来向后传递信息")]),v._v(" "),r("li",[v._v("常被命名为in(interited)")])])])]),v._v(" "),r("p",[v._v("一个属性不可能既是综合属性又是继承属性，否则它就有两个计算公式（一个自底向上，一个非自底向上）从而自相矛盾")]),v._v(" "),r("p",[v._v("SDD的一些限制：")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("终结符号只有综合属性")]),v._v(" "),r("ul",[r("li",[v._v("因为终结符号为分析树的叶，不可能再向下计算继承属性")]),v._v(" "),r("li",[v._v("这个综合属性由词法分析程序提供")])])]),v._v(" "),r("li",[r("strong",[v._v("开始符号没有继承属性")]),v._v(" "),r("ul",[r("li",[v._v("没有任何别的符号的属性依赖于开始符号")])])])]),v._v(" "),r("p",[v._v("如果一条语义规则的作用和求值无关，如打印一个值或向符号表中添加记录，则成为生成式左侧非终结符的"),r("strong",[v._v("虚拟综合属性")])]),v._v(" "),r("p",[r("strong",[v._v("常见的虚拟综合属性")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("print(any)\n"),r("ul",[r("li",[v._v("打印any")])])]),v._v(" "),r("li",[v._v("addtype(id.entry, type)\n"),r("ul",[r("li",[v._v("在符号表中为符号id添加符号类型（变量类型）type")]),v._v(" "),r("li",[v._v("id.entry指明符号id在符号表中的入口")])])])]),v._v(" "),r("p",[v._v("没有虚拟综合属性的文法称为"),r("strong",[v._v("属性文法")]),v._v("（即只需要计算属性的文法")]),v._v(" "),r("h3",{attrs:{id:"依赖图"}},[v._v("依赖图")]),v._v(" "),r("p",[v._v("属性之间有依赖关系，即属性a的值由属性b决定，那么在计算a之前要先算出b。这样的依赖关系在分析树中可以用依赖图表示：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(692),alt:"5-4"}})]),v._v(" "),r("p",[v._v("注释分析树显示了各属性的值，依赖图定义如何计算这些值。")]),v._v(" "),r("p",[v._v("例：如下分析树：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(693),alt:"5-6"}})]),v._v(" "),r("p",[v._v("为这些属性建立节点，"),r("strong",[v._v("符号左侧为继承属性，右侧为综合属性（包括虚拟综合属性")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(694),alt:"5-7"}})]),v._v(" "),r("p",[v._v("构造依赖图，"),r("strong",[v._v("如果依赖图无环，则存在一个拓扑排序，即为这些属性值的计算顺序")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(695),alt:"5-8"}})]),v._v(" "),r("h2",{attrs:{id:"语法树"}},[v._v("语法树")]),v._v(" "),r("p",[v._v("也称为抽象语法树、语法结构树、结构树")]),v._v(" "),r("p",[v._v("是"),r("strong",[v._v("仅由终结符构成的分析树")]),v._v("，例：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(696),alt:"5-10"}})]),v._v(" "),r("p",[v._v("特殊语句，如if-then-else语句：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(697),alt:"5-11"}})]),v._v(" "),r("p",[v._v("语法树自身可以表示运算的优先级，所以所有括号都可以省略")]),v._v(" "),r("h2",{attrs:{id:"表达式的dag图"}},[v._v("表达式的dag图")]),v._v(" "),r("p",[v._v("dag图 - 有向非循环图，即对语法树进行提取公共表达式的操作")]),v._v(" "),r("p",[v._v("例：原语法树：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(698),alt:"5-12"}})]),v._v(" "),r("p",[v._v("提取公共表达式后的dag图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(699),alt:"5-13"}})]),v._v(" "),r("h2",{attrs:{id:"翻译方案概述"}},[v._v("翻译方案概述")]),v._v(" "),r("p",[r("strong",[v._v("把语义规则插入到产生式右侧适当的位置")]),v._v("，形成翻译方案。即"),r("strong",[v._v("翻译方案在SDD的基础上添加了语句执行的时机")])]),v._v(" "),r("p",[v._v("例如，存在如下SDD：")]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("生成式")]),v._v(" "),r("th",[v._v("语义规则")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[r("code",{pre:!0},[v._v("R -> +TS")])]),v._v(" "),r("td",[r("code",{pre:!0},[v._v("print('+')")])])]),v._v(" "),r("tr",[r("td",[r("code",{pre:!0},[v._v("T -> num")])]),v._v(" "),r("td",[r("code",{pre:!0},[v._v("print(num.val)")])])])])]),v._v(" "),r("p",[v._v("可能的翻译方案：")]),v._v(" "),r("pre",[r("code",{pre:!0},[v._v("R -> +T{print('+')}S\nT -> num{print(num.val)}\n")])]),v._v(" "),r("p",[r("strong",[v._v("翻译方案的语法分析树")]),v._v("（"),r("strong",[v._v("带有动作的分析树")]),v._v("），"),r("strong",[v._v("为每个语义动作构造节点")]),v._v("，使用"),r("strong",[v._v("虚线")]),v._v("与生成式头部相连：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(700),alt:"5-9"}})]),v._v(" "),r("p",[v._v("具体翻译方案在下文S属性定义和L属性定义中讨论")]),v._v(" "),r("h2",{attrs:{id:"s属性定义"}},[v._v("S属性定义")]),v._v(" "),r("h3",{attrs:{id:"概述-3"}},[v._v("概述")]),v._v(" "),r("p",[v._v("如果一个SDD仅使用了综合属性(Synthesized Attribute)则称其为S-属性定义。因为属性自底向上计算，所以"),r("strong",[v._v("通常使用自底向上的方法求值")])]),v._v(" "),r("p",[v._v("S属性定义可以和LR语法分析器一起实现，只要在分析栈中添加对应的属性值即可，在规约时按照语义规则计算符号的属性值")]),v._v(" "),r("p",[v._v("例：3*5+4的"),r("strong",[v._v("注释分析树")]),v._v("：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(701),alt:"5-5"}})]),v._v(" "),r("h3",{attrs:{id:"s属性定义的翻译方案"}},[v._v("S属性定义的翻译方案")]),v._v(" "),r("p",[v._v("因为S属性定义全是综合属性，即调用一个生成式的时候，生成式右侧的所有符号的属性都已经计算完毕，所以"),r("strong",[v._v("所有生成式对应的语义规则都无脑添加到生成式末尾")]),v._v("即可")]),v._v(" "),r("h2",{attrs:{id:"s属性定义的自底向上翻译"}},[v._v("S属性定义的自底向上翻译")]),v._v(" "),r("h3",{attrs:{id:"改造分析栈"}},[v._v("改造分析栈")]),v._v(" "),r("p",[v._v("使分析栈能够保存"),r("strong",[v._v("综合属性")]),v._v("（"),r("strong",[v._v("不需要保存继承属性")]),v._v("，因为继承属性可以使用综合属性栈中的内容计算出来")]),v._v(" "),r("p",[r("img",{attrs:{src:t(702),alt:"5-14"}})]),v._v(" "),r("p",[v._v("定义如下变量：")]),v._v(" "),r("ul",[r("li",[v._v("top - 规约前栈顶索引")]),v._v(" "),r("li",[v._v("r - 句柄长度")]),v._v(" "),r("li",[v._v("newTop - 规约后栈顶索引 = top - r + 1")]),v._v(" "),r("li",[v._v("val[] - 属性栈")])]),v._v(" "),r("p",[v._v("则可以通过形如"),r("code",{pre:!0},[v._v("val[top - ?]")]),v._v("来访问属性栈的内容，如"),r("code",{pre:!0},[v._v("val[newTop] = val[top - 1] * val[top]")])]),v._v(" "),r("h3",{attrs:{id:"改造分析程序"}},[v._v("改造分析程序")]),v._v(" "),r("p",[v._v("在LR分析程序的基础上改造。所以仍然需要"),r("strong",[v._v("拓广文法")]),v._v("切记勿忘")]),v._v(" "),r("p",[v._v("读入终结符号，需要移进操作时，把此终结符号的综合属性放入属性栈")]),v._v(" "),r("h3",{attrs:{id:"为语义规则设置代码段"}},[v._v("为语义规则设置代码段")]),v._v(" "),r("p",[v._v("代码段为使用此生成式规约时调用的代码")]),v._v(" "),r("p",[r("img",{attrs:{src:t(703),alt:"5-15"}})]),v._v(" "),r("h2",{attrs:{id:"l属性定义"}},[v._v("L属性定义")]),v._v(" "),r("h3",{attrs:{id:"概述-4"}},[v._v("概述")]),v._v(" "),r("p",[v._v("如果一个SDD仅使用了综合属性，或所有继承属性只需要其左边的符号的属性，则此SDD为L属性定义")]),v._v(" "),r("p",[v._v("L的含义：left，即从左向右计算")]),v._v(" "),r("p",[r("strong",[v._v("所有S属性定义都是L属性定义")])]),v._v(" "),r("p",[r("strong",[v._v("L属性定义的属性计算顺序")]),v._v("："),r("strong",[v._v("深度优先遍历分析树")]),v._v("，这样如果所有继承属性都只用到左兄弟的属性，则继承属性可计算")]),v._v(" "),r("h3",{attrs:{id:"l属性定义的翻译方案"}},[v._v("L属性定义的翻译方案")]),v._v(" "),r("p",[v._v("限制：")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("产生式右侧的符号的继承属性必须在这个符号以前的语义规则中被算出来")])]),v._v(" "),r("li",[v._v("语义规则不能（直接或间接地）引用它右边的符号的属性")]),v._v(" "),r("li",[v._v("计算产生式左边的符号的综合属性的语义规则放在产生式末尾")])]),v._v(" "),r("h2",{attrs:{id:"l属性定义的自顶向下翻译"}},[v._v("L属性定义的自顶向下翻译")]),v._v(" "),r("p",[v._v("是对"),r("strong",[v._v("递归调用预测分析")]),v._v("的魔改")]),v._v(" "),r("p",[v._v("仍然要求：")]),v._v(" "),r("ul",[r("li",[v._v("没有左递归")]),v._v(" "),r("li",[v._v("没有回溯")])]),v._v(" "),r("h3",{attrs:{id:"消除左递归的问题"}},[v._v("消除左递归的问题")]),v._v(" "),r("p",[v._v("消除左递归会产生新的符号，如何计算它们的属性")]),v._v(" "),r("p",[v._v("例：已知翻译方案（A1是A的第二次出现）：")]),v._v(" "),r("pre",[r("code",{pre:!0},[v._v("A -> A1Y {A.a = g(A1.a, Y.y)}\nA -> X {A.a = f(X.x)}\n")])]),v._v(" "),r("p",[v._v("消除左递归后得到的生成式：")]),v._v(" "),r("pre",[r("code",{pre:!0},[v._v("A -> XM\nM -> YM\nM -> ε\n")])]),v._v(" "),r("p",[v._v("没了A1，多了M，A1的属性如何传递？")]),v._v(" "),r("p",[v._v("为M设置")]),v._v(" "),r("ul",[r("li",[v._v("继承属性"),r("code",{pre:!0},[v._v("M.i")]),v._v(" "),r("ul",[r("li",[v._v("表示在M之前已经扫描过的符号串的属性值")])])]),v._v(" "),r("li",[v._v("综合属性"),r("code",{pre:!0},[v._v("M.s")]),v._v(" "),r("ul",[r("li",[v._v("表示在M完全展开为终结符号之后得到的符号串的属性值")])])])]),v._v(" "),r("p",[v._v("转换后的翻译方案：")]),v._v(" "),r("pre",[r("code",{pre:!0},[v._v("A -> X {M.i = f(X.x)} M {A.a = M.s}\nM -> Y {M1.i = g(M.i, Y.y)} M1 {M.s = M1.s}\nM -> ε {M.s = M.i}\n")])]),v._v(" "),r("p",[v._v("分析树等价：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(704),alt:"5-16"}})]),v._v(" "),r("p",[r("img",{attrs:{src:t(705),alt:"5-17"}})]),v._v(" "),r("h3",{attrs:{id:"翻译程序的设计"}},[v._v("翻译程序的设计")]),v._v(" "),r("p",[v._v("仍然为每个终结符号建立一个函数")]),v._v(" "),r("ul",[r("li",[v._v("函数参数为此非终结符的继承属性（即需要根据前面符号的属性计算得到的属性")]),v._v(" "),r("li",[v._v("综合属性作为函数的返回值")]),v._v(" "),r("li",[v._v("文法符号每个属性对应一个局部变量（包括综合属性")]),v._v(" "),r("li",[v._v("函数体结构和递归调用预测分析类似，向前看符号来判断程序走向哪个分支")]),v._v(" "),r("li",[v._v("在调用其他函数之间插入代码段")])]),v._v(" "),r("p",[v._v("例：假设翻译方案为："),r("code",{pre:!0},[v._v("E -> T {M.i = T.val} M {E.val = M.s}")]),v._v("，则函数代码为")]),v._v(" "),r("pre",{staticClass:"language-c++"},[r("code",{pre:!0,attrs:{class:"language-c++"}},[v._v("int E(){\n\tint eval, tval, mi, ms;//E.val, T.val, M.i, M.s\n\ttval = T();\n\tmi = tval;\n\tms = M(mi);\n\teval = ms;\n\treturn eval;\n}\n")])]),v._v(" "),r("h2",{attrs:{id:"l属性定义的自底向上翻译"}},[v._v("L属性定义的自底向上翻译")]),v._v(" "),r("p",[r("strong",[v._v("自底向上就不用考虑左递归和回溯了")])]),v._v(" "),r("h3",{attrs:{id:"概述-5"}},[v._v("概述")]),v._v(" "),r("p",[v._v("主要思想："),r("strong",[v._v("移走翻译方案中嵌入的语义规则")]),v._v("，"),r("strong",[v._v("改写SDD为S属性定义")])]),v._v(" "),r("h3",{attrs:{id:"改写sdd为s属性定义"}},[v._v("改写SDD为S属性定义")]),v._v(" "),r("p",[v._v("如果SDD中"),r("strong",[v._v("没有继承属性")]),v._v("："),r("strong",[v._v("引入空生成式取走翻译方案中的动作")])]),v._v(" "),r("p",[v._v("例：已知如下L属性定义：")]),v._v(" "),r("pre",[r("code",{pre:!0},[v._v("E -> +TR\nR -> +T {print('+')} R | -T {print('-')} R | ε\nT -> num {print(num.val)}\n")])]),v._v(" "),r("p",[v._v("其中动作"),r("code",{pre:!0},[v._v("{print('+')}")]),v._v("和动作"),r("code",{pre:!0},[v._v("{print('-')}")]),v._v("阻碍了此文法成为S属性定义。")]),v._v(" "),r("p",[v._v("新建非终结符M和N，产生式为"),r("code",{pre:!0},[v._v("M -> ε")]),v._v("和"),r("code",{pre:!0},[v._v("N -> ε")]),v._v("，得到新的翻译方案：")]),v._v(" "),r("pre",[r("code",{pre:!0},[v._v("E -> TR\nR -> +TMR | -TMR | ε\nT -> num {print(num.val)}\nM -> ε {print('+')}\nN -> ε {print('-')}\n")])]),v._v(" "),r("p",[v._v("如果SDD中"),r("strong",[v._v("有继承属性")]),v._v("的方案："),r("strong",[v._v("通过复写规则，直接使用val[]、top和newTop访问分析栈")])]),v._v(" "),r("ol",[r("li",[v._v("继承属性位置可确定的情况：")])]),v._v(" "),r("p",[v._v("假设翻译方案为：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(706),alt:"5-18"}})]),v._v(" "),r("p",[v._v("继承属性"),r("code",{pre:!0},[v._v("L.in")]),v._v("被赋值为"),r("code",{pre:!0},[v._v("T.type")]),v._v("。尝试使用"),r("code",{pre:!0},[v._v("T.type")]),v._v("代替"),r("code",{pre:!0},[v._v("L.in")]),v._v("。"),r("code",{pre:!0},[v._v("L.in")]),v._v("被用到2次，分别是"),r("code",{pre:!0},[v._v("L -> id")]),v._v("和"),r("code",{pre:!0},[v._v("L -> L,id")]),v._v("。由于调用"),r("code",{pre:!0},[v._v("L -> id")]),v._v("的时候"),r("code",{pre:!0},[v._v("T")]),v._v("一定在"),r("code",{pre:!0},[v._v("L")]),v._v("的下方（状态栈中），所以可以使用属性栈中"),r("code",{pre:!0},[v._v("T.type")]),v._v("的值代替"),r("code",{pre:!0},[v._v("L.in")]),v._v("，所以翻译方案的代码为"),r("code",{pre:!0},[v._v("L -> id {addtype(val[top], val[top - 1])}")]),v._v("。同理调用"),r("code",{pre:!0},[v._v("L -> L,id")]),v._v("时的翻译方案代码为"),r("code",{pre:!0},[v._v("L -> L,id {addtype(val[top], val[top - 3])}")])]),v._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[v._v("继承属性位置不可确定的情况：")])]),v._v(" "),r("p",[v._v("假设SDD为：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(707),alt:"5-19"}})]),v._v(" "),r("p",[v._v("继承属性"),r("code",{pre:!0},[v._v("Z.i")]),v._v("被赋值为"),r("code",{pre:!0},[v._v("X.s")]),v._v("。尝试使用"),r("code",{pre:!0},[v._v("X.s")]),v._v("代替"),r("code",{pre:!0},[v._v("Z.i")]),v._v("。"),r("code",{pre:!0},[v._v("Z.i")]),v._v("被用到1次，为"),r("code",{pre:!0},[v._v("Z -> z {Z.s = g(Z.i)}")]),v._v("。试图直接把"),r("code",{pre:!0},[v._v("X.s")]),v._v("赋值为"),r("code",{pre:!0},[v._v("Z,s")]),v._v("，但是二者的位置关系无法确定，因为X和Z之间可能存在一个Y。")]),v._v(" "),r("p",[v._v("解决方案：新建符号M作为跳板:")]),v._v(" "),r("p",[r("img",{attrs:{src:t(708),alt:"5-20"}})]),v._v(" "),r("p",[v._v("使M作为桥梁衔接X和Z，M访问"),r("code",{pre:!0},[v._v("val[top - 2]")]),v._v("来访问"),r("code",{pre:!0},[v._v("X.s")]),v._v("，这样Z只要访问"),r("code",{pre:!0},[v._v("val[top - 1]")]),v._v("就必然能够访问到"),r("code",{pre:!0},[v._v("X.s")])]),v._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[v._v("继承属性使用函数赋值：")])]),v._v(" "),r("p",[v._v("考虑如下SDD：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(709),alt:"5-21"}})]),v._v(" "),r("p",[v._v("属性栈中只保存了"),r("code",{pre:!0},[v._v("A.s")]),v._v("，并没有保存"),r("code",{pre:!0},[v._v("C.i")])]),v._v(" "),r("p",[v._v("解决方案：新建符号N作为桥梁：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(710),alt:"5-22"}})]),v._v(" "),r("p",[v._v("添加一个符号保存运算结果为"),r("code",{pre:!0},[v._v("N.s")]),v._v("这样"),r("code",{pre:!0},[v._v("C.i")]),v._v("就可以通过"),r("code",{pre:!0},[v._v("val[top - 1]")]),v._v("来访问")])])}]};v.exports={attributes:{layout:"collection",title:"语法制导翻译技术",collection:"FundamentalsOfCompiling"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},346:function(v,_,t){v.exports=t.p+"img/1759462.png"},690:function(v,_,t){v.exports=t.p+"img/7a9d7d8.png"},691:function(v,_,t){v.exports=t.p+"img/b83bf35.png"},692:function(v,_,t){v.exports=t.p+"img/3bd5157.png"},693:function(v,_,t){v.exports=t.p+"img/0b1d367.png"},694:function(v,_,t){v.exports=t.p+"img/7459b62.png"},695:function(v,_,t){v.exports=t.p+"img/c552db3.png"},696:function(v,_,t){v.exports=t.p+"img/cf1a01d.png"},697:function(v,_,t){v.exports=t.p+"img/788bff3.png"},698:function(v,_,t){v.exports=t.p+"img/ead037d.png"},699:function(v,_,t){v.exports=t.p+"img/49d16e8.png"},700:function(v,_,t){v.exports=t.p+"img/8ce183c.png"},701:function(v,_,t){v.exports=t.p+"img/5c1d894.png"},702:function(v,_,t){v.exports=t.p+"img/49b2d36.png"},703:function(v,_,t){v.exports=t.p+"img/8296c72.png"},704:function(v,_,t){v.exports=t.p+"img/24170e8.png"},705:function(v,_,t){v.exports=t.p+"img/c431863.png"},706:function(v,_,t){v.exports=t.p+"img/5cdaaa5.png"},707:function(v,_,t){v.exports=t.p+"img/3f956c1.png"},708:function(v,_,t){v.exports=t.p+"img/1045ba3.png"},709:function(v,_,t){v.exports=t.p+"img/6aad281.png"},710:function(v,_,t){v.exports=t.p+"img/4fbf8af.png"}}]);