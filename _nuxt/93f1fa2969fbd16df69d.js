(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1073:function(t,r,e){"use strict";e.r(r);var n=e(1074),o=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(r,t,(function(){return n[t]}))}(c);r.default=o.a},1074:function(t,r){},1283:function(t,r,e){"use strict";e.d(r,"a",(function(){return n})),e.d(r,"b",(function(){return o}));var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h1",{staticClass:"ml-5"},[t._v("Friends")]),t._v(" "),e("v-divider",{staticClass:"my-3"}),t._v(" "),e("div",{staticClass:"d-flex flex-wrap"},t._l(t.$store.state.config.friends,(function(r){return e("v-card",{key:r.title,staticClass:"mx-3 my-3 flex-grow-1",attrs:{href:r.url,hover:""}},[e("v-card-title",[t._v(t._s(r.title))]),t._v(" "),e("v-card-subtitle",[t._v(t._s(r.description))])],1)})),1)],1)},o=[]},1284:function(t,r,e){"use strict";e.r(r);var n=e(1283),o=e(1073);for(var c in o)"default"!==c&&function(t){e.d(r,t,(function(){return o[t]}))}(c);var d=e(43),l=e(49),v=e.n(l),h=e(352),f=e(351),_=e(339),component=Object(d.a)(o.default,n.a,n.b,!1,null,null,null);r.default=component.exports,v()(component,{VCard:h.a,VCardSubtitle:f.a,VCardTitle:f.c,VDivider:_.a})},321:function(t,r,e){"use strict";var n=e(320);r.a=n.a},351:function(t,r,e){"use strict";e.d(r,"a",(function(){return d})),e.d(r,"b",(function(){return l})),e.d(r,"c",(function(){return v}));var n=e(352),o=e(0),c=Object(o.g)("v-card__actions"),d=Object(o.g)("v-card__subtitle"),l=Object(o.g)("v-card__text"),v=Object(o.g)("v-card__title");n.a},352:function(t,r,e){"use strict";e(10),e(9),e(7),e(4),e(8);var n=e(1),o=(e(14),e(353),e(140)),c=e(2),d=e(321),l=c.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),v=e(45),h=e(3);function f(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}r.a=Object(h.a)(l,v.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return _(_({"v-card":!0},v.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},o.a.options.computed.classes.call(this))},styles:function(){var style=_({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var r=this.generateRouteLink(),e=r.tag,data=r.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},353:function(t,r,e){var content=e(354);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("e23b7040",content,!0,{sourceMap:!1})},354:function(t,r,e){(r=e(11)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--light.v-card.v-card--outlined{border:thin solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:thin solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""]),t.exports=r}}]);