/*! kui-vue v1.6.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([11],{RRjN:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=v("vn/w"),c=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={data:function(){return{code:c.default,checked:!1}},methods:{test:function(){var t=!this.checked;this.checked=t}}}},hr93:function(t,e,v){"use strict";v.d(e,"a",function(){return s}),v.d(e,"b",function(){return c});var s=function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[v("h2",[t._v("Switch 开关")]),t._v(" "),v("Alert",[t._v("注意：没有使用 kui-loader 时，必须使用 k-switch 标签。")]),t._v(" "),v("h3",[t._v("代码示例")]),t._v(" "),v("Demo",{attrs:{title:"基本用法"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("p",[t._v(t._s(t.checked))]),t._v(" "),v("k-switch",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._v(" "),v("Button",{on:{click:t.test}},[t._v("test")])],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可使用\n      "),v("code",[t._v("v-model")]),t._v("进行数据双向绑定")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),v("Demo",{attrs:{title:"主题"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("k-switch",{attrs:{value:!0}}),t._v(" "),v("k-switch",{attrs:{value:!0,type:"success"}}),t._v(" "),v("k-switch",{attrs:{value:!0,type:"danger"}}),t._v(" "),v("k-switch",{attrs:{value:!0,type:"warning"}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n      "),v("code",[t._v("type")]),t._v("属性可改变组件主题")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.theme))])]),t._v(" "),v("Demo",{attrs:{title:"文字"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("k-switch",{attrs:{value:!1,"true-text":"是","false-text":"否"}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),v("code",[t._v("true-text")]),t._v("和\n      "),v("code",[t._v("false-text")]),t._v("设置选中和非选中呈现文字")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.text))])]),t._v(" "),v("Demo",{attrs:{title:"禁用"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("k-switch",{attrs:{value:!1,disabled:""}}),t._v(" "),v("k-switch",{attrs:{value:!0,disabled:""}}),t._v(" "),v("k-switch",{attrs:{value:!0,disabled:"","true-text":"是","false-text":"否"}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过"),v("code",[t._v("disabled")]),t._v("属性设置组件是否被禁用")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])]),t._v(" "),v("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},c=[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"table-border"},[v("table",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("value")]),t._v(" "),v("td",[t._v("指定当前是否选中，可以使用 v-model 双向绑定数据")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("禁用开关 ")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("主题颜色 可传入 success，warning，danger，primary ")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("true-text")]),t._v(" "),v("td",[t._v("当value为true时 ，显示的文字")]),t._v(" "),v("td",[t._v("String ")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("false-text")]),t._v(" "),v("td",[t._v("当value为false时 ，显示的文字")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("change")]),t._v(" "),v("td",[t._v("当value 改变时触发,返回true | false")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])])])])}]},"m+yc":function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=v("RRjN"),c=v.n(s);for(var d in s)"default"!==d&&function(t){v.d(e,t,function(){return s[t]})}(d);var _=v("hr93"),a=v("XyMi"),l=Object(a.a)(c.a,_.a,_.b,!1,null,null,null);e.default=l.exports},"vn/w":function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};s.base='<p>{{checked}}</p>\n<Switch v-model="checked"></Switch>\n<Button @click="checked=!checked">test</Button>',s.theme='<Switch :value="true"></Switch>\n<Switch :value="true" type="success"></Switch>\n<Switch :value="true" type="danger"></Switch>\n<Switch :value="true" type="warning"></Switch>',s.text='<Switch :value="false" true-text="是" false-text="否"></Switch>',s.disabled='<Switch :value="false" disabled></Switch>\n<Switch :value="true" disabled></Switch>\n<Switch :value="true" disabled true-text="是" false-text="否"></Switch>',e.default=s}});