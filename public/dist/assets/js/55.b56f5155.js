(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{333:function(s,a,t){"use strict";t.r(a);var e=t(10),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-防火墙"}},[s._v("#")]),s._v(" linux 防火墙")]),s._v(" "),t("h2",{attrs:{id:"查看防火墙的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看防火墙的状态"}},[s._v("#")]),s._v(" 查看防火墙的状态")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl status firewalld\n")])])]),t("p",[t("img",{attrs:{src:"https://oss.jaronnie.com/image-20230220110255763.png",alt:"image-20230220110255763"}})]),s._v(" "),t("h2",{attrs:{id:"打开防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打开防火墙"}},[s._v("#")]),s._v(" 打开防火墙")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start firewalld\n")])])]),t("p",[s._v("再次查看防火墙的状态")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://oss.jaronnie.com/image-20230220134011459.png",alt:"image-20230220134011459"}})]),s._v(" "),t("h2",{attrs:{id:"关闭防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙"}},[s._v("#")]),s._v(" 关闭防火墙")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop firewalld\n")])])]),t("h2",{attrs:{id:"在防火墙开启时开放具体端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在防火墙开启时开放具体端口"}},[s._v("#")]),s._v(" 在防火墙开启时开放具体端口")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start firewalld\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmncd --query-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp\n")])])]),t("p",[t("img",{attrs:{src:"https://oss.jaronnie.com/image-20230220135041885.png",alt:"image-20230220135041885"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);