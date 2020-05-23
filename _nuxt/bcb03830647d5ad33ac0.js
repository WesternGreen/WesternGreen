(window.webpackJsonp=window.webpackJsonp||[]).push([[26,853,854,855,856,857,858,859,860,861,862,863,864,865],{1038:function(_,v,t){_.exports=t.p+"img/7ca3171.jpg"},1039:function(_,v,t){_.exports=t.p+"img/2108117.png"},1040:function(_,v,t){_.exports=t.p+"img/0d2e649.jpg"},1041:function(_,v,t){_.exports=t.p+"img/a683232.png"},1042:function(_,v,t){_.exports=t.p+"img/4e348c9.jpg"},1043:function(_,v,t){_.exports=t.p+"img/b7d415f.png"},1044:function(_,v,t){_.exports=t.p+"img/457c81d.png"},1045:function(_,v,t){_.exports=t.p+"img/ae7bc09.png"},1046:function(_,v,t){_.exports=t.p+"img/8c8f4ea.png"},1047:function(_,v,t){_.exports=t.p+"img/99946c9.png"},1048:function(_,v,t){_.exports=t.p+"img/0cc357c.png"},1049:function(_,v,t){_.exports=t.p+"img/94243e9.png"},1050:function(_,v,t){_.exports=t.p+"img/bc0830f.png"},1207:function(_,v,t){const r={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,r=_._self._c||v;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"概述"}},[_._v("概述")]),_._v(" "),r("ul",[r("li",[r("strong",[_._v("数字调制")]),_._v(" - 把"),r("strong",[_._v("数字基带信号")]),_._v("变换为"),r("strong",[_._v("数字带通信号")]),_._v("的过程。也称为 "),r("strong",[_._v("数字连续波调制")]),_._v(" 或 "),r("strong",[_._v("正弦载波数字调制")])]),_._v(" "),r("li",[_._v("数字带通传输系统 - 指包括调制解调过程的数字传输系统")]),_._v(" "),r("li",[_._v("数字调制方法：\n"),r("ul",[r("li",[_._v("模拟调制法 - 利用模拟调制的方法实现数字式调制")]),_._v(" "),r("li",[_._v("数字键控法 - 利用数字信号的离散取值特点，通过开关键控载波实现数字调制")])])]),_._v(" "),r("li",[_._v("数字调制基本类型\n"),r("ul",[r("li",[_._v("对正弦载波的振幅、频率或相位进行键控，得到"),r("strong",[_._v("振幅键控ASK")]),_._v("、"),r("strong",[_._v("频移键控FSK")]),_._v("、"),r("strong",[_._v("相移键控PSK/DPSK")]),_._v("三种基本的数字调制方式")])])]),_._v(" "),r("li",[_._v("二进制调制 - 指载波的幅度、频率、相位受调制后只有两种状态。对应的调制方式有2ASK、2PSK、2FSK、2DPSK")]),_._v(" "),r("li",[_._v("多进制调制 - M进制调制就有MASK/MFSK/MPSK/MDPSK")])]),_._v(" "),r("h2",{attrs:{id:"二进制数字调制原理"}},[_._v("二进制数字调制原理")]),_._v(" "),r("h3",{attrs:{id:"二进制振幅键控2ask"}},[_._v("二进制振幅键控2ASK")]),_._v(" "),r("p",[_._v("使用不同振幅（0和非0）表示0和1")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1038),alt:"7-1"}})]),_._v(" "),r("p",[_._v("如果电平为1的概率为P，为0的概率为1-P，则2ASK信号也称为OOK信号")]),_._v(" "),r("p",[_._v("数字键控法电路实现：")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1039),alt:"7-4"}})]),_._v(" "),r("p",[_._v("解调方案：")]),_._v(" "),r("ul",[r("li",[_._v("非相干解调（包络检波")]),_._v(" "),r("li",[_._v("相干解调（同步检测")])]),_._v(" "),r("h3",{attrs:{id:"二进制频移键控2fsk"}},[_._v("二进制频移键控2FSK")]),_._v(" "),r("p",[_._v("使用不同频率表示0和1")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1040),alt:"7-2"}})]),_._v(" "),r("p",[_._v("数字键控法电路实现：")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1041),alt:"7-5"}})]),_._v(" "),r("p",[_._v("解调方案：")]),_._v(" "),r("ul",[r("li",[_._v("非相干解调（包络检波")]),_._v(" "),r("li",[_._v("相干解调")]),_._v(" "),r("li",[_._v("过零法检测")])]),_._v(" "),r("h3",{attrs:{id:"二进制绝对相移键控2psk"}},[_._v("二进制（绝对）相移键控2PSK")]),_._v(" "),r("p",[_._v("使用不同相位表示0和1")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1042),alt:"7-3"}})]),_._v(" "),r("p",[_._v("数字键控法电路实现：")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1043),alt:"7-6"}})]),_._v(" "),r("p",[_._v("解调：相干解调")]),_._v(" "),r("p",[r("strong",[_._v("问题")]),_._v("：2PSK存在 "),r("strong",[_._v("倒π现象")]),_._v(" 或 "),r("strong",[_._v("反相工作")]),_._v("，因为在载波恢复的时候存在180度的相位模糊。实际应用的时候使用2DPSK解决")]),_._v(" "),r("h3",{attrs:{id:"二进制差分相移键控2dpsk"}},[_._v("二进制差分相移键控2DPSK")]),_._v(" "),r("p",[_._v("相位变化表示1，不变表示0。"),r("strong",[_._v("解决相位模糊")])]),_._v(" "),r("p",[r("img",{attrs:{src:t(1044),alt:"7-7"}})]),_._v(" "),r("p",[_._v("产生方法：将绝对码进行变换得到相对码，然后再2PSK即可。所以电路为：")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1045),alt:"7-8"}})]),_._v(" "),r("ul",[r("li",[_._v("解调方案1 - 相干解调（极性比较），先恢复相对码再计算绝对码")]),_._v(" "),r("li",[_._v("解调方案2 - 差分相干解调（相位比较），此方案不需要专门的相干载波")])]),_._v(" "),r("h2",{attrs:{id:"二进制数字已调信号的频谱与带宽"}},[_._v("二进制数字已调信号的频谱与带宽")]),_._v(" "),r("h3",{attrs:{id:"2ask"}},[_._v("2ASK")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1046),alt:"7-9"}})]),_._v(" "),r("p",[_._v("2ASK的带宽基带信号带宽的2倍，所以2ASK的传输带宽是码元速率的2倍")]),_._v(" "),r("h3",{attrs:{id:"2fsk"}},[_._v("2FSK")]),_._v(" "),r("p",[_._v("功率谱可以视为是中心频率分别为f1和f2的两个2ASK频谱的组合（图略），带宽近似"),r("code",{pre:!0},[_._v("|f2 - f1| + 2fB")])]),_._v(" "),r("h3",{attrs:{id:"2psk-2dpsk"}},[_._v("2PSK & 2DPSK")]),_._v(" "),r("p",[_._v("2PSK和2ASK表达式形式完全一样，区别是基带信号不同，2ASK是单极性，2PSK是双极性")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1047),alt:"7-10"}})]),_._v(" "),r("p",[_._v("2DPSK和2PSK的一样")]),_._v(" "),r("p",[_._v("带宽也是基带信号的2倍")]),_._v(" "),r("h2",{attrs:{id:"二进制数字调制系统的抗噪性能"}},[_._v("二进制数字调制系统的抗噪性能")]),_._v(" "),r("p",[_._v("定义解调器输入端信噪比：")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1048),alt:"7-11"}})]),_._v(" "),r("p",[_._v("其中：")]),_._v(" "),r("ul",[r("li",[_._v("A为解调器输入端信号的振幅")]),_._v(" "),r("li",[_._v("(σn)^2=n0B为解调器输入端噪声功率")])]),_._v(" "),r("h2",{attrs:{id:"二进制数字调制系统的性能比较"}},[_._v("二进制数字调制系统的性能比较")]),_._v(" "),r("h3",{attrs:{id:"抗噪性能"}},[_._v("抗噪性能")]),_._v(" "),r("ul",[r("li",[_._v("同一种调制方式，相干解调误码率低于非相干解调误码率。但随着r增大，两者性能相差不大")]),_._v(" "),r("li",[_._v("使用相同的解调方式，抗加性高斯白噪声的能力从优到劣为2PSK-2DPSK-2FSK-2ASK")]),_._v(" "),r("li",[_._v("在误码率相同的情况下对信噪比r的要求：\n"),r("ul",[r("li",[_._v("2ASK-2FSK=3dB")]),_._v(" "),r("li",[_._v("2FSK-2PSK=3dB")])])])]),_._v(" "),r("h3",{attrs:{id:"带宽和频带利用率"}},[_._v("带宽和频带利用率")]),_._v(" "),r("p",[_._v("令码元宽度为TB，则")]),_._v(" "),r("ul",[r("li",[_._v("B(2ASK)=B(2PSK)=B(2DPSK)=2/TB")]),_._v(" "),r("li",[_._v("B(2FSK)=|f2-f1|+2/TB")])]),_._v(" "),r("p",[_._v("可见2FSK的频带利用率最差，有效性最差")]),_._v(" "),r("h3",{attrs:{id:"对信道特性变化的敏感性"}},[_._v("对信道特性变化的敏感性")]),_._v(" "),r("ul",[r("li",[_._v("2ASK易受影响，不适合随参信道")]),_._v(" "),r("li",[_._v("2PSK不易受影响")]),_._v(" "),r("li",[_._v("2FSK不受影响，最适合在随参信道传输")])]),_._v(" "),r("h3",{attrs:{id:"设备复杂度"}},[_._v("设备复杂度")]),_._v(" "),r("ul",[r("li",[_._v("非相干方式比相干简单")])]),_._v(" "),r("p",[_._v("常用的是相干2DPSK和非相干2FSK")]),_._v(" "),r("h2",{attrs:{id:"多进制数字调制原理"}},[_._v("多进制数字调制原理")]),_._v(" "),r("h3",{attrs:{id:"mask略"}},[_._v("MASK（略")]),_._v(" "),r("p",[_._v("很少用")]),_._v(" "),r("h3",{attrs:{id:"mfsk略"}},[_._v("MFSK（略")]),_._v(" "),r("p",[_._v("抗衰落能力强，但是占用带宽大")]),_._v(" "),r("h3",{attrs:{id:"mpsk"}},[_._v("MPSK")]),_._v(" "),r("p",[_._v("以4PSK为例，使用4种不同的相位表示数字信息")]),_._v(" "),r("p",[_._v("参考表格：")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1049),alt:"7-12"}})]),_._v(" "),r("p",[_._v("相位矢量表示图：")]),_._v(" "),r("p",[r("img",{attrs:{src:t(1050),alt:"7-13"}})]),_._v(" "),r("h4",{attrs:{id:"mdpsk"}},[_._v("MDPSK")]),_._v(" "),r("p",[_._v("把每一个二进制位进行2DPSK即可")])])}]};_.exports={attributes:{layout:"collection",title:"数字带通传输系统",collection:"PrinciplesOfCommunications"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);