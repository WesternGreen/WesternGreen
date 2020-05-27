(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1106:function(v,_){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"基本要素"}},[v._v("基本要素")]),v._v(" "),e("p",[v._v("得到最优解的条件：")]),v._v(" "),e("ul",[e("li",[v._v("最优子结构\n"),e("ul",[e("li",[v._v("原问题最优解包括了子问题最优解")])])]),v._v(" "),e("li",[v._v("贪心选择性质\n"),e("ul",[e("li",[v._v("整体最优解可以通过一系列局部最优解的选择（即贪心选择）来得到")])])])]),v._v(" "),e("p",[v._v("贪心思想：自顶向下，每次选择的时候都选择对当前局势下最优的方案而不考虑整体。即局部最优")]),v._v(" "),e("h2",{attrs:{id:"活动安排问题"}},[v._v("活动安排问题")]),v._v(" "),e("p",[v._v("贪心选择策略：每次都选择结束时间最早的活动，为剩余活动提供尽可能多的时间。")]),v._v(" "),e("p",[v._v("如果输入已经成升序，时间复杂性"),e("code",{pre:!0},[v._v("O(n)")]),v._v("。如果没有排序则需要手动排序，时间复杂性"),e("code",{pre:!0},[v._v("O(nlogn)")])]),v._v(" "),e("h3",{attrs:{id:"证明-贪心选择性质"}},[v._v("证明 - 贪心选择性质")]),v._v(" "),e("p",[v._v("使用数学归纳法证明贪心法能够求得活动安排问题的整体最优解")]),v._v(" "),e("p",[v._v("思路：")]),v._v(" "),e("ol",[e("li",[v._v("假设存在一个最优解")]),v._v(" "),e("li",[v._v("证明存在一个以贪心选择开始的最优解")]),v._v(" "),e("li",[v._v("证明贪心选择后的子问题也是通过贪心选择获得的最优解")])]),v._v(" "),e("p",[v._v("过程：")]),v._v(" "),e("p",[v._v("设"),e("code",{pre:!0},[v._v("E1-En")]),v._v("为"),e("code",{pre:!0},[v._v("n")]),v._v("个活动。而且已经按照结束时间升序排列。所以"),e("code",{pre:!0},[v._v("E1")]),v._v("拥有最早的结束时间。需要证明最优解中总是包含了"),e("code",{pre:!0},[v._v("E1")]),v._v("。\n假设最优解"),e("code",{pre:!0},[v._v("A")]),v._v("的第一个活动是"),e("code",{pre:!0},[v._v("Ek")]),v._v("，如果"),e("code",{pre:!0},[v._v("k != 1")]),v._v("，假设另一个解"),e("code",{pre:!0},[v._v("B")]),v._v("内不包含"),e("code",{pre:!0},[v._v("Ek")]),v._v("而包含"),e("code",{pre:!0},[v._v("E1")]),v._v("，其他和"),e("code",{pre:!0},[v._v("A")]),v._v("一样，因为"),e("code",{pre:!0},[v._v("E1")]),v._v("最早结束，所以"),e("code",{pre:!0},[v._v("B")]),v._v("内的活动都是相容的。因为"),e("code",{pre:!0},[v._v("B")]),v._v("内的活动与"),e("code",{pre:!0},[v._v("A")]),v._v("内的活动数量相同，而且"),e("code",{pre:!0},[v._v("A")]),v._v("是最优的，所以"),e("code",{pre:!0},[v._v("B")]),v._v("也是最优的。")]),v._v(" "),e("p",[v._v("也就是说，贪心不一定能在此问题求出所有最优解（事实上只能求一个），但是求出来的必定是最优解")]),v._v(" "),e("h3",{attrs:{id:"证明-最优子结构性质"}},[v._v("证明 - 最优子结构性质")]),v._v(" "),e("p",[v._v("子问题：设"),e("code",{pre:!0},[v._v("E2-En")]),v._v("为"),e("code",{pre:!0},[v._v("n-1")]),v._v("个活动，已经按照结束时间升序排列。"),e("code",{pre:!0},[v._v("E2")]),v._v("拥有最早的结束时间。证明从上述最优解"),e("code",{pre:!0},[v._v("A")]),v._v("中除去"),e("code",{pre:!0},[v._v("E1")]),v._v("可以得到子问题的最优解"),e("code",{pre:!0},[v._v("C")])]),v._v(" "),e("h2",{attrs:{id:"背包问题"}},[v._v("背包问题")]),v._v(" "),e("p",[v._v("注意"),e("strong",[v._v("不是0-1背包")]),v._v("问题。此背包问题中的物品可以被无限分割，所以贪心选择的时候选择单位质量下价值最大者放入。直到背包装满。")]),v._v(" "),e("p",[e("strong",[v._v("0-1背包")]),v._v("问题"),e("strong",[v._v("不能")]),v._v("通过贪心法获得最优解")]),v._v(" "),e("p",[v._v("因为需要排序，时间复杂度"),e("code",{pre:!0},[v._v("O(nlogn)")])]),v._v(" "),e("h2",{attrs:{id:"装载问题"}},[v._v("装载问题")]),v._v(" "),e("p",[v._v("0-1背包的特殊形式，相当于每个物品的价值都是1。")]),v._v(" "),e("p",[v._v("贪心策略：每次都装载最轻的物品，尽可能给剩余物品提供更多容量。")]),v._v(" "),e("p",[v._v("时间复杂度"),e("code",{pre:!0},[v._v("O(nlogn)")])]),v._v(" "),e("p",[v._v("算法的正确性证明：思路类似上面的活动安排问题")]),v._v(" "),e("h2",{attrs:{id:"哈夫曼编码"}},[v._v("哈夫曼编码")]),v._v(" "),e("p",[v._v("构造编码树生成最优前缀码")]),v._v(" "),e("p",[v._v("计算时间"),e("code",{pre:!0},[v._v("O(nlogn)")])]),v._v(" "),e("h3",{attrs:{id:"证明-贪心选择性质-2"}},[v._v("证明 - 贪心选择性质")]),v._v(" "),e("p",[v._v("需要证明：假设"),e("code",{pre:!0},[v._v("x")]),v._v("和"),e("code",{pre:!0},[v._v("y")]),v._v("是有最小频率"),e("code",{pre:!0},[v._v("f(x)")]),v._v("和"),e("code",{pre:!0},[v._v("f(y)")]),v._v("的2个字符，则最优前缀码中"),e("code",{pre:!0},[v._v("x")]),v._v("和"),e("code",{pre:!0},[v._v("y")]),v._v("有相同的码长，且只有最后一位编码不同。如果能够证明这个结论，就说明按照每次优先选择最小频率的两个字符的个构造算法是正确的，是能够造出全局最优的。")]),v._v(" "),e("p",[v._v("思路：如果"),e("code",{pre:!0},[v._v("x")]),v._v("和"),e("code",{pre:!0},[v._v("y")]),v._v("不在二叉树的最深叶子上，那么交换"),e("code",{pre:!0},[v._v("x")]),v._v("和最深的叶子可以减少（或不会增加）平均码长。所有"),e("code",{pre:!0},[v._v("x")]),v._v("和"),e("code",{pre:!0},[v._v("y")]),v._v("在二叉树最深叶子上的编码方式一定是最优解")]),v._v(" "),e("h3",{attrs:{id:"证明-最优子结构性质-2"}},[v._v("证明 - 最优子结构性质")]),v._v(" "),e("p",[v._v("需要证明：已知一棵树，其中有互为兄弟的叶子结点"),e("code",{pre:!0},[v._v("x")]),v._v("和"),e("code",{pre:!0},[v._v("y")]),v._v("，它们的父节点为"),e("code",{pre:!0},[v._v("z")]),v._v("。删除节点"),e("code",{pre:!0},[v._v("x")]),v._v("和"),e("code",{pre:!0},[v._v("y")]),v._v("，把"),e("code",{pre:!0},[v._v("z")]),v._v("视为一个叶子结点（即字符），得到一棵子树。证明这个子树也是最优的")]),v._v(" "),e("p",[v._v("反证：如果这个子树不是最优的，假设存在一个最优子树，在最优子树上加上节点x和y得到树应比原最优树更优。但是原树已经最优。")]),v._v(" "),e("h2",{attrs:{id:"单源最短路径"}},[v._v("单源最短路径")]),v._v(" "),e("p",[v._v("Dijkstra算法")]),v._v(" "),e("p",[v._v("贪心策略：每次选择“不在可达点集内”的距离可达点最近的点加入可达点集。每次加入新顶点后要刷新源点到可达点集外的点的距离")]),v._v(" "),e("p",[v._v("时间复杂度"),e("code",{pre:!0},[v._v("O(n^2)")])]),v._v(" "),e("h3",{attrs:{id:"证明-贪心选择性质-3"}},[v._v("证明 - 贪心选择性质")]),v._v(" "),e("p",[v._v("需要证明：“仅经过可达点集内的点到达可达点集外的一点"),e("code",{pre:!0},[v._v("v")]),v._v("的距离”小于“至少经过一个可达点集外的点"),e("code",{pre:!0},[v._v("p")]),v._v("到达可达点集外的点"),e("code",{pre:!0},[v._v("v")]),v._v("的距离”")]),v._v(" "),e("p",[v._v("令源点为"),e("code",{pre:!0},[v._v("s")]),v._v("，仅经过可达点集内的点到达"),e("code",{pre:!0},[v._v("v")]),v._v("时可达点集内经过的最后一个点为"),e("code",{pre:!0},[v._v("q")]),v._v("，函数"),e("code",{pre:!0},[v._v("dis(i, j)")]),v._v("为点"),e("code",{pre:!0},[v._v("i")]),v._v("与点"),e("code",{pre:!0},[v._v("j")]),v._v("之间的距离。因为"),e("code",{pre:!0},[v._v("p")]),v._v("在可达点集外，所以"),e("code",{pre:!0},[v._v("dis(s, q) <= dis(s, p)")]),v._v("。如果"),e("code",{pre:!0},[v._v("dis(s, q) = dis(s, p)")]),v._v("，那么下一个需要加入可达点集的点就是"),e("code",{pre:!0},[v._v("p")]),v._v("而不是"),e("code",{pre:!0},[v._v("v")]),v._v("。所以不讨论这个情况。所以"),e("code",{pre:!0},[v._v("dis(s, q) < dis(s, p)")])]),v._v(" "),e("p",[v._v("令从s到q的路径上经过的最后一个可达点集内的点为r，因为点v是下一个要加入可达点集内的点，所以"),e("code",{pre:!0},[v._v("dis(p, v) <= dis(r, q)")]),v._v("，所以"),e("code",{pre:!0},[v._v("dis(p, v) < dis(r, q) + dis(q, v)")]),v._v("，得证。")]),v._v(" "),e("h3",{attrs:{id:"证明-最优子结构性质-3"}},[v._v("证明 - 最优子结构性质")]),v._v(" "),e("p",[v._v("需要证明：假设存在"),e("code",{pre:!0},[v._v("s")]),v._v("到"),e("code",{pre:!0},[v._v("q")]),v._v("的最短路径"),e("code",{pre:!0},[v._v("s -> ... -> p -> q")]),v._v("，那么在这条路径上删除"),e("code",{pre:!0},[v._v("q")]),v._v("得到的"),e("code",{pre:!0},[v._v("s -> ... -> p")]),v._v("是"),e("code",{pre:!0},[v._v("s")]),v._v("到"),e("code",{pre:!0},[v._v("p")]),v._v("的最短路径")]),v._v(" "),e("p",[v._v("反证：如果这不是最短路径，必存在另一条"),e("code",{pre:!0},[v._v("s")]),v._v("到"),e("code",{pre:!0},[v._v("p")]),v._v("的最短路径，而在这条新的最短路径上可以得到新的"),e("code",{pre:!0},[v._v("s")]),v._v("到"),e("code",{pre:!0},[v._v("q")]),v._v("的最短路径，与假设矛盾")]),v._v(" "),e("h2",{attrs:{id:"最小生成树"}},[v._v("最小生成树")]),v._v(" "),e("h3",{attrs:{id:"prim算法"}},[v._v("Prim算法")]),v._v(" "),e("p",[v._v("贪心策略：已知树内点集"),e("code",{pre:!0},[v._v("S")]),v._v("，每次向外延伸一个点，这个点是树内点集到树外点集距离最小的一个点。")]),v._v(" "),e("p",[v._v("时间复杂度"),e("code",{pre:!0},[v._v("O(n^2)")])]),v._v(" "),e("h3",{attrs:{id:"kruskal算法"}},[v._v("Kruskal算法")]),v._v(" "),e("p",[v._v("贪心策略：每次判断最短的边。如果这条边的两个顶点不在任何集合内，那么这两个顶点形成一个集合。如果其中一个顶点已经在一个集合中，那么把另一个顶点也并入这个集合。如果两个顶点在不同集合则合并两个集合。如果两个顶点在同一集合则舍弃这个边。最后的效果是我们通过寻找最小的边构造出了联通的图。")]),v._v(" "),e("p",[v._v("时间复杂度"),e("code",{pre:!0},[v._v("O(eloge)")]),v._v("，"),e("code",{pre:!0},[v._v("e")]),v._v("为边的数量")])])}]};v.exports={attributes:{layout:"collection",title:"贪心法",collection:"AlgorithmDesignAndAnalyze"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);