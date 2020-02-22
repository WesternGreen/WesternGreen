(window.webpackJsonp=window.webpackJsonp||[]).push([[9,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413],{1092:function(t,v,_){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"预备知识"}},[t._v("预备知识")]),t._v(" "),n("p",[t._v("每个关系视为一个二维表（类似于Excel")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("元组 - 一行")])]),t._v(" "),n("li",[n("p",[t._v("数据项 - 一个单元格")])]),t._v(" "),n("li",[n("p",[t._v("属性 - 一列")])]),t._v(" "),n("li",[n("p",[t._v("superkey超键 - 任意两个元组没有相同的超键。可以视为候选键+冗余属性")])]),t._v(" "),n("li",[n("p",[t._v("candidate key候选键 - 最小超键（没有冗余属性的超键），满足唯一性、最小性")])]),t._v(" "),n("li",[n("p",[t._v("primary key主键 - 候选键中的一个（根据实际情况从候选键中选择")])]),t._v(" "),n("li",[n("p",[t._v("foreign key外键")]),t._v(" "),n("ul",[n("li",[t._v("定义外键时要给DBMS指明外键的对应关系。所以外键和外部主键的名字可以不同。可以指向自身表的主键")])])])]),t._v(" "),n("p",[t._v("支持的"),n("strong",[t._v("完整性约束(Integrity Constraint)")]),t._v(":")]),t._v(" "),n("ul",[n("li",[t._v("实体完整性约束(IC of Primary Key) - 主键取值非空（如果主键包含多个属性，则任何属性都不能为空")]),t._v(" "),n("li",[t._v("参照完整性约束(Referential IC) - 外键取值要么为空，要么为其参照的主键值")]),t._v(" "),n("li",[t._v("用户自定义完整性约束")])]),t._v(" "),n("p",[t._v("模式图：")]),t._v(" "),n("ul",[n("li",[t._v("表名")]),t._v(" "),n("li",[t._v("属性集")]),t._v(" "),n("li",[t._v("下划线 - 主键（可能由多个属性构成")]),t._v(" "),n("li",[t._v("外键引用对应关系")])]),t._v(" "),n("p",[n("img",{attrs:{src:_(563),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"关系代数"}},[t._v("关系代数")]),t._v(" "),n("h3",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),n("p",[t._v("六大基本操作：")]),t._v(" "),n("ul",[n("li",[t._v("选择select")]),t._v(" "),n("li",[t._v("投影project")]),t._v(" "),n("li",[t._v("并unoin")]),t._v(" "),n("li",[t._v("差set difference")]),t._v(" "),n("li",[t._v("笛卡尔乘积Cartesian product")]),t._v(" "),n("li",[t._v("更名rename")])]),t._v(" "),n("p",[t._v("附加操作（可以由基本操作组合表示）：")]),t._v(" "),n("ul",[n("li",[t._v("交Set intersection")]),t._v(" "),n("li",[t._v("（自然）连接(Natural) join")]),t._v(" "),n("li",[t._v("除法Division（略")]),t._v(" "),n("li",[t._v("赋值Assignment")]),t._v(" "),n("li",[t._v("广义投影Generalized Projection")]),t._v(" "),n("li",[t._v("外连接Outer Join")]),t._v(" "),n("li",[t._v("聚集函数Aggregate Functions")])]),t._v(" "),n("h3",{attrs:{id:"选择select"}},[t._v("选择select")]),t._v(" "),n("p",[t._v("一元操作，从一个表中选出满足特定关系的元组")]),t._v(" "),n("p",[n("img",{attrs:{src:_(564),alt:""}})]),t._v(" "),n("p",[t._v("其中p是选择条件，r是一个关系")]),t._v(" "),n("p",[t._v("p中可以使用以下符号进行逻辑拼接：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(565),alt:""}})]),t._v(" "),n("p",[t._v("（下文中会使用"),n("code",{pre:!0},[t._v("and")]),t._v(" & "),n("code",{pre:!0},[t._v("or")]),t._v(" & "),n("code",{pre:!0},[t._v("not")]),t._v("表示以上三种逻辑拼接")]),t._v(" "),n("p",[t._v("p里面可以使用的操作包括"),n("code",{pre:!0},[t._v("=, !=, >, >=, <, <=")]),t._v("，操作的两侧可以是属性，也可以是常量")]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(566),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"投影project"}},[t._v("投影project")]),t._v(" "),n("p",[t._v("一元操作，从一个表中取出特定的列")]),t._v(" "),n("p",[t._v("去重（可选")]),t._v(" "),n("p",[n("img",{attrs:{src:_(567),alt:""}})]),t._v(" "),n("p",[t._v("其中A1…Ak是关系中的属性名，r是关系")]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(568),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"并unoin"}},[t._v("并unoin")]),t._v(" "),n("p",[t._v("二元操作，合并两个表。表头可以不一样，但是要求属性数量相同，相同位置的属性相容")]),t._v(" "),n("p",[t._v("去重（可选")]),t._v(" "),n("p",[n("img",{attrs:{src:_(569),alt:""}})]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(570),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"差set-difference"}},[t._v("差set difference")]),t._v(" "),n("p",[t._v("二元操作，在删除关系r中出现在关系s中的元组。两个关系必须拥有相同的属性数量，相同位置的属性必须相容")]),t._v(" "),n("p",[n("img",{attrs:{src:_(571),alt:""}})]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(572),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"笛卡尔乘积cartesian-product"}},[t._v("笛卡尔乘积Cartesian product")]),t._v(" "),n("p",[t._v("二元操作，把关系r中的每个元组与关系s中的每个元组相互组合。要求两个关系不存在相同的属性名")]),t._v(" "),n("p",[n("img",{attrs:{src:_(573),alt:""}})]),t._v(" "),n("p",[t._v("如果两个关系有相同的属性名，则需要重命名操作")]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(574),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"更名rename"}},[t._v("更名rename")]),t._v(" "),n("p",[t._v("一元操作，常用于自连接")]),t._v(" "),n("p",[n("img",{attrs:{src:_(575),alt:""}})]),t._v(" "),n("p",[t._v("其中X为关系的新名字（如果仅改属性名则不必给出），A1…An为各个属性的新名字（如果仅改关系名则不必给出）。")]),t._v(" "),n("h3",{attrs:{id:"交set-intersection"}},[t._v("交Set intersection")]),t._v(" "),n("p",[t._v("二元操作，求两个关系内相同的元组。要求两个关系属性数量相同且同位置属性相容")]),t._v(" "),n("p",[n("img",{attrs:{src:_(576),alt:""}})]),t._v(" "),n("p",[t._v("可以使用基本操作表示：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(577),alt:""}})]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(578),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"连接与自然连接join-natural-join"}},[t._v("连接与自然连接join & Natural join")]),t._v(" "),n("p",[t._v("连接，也叫内连接")]),t._v(" "),n("p",[t._v("二元操作，相当于笛卡尔乘积的基础上做选择操作。")]),t._v(" "),n("p",[n("img",{attrs:{src:_(579),alt:""}})]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(580),alt:""}})]),t._v(" "),n("p",[t._v("自然连接 - 在两个表的相同属性上面做等值连接")]),t._v(" "),n("p",[n("img",{attrs:{src:_(581),alt:""}})]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(582),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"除法division略"}},[t._v("除法Division（略")]),t._v(" "),n("p",[t._v("逆笛卡尔乘积")]),t._v(" "),n("p",[n("img",{attrs:{src:_(583),alt:""}})]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(584),alt:""}})]),t._v(" "),n("p",[t._v("思想：（参考"),n("a",{attrs:{href:"https://www.geeksforgeeks.org/sql-division/"}},[t._v("这里")])]),t._v(" "),n("p",[t._v("使用上面的"),n("code",{pre:!0},[t._v("r(A, B, C, D)")]),t._v("和"),n("code",{pre:!0},[t._v("s(C, D)")]),t._v("两个关系")]),t._v(" "),n("ol",[n("li",[t._v("寻找所有"),n("code",{pre:!0},[t._v("r(A, B)")]),t._v("和"),n("code",{pre:!0},[t._v("s(C, D)")]),t._v("的组合，得到"),n("code",{pre:!0},[t._v("r1(A, B, C, D)")])])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("A")]),t._v(" "),n("th",[t._v("B")]),t._v(" "),n("th",[t._v("C")]),t._v(" "),n("th",[t._v("D")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("a")]),t._v(" "),n("td",[t._v("b")]),t._v(" "),n("td",[t._v("c")]),t._v(" "),n("td",[t._v("d")])]),t._v(" "),n("tr",[n("td",[t._v("a")]),t._v(" "),n("td",[t._v("b")]),t._v(" "),n("td",[t._v("e")]),t._v(" "),n("td",[t._v("f")])]),t._v(" "),n("tr",[n("td",[t._v("b")]),t._v(" "),n("td",[t._v("c")]),t._v(" "),n("td",[t._v("c")]),t._v(" "),n("td",[t._v("d")])]),t._v(" "),n("tr",[n("td",[t._v("b")]),t._v(" "),n("td",[t._v("c")]),t._v(" "),n("td",[t._v("e")]),t._v(" "),n("td",[t._v("f")])]),t._v(" "),n("tr",[n("td",[t._v("e")]),t._v(" "),n("td",[t._v("d")]),t._v(" "),n("td",[t._v("c")]),t._v(" "),n("td",[t._v("d")])]),t._v(" "),n("tr",[n("td",[t._v("e")]),t._v(" "),n("td",[t._v("d")]),t._v(" "),n("td",[t._v("e")]),t._v(" "),n("td",[t._v("f")])])])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("使用r1减去r得到r2")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("A")]),t._v(" "),n("th",[t._v("B")]),t._v(" "),n("th",[t._v("C")]),t._v(" "),n("th",[t._v("D")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("b")]),t._v(" "),n("td",[t._v("c")]),t._v(" "),n("td",[t._v("c")]),t._v(" "),n("td",[t._v("d")])])])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("使用"),n("code",{pre:!0},[t._v("r(A, B)")]),t._v("减去"),n("code",{pre:!0},[t._v("r2(A, B)")]),t._v("得到"),n("code",{pre:!0},[t._v("r3(A, B)")])])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("A")]),t._v(" "),n("th",[t._v("B")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("a")]),t._v(" "),n("td",[t._v("b")])]),t._v(" "),n("tr",[n("td",[t._v("e")]),t._v(" "),n("td",[t._v("d")])])])]),t._v(" "),n("p",[t._v("r3即为"),n("code",{pre:!0},[t._v("r/s")])]),t._v(" "),n("p",[t._v("假设关系为"),n("code",{pre:!0},[t._v("r(x, y)")]),t._v("和"),n("code",{pre:!0},[t._v("s(y)")]),t._v("，则对应的sql语句为：")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{staticClass:"language-sql"},[n("span",{staticClass:"token keyword"},[t._v("SELECT")]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("*")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("FROM")]),t._v(" R \n"),n("span",{staticClass:"token keyword"},[t._v("WHERE")]),t._v(" x "),n("span",{staticClass:"token operator"},[t._v("not")]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("in")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("(")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("SELECT")]),t._v(" x "),n("span",{staticClass:"token keyword"},[t._v("FROM")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("\n"),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token keyword"},[t._v("SELECT")]),t._v(" x "),n("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" y "),n("span",{staticClass:"token keyword"},[t._v("FROM")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token keyword"},[t._v("select")]),t._v(" y "),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" S "),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("as")]),t._v(" p "),n("span",{staticClass:"token keyword"},[t._v("cross")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("join")]),t._v(" \n"),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token keyword"},[t._v("select")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("distinct")]),t._v(" x "),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" R"),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("as")]),t._v(" sp"),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),n("span",{staticClass:"token keyword"},[t._v("EXCEPT")]),t._v("\n"),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token keyword"},[t._v("SELECT")]),t._v(" x "),n("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" y "),n("span",{staticClass:"token keyword"},[t._v("FROM")]),t._v(" R"),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("AS")]),t._v(" r "),n("span",{staticClass:"token punctuation"},[t._v(")")]),n("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("或")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{staticClass:"language-sql"},[n("span",{staticClass:"token keyword"},[t._v("SELECT")]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("*")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("FROM")]),t._v(" R "),n("span",{staticClass:"token keyword"},[t._v("as")]),t._v(" sx\n"),n("span",{staticClass:"token keyword"},[t._v("WHERE")]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("NOT")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("EXISTS")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("\n"),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token keyword"},[t._v("SELECT")]),t._v(" p"),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("y "),n("span",{staticClass:"token keyword"},[t._v("FROM")]),t._v(" S "),n("span",{staticClass:"token keyword"},[t._v("as")]),t._v(" p "),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),n("span",{staticClass:"token keyword"},[t._v("EXCEPT")]),t._v("\n"),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token keyword"},[t._v("SELECT")]),t._v(" sp"),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("y "),n("span",{staticClass:"token keyword"},[t._v("FROM")]),t._v("  R "),n("span",{staticClass:"token keyword"},[t._v("as")]),t._v(" sp "),n("span",{staticClass:"token keyword"},[t._v("WHERE")]),t._v(" sp"),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("x "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" sx"),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("x "),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v(")")]),n("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"赋值assignment"}},[t._v("赋值Assignment")]),t._v(" "),n("p",[t._v("用来保存运算的中间结果，符号为"),n("code",{pre:!0},[t._v("<-")])]),t._v(" "),n("h3",{attrs:{id:"广义投影generalized-projection"}},[t._v("广义投影Generalized Projection")]),t._v(" "),n("p",[t._v("允许对投影后的属性进行运算。允许常量出现")]),t._v(" "),n("p",[n("img",{attrs:{src:_(585),alt:""}})]),t._v(" "),n("p",[t._v("其中F1…Fn允许是算术表达式，比如两个属性（或属性和常量）的加减乘除")]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(586),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"外连接outer-join"}},[t._v("外连接Outer Join")]),t._v(" "),n("p",[t._v("内连接仅挑选了符合条件的元组，会导致信息丢失。外连接保存所有元组，不符合条件的元组使用null来填充未知值")]),t._v(" "),n("p",[t._v("外连接的结果包含内连接的结果")]),t._v(" "),n("p",[t._v("可以用来检错")]),t._v(" "),n("p",[t._v("分类")]),t._v(" "),n("ul",[n("li",[t._v("左外连接")]),t._v(" "),n("li",[t._v("右外连接")]),t._v(" "),n("li",[t._v("全外连接")])]),t._v(" "),n("p",[t._v("例：已知以下两个关系：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(587),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:_(588),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:_(589),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:_(590),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:_(591),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"聚集函数aggregate-functions"}},[t._v("聚集函数Aggregate Functions")]),t._v(" "),n("p",[t._v("输入一组值，输出单个值。通常是统计函数，比如：")]),t._v(" "),n("ul",[n("li",[t._v("max")]),t._v(" "),n("li",[t._v("min")]),t._v(" "),n("li",[t._v("avg")]),t._v(" "),n("li",[t._v("sum")]),t._v(" "),n("li",[t._v("count")])]),t._v(" "),n("p",[t._v("写作：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(592),alt:""}})]),t._v(" "),n("p",[t._v("其中G1…Gn为分类条件，是一系列属性（非必需）。F1…Fn是聚集函数，A1…An是聚集的属性名")]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(593),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:_(594),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"空值null"}},[t._v("空值null")]),t._v(" "),n("p",[t._v("使用"),n("code",{pre:!0},[t._v("null")]),t._v("表示")]),t._v(" "),n("p",[t._v("与null相关的数学表达式结果都是null")]),t._v(" "),n("p",[t._v("聚集函数通常忽略空值")]),t._v(" "),n("p",[t._v("比较值是否相等时，两个null视为相等")]),t._v(" "),n("p",[t._v("与null相关的真值表：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(595),alt:""}})]),t._v(" "),n("p",[t._v("连接语句、选择语句把null视为不满足条件")]),t._v(" "),n("p",[t._v("投影、并、交、差操作在去重时把null视为重复的因素")]),t._v(" "),n("h2",{attrs:{id:"dml"}},[t._v("DML")]),t._v(" "),n("h3",{attrs:{id:"deletion"}},[t._v("Deletion")]),t._v(" "),n("p",[n("img",{attrs:{src:_(596),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"insertion"}},[t._v("Insertion")]),t._v(" "),n("p",[n("img",{attrs:{src:_(597),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"updating"}},[t._v("Updating")]),t._v(" "),n("p",[t._v("可以使用广义投影实现")]),t._v(" "),n("p",[n("img",{attrs:{src:_(598),alt:""}})]),t._v(" "),n("p",[t._v("例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(599),alt:""}})])])}]};t.exports={attributes:{layout:"collection",title:"relation model",collection:"DatabaseConcept"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},563:function(t,v,_){t.exports=_.p+"img/463241f.png"},564:function(t,v,_){t.exports=_.p+"img/86b74dc.png"},565:function(t,v,_){t.exports=_.p+"img/114c24d.png"},566:function(t,v,_){t.exports=_.p+"img/e84bd60.png"},567:function(t,v,_){t.exports=_.p+"img/54c837c.png"},568:function(t,v,_){t.exports=_.p+"img/ef41039.png"},569:function(t,v,_){t.exports=_.p+"img/d915078.png"},570:function(t,v,_){t.exports=_.p+"img/ef00142.png"},571:function(t,v,_){t.exports=_.p+"img/4f7ed97.png"},572:function(t,v,_){t.exports=_.p+"img/2a50eaf.png"},573:function(t,v,_){t.exports=_.p+"img/8537136.png"},574:function(t,v,_){t.exports=_.p+"img/0e824cc.png"},575:function(t,v,_){t.exports=_.p+"img/4f9ab40.png"},576:function(t,v,_){t.exports=_.p+"img/299967f.png"},577:function(t,v,_){t.exports=_.p+"img/5abca1e.png"},578:function(t,v,_){t.exports=_.p+"img/a41ecfb.png"},579:function(t,v,_){t.exports=_.p+"img/3ff2a48.png"},580:function(t,v,_){t.exports=_.p+"img/2d33234.png"},581:function(t,v,_){t.exports=_.p+"img/5551e50.png"},582:function(t,v,_){t.exports=_.p+"img/586e94b.png"},583:function(t,v,_){t.exports=_.p+"img/cab62d6.png"},584:function(t,v,_){t.exports=_.p+"img/4458ddb.png"},585:function(t,v,_){t.exports=_.p+"img/ef1ca2a.png"},586:function(t,v,_){t.exports=_.p+"img/24985ad.png"},587:function(t,v,_){t.exports=_.p+"img/dfd28ac.png"},588:function(t,v,_){t.exports=_.p+"img/acad168.png"},589:function(t,v,_){t.exports=_.p+"img/e91cc3e.png"},590:function(t,v,_){t.exports=_.p+"img/5e3ceff.png"},591:function(t,v,_){t.exports=_.p+"img/1d770af.png"},592:function(t,v,_){t.exports=_.p+"img/f04c4cd.png"},593:function(t,v,_){t.exports=_.p+"img/46aeea2.png"},594:function(t,v,_){t.exports=_.p+"img/c85f10d.png"},595:function(t,v,_){t.exports=_.p+"img/54eadce.png"},596:function(t,v,_){t.exports=_.p+"img/41237bb.png"},597:function(t,v,_){t.exports=_.p+"img/782f27f.png"},598:function(t,v,_){t.exports=_.p+"img/02c1cda.png"},599:function(t,v,_){t.exports=_.p+"img/82cd524.png"}}]);