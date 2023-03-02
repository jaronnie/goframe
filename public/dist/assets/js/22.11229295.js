(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{303:function(s,a,t){"use strict";t.r(a);var e=t(10),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" docker安装")]),s._v(" "),t("p",[s._v("推荐在linux上使用。本教程也在linux环境上进行讲解。")]),s._v(" "),t("p",[s._v("当然一般来说我们使用windows或者mac上进行开发，所以有必要在windows和mac上进行安装使用，但稍微麻烦点，因为Docker是基于Linux内核特性开发而成。")]),s._v(" "),t("p",[s._v("所以必须先安装虚拟机，在虚拟机中安装linux环境，然后再安装Docker。")]),s._v(" "),t("p",[s._v("现在不管在哪个平台上安装docker都是很简单的事情，在linux上有一键安装脚本，在win或者mac上有打包好的exe文件。")]),s._v(" "),t("h2",{attrs:{id:"linux上安装-root用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux上安装-root用户"}},[s._v("#")]),s._v(" linux上安装（root用户）")]),s._v(" "),t("p",[s._v("使用官方脚本一键安装即可")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" https://get.docker.com "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--mirror")]),s._v(" Aliyun\n")])])]),t("p",[s._v("或者")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sSL")]),s._v(" https://get.daocloud.io/docker "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])])]),t("p",[s._v("启动docker")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])])]),t("p",[s._v("如果你是非root用户，可以将用户名添加到docker组中，使得普通用户可以直接使用。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aG")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])])]),t("h2",{attrs:{id:"windows上安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows上安装"}},[s._v("#")]),s._v(" windows上安装")]),s._v(" "),t("p",[s._v("官方提供了安装包")]),s._v(" "),t("p",[s._v("https://hub.docker.com/editions/community/docker-ce-desktop-windows")]),s._v(" "),t("p",[s._v("但是仅适用于 Windows 10 操作系统专业版、企业版、教育版和部分家庭版！")]),s._v(" "),t("p",[s._v("如果存在问题，可以使用toolbox等工具进行安装。在此不作介绍，建议使用linux环境进行学习。")]),s._v(" "),t("h2",{attrs:{id:"mac上安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac上安装"}},[s._v("#")]),s._v(" mac上安装")]),s._v(" "),t("p",[s._v("还没入手mac")]),s._v(" "),t("p",[s._v("敬请期待！")])])}),[],!1,null,null,null);a.default=r.exports}}]);