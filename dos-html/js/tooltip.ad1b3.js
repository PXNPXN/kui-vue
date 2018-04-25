/*! kui-vue v1.6.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([7],{"1OfP":function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n("w1qg"),l=function(t){return t&&t.__esModule?t:{default:t}}(e);o.default={data:function(){return{code:l.default}},methods:{ok:function(){this.$Message.info("你点了确定")},cancel:function(){this.$Message.info("你点了取消")}}}},qm3R:function(t,o,n){"use strict";n.d(o,"a",function(){return e}),n.d(o,"b",function(){return l});var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("h2",[t._v("Tooltip 文字提示")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{title:"基本"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Tooltip",{attrs:{content:"我是提示内容"}},[n("p",[t._v("鼠标划过，我是一段文字")])])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("Tooltip基本使用")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{title:"位置"}},[n("div",{staticStyle:{overflow:"hidden"},attrs:{slot:"content"},slot:"content"},[n("div",{staticStyle:{"margin-left":"80px","white-space":"nowrap"}},[n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"top-left"}},[n("Button",[t._v("上左")])],1),t._v(" "),n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"top"}},[n("Button",[t._v("上边")])],1),t._v(" "),n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"top-right"}},[n("Button",[t._v("上右")])],1)],1),t._v(" "),n("div",{staticStyle:{float:"left",height:"150px",width:"80px"}},[n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"left-top"}},[n("Button",[t._v("左上")])],1),t._v(" "),n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"left"}},[n("Button",[t._v("左边")])],1),t._v(" "),n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"left-bottom"}},[n("Button",[t._v("左下")])],1)],1),t._v(" "),n("div",{staticStyle:{"margin-left":"300px",height:"150px",width:"80px"}},[n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"right-top"}},[n("Button",[t._v("右上")])],1),t._v(" "),n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"right"}},[n("Button",[t._v("右边")])],1),t._v(" "),n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"right-bottom"}},[n("Button",[t._v("右下")])],1)],1),t._v(" "),n("div",{staticStyle:{"margin-left":"80px","white-space":"nowrap"}},[n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"bottom-left"}},[n("Button",[t._v("下左")])],1),t._v(" "),n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"bottom"}},[n("Button",[t._v("下边")])],1),t._v(" "),n("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"bottom-right"}},[n("Button",[t._v("下右")])],1)],1)]),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("code",[t._v("Tooltip")]),t._v("的位置一共有12种，通过"),n("code",[t._v("placement")]),t._v("控制")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.position))])]),t._v(" "),n("Demo",{attrs:{title:"多行显示"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Tooltip",[n("Button",[t._v("我是个演员")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("p",[t._v("我独占一行，然后....")]),t._v(" "),n("p",[t._v("我独占一行，然后....")])])],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过"),n("code",[t._v("slot=content")]),t._v("来自定义展示内容")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.slot))])]),t._v(" "),n("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},l=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("trigger")]),t._v(" "),n("td",[t._v("触发方式，可选值为hover（悬停）click（点击）")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("hover")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("显示的正文内容")]),t._v(" "),n("td",[t._v("String ")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("placement")]),t._v(" "),n("td",[t._v("提示框出现的位置，可选值为top，top-left，top-right，bottom，bottom-left，bottom-right，left，left-top，left-bottom，right，right-top，right-bottom")]),t._v(" "),n("td",[t._v("String ")]),t._v(" "),n("td",[t._v("top")])]),t._v(" "),n("tr",[n("td",[t._v("width")]),t._v(" "),n("td",[t._v("宽度，最小宽度为 150px")]),t._v(" "),n("td",[t._v("String，Number ")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("transfer")]),t._v(" "),n("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")])])])])}]},uPLU:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n("1OfP"),l=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(o,t,function(){return e[t]})}(i);var p=n("qm3R"),v=n("XyMi"),c=Object(v.a)(l.a,p.a,p.b,!1,null,null,null);o.default=c.exports},w1qg:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e={};e.base='<Tooltip  content="我是提示内容">\n    <p>鼠标划过，我是一段文字</p>\n</Tooltip>',e.position='<div style="margin-left:80px;white-space: nowrap;">\n    <Tooltip  content="Tooltip的显示内容" placement="top-left">\n        <Button>上左</Button>\n    </Tooltip>\n    <Tooltip  content="Tooltip的显示内容" placement="top">\n        <Button>上边</Button>\n    </Tooltip>\n    <Tooltip  content="Tooltip的显示内容" placement="top-right">\n        <Button>上右</Button>\n    </Tooltip>\n</div>\n<div style="float:left;height:150px;width:80px;">\n    <Tooltip  content="Tooltip的显示内容" placement="left-top">\n        <Button>左上</Button>\n    </Tooltip>\n    <Tooltip  content="Tooltip的显示内容" placement="left">\n        <Button>左边</Button>\n    </Tooltip>\n    <Tooltip  content="Tooltip的显示内容" placement="left-bottom">\n        <Button>左下</Button>\n    </Tooltip>\n</div>\n<div style="margin-left:300px;height:150px;width:80px;">\n    <Tooltip  content="Tooltip的显示内容" placement="right-top">\n        <Button>右上</Button>\n    </Tooltip>\n    <Tooltip  content="Tooltip的显示内容" placement="right">\n        <Button>右边</Button>\n    </Tooltip>\n    <Tooltip  content="Tooltip的显示内容" placement="right-bottom">\n        <Button>右下</Button>\n    </Tooltip>\n</div>\n<div style="margin-left:80px;white-space: nowrap;">\n    <Tooltip  content="Tooltip的显示内容" placement="bottom-left">\n        <Button>下左</Button>\n    </Tooltip>\n    <Tooltip  content="Tooltip的显示内容" placement="bottom">\n        <Button>下边</Button>\n    </Tooltip>\n    <Tooltip  content="Tooltip的显示内容" placement="bottom-right">\n        <Button>下右</Button>\n    </Tooltip>\n</div>',e.slot='<Tooltip trigger="click">\n<Button>我是个演员</Button>\n<div slot="content">\n  <p>我独占一行，然后....</p>\n  <p>我独占一行，然后....</p>\n</div>\n</Tooltip>',o.default=e}});