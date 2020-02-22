(window.webpackJsonp=window.webpackJsonp||[]).push([[83,791,792],{1162:function(t,e,v){const _={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"模数变换ad"}},[t._v("模数变换(A/D)")]),t._v(" "),_("p",[t._v("三个步骤：")]),t._v(" "),_("ul",[_("li",[t._v("抽样 - 把取值连续、时间连续的模拟信号变为取值离散、时间离散的抽样(PAM)信号")]),t._v(" "),_("li",[t._v("量化 - 把PAM信号变换为取值离散、时间离散的量化信号（多电平数字信号")]),t._v(" "),_("li",[t._v("编码 - 把量化信号变换为二进制数字信号")])]),t._v(" "),_("h2",{attrs:{id:"抽样定理"}},[t._v("抽样定理")]),t._v(" "),_("p",[t._v("抽样定理为模拟信号数字化和时分多路复用TDM奠定了理论基础")]),t._v(" "),_("h3",{attrs:{id:"低通抽样定理"}},[t._v("低通抽样定理")]),t._v(" "),_("p",[t._v("最高频率小于fH的模拟信号m(t)可由其等间隔（均匀）的抽样值唯一确定，抽样间隔Ts或抽样速率fs应满足：Ts <= 1/(2fH) 或 fs >= 2fH")]),t._v(" "),_("p",[t._v("通常把最低抽样速率fs=2fH称为奈奎斯特速率，最大抽样间隔Ts=1/(2fH)称为奈奎斯特间隔")]),t._v(" "),_("h3",{attrs:{id:"带通抽样定理"}},[t._v("带通抽样定理")]),t._v(" "),_("p",[t._v("设带通模拟信号m(t)的频率范围在fL和fH内且fL>B，则最小抽样频率为fs=2B(1+k/n)，其中")]),t._v(" "),_("ul",[_("li",[t._v("B为信号带宽")]),t._v(" "),_("li",[t._v("n为fH/B的整数部分")]),t._v(" "),_("li",[t._v("k为fH/B的小数部分，k小于1")])]),t._v(" "),_("p",[t._v("对于高频窄带信号，fL >> B，则fs = 2B")]),t._v(" "),_("h2",{attrs:{id:"量化"}},[t._v("量化")]),t._v(" "),_("ul",[_("li",[t._v("均匀量化\n"),_("ul",[_("li",[t._v("等间隔量化")]),t._v(" "),_("li",[t._v("如果模拟信号取值范围为[a, b]，量化电平数为M，则量化间隔delta v = (b - a)/M")])])]),t._v(" "),_("li",[t._v("非均匀量化\n"),_("ul",[_("li",[t._v("提高小信号的信号量噪比")])])])]),t._v(" "),_("h2",{attrs:{id:"编码"}},[t._v("编码")]),t._v(" "),_("p",[t._v("常用二进制码：")]),t._v(" "),_("ul",[_("li",[t._v("自然二进制码\n"),_("ul",[_("li",[t._v("从小到大")])])]),t._v(" "),_("li",[t._v("折叠二进制码\n"),_("ul",[_("li",[t._v("对称")])])]),t._v(" "),_("li",[t._v("格雷二进制码")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(993),alt:"8-1"}})]),t._v(" "),_("p",[t._v("第一位表示符号，1为正")]),t._v(" "),_("p",[t._v("量化级M越多，抗噪性能越强")]),t._v(" "),_("h2",{attrs:{id:"时分复用tdm"}},[t._v("时分复用TDM")]),t._v(" "),_("p",[t._v("时间分片，每帧时间等于抽样周期，每一帧分成不同时隙，每个时隙分配给不同的信号")]),t._v(" "),_("p",[_("img",{attrs:{src:v(994),alt:"8-2"}})])])}]};t.exports={attributes:{layout:"collection",title:"信源编码",collection:"PrinciplesOfCommunications"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}},993:function(t,e,v){t.exports=v.p+"img/1d7e7a6.png"},994:function(t,e,v){t.exports=v.p+"img/bbce2b6.png"}}]);