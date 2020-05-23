(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1099:function(e,t){const _={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"frontmatter-markdown"},[_("ul",[_("li",[_("p",[e._v("广度优先遍历搜索树")])]),e._v(" "),_("li",[_("p",[e._v("每次选取当前最优点进行延伸")])]),e._v(" "),_("li",[_("p",[e._v("设置上下界，当界限更新时删除越界的不可能生成最优解的部分解")])]),e._v(" "),_("li",[_("p",[e._v("活结点")]),e._v(" "),_("ul",[_("li",[e._v("即将处理的在队列里面的结点")])])]),e._v(" "),_("li",[_("p",[e._v("死结点")]),e._v(" "),_("ul",[_("li",[e._v("已经处理过的不用考虑的结点（包括能生成最优解的和不能生成最优解的）")])])]),e._v(" "),_("li",[_("p",[e._v("扩展结点")]),e._v(" "),_("ul",[_("li",[e._v("当前正在处理的结点")])])]),e._v(" "),_("li",[_("p",[e._v("未处理结点")]),e._v(" "),_("ul",[_("li",[e._v("没有处理的结点")])])])]),e._v(" "),_("p",[e._v("算法流程：")]),e._v(" "),_("ul",[_("li",[e._v("前提：已经存在一个上界（可以无穷大）和下界（可以无穷小）")]),e._v(" "),_("li",[e._v("从活结点集合（即待处理结点集合）中选取最有可能生成最优解的结点作为当前结点（扩展结点）")]),e._v(" "),_("li",[e._v("处理当前结点。通过一些预测算法得到由当前结点能够得到的最优解和最坏解")]),e._v(" "),_("li",[e._v("如果预测的结果不符合界限条件，则舍弃当前结点")]),e._v(" "),_("li",[e._v("如果预测的结果符合界限条件，则把当前结点的所有子节点放到活结点集合（待处理结点集合）中")])]),e._v(" "),_("p",[e._v("使用高效的剪枝函数，处理“最优性问题”会比回溯法快很多")]),e._v(" "),_("h2",{attrs:{id:"tsp旅行商问题"}},[e._v("TSP旅行商问题")]),e._v(" "),_("p",[e._v("目标：找到最小回路")]),e._v(" "),_("p",[e._v("计算上界的预测算法：贪心，每一步选择路径尾结点能够到达的不在路径中的最近的结点。如果这样最后发现没有回路就设置结果无穷大")]),e._v(" "),_("p",[e._v("计算下界的预测算法：已知一段路径，下界应为"),_("code",{pre:!0},[e._v("(已知路径的长度*2+路径两端点到其可达的最近的不在路径中的点的距离+不在回路中的点到其可达的最近的两个点的距离)/2")])]),e._v(" "),_("p",[e._v("算法流程：")]),e._v(" "),_("ul",[_("li",[e._v("初始化，计算初始上界和初始下界。活结点集合应为出发节点")]),e._v(" "),_("li",[e._v("从活结点集合中选取下界最小者作为最可能生成最优解的结点，把它作为当前结点（扩展结点）")]),e._v(" "),_("li",[e._v("使用预测算法计算当前结点的上界和下界。如果它的下界比当前上界还要大，那么这个点不可能生成最优解。舍弃")]),e._v(" "),_("li",[e._v("如果算得下界符合条件，那么就可以把当前结点的子节点（注意这些子节点不能在已知路径上）放入活结点表。如果计算的上界比当前上界还要小，可以刷新上界，并从活结点表中删除下界大于当前上界的结点")])])])}]};e.exports={attributes:{layout:"collection",title:"分支限界法",collection:"AlgorithmDesignAndAnalyze"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);