/*! kui-vue v1.6.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([9],{BoTT:function(t,e,o){"use strict";o.d(e,"a",function(){return v}),o.d(e,"b",function(){return _});var v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Tag 标签")]),t._v(" "),o("p",[t._v("进行标记和分类的小标签。")]),t._v(" "),o("h3",[t._v("代码示例")]),t._v(" "),o("Demo",{attrs:{title:"基础"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Tag",[t._v("标签1")]),t._v(" "),o("Tag",[t._v("标签2")]),t._v(" "),o("Tag",[t._v("标签3")]),t._v(" "),o("Tag",{attrs:{closeable:""}},[t._v("标签4")])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n            "),o("code",[t._v("closeable")]),t._v("显示关闭按钮，点击隐藏标签，触发\n            "),o("code",[t._v("close")]),t._v("回调")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),o("Demo",{attrs:{title:"颜色"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Tag",{attrs:{color:"blue"}},[t._v("标签1")]),t._v(" "),o("Tag",{attrs:{color:"gray"}},[t._v("标签2")]),t._v(" "),o("Tag",{attrs:{color:"green"}},[t._v("标签3")]),t._v(" "),o("Tag",{attrs:{color:"red"}},[t._v("标签4")]),t._v(" "),o("Tag",{attrs:{color:"orange"}},[t._v("标签5")]),t._v(" "),o("Tag",{attrs:{color:"#2db7f5",closeable:""}},[t._v("自定义")])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n            "),o("code",[t._v("color")]),t._v("定义标签颜色，默认提供5组颜色\n            "),o("code",[t._v("blue")]),t._v(" "),o("code",[t._v("gray")]),t._v(" "),o("code",[t._v("green")]),t._v(" "),o("code",[t._v("red")]),t._v(" "),o("code",[t._v("orange")]),t._v("\n            当然也可以自定义其他颜色\n        ")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.color))])]),t._v(" "),o("Demo",{attrs:{title:"动态添加和删除"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._l(t.count,function(e){return o("Tag",{key:e,attrs:{color:"blue",closeable:""}},[t._v("标签"+t._s(e))])}),t._v(" "),o("Tag",{on:{click:function(e){t.count++}}},[t._v("增加")])],2),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n            "),o("code",[t._v("color")]),t._v("定义标签颜色，默认提供5组颜色\n            "),o("code",[t._v("blue")]),t._v(" "),o("code",[t._v("gray")]),t._v(" "),o("code",[t._v("green")]),t._v(" "),o("code",[t._v("red")]),t._v(" "),o("code",[t._v("orange")]),t._v("\n            当然也可以自定义其他颜色\n        ")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.custom))])]),t._v(" "),o("h3",[t._v("Tag API")]),t._v(" "),t._m(0)],1)},_=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("closeable")]),t._v(" "),o("td",[t._v("是否显示关闭按钮")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("color")]),t._v(" "),o("td",[t._v("标签的颜色，默认提供5组颜色")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("close")]),t._v(" "),o("td",[t._v("关闭标签的回调事件")]),t._v(" "),o("td",[t._v("Function ")]),t._v(" "),o("td",[t._v("-")])])])])}]},Ncm6:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var v=o("OWAS"),_=o.n(v);for(var a in v)"default"!==a&&function(t){o.d(e,t,function(){return v[t]})}(a);var c=o("BoTT"),n=o("XyMi"),r=Object(n.a)(_.a,c.a,c.b,!1,null,null,null);e.default=r.exports},OWAS:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var v=o("o7EU"),_=function(t){return t&&t.__esModule?t:{default:t}}(v);e.default={data:function(){return{code:_.default,count:3}}}},o7EU:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var v={};v.base="<Tag>标签1</Tag>\n<Tag>标签2</Tag>\n<Tag>标签3</Tag>\n<Tag closeable>标签4</Tag>",v.color='<Tag color="blue">标签1</Tag>\n<Tag color="gray">标签2</Tag>\n<Tag color="green">标签3</Tag>\n<Tag color="red">标签4</Tag>\n<Tag color="orange">标签5</Tag>\n<Tag color="#2db7f5" closeable>自定义</Tag>',v.custom='<Tag color="blue" closeable v-for="m in count" :key="m">标签{{m}}</Tag>\n<Tag @click="count++">增加</Tag>\n<script>\nexport default {\n    data() {\n        return {\n            count: 3\n        }\n    }\n}\n<\/script>\n',e.default=v}});