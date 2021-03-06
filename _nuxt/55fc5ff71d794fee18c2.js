(window.webpackJsonp=window.webpackJsonp||[]).push([[45,888,889,890,891,892,893,894],{1026:function(_,v,t){_.exports=t.p+"img/3fa5f71.png"},1027:function(_,v,t){_.exports=t.p+"img/394a4b1.png"},1028:function(_,v,t){_.exports=t.p+"img/b40feb1.png"},1029:function(_,v,t){_.exports=t.p+"img/321f30f.png"},1030:function(_,v,t){_.exports=t.p+"img/cd4eb56.png"},1031:function(_,v,t){_.exports=t.p+"img/15e7ce0.png"},1032:function(_,v,t){_.exports=t.p+"img/7d77a52.png"},1281:function(_,v,t){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,n=_._self._c||v;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"信道类型略"}},[_._v("信道类型（略")]),_._v(" "),n("h2",{attrs:{id:"信道数学模型"}},[_._v("信道数学模型")]),_._v(" "),n("h3",{attrs:{id:"调制信道模型"}},[_._v("调制信道模型")]),_._v(" "),n("p",[_._v("模型 - "),n("strong",[_._v("时变线性网络")])]),_._v(" "),n("p",[n("img",{attrs:{src:t(1026),alt:"4-1"}})]),_._v(" "),n("ul",[n("li",[_._v("k(t)为信道的传输特性，可以视为乘性干扰\n"),n("ul",[n("li",[_._v("k(t)基本不随时间变化 - 恒参信道")]),_._v(" "),n("li",[_._v("k(t)随时间变化 - 随参信道")])])]),_._v(" "),n("li",[_._v("n(t)为信道噪声，视为加性干扰")])]),_._v(" "),n("p",[_._v("常用信道模型：k(t)为常数1")]),_._v(" "),n("p",[_._v("特点")]),_._v(" "),n("ul",[n("li",[_._v("满足叠加定理")]),_._v(" "),n("li",[_._v("有延迟")]),_._v(" "),n("li",[_._v("有损耗（乘性干扰")]),_._v(" "),n("li",[_._v("无输入时也有输出（加性噪声")])]),_._v(" "),n("p",[_._v("可能受到的影响 - 乘性干扰和加性噪声使信号波形失真")]),_._v(" "),n("h3",{attrs:{id:"编码信道模型"}},[_._v("编码信道模型")]),_._v(" "),n("p",[_._v("模型 - "),n("strong",[_._v("数字转移概率")])]),_._v(" "),n("p",[n("img",{attrs:{src:t(1027),alt:"4-2"}})]),_._v(" "),n("p",[_._v("可能受到的影响 - 数字序列发生错误")]),_._v(" "),n("p",[_._v("误码率："),n("code",{pre:!0},[_._v("Pe = P(0)P(1|0)+P(1)P(0|1)")])]),_._v(" "),n("h2",{attrs:{id:"信道特性分析"}},[_._v("信道特性分析")]),_._v(" "),n("h3",{attrs:{id:"恒参信道"}},[_._v("恒参信道")]),_._v(" "),n("p",[_._v("举例")]),_._v(" "),n("ul",[n("li",[_._v("有线电信道")]),_._v(" "),n("li",[_._v("光纤信道")]),_._v(" "),n("li",[_._v("卫星中继信道")])]),_._v(" "),n("p",[_._v("参数基本恒定，可以等效为一个线性非时变系统（非随机），使用线性系统的分析方法")]),_._v(" "),n("p",[_._v("传输特性（即上文中的乘性干扰k(t)）记为H(ω)，使用频率作为参数")]),_._v(" "),n("p",[n("strong",[_._v("无失真传输条件")]),_._v("：")]),_._v(" "),n("ul",[n("li",[_._v("幅频特性为一条水平直线，即H(ω) = K（常数）\n"),n("ul",[n("li",[_._v("含义 - 对信号中的不同频率成分有相同的效果")])])]),_._v(" "),n("li",[_._v("相频特性是一条通过原点、频率固定的直线，即φ(ω) = kω\n"),n("ul",[n("li",[_._v("含义 - 对不同的频率成分有相同的延迟")])])])]),_._v(" "),n("p",[_._v("满足上述两条，则无失真，这样的恒参信道称为"),n("strong",[_._v("理想恒参信道")])]),_._v(" "),n("p",[n("strong",[_._v("失真")]),_._v("：")]),_._v(" "),n("ul",[n("li",[_._v("幅频失真 - 不满足H(ω)是常数\n"),n("ul",[n("li",[_._v("不同频率受到不同的影响")]),_._v(" "),n("li",[_._v("模拟信道会"),n("strong",[_._v("波形失真")]),_._v("，信噪比下降")]),_._v(" "),n("li",[_._v("数字信号会"),n("strong",[_._v("码间串扰")]),_._v("，误码率上升")])])]),_._v(" "),n("li",[_._v("相频失真 - 不满足相频特性需求\n"),n("ul",[n("li",[_._v("不同频率分量造成不同的时延")]),_._v(" "),n("li",[_._v("模拟信道影响不大")]),_._v(" "),n("li",[_._v("数字信道"),n("strong",[_._v("码间串扰")])])])])]),_._v(" "),n("p",[_._v("上述失真均属于"),n("strong",[_._v("线性失真")]),_._v("，通常可"),n("strong",[_._v("使用线性网络补偿")]),_._v("，这样的补偿网络成为"),n("strong",[_._v("幅度/相位均衡器")])]),_._v(" "),n("h3",{attrs:{id:"随参信道"}},[_._v("随参信道")]),_._v(" "),n("p",[_._v("如自由空间")]),_._v(" "),n("p",[_._v("随参信道的特性是随时间变化的，且有以下三个特点：")]),_._v(" "),n("ul",[n("li",[_._v("传输衰耗随时间变化")]),_._v(" "),n("li",[_._v("传输时延随时间变化")]),_._v(" "),n("li",[n("strong",[_._v("多径传播")])])]),_._v(" "),n("p",[_._v("多径传播示意图：")]),_._v(" "),n("p",[n("img",{attrs:{src:t(1028),alt:"4-3"}})]),_._v(" "),n("p",[_._v("假设发射信号为正弦波Acosωt，则经过n条路径传输后接收信号是一个包络和相位随机变化的平稳高斯窄带随机过程"),n("code",{pre:!0},[_._v("R(t) = V(t)cos(ωt + φ(t))")])]),_._v(" "),n("p",[n("strong",[_._v("多径传播的影响")]),_._v("：")]),_._v(" "),n("ul",[n("li",[_._v("瑞利衰落 - 从波形上看，振幅恒定、频率单一的正弦波变成了包络随机起伏的波（下图1")]),_._v(" "),n("li",[_._v("概率弥散（概率扩展） - 从频谱上看，单根线谱变成了窄带频谱（下图2")]),_._v(" "),n("li",[n("strong",[_._v("频率选择性衰落")]),_._v(" - 信号间干扰导致某些频率成分发生严重的随机性衰落（下图3")])]),_._v(" "),n("p",[n("img",{attrs:{src:t(1029),alt:"4-4"}})]),_._v(" "),n("p",[n("img",{attrs:{src:t(1030),alt:"4-5"}})]),_._v(" "),n("p",[n("strong",[_._v("减少频率选择性衰落")]),_._v("的措施：设信道各路径之间的最大时延差为τm，定义信道的相关带宽（相邻传输零点的频率间隔）为"),n("code",{pre:!0},[_._v("delta f = 1/τm")]),_._v("，根据工程经验，信号带宽应介于1/3-1/5的delta f。数字信号占用的带宽取决于码速率RB = 1 / TB，所以数字信号的码元宽度TB = (3-5)τm")]),_._v(" "),n("h2",{attrs:{id:"信道噪声"}},[_._v("信道噪声")]),_._v(" "),n("p",[_._v("统计特性 - 高斯白噪声")]),_._v(" "),n("p",[_._v("使用矩形等效带宽，视为此带宽恒定")]),_._v(" "),n("h2",{attrs:{id:"信道容量"}},[_._v("信道容量")]),_._v(" "),n("p",[_._v("记为C，表示信道"),n("strong",[_._v("无差错")]),_._v("时"),n("strong",[_._v("最大平均信息速率")])]),_._v(" "),n("h3",{attrs:{id:"连续信道的信道容量"}},[_._v("连续信道的信道容量")]),_._v(" "),n("p",[_._v("香农公式：")]),_._v(" "),n("p",[n("img",{attrs:{src:t(1031),alt:"4-6"}})]),_._v(" "),n("p",[_._v("其中：")]),_._v(" "),n("ul",[n("li",[_._v("B为信道带宽(Hz)")]),_._v(" "),n("li",[_._v("S为信号功率(W)")]),_._v(" "),n("li",[_._v("N为噪声功率(W)")]),_._v(" "),n("li",[_._v("n0为加性高斯白噪声的单边功率谱密度(W/Hz)")])]),_._v(" "),n("p",[_._v("公式含义：")]),_._v(" "),n("ul",[n("li",[_._v("影响信道容量C的三要素\n"),n("ul",[n("li",[_._v("B")]),_._v(" "),n("li",[_._v("S")]),_._v(" "),n("li",[_._v("n0")])])]),_._v(" "),n("li",[_._v("提升信噪比可以增大信道容量")]),_._v(" "),n("li",[_._v("若n0趋近于0，则C趋近于无穷，即无扰信道理论容量无限大")]),_._v(" "),n("li",[_._v("若S趋近于0，则C趋近于无穷，说明信号功率不受限时容量无限大")]),_._v(" "),n("li",[_._v("C随着B的增大而增大，但是B趋近于无穷时C趋近于"),n("code",{pre:!0},[_._v("1.44S/n0")]),_._v("（收敛")]),_._v(" "),n("li",[_._v("C一定时带宽和信噪比可以互换")]),_._v(" "),n("li",[_._v("信源的实际信息速率远小于C是理论上可无差错（或小差错）传输")])]),_._v(" "),n("h3",{attrs:{id:"离散信道的信道容量"}},[_._v("离散信道的信道容量")]),_._v(" "),n("p",[n("img",{attrs:{src:t(1032),alt:"4-7"}})]),_._v(" "),n("ul",[n("li",[_._v("信源发送的平均信息量为H(x)（熵")]),_._v(" "),n("li",[_._v("因为信道噪声而损失的平均信息量H(x/y)\n"),n("ul",[n("li",[_._v("等于"),n("strong",[_._v("发送y的概率")]),_._v("乘"),n("strong",[_._v("接收y判定发送的是x（可以等于y）的概率")]),_._v("乘"),n("strong",[_._v("接收y判定发送是x的信息量")])])])]),_._v(" "),n("li",[_._v("接收端得到的平均信息量为H(x) - H(x/y)")]),_._v(" "),n("li",[_._v("假设每秒传输r个符号（即符号发送速率），则信道平均信息传输速率R = r(H(x) - H(x/y))")]),_._v(" "),n("li",[_._v("信道容量是无差错传输时信息传输速率的最大值，即对一切可能的信源概率分布，求R的最大值，即为C")])]),_._v(" "),n("p",[_._v("例题：某个信源可能发送ABCD四个符号，每个符号独立出现，概率分别为1/4、1/4、3/16、5/16，经过信道传输后，每个符号正确接收的概率为1021/1024，接受错为其他符号的概率均为1/1024，求信道容量为每个符号多少bit。")]),_._v(" "),n("p",[_._v("解：因为ABCD四个符号的接收错误情况一致，计算可发现无论ABCD在发送端发送的概率的多少，H(x/y)是定值：0.033 bit/符号。"),n("strong",[_._v("因为信道容量是一切可能的信源概率分布时R的最大值")]),_._v("，所以要求H(x)的最大值，即ABCD等概发送，最大值为2 bit/符号。所以信道容量R为2-0.033=1.967 bit/符号")])])}]};_.exports={attributes:{layout:"collection",title:"信道",collection:"PrinciplesOfCommunications"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);