/*! kyui v1.5.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([11],{RQM2:function(t,n,o){"use strict";o.d(n,"a",function(){return e}),o.d(n,"b",function(){return v});var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("h2",[t._v("Poptip 气泡提示")]),t._v(" "),o("h3",[t._v("普通")]),t._v(" "),o("Poptip",{attrs:{trigger:"hover",title:"标题",content:"内容"}},[o("Button",[t._v("hover激活")])],1),t._v(" "),o("Poptip",{attrs:{trigger:"click",title:"标题",content:"内容"}},[o("Button",[t._v("click激活")])],1),t._v(" "),o("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.demo1))]),t._v(" "),o("h3",[t._v("位置")]),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"top-left"}},[o("Button",[t._v("上左")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"top"}},[o("Button",[t._v("上")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"top-right"}},[o("Button",[t._v("上右")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"right-top"}},[o("Button",[t._v("右上")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"right"}},[o("Button",[t._v("右")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"right-bottom"}},[o("Button",[t._v("右下")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"bottom-right"}},[o("Button",[t._v("下右")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"bottom"}},[o("Button",[t._v("下")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"bottom-left"}},[o("Button",[t._v("下左")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"left-bottom"}},[o("Button",[t._v("左下")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"left"}},[o("Button",[t._v("左")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"left-top"}},[o("Button",[t._v("左上")])],1),t._v(" "),o("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.demo2))]),t._v(" "),o("h3",[t._v("嵌套")]),t._v(" "),o("Poptip",{attrs:{trigger:"click",content:"内容",placement:"right-top"}},[o("Button",[t._v("Click me")]),t._v(" "),o("div",{staticClass:"k-table k-table-border",attrs:{slot:"content"},slot:"content"},[o("table",[o("thead",[o("tr",[o("th",[t._v("姓名")]),t._v(" "),o("th",[t._v("电话")]),t._v(" "),o("th",[t._v("住址")])])]),t._v(" "),o("tr",[o("td",[t._v("张山")]),t._v(" "),o("td",[t._v("13256652545")]),t._v(" "),o("td",[t._v("广东省深圳市宝安区软件产业基地三诺大厦19楼")])]),t._v(" "),o("tr",[o("td",[t._v("王二")]),t._v(" "),o("td",[t._v("36254525658")]),t._v(" "),o("td",[t._v("浙江省杭州市阿里西溪园区3A18楼")])])])])],1),t._v(" "),o("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.demo3))]),t._v(" "),o("h3",[t._v("确认框")]),t._v(" "),o("Poptip",{attrs:{confirm:"",title:"您确认删除这条内容吗？"},on:{ok:t.ok,cancel:t.cancel}},[o("Button",[t._v("删除")])],1),t._v(" "),o("Poptip",{attrs:{confirm:"",title:"Are you OK?","ok-text":"yes","cancel-text":"no"},on:{ok:t.ok,cancel:t.cancel}},[o("Button",[t._v("自定义")])],1),t._v(" "),o("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.demo4))]),t._v(" "),o("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},v=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("trigger")]),t._v(" "),o("td",[t._v("触发方式，可选值为hover（悬停）click（点击）,在 confirm 模式下，只有 click 有效")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("title")]),t._v(" "),o("td",[t._v("显示的标题")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("content")]),t._v(" "),o("td",[t._v("显示的正文内容，只在非 confirm 模式下有效")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("placement")]),t._v(" "),o("td",[t._v("提示框出现的位置，可选值为top，top-left，top-right，bottom，bottom-left，bottom-right，left，left-top，left-bottom，right，right-top，right-bottom")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("top")])]),t._v(" "),o("tr",[o("td",[t._v("width")]),t._v(" "),o("td",[t._v("宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("confirm")]),t._v(" "),o("td",[t._v("是否开启对话框模式")]),t._v(" "),o("td",[t._v("Boolean ")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("transfer")]),t._v(" "),o("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("ok-text")]),t._v(" "),o("td",[t._v("确定按钮的文字，只在 confirm 模式下有效")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("确定")])]),t._v(" "),o("tr",[o("td",[t._v("cancel-text")]),t._v(" "),o("td",[t._v("取消按钮的文字，只在 confirm 模式下有效")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("取消")])]),t._v(" "),o("tr",[o("td",[t._v("cancel")]),t._v(" "),o("td",[t._v("点击取消的回调，只在 confirm 模式下有效")]),t._v(" "),o("td",[t._v("Function ")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("ok")]),t._v(" "),o("td",[t._v("点击确定的回调，只在 confirm 模式下有效")]),t._v(" "),o("td",[t._v("Function ")]),t._v(" "),o("td",[t._v("-")])])])])}]},goEs:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("i2OL"),v=o.n(e);for(var _ in e)"default"!==_&&function(t){o.d(n,t,function(){return e[t]})}(_);var i=o("RQM2"),p=o("XyMi"),l=Object(p.a)(v.a,i.a,i.b,!1,null,null,null);n.default=l.exports},i2OL:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{demo1:'<Poptip trigger="hover" title="标题" content="内容">\n   <Button>hover激活</Button>\n</Poptip>\n<Poptip trigger="click" title="标题" content="内容">\n   <Button>click激活</Button>\n</Poptip>',demo2:'<Poptip title="标题" content="内容" placement="top-left"><Button>上左</Button></Poptip>\n<Poptip title="标题" content="内容" placement="top"><Button>上</Button></Poptip>\n<Poptip title="标题" content="内容" placement="top-right"><Button>上右</Button></Poptip>\n<Poptip title="标题" content="内容" placement="right-top"><Button>右上</Button></Poptip>\n<Poptip title="标题" content="内容" placement="right"><Button>右</Button></Poptip>\n<Poptip title="标题" content="内容" placement="right-bottom"><Button>右下</Button> </Poptip>\n<Poptip title="标题" content="内容" placement="bottom-right"><Button>下右</Button></Poptip>\n<Poptip title="标题" content="内容" placement="bottom"><Button>下</Button></Poptip>\n<Poptip title="标题" content="内容" placement="bottom-left"><Button>下左</Button></Poptip>\n<Poptip title="标题" content="内容" placement="left-bottom"><Button>左下</Button></Poptip>\n<Poptip title="标题" content="内容" placement="left"><Button>左</Button></Poptip>\n<Poptip title="标题" content="内容" placement="left-top"><Button>左上</Button></Poptip>',demo3:'<Poptip content="内容" placement="right-top">\n   <Button>Click me</Button>\n   <div slot="content" class="k-table k-table-border">\n      <table>\n         <thead>\n         <tr>\n            <th>姓名</th>\n            <th>电话</th>\n            <th>住址</th>\n         </tr>\n         </thead>\n            <tr>\n            <td>张山</td>\n            <td>13256652545</td>\n            <td>广东省深圳市宝安区软件产业基地三诺大厦19楼</td>\n         </tr> <tr>\n            <td>王二</td>\n            <td>36254525658</td>\n            <td>浙江省杭州市阿里西溪园区3A18楼</td>\n         </tr>\n      </table>\n   </div>\n</Poptip>',demo4:'<Poptip confirm title="您确认删除这条内容吗？" @ok="ok" @cancel="cancel"> <Button>删除</Button> </Poptip>\n<Poptip confirm title="Are you OK?" @ok="ok" @cancel="cancel" ok-text="yes" cancel-text="no"> <Button>自定义</Button> </Poptip>\n'}},methods:{ok:function(){this.$Message.info("你点了确定")},cancel:function(){this.$Message.info("你点了取消")}}}}});