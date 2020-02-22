(window.webpackJsonp=window.webpackJsonp||[]).push([[11,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729],{1156:function(t,_,v){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,_=t.$createElement,n=t._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"傅里叶展开"}},[t._v("傅里叶展开")]),t._v(" "),n("p",[t._v("使用傅里叶级数展开得到基波")]),t._v(" "),n("p",[n("img",{attrs:{src:v(907),alt:"2-1"}})]),t._v(" "),n("h2",{attrs:{id:"单边谱与双边谱"}},[t._v("单边谱与双边谱")]),t._v(" "),n("p",[t._v("例题：")]),t._v(" "),n("p",[t._v("首先把函数转换成"),n("code",{pre:!0},[t._v("+cos")]),t._v("形式")]),t._v(" "),n("p",[n("img",{attrs:{src:v(908),alt:"2-21"}})]),t._v(" "),n("p",[t._v("单边和双边的变化：cos(5t - 1/3) = 1/2cos(5t - 1/3) + 1/2cos(-5t + 1/3)")]),t._v(" "),n("p",[t._v("所以双边谱是单边的一半")]),t._v(" "),n("p",[n("img",{attrs:{src:v(909),alt:"2-22"}})]),t._v(" "),n("p",[t._v("相位变化：")]),t._v(" "),n("p",[n("img",{attrs:{src:v(910),alt:"2-23"}})]),t._v(" "),n("h2",{attrs:{id:"傅里叶变换"}},[t._v("傅里叶变换")]),t._v(" "),n("p",[t._v("记做"),n("code",{pre:!0},[t._v("f(t) <-> F(w)")])]),t._v(" "),n("p",[n("img",{attrs:{src:v(911),alt:"2-24"}})]),t._v(" "),n("p",[t._v("其中w = 2πf")]),t._v(" "),n("h2",{attrs:{id:"傅里叶变换的性质"}},[t._v("傅里叶变换的性质")]),t._v(" "),n("p",[n("img",{attrs:{src:v(912),alt:"2-2"}})]),t._v(" "),n("p",[n("img",{attrs:{src:v(913),alt:"2-3"}})]),t._v(" "),n("h2",{attrs:{id:"常用信号的傅里叶变换"}},[t._v("常用信号的傅里叶变换")]),t._v(" "),n("p",[n("img",{attrs:{src:v(914),alt:"2-4"}})]),t._v(" "),n("p",[n("img",{attrs:{src:v(915),alt:"2-5"}})]),t._v(" "),n("h2",{attrs:{id:"能量信号和功率信号"}},[t._v("能量信号和功率信号")]),t._v(" "),n("p",[t._v("电压或电流f(t)加在单位电阻上消耗的功率为"),n("code",{pre:!0},[t._v("f(t)^2")])]),t._v(" "),n("p",[t._v("在无穷时间内的总能量为")]),t._v(" "),n("p",[n("img",{attrs:{src:v(916),alt:"2-6"}})]),t._v(" "),n("p",[t._v("平均功率为能量的时间平均")]),t._v(" "),n("p",[n("img",{attrs:{src:v(917),alt:"2-7"}})]),t._v(" "),n("p",[t._v("定义"),n("strong",[t._v("能量信号")]),t._v("和"),n("strong",[t._v("功率信号")]),t._v("：")]),t._v(" "),n("ul",[n("li",[t._v("能量信号\n"),n("ul",[n("li",[t._v("振幅和持续时间有限")]),t._v(" "),n("li",[t._v("非周期")]),t._v(" "),n("li",[t._v("能量有限")]),t._v(" "),n("li",[t._v("因为能量有限，所以在无限时间上的平均功率为0")])])]),t._v(" "),n("li",[t._v("功率信号\n"),n("ul",[n("li",[t._v("持续时间无限\n"),n("ul",[n("li",[t._v("能量无限")]),t._v(" "),n("li",[t._v("平均功率有限")])])])])])]),t._v(" "),n("h3",{attrs:{id:"能量信号性质"}},[t._v("能量信号性质")]),t._v(" "),n("p",[t._v("符号声明：")]),t._v(" "),n("ul",[n("li",[t._v("信号函数f(t)")]),t._v(" "),n("li",[t._v("频谱密度F(w)")]),t._v(" "),n("li",[t._v("能量函数f(t)^2")]),t._v(" "),n("li",[t._v("能量谱密度G(w)")]),t._v(" "),n("li",[t._v("能量E")])]),t._v(" "),n("p",[t._v("能量谱密度定义： G(w) = |F(w)"),n("sup",[t._v("2")]),t._v("|")]),t._v(" "),n("p",[n("img",{attrs:{src:v(918),alt:"2-8"}})]),t._v(" "),n("p",[t._v("上式的意义 - 时域内无限时间累计的总能量=频域内各个频率分量能量之和")]),t._v(" "),n("h3",{attrs:{id:"功率信号性质-无限非周期"}},[t._v("功率信号性质 - 无限非周期")]),t._v(" "),n("p",[n("strong",[t._v("非周期信号有连续谱")]),t._v("，因为要用无限个周期信号才能拟合出非周期信号")]),t._v(" "),n("p",[t._v("功率信号在无限时间上能量无限，在有限时间[-T/2, T/2]上能量有限")]),t._v(" "),n("p",[n("img",{attrs:{src:v(919),alt:"2-9"}})]),t._v(" "),n("p",[t._v("使用极限来定义平均功率：")]),t._v(" "),n("p",[n("img",{attrs:{src:v(920),alt:"2-10"}})]),t._v(" "),n("p",[t._v("上式中已经是对频谱w的积分形式，所以得到下列等式：")]),t._v(" "),n("p",[t._v("功率谱密度")]),t._v(" "),n("p",[n("img",{attrs:{src:v(921),alt:"2-11"}})]),t._v(" "),n("p",[t._v("平均功率")]),t._v(" "),n("p",[n("img",{attrs:{src:v(922),alt:"2-12"}})]),t._v(" "),n("h3",{attrs:{id:"功率信号性质-无限周期信号"}},[t._v("功率信号性质 - 无限周期信号")]),t._v(" "),n("p",[n("strong",[t._v("周期信号的频谱是离散的")])]),t._v(" "),n("p",[n("strong",[t._v("使用δ(t)函数构造离散谱")])]),t._v(" "),n("p",[t._v("功率谱密度：")]),t._v(" "),n("p",[n("img",{attrs:{src:v(923),alt:"2-13"}})]),t._v(" "),n("p",[t._v("平均功率：")]),t._v(" "),n("p",[n("img",{attrs:{src:v(924),alt:"2-14"}})]),t._v(" "),n("h2",{attrs:{id:"信号的带宽"}},[t._v("信号的带宽")]),t._v(" "),n("p",[t._v("信号的能量或功率（的主要部分）集中在一定的频率范围内时，此频率范围为信号的带宽")]),t._v(" "),n("h3",{attrs:{id:"信号速率与带宽"}},[t._v("信号速率与带宽")]),t._v(" "),n("ul",[n("li",[t._v("速率 - 时域中单位时间内传送的码元个数")]),t._v(" "),n("li",[t._v("带宽 - 频域内信号传输需要的频带宽度")])]),t._v(" "),n("p",[t._v("码元"),n("strong",[t._v("波形相同")]),t._v("情况下，"),n("strong",[t._v("速率越高")]),t._v("，码元宽度越小，占用"),n("strong",[t._v("带宽越宽")])]),t._v(" "),n("p",[n("strong",[t._v("主瓣带宽")]),t._v(" - 频率轴上第一个0点的带宽。比如下面的方波")]),t._v(" "),n("p",[n("img",{attrs:{src:v(925),alt:"2-26"}})]),t._v(" "),n("p",[n("img",{attrs:{src:v(926),alt:"2-25"}})]),t._v(" "),n("p",[t._v("主瓣带宽就是2π/τ")]),t._v(" "),n("h3",{attrs:{id:"等效矩形带宽"}},[t._v("等效矩形带宽")]),t._v(" "),n("p",[t._v("能量谱或功率谱在0频点有最大值")]),t._v(" "),n("p",[n("img",{attrs:{src:v(927),alt:"2-15"}})]),t._v(" "),n("p",[n("img",{attrs:{src:v(928),alt:"2-16"}})]),t._v(" "),n("p",[t._v("把所有频谱的能量或功率集中到一个矩形中")]),t._v(" "),n("h2",{attrs:{id:"信号自相关函数"}},[t._v("信号自相关函数")]),t._v(" "),n("p",[t._v("能量信号f(t)的自相关函数用能量表示（因为能量有限且不为0")]),t._v(" "),n("p",[n("img",{attrs:{src:v(929),alt:"2-17"}})]),t._v(" "),n("p",[t._v("功率信号f(t)的自相关函数用功率表示（因为功率有限且不为0")]),t._v(" "),n("p",[n("img",{attrs:{src:v(930),alt:"2-18"}})]),t._v(" "),n("h3",{attrs:{id:"性质"}},[t._v("性质")]),t._v(" "),n("p",[t._v("意义：自相关函数反应了一个信号"),n("strong",[t._v("延迟")]),t._v("τ后与之前信号的相关程度")]),t._v(" "),n("ul",[n("li",[t._v("R(τ)是偶函数 -> R(τ) = R(-τ)")]),t._v(" "),n("li",[t._v("R(0) >= |R(τ)|，即无时移时信号自身的相关性最强")]),t._v(" "),n("li",[t._v("能量信号R(0)=E，功率信号R(0)=P")]),t._v(" "),n("li",[t._v("自相关函数与谱密度函数互为傅里叶变换关系\n"),n("ul",[n("li",[t._v("能量信号R(τ) <-> G(w)")]),t._v(" "),n("li",[t._v("功率信号P(τ) <-> P(w)")])])])]),t._v(" "),n("h2",{attrs:{id:"信号通过线性系统"}},[t._v("信号通过线性系统")]),t._v(" "),n("p",[n("img",{attrs:{src:v(931),alt:"2-19"}})]),t._v(" "),n("p",[t._v("系统的性质：")]),t._v(" "),n("ul",[n("li",[t._v("输入信号f(t)和系统内激励信号h(t)进行"),n("strong",[t._v("时域卷积/频域相乘")]),t._v("操作得到输出r(t)")]),t._v(" "),n("li",[t._v("如果激励信号为δ(t)，则称h(t)为系统的传递函数")]),t._v(" "),n("li",[t._v("线性系统满足线性叠加定理")])]),t._v(" "),n("p",[t._v("理想滤波器")]),t._v(" "),n("ul",[n("li",[t._v("理想低通滤波器LPF")]),t._v(" "),n("li",[t._v("理想高通滤波器HPF")]),t._v(" "),n("li",[t._v("理想带通滤波器BPF")])])])}]};t.exports={attributes:{layout:"collection",title:"确知信号分析",collection:"PrinciplesOfCommunications"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},907:function(t,_,v){t.exports=v.p+"img/11986cb.jpg"},908:function(t,_,v){t.exports=v.p+"img/ac269aa.png"},909:function(t,_,v){t.exports=v.p+"img/d776451.png"},910:function(t,_,v){t.exports=v.p+"img/6949a71.png"},911:function(t,_,v){t.exports=v.p+"img/4c8e6c2.png"},912:function(t,_,v){t.exports=v.p+"img/f767570.png"},913:function(t,_,v){t.exports=v.p+"img/75f0ad1.png"},914:function(t,_,v){t.exports=v.p+"img/b3c7af4.png"},915:function(t,_,v){t.exports=v.p+"img/9865d56.png"},916:function(t,_,v){t.exports=v.p+"img/3abcd44.png"},917:function(t,_,v){t.exports=v.p+"img/8e31bf5.png"},918:function(t,_,v){t.exports=v.p+"img/9b5bf2d.png"},919:function(t,_,v){t.exports=v.p+"img/859444c.png"},920:function(t,_,v){t.exports=v.p+"img/8f4c8c9.png"},921:function(t,_,v){t.exports=v.p+"img/6328562.png"},922:function(t,_,v){t.exports=v.p+"img/bd09029.png"},923:function(t,_,v){t.exports=v.p+"img/4fbc171.png"},924:function(t,_,v){t.exports=v.p+"img/6c43ec4.png"},925:function(t,_,v){t.exports=v.p+"img/2e56879.png"},926:function(t,_,v){t.exports=v.p+"img/92032d0.jpg"},927:function(t,_,v){t.exports=v.p+"img/6ae8c8e.png"},928:function(t,_,v){t.exports=v.p+"img/e55a751.png"},929:function(t,_,v){t.exports=v.p+"img/680732f.png"},930:function(t,_,v){t.exports=v.p+"img/e179e7b.png"},931:function(t,_,v){t.exports=v.p+"img/82ccfa7.png"}}]);