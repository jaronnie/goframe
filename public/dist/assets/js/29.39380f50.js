(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{305:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"go-类型转换神器-cast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-类型转换神器-cast"}},[t._v("#")]),t._v(" Go 类型转换神器 cast")]),t._v(" "),a("h2",{attrs:{id:"什么是-cast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-cast"}},[t._v("#")]),t._v(" 什么是 cast？")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/spf13/cast",target:"_blank",rel:"noopener noreferrer"}},[t._v("cast"),a("OutboundLink")],1),t._v(" 用于一致且简单的方式在不同的 go 类型之间进行安全的转换。")]),t._v(" "),a("h2",{attrs:{id:"为什么使用-cast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-cast"}},[t._v("#")]),t._v(" 为什么使用 cast?")]),t._v(" "),a("p",[t._v("在 Go 程序中，我们通常需要将数据由一种类型转换为另一种类型。")]),t._v(" "),a("p",[t._v("cast 使用一致且简单的方式来提供安全的类型转换。它不仅仅适用于类型断言，更强大的功能在于我们使用接口来处理动态数据的时候，cast 提供了一种简单的方法将接口优雅的转换为我们需要的数据类型。")]),t._v(" "),a("p",[t._v("使用 cast 将会极大的增加我们的开发效率，因为它本身就是为了开源项目 "),a("a",{attrs:{href:"https://github.com/gohugoio/hugo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hugo"),a("OutboundLink")],1),t._v(" 而生。")]),t._v(" "),a("h2",{attrs:{id:"使用-go-标准库进行类型转换的痛点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-go-标准库进行类型转换的痛点"}},[t._v("#")]),t._v(" 使用 Go 标准库进行类型转换的痛点")]),t._v(" "),a("p",[t._v("在实际开发中我们往往需要对一些常用的数据类型进行转换，如 string，int，int64，float等数据类型。")]),t._v(" "),a("p",[t._v("标准库 strconv 提供了字符串与基本数据类型之间的转换功能，我们也可以使用"),a("code",[t._v("fmt.Sprintf")]),t._v("函数进行转换。")]),t._v(" "),a("p",[t._v("但是往往使用起来不够直观，且当数据类型为接口时，若需要转换成需要的数据类型较为繁琐。")]),t._v(" "),a("h2",{attrs:{id:"快速使用-cast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速使用-cast"}},[t._v("#")]),t._v(" 快速使用 cast")]),t._v(" "),a("h3",{attrs:{id:"安装cast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装cast"}},[t._v("#")]),t._v(" 安装cast")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" get github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("spf13"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cast\n")])])]),a("h3",{attrs:{id:"入门案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门案例"}},[t._v("#")]),t._v(" 入门案例")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gocn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         \t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "gocn"')]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "8"')]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "8.31"')]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gocn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "gocn"')]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ""')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I love gocn"')]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "I love gocn"')]),t._v("\n")])])]),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" eight "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\ncast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),a("p",[t._v("cast 实现了多种常见类型之间的相互转换，并返回最符合直觉的结果。如：")]),t._v(" "),a("ul",[a("li",[t._v('nil 转 string 的结果为 ""')]),t._v(" "),a("li",[t._v('true 转 string 的结果为 "true"，true 转 int 的结果为 1')]),t._v(" "),a("li",[t._v("interface{} 转为其他类型，要看它里面存储的值类型")])]),t._v(" "),a("p",[t._v("这些类型包括了：")]),t._v(" "),a("ul",[a("li",[t._v("基本类型：整形，浮点型，布尔类型，字符串")]),t._v(" "),a("li",[t._v("空接口：interface{}")]),t._v(" "),a("li",[t._v("nil")]),t._v(" "),a("li",[t._v("时间：time.Time")]),t._v(" "),a("li",[t._v("时间段：time.Duration")]),t._v(" "),a("li",[t._v("切片类型：[]Type")]),t._v(" "),a("li",[t._v("map[string]Type")])]),t._v(" "),a("p",[t._v("使用起来非常的丝滑。")]),t._v(" "),a("h2",{attrs:{id:"进阶使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶使用"}},[t._v("#")]),t._v(" 进阶使用")]),t._v(" "),a("p",[t._v("cast提供了两组函数：")]),t._v(" "),a("ul",[a("li",[t._v("toType，将参数转换为 Type 类型。若转换失败，则返回 Type 类型的零值")]),t._v(" "),a("li",[t._v("ToTypeE，返回转换后的值和 error")])]),t._v(" "),a("h3",{attrs:{id:"时间和时间段的转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间和时间段的转换"}},[t._v("#")]),t._v(" 时间和时间段的转换")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/spf13/cast"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttimeStamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1617975806")]),t._v("\n\tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeStamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2021-04-09 21:43:26 +0800 CST")]),t._v("\n    \n\ttimeStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-09 21:43:26"')]),t._v("\n\tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t\t\t   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2021-04-09 21:43:26 +0000 UTC")]),t._v("\n\n\tduration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseDuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1m30s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToDuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t  \t    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1m30s")]),t._v("\n\n\tstrDuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"90s"')]),t._v("\n\tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToDuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strDuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1m30s")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"转换为切片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换为切片"}},[t._v("#")]),t._v(" 转换为切片")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n  \t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/spf13/cast"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \tsliceOfInt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \tarrayOfInt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ToIntSlice")]),t._v("\n  \tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToIntSlice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sliceOfInt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1 3 7]")]),t._v("\n  \tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToIntSlice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arrayOfInt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [8 12 0]")]),t._v("\n\n  \tsliceOfInterface "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gocn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \tsliceOfString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gocn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \tstringFields "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" I   love  gocn   "')]),t._v("\n  \tany "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("666")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ToStringSliceE")]),t._v("\n  \tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToStringSlice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sliceOfInterface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1 2 gocn]")]),t._v("\n  \tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToStringSlice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sliceOfString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [I love gocn]")]),t._v("\n  \tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToStringSlice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stringFields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [I love gocn]")]),t._v("\n  \tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToStringSlice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [666]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"转为-map-string-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转为-map-string-type"}},[t._v("#")]),t._v(" 转为 map[string]Type")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/spf13/cast"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gocn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToStringMapString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//map[age:999 name:gocn]")]),t._v("\n    \n\tdata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`{"name":"gocn", "url":"https://gocn.vip"}`')]),t._v("\n\tcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToStringMapString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//map[name:gocn url:https://gocn.vip]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("cast 库能在几乎所有常见类型之间转换，小巧但是非常的实用。")]),t._v(" "),a("p",[t._v("cast 提供一致且简单的方式在各种常见的类型之间进行转换，能极大的提高开发效率。")]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/spf13/cast",target:"_blank",rel:"noopener noreferrer"}},[t._v("spf13/cast"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://darjun.github.io/2020/01/20/godailylib/cast",target:"_blank",rel:"noopener noreferrer"}},[t._v("darjun-godailylib/cast"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);