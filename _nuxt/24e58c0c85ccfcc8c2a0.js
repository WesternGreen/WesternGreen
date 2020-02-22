(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1060:function(_,v){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"分治法概念"}},[_._v("分治法概念")]),_._v(" "),e("blockquote",[e("p",[_._v("不是所有递归函数都可以找到非递归的定义")])]),_._v(" "),e("p",[_._v("分治法适用条件：")]),_._v(" "),e("ul",[e("li",[_._v("问题规模缩小到一定程度可以很容易解决")]),_._v(" "),e("li",[_._v("问题可以分解为若干个规模较小的相同问题，即"),e("strong",[_._v("最优子结构")]),_._v("性质")]),_._v(" "),e("li",[_._v("子问题的（简单）合并可以得到原问题的解\n"),e("ul",[e("li",[_._v("如果不满足，考虑贪心或动态规划")])])]),_._v(" "),e("li",[_._v("大问题分解为子问题后各个子问题可以独立（并行、同时）求解，相互无依赖关系，不包含公共子问题\n"),e("ul",[e("li",[_._v("如果存在公共子问题，使用动态规划")])])])]),_._v(" "),e("blockquote",[e("p",[_._v("平衡子问题：如果可以，把问题一分为二总是比其他划分方法更好。")])]),_._v(" "),e("blockquote",[e("p",[_._v("正例：二分搜索、合并排序")])]),_._v(" "),e("blockquote",[e("p",[_._v("反例：汉诺塔问题")])]),_._v(" "),e("h2",{attrs:{id:"算法复杂性分析"}},[_._v("算法复杂性分析")]),_._v(" "),e("p",[_._v("如果把规模为"),e("code",{pre:!0},[_._v("n")]),_._v("的问题分解成"),e("code",{pre:!0},[_._v("k")]),_._v("个规模为"),e("code",{pre:!0},[_._v("n/m")]),_._v("的子问题，合并结果的时间为"),e("code",{pre:!0},[_._v("f(n)")]),_._v("，最小子问题为"),e("code",{pre:!0},[_._v("n0")]),_._v("，则时间复杂度为")]),_._v(" "),e("pre",[e("code",{pre:!0},[_._v("T(n)=O(1)            n=n0\nT(n)=kT(n/m)+f(n)    n>n0\n")])]),_._v(" "),e("p",[_._v("通过迭代法求得方程的解")]),_._v(" "),e("pre",[e("code",{pre:!0},[_._v("T(n)=n^(logm(k))+Σ(j=0 -> logm(n-1))k^jf(n/m^j)\n")])]),_._v(" "),e("h3",{attrs:{id:"m-k的影响"}},[_._v("m & k的影响")]),_._v(" "),e("ul",[e("li",[_._v("如果"),e("code",{pre:!0},[_._v("m < k")]),_._v("，也就是说"),e("code",{pre:!0},[_._v("k * (n / m) > n")]),_._v("，分解后问题规模大于原问题规模\n"),e("ul",[e("li",[_._v("T(n)复杂性较大，如矩阵乘法问题")])])]),_._v(" "),e("li",[_._v("如果"),e("code",{pre:!0},[_._v("m = k")]),_._v("，分解后问题规模等于原问题规模\n"),e("ul",[e("li",[_._v("合并排序")])])]),_._v(" "),e("li",[_._v("如果"),e("code",{pre:!0},[_._v("m > k")]),_._v("，分解后问题规模小于原问题规模（减治）\n"),e("ul",[e("li",[_._v("二分查找")])])])]),_._v(" "),e("h2",{attrs:{id:"二分查找"}},[_._v("二分查找")]),_._v(" "),e("p",[_._v("已知"),e("strong",[_._v("有序")]),_._v("数组"),e("code",{pre:!0},[_._v("a[n]")]),_._v("，从"),e("code",{pre:!0},[_._v("a[l]")]),_._v("到"),e("code",{pre:!0},[_._v("a[r]")]),_._v("中找元素"),e("code",{pre:!0},[_._v("aim")])]),_._v(" "),e("p",[_._v("流程（以升序数组为例）：")]),_._v(" "),e("ul",[e("li",[_._v("比较l和r\n"),e("ul",[e("li",[_._v("如果"),e("code",{pre:!0},[_._v("l==r")]),_._v("且"),e("code",{pre:!0},[_._v("a[l]==aim")]),_._v("那么"),e("code",{pre:!0},[_._v("aim")]),_._v("的下标就是l。如果"),e("code",{pre:!0},[_._v("a[l]!=aim")]),_._v("那么数组中没有"),e("code",{pre:!0},[_._v("aim")])]),_._v(" "),e("li",[_._v("如果"),e("code",{pre:!0},[_._v("l!=r")]),_._v("那么令"),e("code",{pre:!0},[_._v("mid=(l+r)/2")]),_._v("，比较"),e("code",{pre:!0},[_._v("a[mid]")]),_._v("和"),e("code",{pre:!0},[_._v("aim")]),_._v(" "),e("ul",[e("li",[_._v("如果"),e("code",{pre:!0},[_._v("a[mid]>aim")]),_._v("，令"),e("code",{pre:!0},[_._v("r=mid-1")])]),_._v(" "),e("li",[_._v("如果"),e("code",{pre:!0},[_._v("a[mid]<aim")]),_._v("，令"),e("code",{pre:!0},[_._v("l=mid+1")])])])])])])]),_._v(" "),e("p",[_._v("复杂度O(logn)")]),_._v(" "),e("h2",{attrs:{id:"大整数乘法"}},[_._v("大整数乘法")]),_._v(" "),e("p",[_._v("使用加法换乘法的思想")]),_._v(" "),e("p",[_._v("两个"),e("code",{pre:!0},[_._v("n")]),_._v("位二进制大整数分别为"),e("code",{pre:!0},[_._v("x")]),_._v("和"),e("code",{pre:!0},[_._v("y")]),_._v("，把"),e("code",{pre:!0},[_._v("x")]),_._v("和"),e("code",{pre:!0},[_._v("y")]),_._v("分别均分成两部分，即"),e("code",{pre:!0},[_._v("x")]),_._v("的左边"),e("code",{pre:!0},[_._v("n/2")]),_._v("位为"),e("code",{pre:!0},[_._v("a")]),_._v("，右边"),e("code",{pre:!0},[_._v("n/2")]),_._v("为"),e("code",{pre:!0},[_._v("b")]),_._v("，记为"),e("code",{pre:!0},[_._v("x=ab")]),_._v("。同理令"),e("code",{pre:!0},[_._v("y=cd")]),_._v("。则"),e("code",{pre:!0},[_._v("x*y")]),_._v("可以计算为")]),_._v(" "),e("pre",[e("code",{pre:!0},[_._v("x = a * 2^(n/2) + b\ny = c * 2^(n/2) + d\nx * y = a*c*2^n + (b*c+a*d)*2^(n/2) + b*d\n")])]),_._v(" "),e("p",[_._v("上式包含四次"),e("code",{pre:!0},[_._v("n/2")]),_._v("规模的乘法，计算发现"),e("code",{pre:!0},[_._v("T(n)=4T(n/2)+O(n)")]),_._v("，"),e("code",{pre:!0},[_._v("T(n)=O(n^2)")]),_._v("，没有改进")]),_._v(" "),e("p",[_._v("如果要改进，必须减少乘法次数。改进方案如下")]),_._v(" "),e("pre",[e("code",{pre:!0},[_._v("x * y = a*c*2^n + ((a-b)(d-c) + a*c + b*d)*2^(n/2) + b*d\n")])]),_._v(" "),e("p",[_._v("式中"),e("code",{pre:!0},[_._v("a*c")]),_._v("和"),e("code",{pre:!0},[_._v("b*d")]),_._v("均出现了两次，只需要计算一次保存结果就行了。所以一共出现了三次规模"),e("code",{pre:!0},[_._v("n/2")]),_._v("的乘法，所以"),e("code",{pre:!0},[_._v("T(n)=3T(n/2)+O(n)")]),_._v("，复杂度"),e("code",{pre:!0},[_._v("T(n)=O(n^1.59)")])]),_._v(" "),e("h2",{attrs:{id:"合并排序"}},[_._v("合并排序")]),_._v(" "),e("p",[_._v("最小子问题规模为2，只要简单比大小就可以把两个元素排序")]),_._v(" "),e("p",[_._v("思想是每次把问题拆分成两个（相等的）子问题，把两个子序列排序之后合并")]),_._v(" "),e("p",[_._v("复杂度"),e("code",{pre:!0},[_._v("T(n)=2T(n/2)+O(n)")]),_._v("具体计算得到"),e("code",{pre:!0},[_._v("T(n)=O(nlogn)")])]),_._v(" "),e("p",[_._v("需要辅助空间O(n)")]),_._v(" "),e("p",[_._v("特点")]),_._v(" "),e("ul",[e("li",[_._v("分解简单")]),_._v(" "),e("li",[_._v("合并复杂")])]),_._v(" "),e("h2",{attrs:{id:"快速排序"}},[_._v("快速排序")]),_._v(" "),e("p",[_._v("以升序为例")]),_._v(" "),e("p",[_._v("按照基准元素把序列划分为三个子序列"),e("code",{pre:!0},[_._v("a[l:q-1], a[q], a[q+1, r]")]),_._v("，其中"),e("code",{pre:!0},[_._v("a[l:q-1]")]),_._v("中所有元素小于"),e("code",{pre:!0},[_._v("a[q]")]),_._v("，"),e("code",{pre:!0},[_._v("a[q+1:r]")]),_._v("中所有元素大于"),e("code",{pre:!0},[_._v("a[q]")]),_._v("。")]),_._v(" "),e("p",[_._v("策略：指针i从左向右搜索，指针j从右向左搜索，当"),e("code",{pre:!0},[_._v("a[i]>a[q]&&a[j]<a[q]")]),_._v("的时候交换"),e("code",{pre:!0},[_._v("a[i]")]),_._v("与"),e("code",{pre:!0},[_._v("a[j]")]),_._v("。")]),_._v(" "),e("p",[_._v("个人感觉这个策略没有学习数据结构时的那个交替的策略好")]),_._v(" "),e("p",[_._v("改进策略")]),_._v(" "),e("ul",[e("li",[_._v("判断子序列是否已经有序")]),_._v(" "),e("li",[_._v("随机选择基准元素")])]),_._v(" "),e("p",[_._v("时间复杂性")]),_._v(" "),e("ul",[e("li",[_._v("最坏 O(n^2)")]),_._v(" "),e("li",[_._v("平均 O(nlogn)")])]),_._v(" "),e("p",[_._v("辅助空间O(n)或O(logn)")]),_._v(" "),e("h2",{attrs:{id:"线性时间选择"}},[_._v("线性时间选择")]),_._v(" "),e("p",[_._v("从快速排序的思想延伸而来。用于寻找序列中第"),e("code",{pre:!0},[_._v("k")]),_._v("大的元素而不需要把整个序列完全排序。")]),_._v(" "),e("p",[_._v("思路：和快排类似，选择基准元素并把序列分为3份。目标元素在其中一份中，以此做到减治")]),_._v(" "),e("p",[_._v("基准元素的选择：把序列元素以5个一组分组，用任意排序方法（如冒泡）把所有组的5个元素排序，取出所有组的中位数，并求这些中位数的中位数。")]),_._v(" "),e("p",[_._v("优化：当序列长度小于指定值（理论上应取20）时直接简单排序求第k个元素")]),_._v(" "),e("p",[_._v("复杂度"),e("code",{pre:!0},[_._v("T(n)=O(n)")])]),_._v(" "),e("h2",{attrs:{id:"平面最近点对略"}},[_._v("平面最近点对（略）")]),_._v(" "),e("h3",{attrs:{id:"面向一维的算法"}},[_._v("面向一维的算法")]),_._v(" "),e("p",[_._v("寻找坐标中位数m作为分割点把所有点分成两部分")]),_._v(" "),e("h2",{attrs:{id:"矩阵乘法略"}},[_._v("矩阵乘法（略）")]),_._v(" "),e("h2",{attrs:{id:"棋盘覆盖略"}},[_._v("棋盘覆盖（略）")])])}]};_.exports={attributes:{layout:"collection",title:"递归与分治",collection:"AlgorithmDesignAndAnalyze"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);