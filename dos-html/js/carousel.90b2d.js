/*! kui-vue v1.8.3 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"0UDH":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={base:'<Carousel>\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>',vertical:'<Carousel vertical>\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>',autoplay:'<Carousel autoplay>\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>',radius:'<Carousel dotsType="radius">\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>'};e.default=a},"8Cjk":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".k-carousel-item-demo{height:160px;line-height:160px;background:#6c98d6;text-align:center;font-size:20px;color:#fff}",""])},BybE:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[s("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},o=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return o})},C8VU:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=s("z7BB"),l=(a=o)&&a.__esModule?a:{default:a};e.default=l.default},DbLR:function(t,e,s){"use strict";var a=s("RwYK");s.n(a).a},RwYK:function(t,e,s){var a=s("8Cjk");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s("SZ7m").default)("765ac2ea",a,!0,{})},SZ3q:function(t,e,s){"use strict";s.r(e);var a=s("x2VL"),o=s.n(a);for(var l in a)"default"!==l&&function(t){s.d(e,t,function(){return a[t]})}(l);e.default=o.a},"U9/v":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=u(s("YEIV")),o=u(s("cF/K")),l=u(s("Ff65")),r=u(s("7+I9"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:r.default},components:{Code:o.default,Collapse:l.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,a.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},mm18:function(t,e,s){"use strict";s.r(e);var a=s("q5sj"),o=s("SZ3q");for(var l in o)"default"!==l&&function(t){s.d(e,t,function(){return o[t]})}(l);s("DbLR");var r=s("KHd+"),u=Object(r.a)(o.default,a.a,a.b,!1,null,null,null);e.default=u.exports},q5sj:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Carousel 走马灯")]),t._v(" "),s("p",[t._v("就是传说中的大图轮播")]),t._v(" "),s("h3",[t._v("代码示例")]),t._v(" "),s("Row",{attrs:{gutter:"8"}},[s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{layout:"vertical",title:"基本"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("1")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("2")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("3")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("4")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("最基本的用法。")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),s("Demo",{attrs:{layout:"vertical",title:"垂直"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",{attrs:{vertical:""}},[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("1")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("2")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("3")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("4")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("垂直显示,此时不显示左右箭头")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.vertical))])])],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{layout:"vertical",title:"自动播放"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",{attrs:{autoplay:""}},[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("1")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("2")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("3")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("4")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("定时切换下一张。")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.autoplay))])]),t._v(" "),s("Demo",{attrs:{layout:"vertical",title:"圆形指示器"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",{attrs:{dotsType:"radius"}},[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("1")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("2")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("3")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("4")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("圆形指示器")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.radius))])])],1)],1),t._v(" "),s("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据")]),t._v(" "),s("td",[t._v("String,Number")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("loop")]),t._v(" "),s("td",[t._v("是否开启循环")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("autoplay")]),t._v(" "),s("td",[t._v("是否自动切换")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("speed")]),t._v(" "),s("td",[t._v("自动切换的时间间隔，单位为毫秒")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("2000")])]),t._v(" "),s("tr",[s("td",[t._v("dots-type")]),t._v(" "),s("td",[t._v("指示器的类型，"),s("code",[t._v("rect")]),t._v(" 为方块，"),s("code",[t._v("radius")]),t._v("为圆点")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("2000")])])])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return o})},sOOp:function(t,e,s){"use strict";s.r(e);var a=s("U9/v"),o=s.n(a);for(var l in a)"default"!==l&&function(t){s.d(e,t,function(){return a[t]})}(l);e.default=o.a},x2VL:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(s("C8VU")),o=l(s("0UDH"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:a.default},data:function(){return{code:o.default}}}},z7BB:function(t,e,s){"use strict";s.r(e);var a=s("BybE"),o=s("sOOp");for(var l in o)"default"!==l&&function(t){s.d(e,t,function(){return o[t]})}(l);var r=s("KHd+"),u=Object(r.a)(o.default,a.a,a.b,!1,null,null,null);e.default=u.exports}}]);