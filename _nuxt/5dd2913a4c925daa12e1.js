(window.webpackJsonp=window.webpackJsonp||[]).push([[31,728,729,730,731,732,733,734,735,736,737,738,739],{1182:function(t,v,_){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[t._v("文本聚类问题")]),t._v(" "),n("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),n("ul",[n("li",[t._v("文本分类\n"),n("ul",[n("li",[t._v("使用"),n("strong",[t._v("有监督")]),t._v("的学习框架")]),t._v(" "),n("li",[t._v("学习时需要人为提供标签")])])]),t._v(" "),n("li",[n("strong",[t._v("文本聚类")]),t._v(" "),n("ul",[n("li",[t._v("使用"),n("strong",[t._v("无监督")]),t._v("的学习框架")]),t._v(" "),n("li",[n("strong",[t._v("挖掘数据内部的隐藏模式、类别")])])])])]),t._v(" "),n("p",[t._v("应用：")]),t._v(" "),n("ul",[n("li",[t._v("文档分类")]),t._v(" "),n("li",[t._v("搜索引擎优化")])]),t._v(" "),n("h2",{attrs:{id:"聚类模型"}},[t._v("聚类模型")]),t._v(" "),n("h3",{attrs:{id:"k-means"}},[t._v("K-means")]),t._v(" "),n("p",[t._v("思想：")]),t._v(" "),n("ul",[n("li",[t._v("首先确定聚类后簇的个数K")]),t._v(" "),n("li",[t._v("假设每个簇都有一个"),n("strong",[t._v("中心点")]),t._v("(centroid)")]),t._v(" "),n("li",[t._v("将每个样本点归类到中心点最近的簇中，然后"),n("strong",[t._v("刷新中心点")])]),t._v(" "),n("li",[t._v("直到所有中心点"),n("strong",[t._v("收敛")])])]),t._v(" "),n("p",[t._v("效果图：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(913),alt:"8-1"}})]),t._v(" "),n("p",[t._v("定义"),n("strong",[t._v("SSE(the Sum of Squred Error)函数")]),t._v("为：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(914),alt:"8-2"}})]),t._v(" "),n("p",[t._v("其中μk为簇Ck的中心点。r(n, k)表示点xn是否被划分到了簇Ck，如果是则r(n, k)为1否则为0")]),t._v(" "),n("p",[t._v("显然SEE函数表示了一个划分的质量。一个划分的SEE越小，划分的质量越高")]),t._v(" "),n("ul",[n("li",[t._v("初始中心点通常"),n("strong",[t._v("随机选取")])]),t._v(" "),n("li",[t._v("中心点通常取"),n("strong",[t._v("中位数")])]),t._v(" "),n("li",[t._v("算法复杂度O(ndKI)\n"),n("ul",[n("li",[t._v("n - 样本点的个数")]),t._v(" "),n("li",[t._v("d - 样本特征维度，即每个样本中含有几个变量")]),t._v(" "),n("li",[t._v("K - 类的个数")]),t._v(" "),n("li",[t._v("I - 迭代次数")])])])]),t._v(" "),n("p",[t._v("弊端："),n("strong",[t._v("需要人为预先设定K")]),t._v("，这样簇和簇之间就会存在歧义（如本来两个簇应该是一个簇，或者一个簇该是两个簇")]),t._v(" "),n("h3",{attrs:{id:"hierarchical-clustering层次聚类分层聚合"}},[t._v("Hierarchical Clustering层次聚类/分层聚合")]),t._v(" "),n("p",[t._v("输出一个"),n("strong",[t._v("嵌套的")]),t._v("、层次化的"),n("strong",[t._v("类别树")]),t._v("(dendrogram)，树状结构记录簇的合并或拆分")]),t._v(" "),n("h4",{attrs:{id:"hac层次凝聚聚类"}},[t._v("HAC层次凝聚聚类")]),t._v(" "),n("p",[t._v("HAC: Hierarchical Agglomerative Clustering")]),t._v(" "),n("p",[t._v("层次凝聚聚类，一种很常见的聚类模型")]),t._v(" "),n("p",[t._v("思想：")]),t._v(" "),n("ul",[n("li",[t._v("初始每一个点都是一个簇")]),t._v(" "),n("li",[t._v("每次合并最近的（最相似的）两个簇")]),t._v(" "),n("li",[t._v("直到只剩下一个簇")])]),t._v(" "),n("p",[n("strong",[t._v("相似度矩阵(proximity matrix)")]),t._v("：每个矩阵项都保存了两个簇之间的相似度。下图为五个簇时的相似度矩阵")]),t._v(" "),n("p",[n("img",{attrs:{src:_(915),alt:"8-3"}})]),t._v(" "),n("p",[t._v("假设合并C2和C5，得到的相似度矩阵：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(916),alt:"8-4"}})]),t._v(" "),n("p",[n("img",{attrs:{src:_(917),alt:"8-5"}})]),t._v(" "),n("p",[t._v("关键：如何评定两个簇的相似度？这也决定了相似度矩阵中行列的合并结果")]),t._v(" "),n("p",[t._v("可选方案：")]),t._v(" "),n("ul",[n("li",[t._v("min(single linage)\n"),n("ul",[n("li",[n("img",{attrs:{src:_(918),alt:"8-6"}})])])]),t._v(" "),n("li",[t._v("max(complete linkage)\n"),n("ul",[n("li",[n("img",{attrs:{src:_(919),alt:"8-7"}})])])]),t._v(" "),n("li",[t._v("group average\n"),n("ul",[n("li",[n("img",{attrs:{src:_(920),alt:"8-8"}})])])]),t._v(" "),n("li",[t._v("distance between centroids\n"),n("ul",[n("li",[n("img",{attrs:{src:_(921),alt:"8-9"}})])])]),t._v(" "),n("li",[t._v("ward’s method")]),t._v(" "),n("li",[t._v("…")])]),t._v(" "),n("p",[t._v("效果图：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(922),alt:"8-10"}})]),t._v(" "),n("h4",{attrs:{id:"dhc自顶向下层次聚类"}},[t._v("DHC自顶向下层次聚类")]),t._v(" "),n("p",[t._v("DHC: Divisive Hierarchical Clustering")]),t._v(" "),n("p",[t._v("主要思想："),n("strong",[t._v("构建最小生成树")])]),t._v(" "),n("p",[t._v("例：使用Prime算法：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(923),alt:"8-11"}})]),t._v(" "),n("p",[t._v("使用Kruskal算法：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(924),alt:"8-12"}})]),t._v(" "),n("h4",{attrs:{id:"分类聚合总结"}},[t._v("分类聚合总结")]),t._v(" "),n("ul",[n("li",[t._v("优点\n"),n("ul",[n("li",[t._v("不需要提前设置簇的个数（因为可以自行剪枝求得")])])]),t._v(" "),n("li",[t._v("缺点\n"),n("ul",[n("li",[t._v("合并不可撤销，全局是一个整体")]),t._v(" "),n("li",[t._v("没有最优合并方案")]),t._v(" "),n("li",[t._v("不同的合并方案总会有一些问题\n"),n("ul",[n("li",[t._v("边界或噪音敏感问题")]),t._v(" "),n("li",[t._v("本来应该很大的簇被切割")]),t._v(" "),n("li",[t._v("不易设置簇的大小与形状")]),t._v(" "),n("li",[t._v("…")])])])])])]),t._v(" "),n("h3",{attrs:{id:"gmm高斯混合模型略"}},[t._v("GMM高斯混合模型（略")]),t._v(" "),n("p",[t._v("GMM: Gaussian Mixture Model")])])}]};t.exports={attributes:{layout:"collection",title:"Text Clustering",collection:"NaturalLanguageProcessing"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},913:function(t,v,_){t.exports=_.p+"img/4116f03.png"},914:function(t,v,_){t.exports=_.p+"img/97c6ec4.png"},915:function(t,v,_){t.exports=_.p+"img/633f2d8.png"},916:function(t,v,_){t.exports=_.p+"img/13af015.png"},917:function(t,v,_){t.exports=_.p+"img/e032312.png"},918:function(t,v,_){t.exports=_.p+"img/ac790d3.png"},919:function(t,v,_){t.exports=_.p+"img/343dd09.png"},920:function(t,v,_){t.exports=_.p+"img/b1bac9e.png"},921:function(t,v,_){t.exports=_.p+"img/d2bb6b7.png"},922:function(t,v,_){t.exports=_.p+"img/8f3edfe.png"},923:function(t,v,_){t.exports=_.p+"img/859fc86.png"},924:function(t,v,_){t.exports=_.p+"img/34f5068.png"}}]);