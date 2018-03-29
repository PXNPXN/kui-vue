/*! kyui v1.5.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([15],{BCpf:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{demo1:'<Button @click="info" type="primary">普通提示 </Button>\n<script>\ninfo() {\n    this.$Message.info("普通提示");\n}\n<\/script>',demo2:'<Button @click="warning" type="warning">警告提示 </Button>\n<Button @click="success" type="success">成功提示 </Button>\n<Button @click="error" type="danger">错误提示 </Button>\n<script>\nwarning() {\n    this.$Message.warning("警告提示");\n  },\nsuccess() {\n  this.$Message.success("成功提示");\n},\nerror() {\n  this.$Message.error("错误提示");\n}\n<\/script>',demo3:'<Button @click="config" type="success">10秒后关闭</Button>\n<Button @click="config2" type="primary">5秒后关闭</Button>\n<script>\nconfig() {\n  this.$Message.success("10秒后关闭的", 10);\n},\nconfig2() {\n  this.$Message.config({\n    type: "info",\n    duration: 5,\n    content: "5秒后关闭的"\n  });\n},\nconfig3() {\n      this.$Message.config({\n        type: "info",\n        duration: 5,\n        closable: true,\n        content: "手动关闭"\n      });\n    }\n<\/script>',demo4:"this.$Message.info(content, [duration], onClose)\nthis.$Message.success(content, [duration], onClose)\nthis.$Message.warning(content, [duration], onClose)\nthis.$Message.error(content, [duration], onClose)",demo5:"this.$Message.config(options)\nthis.$Message.destroy()"}},methods:{info:function(){this.$Message.info("普通提示")},warning:function(){this.$Message.warning("警告提示")},success:function(){this.$Message.success("成功提示")},error:function(){this.$Message.error("错误提示")},config:function(){this.$Message.success("10秒后关闭的",10)},config2:function(){this.$Message.config({type:"info",duration:5,content:"5秒后关闭的"})},config3:function(){this.$Message.config({type:"info",duration:0,closable:!0,content:"手动关闭"})}}}},JUFQ:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("BCpf"),o=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(n,t,function(){return s[t]})}(i);var c=e("khVv"),r=e("XyMi"),_=Object(r.a)(o.a,c.a,c.b,!1,null,null,null);n.default=_.exports},khVv:function(t,n,e){"use strict";e.d(n,"a",function(){return s}),e.d(n,"b",function(){return o});var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("Message 全局提示")]),t._v(" "),e("h3",[t._v("基础")]),t._v(" "),e("Button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("普通提示 ")]),t._v(" "),e("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.demo1))]),t._v(" "),e("h3",[t._v("提示类型")]),t._v(" "),e("div",[e("Button",{attrs:{type:"warning"},on:{click:t.warning}},[t._v("警告提示 ")]),t._v(" \n    "),e("Button",{attrs:{type:"success"},on:{click:t.success}},[t._v("成功提示 ")]),t._v(" \n    "),e("Button",{attrs:{type:"danger"},on:{click:t.error}},[t._v("错误提示 ")]),t._v(" \n  ")],1),t._v(" "),e("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.demo2))]),t._v(" "),e("h3",[t._v("自定义时长")]),t._v(" "),e("Button",{attrs:{type:"success"},on:{click:t.config}},[t._v("10秒后关闭")]),t._v(" \n  "),e("Button",{attrs:{type:"primary"},on:{click:t.config2}},[t._v("5秒后关闭")]),t._v(" \n  "),e("Button",{attrs:{type:"primary"},on:{click:t.config3}},[t._v("手动关闭")]),t._v(" \n  "),e("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.demo3))]),t._v(" "),e("h3",[t._v("API")]),t._v(" "),e("Alert",[t._v("组件提供了一些静态方法，使用方式如下")]),t._v(" "),e("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.demo4))]),t._v(" "),e("Alert",[t._v("另外提供了全局配置和全局销毁的方法：")]),t._v(" "),e("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.demo5))]),t._v(" "),e("p",[t._v("参数 options 为对象，具体说明如下：")]),t._v(" "),t._m(0)],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("提示类型，提供 info、success、error、warning四种可选类型")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("info")])]),t._v(" "),e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("提示内容")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("duration")]),t._v(" "),e("td",[t._v("自动关闭的延时，单位秒")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("3")])]),t._v(" "),e("tr",[e("td",[t._v("closable")]),t._v(" "),e("td",[t._v("是否可手动关闭")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("onClose")]),t._v(" "),e("td",[t._v("关闭时的回调")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])])}]}});