(window.webpackJsonp=window.webpackJsonp||[]).push([[86,809,810],{1021:function(e,t,v){e.exports=v.p+"img/95dbe82.png"},1022:function(e,t,v){e.exports=v.p+"img/8d3f147.png"},1178:function(e,t,v){const r={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"效果"}},[e._v("效果")]),e._v(" "),r("p",[e._v("以前如果想编辑服务器文件，通常都是本地编辑（因为可以使用IDE），然后：")]),e._v(" "),r("ul",[r("li",[e._v("本地git push，远端git pull")]),e._v(" "),r("li",[e._v("使用ftp传输")]),e._v(" "),r("li",[e._v("使用scp传输")]),e._v(" "),r("li",[e._v("本地copy，使用终端paste(仅限文本)")])]),e._v(" "),r("p",[e._v("但是现在可以直接使用VSCode连接远端服务器啦木哈哈哈哈哈哈")]),e._v(" "),r("p",[r("img",{attrs:{src:v(1021),alt:""}})]),e._v(" "),r("p",[e._v("此处使用密钥对连接了名为"),r("code",{pre:!0},[e._v("Ali")]),e._v("的测试服务器，可以直接在VSCode里面使用bash并编辑服务端文件")]),e._v(" "),r("h2",{attrs:{id:"需要的vscode插件"}},[e._v("需要的VSCode插件")]),e._v(" "),r("p",[e._v("理论上只需要"),r("a",{attrs:{href:""}},[e._v("Remote - SSH")]),e._v("插件应该就行了吧。我当时直接安装了"),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack"}},[e._v("Remote Development")]),e._v("插件，包括了Remote - SSH。")]),e._v(" "),r("p",[e._v("装好了之后VSCode左下角就会出现远程连接图标")]),e._v(" "),r("h2",{attrs:{id:"配置"}},[e._v("配置")]),e._v(" "),r("p",[e._v("点击左下角的连接图标，选择"),r("code",{pre:!0},[e._v("Remote-SSH: Open Configuration File...")]),e._v("，选择合适的配置文件进行编辑")]),e._v(" "),r("p",[r("img",{attrs:{src:v(1022),alt:""}})]),e._v(" "),r("p",[e._v("配置文件中也给出了配置文件的格式的"),r("a",{attrs:{href:"https://linux.die.net/man/5/ssh_config"}},[e._v("文档连接")])]),e._v(" "),r("p",[e._v("对于简单的配置，可以给服务器起个名字，指定IP，指定用户即可")]),e._v(" "),r("pre",[r("code",{pre:!0},[e._v("Host CustomServerName\n\t\tHostName 123.123.123.123\n\t\tUser your-username\n")])]),e._v(" "),r("p",[e._v("如果使用密钥对登录，需要指定密钥文件路径。windows系统也可以像linux一样使用"),r("code",{pre:!0},[e._v("/")]),e._v("作为路径分隔符：")]),e._v(" "),r("pre",[r("code",{pre:!0},[e._v("Host Ali\n\t\tHostName 123.123.123.123\n\t\tUser root\n\t\tIdentityFile D:/some/path/key.file\n")])]),e._v(" "),r("h2",{attrs:{id:"密钥文件的权限问题"}},[e._v("密钥文件的权限问题")]),e._v(" "),r("p",[e._v("如果密钥文件权限过于开放，连接时会报错")]),e._v(" "),r("p",[e._v("Linux系统下使用"),r("code",{pre:!0},[e._v("chmod")]),e._v("命令即可修改文件权限，如"),r("code",{pre:!0},[e._v("chmod 400 filename")])]),e._v(" "),r("p",[e._v("windows下没有"),r("code",{pre:!0},[e._v("chmod")]),e._v("命令（没有测试WSL能不能这么改权限），可以使用资源管理器修改权限")]),e._v(" "),r("ol",[r("li",[e._v("在密钥文件的右键菜单中选择"),r("code",{pre:!0},[e._v("属性-安全-高级")])]),e._v(" "),r("li",[e._v("修改"),r("code",{pre:!0},[e._v("所有者")]),e._v("，在弹出窗口中点击"),r("code",{pre:!0},[e._v("高级-立即查找")]),e._v("，选中目标用户后确定（目标用户可能在最下面）")]),e._v(" "),r("li",[e._v("点击"),r("code",{pre:!0},[e._v("禁用继承")]),e._v("，删除所有通过继承得到的权限。这时权限条目可能一条权限也没有了")]),e._v(" "),r("li",[e._v("点击"),r("code",{pre:!0},[e._v("添加-选择主体")]),e._v("，使用步骤2同样的操作选择目标用户，允许"),r("code",{pre:!0},[e._v("读取")]),e._v("与"),r("code",{pre:!0},[e._v("读取和执行")])])]),e._v(" "),r("h2",{attrs:{id:"参考"}},[e._v("参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://superuser.com/questions/1296024/windows-ssh-permissions-for-private-key-are-too-open"}},[e._v("Windows SSH: Permissions for ‘private-key’ are too open")])])])])}]};e.exports={attributes:{date:"2019-09-28T00:00:00.000Z",title:"使用VSCode远程工作",description:"告别文件传输的痛苦",tags:["windows","VSCode"]},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);