(window.webpackJsonp=window.webpackJsonp||[]).push([[59,700,701,702,703,704],{1155:function(_,v,l){const t={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"frontmatter-markdown"},[t("h2",{attrs:{id:"基础知识"}},[_._v("基础知识")]),_._v(" "),t("ul",[t("li",[_._v("通信：传递"),t("strong",[_._v("消息")]),_._v("(message)中的"),t("strong",[_._v("信息")]),_._v("(information)")]),_._v(" "),t("li",[_._v("通信系统：完成通信过程的全部设备和传输介质")]),_._v(" "),t("li",[_._v("数字信号\n"),t("ul",[t("li",[_._v("状态数有限的信号")])])]),_._v(" "),t("li",[_._v("模拟信号\n"),t("ul",[t("li",[_._v("状态数无限的信号")])])]),_._v(" "),t("li",[_._v("基带信号 - 低频成分较多，未调制的初始信号")]),_._v(" "),t("li",[_._v("已调信号 - 适合信道传输，又称 "),t("strong",[_._v("频带信号/带通信号")]),_._v("，携带消息多，适合在信道传输")])]),_._v(" "),t("h2",{attrs:{id:"通信系统一般模型"}},[_._v("通信系统一般模型")]),_._v(" "),t("p",[t("img",{attrs:{src:l(902),alt:"1-1"}})]),_._v(" "),t("ul",[t("li",[_._v("信源/信宿\n"),t("ul",[t("li",[_._v("信源完成非电量->电量的转换。信宿反之\n"),t("ul",[t("li",[_._v("模拟信源，输出连续模拟信号\n"),t("ul",[t("li",[_._v("话筒")]),_._v(" "),t("li",[_._v("摄像机")])])]),_._v(" "),t("li",[_._v("数字信源，输出离散数字信号\n"),t("ul",[t("li",[_._v("键盘")])])])])])])]),_._v(" "),t("li",[_._v("发送/接收设备\n"),t("ul",[t("li",[_._v("发送设备使原始的电信号变成适合在信道中传输的电信号。接收设备反之\n"),t("ul",[t("li",[_._v("很笼统的概念，信源和信道之间的所有设备都归为此类，功能繁多\n"),t("ul",[t("li",[_._v("调制解调")]),_._v(" "),t("li",[_._v("加密解密")]),_._v(" "),t("li",[_._v("编码")]),_._v(" "),t("li",[_._v("复用")]),_._v(" "),t("li",[_._v("…")])])])])])])]),_._v(" "),t("li",[_._v("信道\n"),t("ul",[t("li",[_._v("传输介质")]),_._v(" "),t("li",[_._v("会对信号造成损耗和干扰\n"),t("ul",[t("li",[_._v("无线信道\n"),t("ul",[t("li",[t("strong",[_._v("自由空间")])])])]),_._v(" "),t("li",[_._v("有线信道\n"),t("ul",[t("li",[_._v("光纤")]),_._v(" "),t("li",[_._v("电缆")]),_._v(" "),t("li",[_._v("…")])])])])])])])]),_._v(" "),t("h2",{attrs:{id:"模拟通信系统模型"}},[_._v("模拟通信系统模型")]),_._v(" "),t("p",[t("img",{attrs:{src:l(903),alt:"1-2"}})]),_._v(" "),t("p",[_._v("包含两种重要变换：")]),_._v(" "),t("ul",[t("li",[_._v("消息<->基带信号（信源与信宿的工作")]),_._v(" "),t("li",[_._v("基带信号<->已调信号（调制解调的工作")])]),_._v(" "),t("h2",{attrs:{id:"数字通信系统模型"}},[_._v("数字通信系统模型")]),_._v(" "),t("p",[t("img",{attrs:{src:l(904),alt:"1-3"}})]),_._v(" "),t("p",[_._v("相较于一般模型，添加了如下设备")]),_._v(" "),t("ul",[t("li",[_._v("信源编/解码器 - 模数转换 数据压缩 提高传输效率")]),_._v(" "),t("li",[_._v("加/解密器 - 保密传输 提高安全性")]),_._v(" "),t("li",[_._v("信道编/解码器 - 差错控制 提高抗干扰能力")]),_._v(" "),t("li",[_._v("调制解调器 - 使信号适合传输 复用")]),_._v(" "),t("li",[_._v("同步系统 - 保证收发双方步调一致\n"),t("ul",[t("li",[_._v("不同的同步器在模型中的位置不同，所以此处没有标出")]),_._v(" "),t("li",[_._v("分类\n"),t("ul",[t("li",[_._v("载波同步")]),_._v(" "),t("li",[_._v("码元同步")]),_._v(" "),t("li",[_._v("…")])])])])])]),_._v(" "),t("p",[_._v("上述模型是一般化模型，"),t("strong",[_._v("实际使用时可能不包含以上所有设备")])]),_._v(" "),t("blockquote",[t("p",[_._v("数字通信系统也可以使用基带通信，即不使用过多的调制，其模型和一般模型相似")])]),_._v(" "),t("p",[t("strong",[_._v("信源和信宿可以是数字的也可以是模拟的")])]),_._v(" "),t("h2",{attrs:{id:"数字通信特点"}},[_._v("数字通信特点")]),_._v(" "),t("ul",[t("li",[_._v("抗干扰性强\n"),t("ul",[t("li",[_._v("使用再生中继，噪声不积累")])])]),_._v(" "),t("li",[_._v("传输差错可控\n"),t("ul",[t("li",[_._v("能够使用差错控制策略改善传输质量")])])]),_._v(" "),t("li",[_._v("便于是用那个数学进行信号处理、变换、存储、复用")]),_._v(" "),t("li",[_._v("支持各种消息的传递")]),_._v(" "),t("li",[_._v("保密性强")]),_._v(" "),t("li",[_._v("易于集成化、小型化")]),_._v(" "),t("li",[t("strong",[_._v("缺点")]),_._v("：频带利用率低，对同步要求高，设备复杂")])]),_._v(" "),t("h2",{attrs:{id:"通信系统分类"}},[_._v("通信系统分类")]),_._v(" "),t("ul",[t("li",[_._v("单工、半双工与全双工\n"),t("ul",[t("li",[_._v("单工 - 仅单向传输")]),_._v(" "),t("li",[_._v("半双工 - 可双向传输，但不能同时收发消息")]),_._v(" "),t("li",[_._v("全双工 - 完全双向传输")])])]),_._v(" "),t("li",[_._v("并行传输与串行传输")]),_._v(" "),t("li",[_._v("数字与模拟")]),_._v(" "),t("li",[_._v("有线与无线")]),_._v(" "),t("li",[_._v("…")])]),_._v(" "),t("h2",{attrs:{id:"信息及其度量"}},[_._v("信息及其度量")]),_._v(" "),t("h3",{attrs:{id:"信息量函数"}},[_._v("信息量函数")]),_._v(" "),t("p",[_._v("信息量函数"),t("code",{pre:!0},[_._v("I = F(P(x))")])]),_._v(" "),t("ul",[t("li",[_._v("I为信息量")]),_._v(" "),t("li",[_._v("P(x)为事件x发生的概率")])]),_._v(" "),t("p",[_._v("可以看出 "),t("strong",[_._v("信息量只与事件发生概率相关")]),_._v("，与其他无关")]),_._v(" "),t("h3",{attrs:{id:"离散消息的信息量"}},[_._v("离散消息的信息量")]),_._v(" "),t("p",[t("code",{pre:!0},[_._v("I = -loga(P(x))")])]),_._v(" "),t("ul",[t("li",[_._v("a = 2时，信息量单位为比特bit")]),_._v(" "),t("li",[_._v("a = e时，信息量单位为奈特nit")]),_._v(" "),t("li",[_._v("a = 10时，信息量单位为哈特来")])]),_._v(" "),t("p",[_._v("注意："),t("strong",[_._v("信息量(bit)和数据量(bit)不同")])]),_._v(" "),t("h3",{attrs:{id:"离散信源的平均信息量"}},[_._v("离散信源的平均信息量")]),_._v(" "),t("p",[_._v("也称为"),t("strong",[_._v("熵")]),_._v("，符号为H。值为离散消息出现的概率乘离散消息的信息量，即")]),_._v(" "),t("p",[t("img",{attrs:{src:l(905),alt:"1-4"}})]),_._v(" "),t("p",[_._v("熵的物理意义为信源不确定性。"),t("strong",[_._v("所有符号等概率出现时不确定性最大")]),_._v("，假设所有符号出现概率为"),t("code",{pre:!0},[_._v("1/M")]),_._v("，则熵为")]),_._v(" "),t("pre",[t("code",{pre:!0},[_._v("Hmax = log2M(b/符号)\n")])]),_._v(" "),t("h3",{attrs:{id:"总信息量"}},[_._v("总信息量")]),_._v(" "),t("p",[_._v("设信源的熵为"),t("code",{pre:!0},[_._v("H(x)")]),_._v("，信源发送一条含n个符号的消息，平均总信息量为"),t("code",{pre:!0},[_._v("I = nH(x)")])]),_._v(" "),t("h2",{attrs:{id:"通信系统性能指标"}},[_._v("通信系统性能指标")]),_._v(" "),t("p",[_._v("主要指标为：")]),_._v(" "),t("ul",[t("li",[_._v("有效性\n"),t("ul",[t("li",[_._v("占用的信道资源")])])]),_._v(" "),t("li",[_._v("可靠性\n"),t("ul",[t("li",[_._v("信息的准确程度")])])])]),_._v(" "),t("h3",{attrs:{id:"模拟通信系统指标"}},[_._v("模拟通信系统指标")]),_._v(" "),t("ul",[t("li",[_._v("有效性指标 - 占用带宽\n"),t("ul",[t("li",[_._v("越小越好")]),_._v(" "),t("li",[_._v("多路复用时，复用越多，有效性越好")])])]),_._v(" "),t("li",[_._v("可靠性指标 - "),t("strong",[_._v("输出信噪比")]),t("code",{pre:!0},[_._v("So/No")])])]),_._v(" "),t("h3",{attrs:{id:"数字通信系统指标"}},[_._v("数字通信系统指标")]),_._v(" "),t("ul",[t("li",[_._v("有效性指标 - "),t("strong",[_._v("频带利用率")]),_._v("，即单位带宽（每赫兹）内的传输速率\n"),t("ul",[t("li",[t("img",{attrs:{src:l(906),alt:"1-5"}})]),_._v(" "),t("li",[_._v("RB为码元速率，即传输符号的速率（波特率），"),t("code",{pre:!0},[_._v("RB = 1 / TB")]),_._v("，"),t("strong",[_._v("只和时间（码元宽度）TB有关，与进制数无关")])]),_._v(" "),t("li",[_._v("Rb为信息速率，即传输bit的速率（比特率），"),t("strong",[_._v("和码元宽度、进制数有关")])]),_._v(" "),t("li",[_._v("假设每个码元的平均信息量为H，则"),t("code",{pre:!0},[_._v("Rb = RB * H")])])])]),_._v(" "),t("li",[_._v("可靠性指标 - 差错概率，包括"),t("strong",[_._v("误码率")]),_._v("、"),t("strong",[_._v("误信率")]),_._v("等\n"),t("ul",[t("li",[_._v("误码率 - 接收错误的码元在所有传输码元中的比例Pe")]),_._v(" "),t("li",[_._v("误信率（误比特率）Pb")])])])])])}]};_.exports={attributes:{layout:"collection",title:"绪论",collection:"PrinciplesOfCommunications"},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}},902:function(_,v,l){_.exports=l.p+"img/1e7cc9d.png"},903:function(_,v,l){_.exports=l.p+"img/4b02d23.png"},904:function(_,v,l){_.exports=l.p+"img/83fe53d.png"},905:function(_,v,l){_.exports=l.p+"img/aaf08ca.png"},906:function(_,v,l){_.exports=l.p+"img/10c3820.png"}}]);