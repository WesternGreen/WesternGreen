(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1063:function(t,n){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"目标"}},[t._v("目标")]),t._v(" "),e("p",[t._v("最近在写"),e("a",{attrs:{href:"https://pypi.org/project/refdict/"}},[t._v("refdict")]),t._v("，希望兼容"),e("code",{pre:!0},[t._v("dict")]),t._v("/"),e("code",{pre:!0},[t._v("list")]),t._v("/"),e("code",{pre:!0},[t._v("tuple")]),t._v("/"),e("code",{pre:!0},[t._v("str")])]),t._v(" "),e("p",[t._v("目标："),e("code",{pre:!0},[t._v("refdict")]),t._v("的根元素是"),e("code",{pre:!0},[t._v("dict")]),t._v("时可以像使用"),e("code",{pre:!0},[t._v("dict.pop()")]),t._v("和"),e("code",{pre:!0},[t._v("dict.keys()")]),t._v("一样使用"),e("code",{pre:!0},[t._v("refdict.pop()")]),t._v("和"),e("code",{pre:!0},[t._v("refdict.keys()")]),t._v("，根元素是"),e("code",{pre:!0},[t._v("list")]),t._v("时可以像使用"),e("code",{pre:!0},[t._v("list.pop()")]),t._v("和"),e("code",{pre:!0},[t._v("list.append()")]),t._v("一样使用"),e("code",{pre:!0},[t._v("refdict.pop()")]),t._v("和"),e("code",{pre:!0},[t._v("refdict.append()")])]),t._v(" "),e("p",[t._v("而如果"),e("code",{pre:!0},[t._v("refdict")]),t._v("根元素是"),e("code",{pre:!0},[t._v("dict")]),t._v("时不能使用"),e("code",{pre:!0},[t._v("append")]),t._v("，根元素是"),e("code",{pre:!0},[t._v("list")]),t._v("时不能使用"),e("code",{pre:!0},[t._v("keys")])]),t._v(" "),e("p",[t._v("即，"),e("code",{pre:!0},[t._v("refdict")]),t._v("可以调用"),e("strong",[t._v("根元素的任意非内置函数")])]),t._v(" "),e("h2",{attrs:{id:"实现"}},[t._v("实现")]),t._v(" "),e("h3",{attrs:{id:"背景知识"}},[t._v("背景知识")]),t._v(" "),e("p",[t._v("python类有一个内置函数（钩子）"),e("code",{pre:!0},[t._v("__getattr__")]),t._v("，在形如"),e("code",{pre:!0},[t._v("someclass.undefined")]),t._v("出现的时候被调用。比如"),e("code",{pre:!0},[t._v("str.keys")]),t._v("，因为"),e("code",{pre:!0},[t._v("str")]),t._v("类没有"),e("code",{pre:!0},[t._v("keys")]),t._v("这一成员，所以会调用"),e("code",{pre:!0},[t._v("str")]),t._v("类的"),e("code",{pre:!0},[t._v("__getattr__")]),t._v("函数，把"),e("code",{pre:!0},[t._v("keys")]),t._v("作为字符串传入"),e("code",{pre:!0},[t._v("__getattr__")]),t._v("函数")]),t._v(" "),e("h3",{attrs:{id:"代码与分析"}},[t._v("代码与分析")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{staticClass:"language-python"},[e("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),e("span",{staticClass:"token class-name"},[t._v("T")]),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("\n\t"),e("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("__init__")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("self"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" data"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("\n\t\tself"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("data "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" data\n\t"),e("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("__getattr__")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("self"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("\n\t\t"),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"token builtin"},[t._v("eval")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token string"},[t._v("'self.data.'")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("+")]),t._v(" value"),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\nt "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" T"),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),e("span",{staticClass:"token string"},[t._v("'key'")]),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'value'")]),e("span",{staticClass:"token punctuation"},[t._v("}")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\nt"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("pop"),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token string"},[t._v("'key'")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token comment"},[t._v("# == dict.pop('key')")]),t._v("\n")])]),t._v(" "),e("p",[t._v("执行"),e("code",{pre:!0},[t._v("t.pop('key')")]),t._v("的时候，因为"),e("code",{pre:!0},[t._v("T")]),t._v("类本身没有"),e("code",{pre:!0},[t._v("pop")]),t._v("成员，所以调用"),e("code",{pre:!0},[t._v("__getattr__")]),t._v("函数，把"),e("code",{pre:!0},[t._v("pop")]),t._v("以字符串的形式作为参数"),e("code",{pre:!0},[t._v("value")]),t._v("。那么"),e("code",{pre:!0},[t._v("'self.data.' + value")]),t._v("就是"),e("code",{pre:!0},[t._v("'self.data.pop'")]),t._v("，通过"),e("code",{pre:!0},[t._v("eval")]),t._v("函数返回"),e("code",{pre:!0},[t._v("dict.pop")]),t._v("函数，这样"),e("code",{pre:!0},[t._v("t.pop")]),t._v("就变成了"),e("code",{pre:!0},[t._v("dict.pop")]),t._v("，就可以正确执行"),e("code",{pre:!0},[t._v("dict.pop('key')")])]),t._v(" "),e("h3",{attrs:{id:"效果"}},[t._v("效果")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{staticClass:"language-python"},[t._v("t1 "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" T"),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),e("span",{staticClass:"token string"},[t._v("'key'")]),e("span",{staticClass:"token punctuation"},[t._v(":")]),e("span",{staticClass:"token string"},[t._v("'value'")]),e("span",{staticClass:"token punctuation"},[t._v("}")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\nt1"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("keys"),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token comment"},[t._v("# == t1.data.keys() => ['key']")]),t._v("\nt1"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("append"),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token string"},[t._v("'123'")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token comment"},[t._v("# == t1.data.append('123') => error")]),t._v("\n\nt2 "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" T"),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v("[")]),e("span",{staticClass:"token punctuation"},[t._v("]")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\nt2"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("append"),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token number"},[t._v("456")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token comment"},[t._v("# == t2.data.append(456)")]),t._v("\nt2"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("keys"),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token comment"},[t._v("# == t2.data.keys() => error")]),t._v("\n")])]),t._v(" "),e("p",[t._v("相比于多继承，此模板方案在没有对应函数的时候可以报错，不会出现多继承时出现的函数同名冲突")]),t._v(" "),e("h3",{attrs:{id:"缺陷"}},[t._v("缺陷")]),t._v(" "),e("p",[t._v("仅能调用非内置函数，对于内置函数（比如"),e("code",{pre:!0},[t._v("__str__")]),t._v("或者"),e("code",{pre:!0},[t._v("__contains__")]),t._v("）无效。即"),e("code",{pre:!0},[t._v("print(t)")]),t._v("调用"),e("code",{pre:!0},[t._v("t.__str__")]),t._v("并不会触发"),e("code",{pre:!0},[t._v("t.__getattr__")]),t._v("，所以对于内置函数还是需要手动实现一遍")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[t._v("参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/goodlixueyong/article/details/52589979"}},[t._v("浅析Python运算符重载")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/885d59db57fc"}},[t._v("Python"),e("code",{pre:!0},[t._v("__getattribute__")]),t._v("vs"),e("code",{pre:!0},[t._v("__getattr__")]),t._v("浅谈")])])])])}]};t.exports={attributes:{date:"2019-05-24T00:00:00.000Z",title:"使用python实现模板类",description:"可以调用目标类的非内置函数",tags:["python"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);