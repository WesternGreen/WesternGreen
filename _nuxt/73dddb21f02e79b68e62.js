(window.webpackJsonp=window.webpackJsonp||[]).push([[28,630,631,632,633,634,635,636,637,638,640,641,642],{1115:function(v,_,t){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[v._v("句法分析")]),v._v(" "),n("h2",[v._v("概述")]),v._v(" "),n("p",[v._v("两种不同的句法结构：")]),v._v(" "),n("ul",[n("li",[v._v("依存结构(Dependency structure) - 词和其他词之间之间的依赖关系\n"),n("ul",[n("li",[v._v("表示为依存树(dependency tree)")]),v._v(" "),n("li",[n("img",{attrs:{src:t(816),alt:"6-1"}})])])]),v._v(" "),n("li",[n("strong",[v._v("短语结构")]),v._v("(Phrase structure) - 把句子表示为"),n("strong",[v._v("嵌套")]),v._v("的"),n("strong",[v._v("短语成分")]),v._v(" "),n("ul",[n("li",[v._v("可以表示为句法树")]),v._v(" "),n("li",[n("img",{attrs:{src:t(817),alt:"6-2"}})])])])]),v._v(" "),n("p",[v._v("本章仅针对"),n("strong",[v._v("短语结构分析")])]),v._v(" "),n("ul",[n("li",[v._v("输入 - 句子")]),v._v(" "),n("li",[v._v("输出 - 句法树")]),v._v(" "),n("li",[v._v("目的\n"),n("ul",[n("li",[v._v("判断输入句子是否合法")]),v._v(" "),n("li",[v._v("根据语法规则生成句法树")])])]),v._v(" "),n("li",[v._v("前置知识\n"),n("ul",[n("li",[v._v("如何形式化描述语言")]),v._v(" "),n("li",[v._v("句法分析算法")])])])]),v._v(" "),n("h2",[v._v("词性")]),v._v(" "),n("p",[v._v("常见词性：")]),v._v(" "),n("ul",[n("li",[v._v("N = noun")]),v._v(" "),n("li",[v._v("V = verb")]),v._v(" "),n("li",[v._v("DT = determiner")]),v._v(" "),n("li",[v._v("NP = noun phrase")]),v._v(" "),n("li",[v._v("VP = verb phrase")]),v._v(" "),n("li",[v._v("S = sentence")])]),v._v(" "),n("p",[v._v("例：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(818),alt:"6-3"}})]),v._v(" "),n("h2",[v._v("形式语法")]),v._v(" "),n("h3",[v._v("概述")]),v._v(" "),n("p",[n("strong",[v._v("形式语法")]),v._v("是规定语言中允许出现的结构的形式化说明")]),v._v(" "),n("p",[v._v("几种主要的形式语法：")]),v._v(" "),n("ul",[n("li",[v._v("CFG(s): context-free grammar(s) 上下文无关文法")]),v._v(" "),n("li",[v._v("LFG: lexical functional grammar")]),v._v(" "),n("li",[v._v("HPSG: head-driven phrase-structure grammar")]),v._v(" "),n("li",[v._v("TAG: tree adjoining grammar")]),v._v(" "),n("li",[v._v("CCG: combinatory categorical grammar")])]),v._v(" "),n("p",[v._v("本章重点讲述上下文无关文法")]),v._v(" "),n("h3",[v._v("上下文无关文法")]),v._v(" "),n("p",[v._v("生成式左侧有且仅有一个非终结符的文法（详见形式语言与自动机）")]),v._v(" "),n("p",[v._v("因为左侧仅有一个非终结符，所以和上下文无关")]),v._v(" "),n("h3",[v._v("Chomsky范式")]),v._v(" "),n("p",[v._v("生成式右侧仅能出现以下两种情况：")]),v._v(" "),n("ul",[n("li",[v._v("两个非终结符")]),v._v(" "),n("li",[v._v("一个终结符")])]),v._v(" "),n("p",[v._v("详见形式语言与自动机")]),v._v(" "),n("h2",[v._v("CKY Parsing")]),v._v(" "),n("p",[v._v("Cocke-Kasami-Younger Parsing")]),v._v(" "),n("h3",[v._v("概述")]),v._v(" "),n("p",[v._v("CKY句法分析，使用"),n("strong",[v._v("自底向上")]),v._v("句法分析算法计算句法树。使用"),n("strong",[v._v("线图")]),v._v("(chart)存储中间结果")]),v._v(" "),n("p",[v._v("其实就是"),n("strong",[v._v("逆向递归下降分析")]),v._v("，就称作"),n("strong",[v._v("递归上升分析")]),v._v("好了（我瞎起的名字")]),v._v(" "),n("h3",[v._v("算法")]),v._v(" "),n("p",[v._v("首先把词转换成词性标签：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(819),alt:"6-4"}})]),v._v(" "),n("p",[v._v("然后从左向右递归穷举，查询是否有这样的有效生成式。。。如果找不到就回退")]),v._v(" "),n("h2",[v._v("句法分析的问题（常见歧义）")]),v._v(" "),n("h3",[v._v("词性歧义")]),v._v(" "),n("p",[n("img",{attrs:{src:t(820),alt:"6-5"}})]),v._v(" "),n("h3",[v._v("名词修饰语歧义")]),v._v(" "),n("p",[n("img",{attrs:{src:t(821),alt:"6-7"}})]),v._v(" "),n("h3",[v._v("介词短语修饰语歧义")]),v._v(" "),n("p",[n("img",{attrs:{src:t(822),alt:"6-8"}})]),v._v(" "),n("h3",[v._v("边界歧义")]),v._v(" "),n("p",[n("img",{attrs:{src:t(329),alt:"6-9"}})]),v._v(" "),n("h2",[v._v("概率上下文无关文法")]),v._v(" "),n("h3",[v._v("概述")]),v._v(" "),n("p",[v._v("试图解决上述歧义问题")]),v._v(" "),n("p",[v._v("PCFGs(Probabilistic context-free grammars) or SCFGs(Stochastic context-free grammars)")]),v._v(" "),n("p",[v._v("基本思想：如果一个非终结符拥有多个不同的生成式，"),n("strong",[v._v("给这些生成式赋予一个概率值")]),v._v("，如：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(329),alt:"6-9"}})]),v._v(" "),n("p",[v._v("则最终"),n("strong",[v._v("句法树的概率值为所有使用的生成式的概率值的乘积")])]),v._v(" "),n("h3",[v._v("PCFG的假设")]),v._v(" "),n("ul",[n("li",[v._v("位置不变性 - 概率不随非终结符在树的位置不同而不同")]),v._v(" "),n("li",[v._v("上下文无关 - 概率不随非终结符附近的符号不同而不同")]),v._v(" "),n("li",[v._v("祖先节点无关 - 概率不随未来的规约操作不同而不同")])]),v._v(" "),n("h3",[v._v("模型参数")]),v._v(" "),n("p",[v._v("因为PCFG使用Chomsky范式，所以模型的生成式只有如下两种情况：")]),v._v(" "),n("ul",[n("li",[v._v("生成式右侧为两个非终结符\n"),n("ul",[n("li",[v._v("A -> BC")])])]),v._v(" "),n("li",[v._v("生成式右侧为一个终结符\n"),n("ul",[n("li",[v._v("A -> a")])])])]),v._v(" "),n("p",[v._v("令非终结符数量为n，终结符数量为t。模型参数即为所有生成式的概率，所以需要")]),v._v(" "),n("ul",[n("li",[v._v("一个"),n("code",{pre:!0},[v._v("n*n*n")]),v._v("的三维矩阵保存第一种情况的参数")]),v._v(" "),n("li",[v._v("一个"),n("code",{pre:!0},[v._v("n*t")]),v._v("的而为矩阵保存第二种情况的参数")])]),v._v(" "),n("h3",[v._v("如何使用PCFG找到最优句法树")]),v._v(" "),n("p",[v._v("显然也使用"),n("strong",[v._v("动态规划")])]),v._v(" "),n("p",[v._v("定义动态规划表项"),n("code",{pre:!0},[v._v("π(i, j, X)")]),v._v("表示由非终结符X推出子串"),n("code",{pre:!0},[v._v("[wi, ..., wj]")]),v._v("的最大概率")]),v._v(" "),n("ul",[n("li",[v._v("初始化\n"),n("ul",[n("li",[v._v("非终结符能直接推出的子串只有一个终结符（Chomsky范式限定）")]),v._v(" "),n("li",[n("img",{attrs:{src:t(823),alt:"6-10"}})])])]),v._v(" "),n("li",[v._v("递推\n"),n("ul",[n("li",[v._v("概率等于【"),n("strong",[v._v("生成式概率")]),v._v("乘"),n("strong",[v._v("根据生成式确定的推导子串最大概率")]),v._v("】的最大值")]),v._v(" "),n("li",[n("img",{attrs:{src:t(824),alt:"6-11"}})])])]),v._v(" "),n("li",[v._v("终止\n"),n("ul",[n("li",[v._v("得到"),n("code",{pre:!0},[v._v("π(1, n, S)")]),v._v("，即初始符号S推出整个串的最大概率")]),v._v(" "),n("li",[n("img",{attrs:{src:t(825),alt:"6-12"}})])])])]),v._v(" "),n("h3",[v._v("如何得到PCFG（略")]),v._v(" "),n("p",[v._v("句法规则学习")]),v._v(" "),n("p",[v._v("Penn treebank: 由the University of Pennsylvania创建的树库")]),v._v(" "),n("h2",[v._v("句法分析的评价")]),v._v(" "),n("p",[v._v("例：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(826),alt:"6-13"}})]),v._v(" "),n("p",[v._v("注意输出的结果包括了"),n("strong",[v._v("标签")]),v._v("与"),n("strong",[v._v("标签的【括号】的位置")]),v._v("（数字表示括号位置，即空白位置）")]),v._v(" "),n("p",[v._v("对比标准结果和系统输出结果，标准结果输出了8个标签，系统输出了7个标签。二者有3个标签相同。")]),v._v(" "),n("ul",[n("li",[v._v("标记正确率(LP: labeled precision) = 分析正确的短语个数/分析得到的短语个数\n"),n("ul",[n("li",[v._v("此例中为3/7=42.9%")])])]),v._v(" "),n("li",[v._v("标记召回率(LR: labeled recall) = 分析正确的短语个数/标准结果中的短语个数\n"),n("ul",[n("li",[v._v("此例中为3/8=37.5%")])])]),v._v(" "),n("li",[v._v("正确率和召回率综合指标"),n("code",{pre:!0},[v._v("F1 = 2 * LP * LR / (LP + LR)")]),v._v(" "),n("ul",[n("li",[v._v("此例中为40%")])])]),v._v(" "),n("li",[v._v("词性标注准确率(tagging accuracy)\n"),n("ul",[n("li",[v._v("此例中所有词的初始词性均标注正确，即100%")])])])])])}]};v.exports={attributes:{layout:"collection",title:"Parsing",collection:"NaturalLanguageProcessing"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},329:function(v,_,t){v.exports=t.p+"img/32b1826.png"},816:function(v,_,t){v.exports=t.p+"img/c243741.png"},817:function(v,_,t){v.exports=t.p+"img/e2ff1b3.png"},818:function(v,_,t){v.exports=t.p+"img/68d17d5.png"},819:function(v,_,t){v.exports=t.p+"img/07792de.png"},820:function(v,_,t){v.exports=t.p+"img/085a2c3.png"},821:function(v,_,t){v.exports=t.p+"img/676cda4.png"},822:function(v,_,t){v.exports=t.p+"img/64ee41d.png"},823:function(v,_,t){v.exports=t.p+"img/7d071b1.png"},824:function(v,_,t){v.exports=t.p+"img/6eaa27a.png"},825:function(v,_,t){v.exports=t.p+"img/faf6db8.png"},826:function(v,_,t){v.exports=t.p+"img/ab7766d.png"}}]);