(window.webpackJsonp=window.webpackJsonp||[]).push([[32,325,326,327,328,329,330,331,332,333,334,335],{1131:function(t,v,_){const r={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"定点数的表示方法"}},[t._v("定点数的表示方法")]),t._v(" "),r("p",[t._v("没有小数点，只能表示纯小数或纯整数")]),t._v(" "),r("h3",{attrs:{id:"无符号数-有符号数"}},[t._v("无符号数 & 有符号数")]),t._v(" "),r("p",[r("strong",[t._v("无符号数都是非负的")]),t._v("。如一个16位2进制数的表示范围为0~65535")]),t._v(" "),r("p",[t._v("有符号数的最左侧位（第一位）为符号位，符号位为0表示正数，符号位为1表示负数")]),t._v(" "),r("p",[t._v("如：8位2进制有符号数00001001表示+0001001，10001001表示-0001001")]),t._v(" "),r("p",[t._v("对小数来说，"),r("strong",[t._v("个位就是符号位")]),t._v("，如1.0000010表示-0.0000010，0.0101001表示+0.0101001")]),t._v(" "),r("p",[t._v("有符号数花费一位作为符号，取值范围的大小基本不变（也可能取值范围+1，详见补码表示法），但是值的绝对值范围减小了")]),t._v(" "),r("h3",{attrs:{id:"原码表示法"}},[t._v("原码表示法")]),t._v(" "),r("p",[t._v("正数第一位为0，负数第一位为1。（如果是纯小数，则个位为符号位）")]),t._v(" "),r("p",[t._v("原码有两个0，以8位二进制数为例：")]),t._v(" "),r("ul",[r("li",[r("code",{pre:!0},[t._v("[+0] = 00000000")])]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("[-0] = 10000000")])])]),t._v(" "),r("p",[t._v("原码表示法简单明了，易于和真值转换，但是"),r("strong",[t._v("加法运算复杂")]),t._v("（因为需要考虑第一位的正负而不能直接把8位数相加）")]),t._v(" "),r("h3",{attrs:{id:"反码表示法"}},[t._v("反码表示法")]),t._v(" "),r("p",[r("strong",[t._v("正数的反码和原码一样")]),t._v("，负数的反码为原码二进制取反但是"),r("strong",[t._v("符号位仍然是1")]),t._v("，也就是说"),r("strong",[t._v("取反操作不对符号位生效")])]),t._v(" "),r("p",[t._v("0的反码：")]),t._v(" "),r("ul",[r("li",[r("code",{pre:!0},[t._v("[+0] = 00000000")])]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("[-0] = 11111111")])])]),t._v(" "),r("h3",{attrs:{id:"补码表示法"}},[t._v("补码表示法")]),t._v(" "),r("p",[r("strong",[t._v("正数的补码和原码一样，负数的补码相当于反码+1")])]),t._v(" "),r("p",[t._v("补码的原理：在数的长度一定时，可以使用补码来代替负数进行加减法。即计算0111+(-0011)和计算0111+1101的结果分别为0100和10100（舍弃首位1，结果相同）")]),t._v(" "),r("p",[t._v("0的补码：")]),t._v(" "),r("ul",[r("li",[r("code",{pre:!0},[t._v("[+0] = 00000000")])]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("[-0] = 00000000")])])]),t._v(" "),r("p",[r("strong",[t._v("使用补码可以把减法运算变成加法运算")])]),t._v(" "),r("p",[t._v("如果使用原码，一个正数加一个负数不能直接把两个数的原码相加得到结果。如果使用补码，一个正数的补码加一个负数补码可以直接带上符号相加，得到的就是结果的补码")]),t._v(" "),r("p",[t._v("补码的补码等于自身")]),t._v(" "),r("h3",{attrs:{id:"移码表示法"}},[t._v("移码表示法")]),t._v(" "),r("p",[t._v("通常用来表示浮点数的阶码")]),t._v(" "),r("p",[t._v("移码把真值向右移动变成了非负数，即把n-1位真值（一位符号位）加上2的n次方得到移码")]),t._v(" "),r("p",[t._v("以6位移码举例")]),t._v(" "),r("ul",[r("li",[r("code",{pre:!0},[t._v("[+10101] = 1000000 + 10101 = 1,10101")])]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("[-10101] = 1000000 + (-10101) = 0,10101")])])]),t._v(" "),r("p",[t._v("可以看到，移码使用了一个**逗号（不是小数点）**把第一位分离了出来，显然第一位为1时是非负数，为0时是负数")]),t._v(" "),r("h3",{attrs:{id:"原码-反码-补码-移码小结"}},[t._v("原码、反码、补码、移码小结")]),t._v(" "),r("p",[r("img",{attrs:{src:_(528),alt:"2-1"}})]),t._v(" "),r("ul",[r("li",[t._v("四种码制用来解决"),r("strong",[t._v("有符号数")]),t._v("在机器中的表示与运算。无符号数只有原码就够了")]),t._v(" "),r("li",[r("strong",[t._v("正数的原码、反码、补码是一样的")])]),t._v(" "),r("li",[t._v("只有移码的正号是1，负号是0，其他都是正号为0负号为1")]),t._v(" "),r("li",[t._v("原码与反码的0有两种编码。如果码长8位，负数只能表示到-127")]),t._v(" "),r("li",[t._v("补码和移码的0有唯一编码，所以负数可以表示到-128")])]),t._v(" "),r("p",[t._v("例题：令"),r("code",{pre:!0},[t._v("x = 103, y = -25")]),t._v("，下列表达式采用8位定点补码运算时会溢出的是？")]),t._v(" "),r("ul",[r("li",[t._v("A x+y")]),t._v(" "),r("li",[t._v("B -x+y")]),t._v(" "),r("li",[t._v("C x-y")]),t._v(" "),r("li",[t._v("D -x-y")])]),t._v(" "),r("p",[t._v("因为定点补码能够表示-128所以B不会溢出。而定点补码不能表示128所以C会溢出")]),t._v(" "),r("h3",{attrs:{id:"符号位扩展"}},[t._v("符号位扩展")]),t._v(" "),r("p",[t._v("将n位有符号数转换为n+k位并保持值不变。显然添加的位应该在原串左侧")]),t._v(" "),r("p",[t._v("规则：原串的第一位是0就全补0，是1就全补1")]),t._v(" "),r("h3",{attrs:{id:"移位操作"}},[t._v("移位操作")]),t._v(" "),r("ul",[r("li",[t._v("左移一位相当于乘2，右移一位相当于除2（向下取整）")]),t._v(" "),r("li",[t._v("使用移位与加减法来实现乘除法")]),t._v(" "),r("li",[t._v("移位法则\n"),r("ul",[r("li",[t._v("正数：原码、补码、反码均补0")]),t._v(" "),r("li",[t._v("负数\n"),r("ul",[r("li",[t._v("原码补0")]),t._v(" "),r("li",[t._v("反码补1")]),t._v(" "),r("li",[t._v("补码左移补0右移补1")])])])])]),t._v(" "),r("li",[t._v("超过串长的位丢弃")])]),t._v(" "),r("p",[t._v("例题：某机字长8位，已知整型变量x的补码为11110100，整型变量y的补码为10110000，求整型变量"),r("code",{pre:!0},[t._v("z=2*x+y/2")])]),t._v(" "),r("p",[t._v("首先进行移位，"),r("code",{pre:!0},[t._v("x*2")]),t._v("得到11101000，"),r("code",{pre:!0},[t._v("y/2")]),t._v("得到11011000，然后相加。补码的相加，直接相加即可。得到111000000，第一位越界舍弃，z为11000000")]),t._v(" "),r("h2",{attrs:{id:"浮点数的表示方法"}},[t._v("浮点数的表示方法")]),t._v(" "),r("h3",{attrs:{id:"基本思想"}},[t._v("基本思想")]),t._v(" "),r("p",[t._v("使用"),r("strong",[t._v("科学计数法")])]),t._v(" "),r("p",[t._v("以"),r("code",{pre:!0},[t._v("2.13*10^19")]),t._v("为例，"),r("code",{pre:!0},[t._v("2.13")]),t._v("为"),r("strong",[t._v("尾数")]),t._v("，"),r("strong",[t._v("10")]),t._v("为"),r("strong",[t._v("基数")]),t._v("，"),r("strong",[t._v("19")]),t._v("为"),r("strong",[t._v("阶")])]),t._v(" "),r("ul",[r("li",[t._v("尾数常用原码或补码表示。尾数的有效数字位数决定了浮点数的精度")]),t._v(" "),r("li",[t._v("阶为定点整数，常用移码或补码表示。阶码决定了浮点数的表示范围")])]),t._v(" "),r("h3",{attrs:{id:"规格化尾数"}},[t._v("规格化尾数")]),t._v(" "),r("p",[r("strong",[t._v("规格化形式")]),t._v("："),r("strong",[t._v("尾数为纯小数且最高位必须为1")]),t._v("（原码表示时为1，如果是补码或反码的负数则最高位为0），个位表示符号，0为正1为负")]),t._v(" "),r("p",[t._v("每个小数都可以转换成一个唯一的规格化数")]),t._v(" "),r("p",[t._v("尾数的规格化表格：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(529),alt:"2-2"}})]),t._v(" "),r("p",[t._v("特例：")]),t._v(" "),r("ul",[r("li",[r("code",{pre:!0},[t._v("x=-1/2=-0.100...0")]),t._v("的补码"),r("code",{pre:!0},[t._v("1.100...0")]),t._v("在补码中不是规格化数")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("x=-1")]),t._v("的补码"),r("code",{pre:!0},[t._v("1.00...00")]),t._v("是规格化数")])]),t._v(" "),r("h3",{attrs:{id:"ieee754浮点数标准"}},[t._v("IEEE754浮点数标准")]),t._v(" "),r("p",[r("img",{attrs:{src:_(530),alt:"2-11"}})]),t._v(" "),r("p",[t._v("在机器中从左向右分为三个部分")]),t._v(" "),r("ul",[r("li",[t._v("S\n"),r("ul",[r("li",[t._v("1位")]),t._v(" "),r("li",[t._v("浮点数的符号位，0表示正数，1表示负数")])])]),t._v(" "),r("li",[t._v("Exp\n"),r("ul",[r("li",[t._v("阶码，用"),r("strong",[t._v("移码")]),t._v("表示")]),t._v(" "),r("li",[t._v("float为8位，double为11位")]),t._v(" "),r("li",[t._v("Bias偏移量，float为127(2^7-1)，double为1023(2^10-1)")])])]),t._v(" "),r("li",[t._v("Frac\n"),r("ul",[r("li",[t._v("小数字段，用"),r("strong",[t._v("原码")]),t._v("表示")]),t._v(" "),r("li",[t._v("float为23位，double为20位")]),t._v(" "),r("li",[t._v("小数点在尾域的最前面。"),r("strong",[t._v("规格化数中")]),t._v("尾数"),r("code",{pre:!0},[t._v("M=1+Frac")]),t._v("（即隐含最高位的1，提升精度，非规格化数中没有这个规则）")])])])]),t._v(" "),r("p",[t._v("关于移码表示的阶码：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("最小的阶为00…001")])]),t._v(" "),r("li",[r("strong",[t._v("最大的阶为11…110")])])]),t._v(" "),r("p",[r("strong",[t._v("阶码为全0与全1被用来表示其他数")])]),t._v(" "),r("p",[t._v("特殊浮点数值：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(531),alt:"2-3"}})]),t._v(" "),r("p",[t._v("非规格化数的阶为"),r("code",{pre:!0},[t._v("1 - Bias = 1 - 127 = -126")]),t._v("（不是-127，保证了非规格化数到规格化数的平滑过渡）")]),t._v(" "),r("h2",{attrs:{id:"定点加减法"}},[t._v("定点加减法")]),t._v(" "),r("h3",{attrs:{id:"补码加减法规则"}},[t._v("补码加减法规则")]),t._v(" "),r("ul",[r("li",[t._v("补码加法：符号位作为数的一部分参与运算")]),t._v(" "),r("li",[t._v("补码减法：减一个数等于加这个数的补码")])]),t._v(" "),r("h2",{attrs:{id:"溢出与检测"}},[t._v("溢出与检测")]),t._v(" "),r("h3",{attrs:{id:"溢出概念"}},[t._v("溢出概念")]),t._v(" "),r("ul",[r("li",[t._v("正溢 - 运算结果为正且超过机器表示范围")]),t._v(" "),r("li",[t._v("负溢 - 运算结果为负且超过机器表示范围")]),t._v(" "),r("li",[t._v("上溢 - 结果的绝对值超过机器所能表示的最大绝对值(overflow)")]),t._v(" "),r("li",[t._v("下溢 - 结果的绝对值超过机器所能表示的最小绝对值(underflow)")])]),t._v(" "),r("h3",{attrs:{id:"溢出检测"}},[t._v("溢出检测")]),t._v(" "),r("ul",[r("li",[t._v("双符号位法，即"),r("strong",[t._v("变形补码")]),t._v("法或"),r("strong",[t._v("模4补码")]),t._v("法")])]),t._v(" "),r("p",[t._v("变形补码：前两位为符号位，即00表示正数，11表示负数，两个符号位都参与运算，超过两个符号位的进位丢弃")]),t._v(" "),r("p",[t._v("溢出检测规则：如果结果的双符号位出现了01或10则溢出。最高符号位永远表示结果的正确符号")]),t._v(" "),r("p",[t._v("溢出举例：")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" +1100\ny "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" +1000\n\nx变形补码 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 001100\ny变形补码 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 001000\n\nx + y\n "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 001100\n + 001000\n "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 010100\n两个符号位不同，溢出\n")])]),t._v(" "),r("p",[t._v("可以看到溢出的直观表现为“两个正数相加得到了负数”，类似也有“两个负数相加得到正数”")]),t._v(" "),r("ul",[r("li",[t._v("单符号位法")])]),t._v(" "),r("p",[t._v("从双符号位法可以看出，溢出的条件为“最高有效位与符号位只有一个进位”，由此得到单符号位溢出判别法："),r("strong",[t._v("如果最高有效位和符号位只有一个进位则判别为溢出")])]),t._v(" "),r("p",[t._v("举例：")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" +1100\ny "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" +1000\n\nx补码 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 01100\ny补码 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 01000\n\nx + y\n "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 01100\n + 01000\n "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("10100")]),t._v("\n\n最高有效位向符号位进位1\n但是最高有效位自身没有进位1，溢出\n")])]),t._v(" "),r("h3",{attrs:{id:"加法器"}},[t._v("加法器")]),t._v(" "),r("p",[t._v("一位全加器FA")]),t._v(" "),r("p",[r("img",{attrs:{src:_(532),alt:"2-4"}})]),t._v(" "),r("p",[t._v("Ai和Bi为两个输入，Ci为前一位运算传来的进位，C(i+1)为此次运算生成的进位，Si为运算结果")]),t._v(" "),r("p",[t._v("先行加法器：直接用逻辑运算取代加法运算来获得进位（并行进位）")]),t._v(" "),r("p",[t._v("并行进位举例：某加法器进位链小组信号为C4C3C2C1，低位来的进位信号为C0，写出串行进位和并行进位下C4C3C2C1的表达式")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("串行进位下，令\nGi "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AiBi\nPi "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ai xor Bi\n则Ci "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gi + PiC"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i-1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，即\nC1 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" A1B1 + "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A1 xor B1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("C0\nC2 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" A2B2 + "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A2 xor B2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("C1\nC3 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" A3B3 + "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A3 xor B3"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("C2\nC4 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" A4B4 + "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A4 xor B4"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("C3\n\n并行进位下，不等待进位\n直接把C"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i-1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("的表达式代入Ci中，得到\nC1 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" G1 + P1C0\nC2 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" G2 + P2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G1 + P1C0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nC3 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" G3 + P3"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G2 + P2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G1 + P1C0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\nC4 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" G4 + P4"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G3 + P3"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G2 + P2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G1 + P1C0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"定点乘除法"}},[t._v("定点乘除法")]),t._v(" "),r("h3",{attrs:{id:"无符号阵列乘法"}},[t._v("无符号阵列乘法")]),t._v(" "),r("p",[t._v("即把符号先单独拿出来，把两个数作为正数相乘，再把符号位加上")]),t._v(" "),r("p",[t._v("符号的计算只需要把两个数的符号做异或即可。下面只讨论两个正数相乘")]),t._v(" "),r("p",[r("strong",[t._v("部分积")]),t._v("：1位乘法计算出来的积")]),t._v(" "),r("p",[t._v("部分积举例："),r("code",{pre:!0},[t._v("A = 11011, B = 10101")]),t._v("，计算"),r("code",{pre:!0},[t._v("A*B")])]),t._v(" "),r("p",[t._v("令"),r("code",{pre:!0},[t._v("aibj")]),t._v("表示"),r("code",{pre:!0},[t._v("A")]),t._v("中第"),r("code",{pre:!0},[t._v("i")]),t._v("位乘"),r("code",{pre:!0},[t._v("B")]),t._v("中第"),r("code",{pre:!0},[t._v("j")]),t._v("位得到的部分积，则得到如下部分积矩阵")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a4b0")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a3b0")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a2b0")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a1b0")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a0b0")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a4b1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a3b1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a2b1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a1b1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a0b1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a4b2")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a3b2")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a2b2")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a1b2")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a0b2")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a4b3")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a3b3")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a2b3")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a1b3")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a0b3")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a4b4")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a3b4")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a2b4")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a1b4")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("a0b4")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),r("p",[t._v("按照乘法的原则，应该对这些部分积做如下操作来得到结果")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("       "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("11011")]),t._v("\n +    00000\n +   "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("11011")]),t._v("\n +  00000\n + "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("11011")]),t._v("\n")])]),t._v(" "),r("p",[t._v("所以设计如下阵列乘法器")]),t._v(" "),r("p",[r("img",{attrs:{src:_(533),alt:"2-5"}})]),t._v(" "),r("h3",{attrs:{id:"有符号阵列乘法"}},[t._v("有符号阵列乘法")]),t._v(" "),r("p",[t._v("使用原码的机器可以直接使用无符号数乘法器进行运算，把符号单独处理即可")]),t._v(" "),r("p",[t._v("使用补码的机器使用间接补码乘法运算（直接补码乘法不要求掌握）")]),t._v(" "),r("p",[r("strong",[t._v("间接补码乘法")]),t._v("：")]),t._v(" "),r("ul",[r("li",[t._v("正数：尾数使用无符号数乘法器即可")]),t._v(" "),r("li",[t._v("负数：由补码求出其绝对值后再使用无符号数乘法器运算")]),t._v(" "),r("li",[t._v("符号位仍单独计算")]),t._v(" "),r("li",[t._v("如果乘积是负数，把乘积的绝对值经过求补电路得到补码（因为机器使用的是补码，所以结果需要求补而不能直接使用原码）")])]),t._v(" "),r("p",[t._v("求补电路：人工计算补码时是先求反码再+1。求补电路的策略是"),r("strong",[t._v("从数的最右端开始从右向左找到第一个1，这个1保持不变，这个1以左的所有位求反")])]),t._v(" "),r("p",[t._v("间接补码阵列乘法器：")]),t._v(" "),r("p",[r("img",{attrs:{src:_(534),alt:"2-6"}})]),t._v(" "),r("h3",{attrs:{id:"定点除法"}},[t._v("定点除法")]),t._v(" "),r("p",[r("strong",[t._v("加减交替法（不恢复余数法）")])]),t._v(" "),r("p",[t._v("利用了2进制数的特性")]),t._v(" "),r("ul",[r("li",[t._v("已知被除数Ci和除数B")]),t._v(" "),r("li",[t._v("计算Ci-B得到结果C(i+1)")]),t._v(" "),r("li",[t._v("如果C(i+1)为负（即第一位为1）则此位结果为0，下一次操作改为加法。C(i+1)左移一位")]),t._v(" "),r("li",[t._v("如果C(i+1)为正（即第一位为0）则此位结果为1，下一次操作仍为减法。C(i+1)左移一位")])]),t._v(" "),r("h2",{attrs:{id:"定点运算器的组成"}},[t._v("定点运算器的组成")]),t._v(" "),r("h3",{attrs:{id:"运算器的基本结构"}},[t._v("运算器的基本结构")]),t._v(" "),r("ul",[r("li",[t._v("算术逻辑运算单元ALU")]),t._v(" "),r("li",[t._v("阵列乘除法器")]),t._v(" "),r("li",[t._v("寄存器组")]),t._v(" "),r("li",[t._v("多路开关")]),t._v(" "),r("li",[t._v("三态缓冲器")]),t._v(" "),r("li",[t._v("数据总线")])]),t._v(" "),r("h3",{attrs:{id:"alu内部结构"}},[t._v("ALU内部结构")]),t._v(" "),r("p",[t._v("使用"),r("strong",[t._v("函数发生器")]),t._v("和"),r("strong",[t._v("全加器")]),t._v("实现")]),t._v(" "),r("p",[r("img",{attrs:{src:_(535),alt:"2-7"}})]),t._v(" "),r("p",[t._v("函数发生器根据功能选择信号把输入数据进行处理，变成能够通过全加器计算逻辑或算数运算的数据")]),t._v(" "),r("h2",{attrs:{id:"bcd码加法"}},[t._v("BCD码加法")]),t._v(" "),r("p",[t._v("矫正：BCD码进行十进制运算时，如果结果大于9，必须使结果+6得到修正值")]),t._v(" "),r("h2",{attrs:{id:"总线结构"}},[t._v("总线结构")]),t._v(" "),r("ul",[r("li",[t._v("单总线结构")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(536),alt:"2-8"}})]),t._v(" "),r("p",[t._v("所有部件在同一个总线上，简单，但是速度慢")]),t._v(" "),r("ul",[r("li",[t._v("双总线结构")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(537),alt:"2-9"}})]),t._v(" "),r("p",[t._v("两个操作数可以同时放入特殊寄存器，控制电路稍复杂，速度快")]),t._v(" "),r("ul",[r("li",[t._v("三总线结构")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(538),alt:"2-10"}})]),t._v(" "),r("p",[t._v("两条总线输入一条总线输出，算术逻辑运算可以在一步控制下完成。控制电路复杂，速度快")]),t._v(" "),r("h2",{attrs:{id:"浮点数加减法"}},[t._v("浮点数加减法")]),t._v(" "),r("h3",{attrs:{id:"算法"}},[t._v("算法")]),t._v(" "),r("ol",[r("li",[t._v("检查操作数是否为0（因为浮点运算复杂，先判断0可以有效减少运算量）")]),t._v(" "),r("li",[r("strong",[t._v("对阶")]),t._v("，以阶码大的数为基准，使阶码小的数"),r("strong",[t._v("右移")]),t._v("（此时移位不舍弃多余的位，在对结果舍入的时候再舍弃）")]),t._v(" "),r("li",[t._v("对尾数进行加减法求结果")]),t._v(" "),r("li",[t._v("规格化，舍入（可能再次规格化），进行溢出检查（阶码是否溢出）")])]),t._v(" "),r("h3",{attrs:{id:"对阶规则"}},[t._v("对阶规则")]),t._v(" "),r("p",[t._v("为什么对阶时以阶码大的数为基准，阶码小的数右移？因为结果是以阶码大的数的精度决定的，阶码小的数需要牺牲精度")]),t._v(" "),r("h3",{attrs:{id:"结果规格化"}},[t._v("结果规格化")]),t._v(" "),r("p",[t._v("左规：向左规格化")]),t._v(" "),r("ul",[r("li",[t._v("尾数为原码时，结果应为x.1xxxx")]),t._v(" "),r("li",[t._v("尾数为补码时，尾数的最高位应与符号位相反，否则左移，右侧补0，阶码-1")]),t._v(" "),r("li",[t._v("对IEEE754浮点格式，注意省略尾数的第一个1")])]),t._v(" "),r("p",[t._v("右规：向右规格化")]),t._v(" "),r("ul",[r("li",[t._v("尾数求和的结果为01.xxx或10.xxx时应将运算结果右移以实现规格化")]),t._v(" "),r("li",[t._v("尾数每右移1位阶码+1")])]),t._v(" "),r("h3",{attrs:{id:"舍入处理"}},[t._v("舍入处理")]),t._v(" "),r("p",[t._v("有四种舍入方式")]),t._v(" "),r("ul",[r("li",[t._v("就近舍入")]),t._v(" "),r("li",[t._v("朝0舍入")]),t._v(" "),r("li",[t._v("朝正无穷舍入")]),t._v(" "),r("li",[t._v("朝负无穷舍入")])]),t._v(" "),r("p",[t._v("做题时0舍1入即可")]),t._v(" "),r("h3",{attrs:{id:"溢出判断"}},[t._v("溢出判断")]),t._v(" "),r("ul",[r("li",[t._v("阶码上溢，视为正负无穷")]),t._v(" "),r("li",[t._v("阶码下溢，视为0")]),t._v(" "),r("li",[t._v("尾数上溢，尾数右移，阶码+1")]),t._v(" "),r("li",[t._v("尾数下溢，舍入处理")])]),t._v(" "),r("h2",{attrs:{id:"浮点数乘除法"}},[t._v("浮点数乘除法")]),t._v(" "),r("h2",{attrs:{id:"算法-2"}},[t._v("算法")]),t._v(" "),r("ol",[r("li",[t._v("检查操作数是否为0")]),t._v(" "),r("li",[t._v("阶码加减")]),t._v(" "),r("li",[t._v("尾数乘除")]),t._v(" "),r("li",[t._v("规格化与舍入")]),t._v(" "),r("li",[t._v("溢出检测")])])])}]};t.exports={attributes:{layout:"collection",title:"运算方法与运算器",collection:"ComputerOrganizationPrinciple"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},528:function(t,v,_){t.exports=_.p+"img/3e757c7.png"},529:function(t,v,_){t.exports=_.p+"img/dea6227.png"},530:function(t,v,_){t.exports=_.p+"img/0b216b8.png"},531:function(t,v,_){t.exports=_.p+"img/9df71b5.png"},532:function(t,v,_){t.exports=_.p+"img/83bc26b.png"},533:function(t,v,_){t.exports=_.p+"img/ccc6377.png"},534:function(t,v,_){t.exports=_.p+"img/6179223.png"},535:function(t,v,_){t.exports=_.p+"img/2f9ba07.png"},536:function(t,v,_){t.exports=_.p+"img/e8e4914.png"},537:function(t,v,_){t.exports=_.p+"img/52cf265.png"},538:function(t,v,_){t.exports=_.p+"img/a3e7120.png"}}]);