import{_ as p,V as i,W as r,X as n,Y as c,Z as a,$ as s,C as u}from"./framework-2d083801.js";const k={},d=n("h2",{id:"获取地址中的省市县区",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取地址中的省市县区","aria-hidden":"true"},"#"),s(" 获取地址中的省市县区")],-1),v=n("p",null,"适用场景：从一段完整的地址文本中筛选出省、市、区（县）",-1),m={class:"hint-container details"},b=n("summary",null,"查看代码",-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// 获取地址中的省市县区"),s(`
`),n("span",{class:"token keyword"},"const"),s(" getGLAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" RegExpMatchArray "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" reg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},".+?(省|市|自治区|自治州|盟|县|旗|区)"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 内蒙古自治区 广西壮族自治区 西藏自治区 宁夏回族自治区 新疆维吾尔自治区"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"内蒙古"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"内蒙古"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"内蒙古自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"广西"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"广西"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"广西壮族自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"西藏"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"西藏"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"西藏自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"宁夏"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"宁夏"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"宁夏回族自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"新疆"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"新疆"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"新疆维吾尔自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"match"),n("span",{class:"token punctuation"},"("),s("reg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" getGLAddress"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 获取地址中的省市县区"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getGLAddress"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"argAddress"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" reg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},".+?(省|市|自治区|自治州|盟|县|旗|区)"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 内蒙古自治区 广西壮族自治区 西藏自治区 宁夏回族自治区 新疆维吾尔自治区"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"内蒙古"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"内蒙古"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"内蒙古自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"广西"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"广西"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"广西壮族自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"西藏"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"西藏"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"西藏自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"宁夏"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"宁夏"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"宁夏回族自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"新疆"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        argAddress `),n("span",{class:"token operator"},"="),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"新疆"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"新疆维吾尔自治区"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" argAddress"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"match"),n("span",{class:"token punctuation"},"("),s("reg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" getGLAddress"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("h2",{id:"vant从arealist筛选出省",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vant从arealist筛选出省","aria-hidden":"true"},"#"),s(" Vant从areaList筛选出省")],-1),f=n("p",null,"适用场景：选择驾驶证发征地的时候只需要一级区域信息（如四川省、广东省....）。",-1),w={class:"hint-container details"},h=n("summary",null,"查看代码",-1),_=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
    areaList
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vant/area-data"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"ValueType"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getProvinceList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" provinceList "),n("span",{class:"token operator"},"="),s(" areaList"),n("span",{class:"token punctuation"},"."),s("province_list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" handerProvinceList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Array"),s(),n("span",{class:"token operator"},"<"),s(" ValueType "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token keyword"},"in"),s(" provinceList"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" temp"),n("span",{class:"token operator"},":"),s(" ValueType "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(" provinceList"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            value`),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        handerProvinceList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("temp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" handerProvinceList"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token punctuation"},"{"),s(`
    getProvinceList
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
    areaList
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vant/area-data"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getProvinceList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" provinceList "),n("span",{class:"token operator"},"="),s(" areaList"),n("span",{class:"token punctuation"},"."),s("province_list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" handerProvinceList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token keyword"},"in"),s(" provinceList"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token literal-property property"},"temp"),n("span",{class:"token operator"},":"),s(" ValueType "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(" provinceList"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        handerProvinceList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("temp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" handerProvinceList"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token punctuation"},"{"),s(`
    getProvinceList
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("h2",{id:"vant根据三级区域码找完整地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vant根据三级区域码找完整地址","aria-hidden":"true"},"#"),s(" Vant根据三级区域码找完整地址")],-1),P=n("p",null,"适用场景：后台返回三级区域码（县或者区的区域码），然后根据三级区域码找到对应的省、市、区（县）。",-1),T={class:"hint-container details"},V=n("summary",null,"查看代码",-1),j=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
    areaList
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vant/area-data"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"ValueType"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getProvinceList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" provinceList "),n("span",{class:"token operator"},"="),s(" areaList"),n("span",{class:"token punctuation"},"."),s("province_list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" handerProvinceList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Array"),s(),n("span",{class:"token operator"},"<"),s(" ValueType "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token keyword"},"in"),s(" provinceList"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" temp"),n("span",{class:"token operator"},":"),s(" ValueType "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(" provinceList"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            value`),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        handerProvinceList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("temp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" handerProvinceList"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" getProvinceText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("code"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" provinceText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"getProvinceList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),s("item "),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"=="),s(" code"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            provinceText `),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("text"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" provinceText"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token punctuation"},"{"),s(`
    getProvinceList`),n("span",{class:"token punctuation"},","),s(`
    getProvinceText
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
    areaList
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vant/area-data"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getProvinceList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" provinceList "),n("span",{class:"token operator"},"="),s(" areaList"),n("span",{class:"token punctuation"},"."),s("province_list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" handerProvinceList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token keyword"},"in"),s(" provinceList"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token literal-property property"},"temp"),n("span",{class:"token operator"},":"),s(" ValueType "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(" provinceList"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        handerProvinceList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("temp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" handerProvinceList"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getProvinceText"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"code"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" provinceText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"getProvinceList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"=="),s(" code"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            provinceText `),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("text"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" provinceText"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token punctuation"},"{"),s(`
    getProvinceList`),n("span",{class:"token punctuation"},","),s(`
    getProvinceText
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("h2",{id:"重庆地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#重庆地址","aria-hidden":"true"},"#"),s(" 重庆地址")],-1),C=n("p",null,"适用场景：只能选择重庆市内的地址。",-1),E={class:"hint-container details"},G=n("summary",null,"查看代码",-1),J=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" chongQingCity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Array"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500101'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'万州区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500102'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'涪陵区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500103'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'渝中区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500104'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'大渡口区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500105'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'江北区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500106'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'沙坪坝区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500107'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'九龙坡区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500108'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'南岸区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500109'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'北碚区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500110'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'綦江区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500111'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'大足区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500112'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'渝北区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500113'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'巴南区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500114'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'黔江区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500115'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'长寿区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500116'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'江津区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500117'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'合川区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500118'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'永川区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500119'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'南川区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500120'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'璧山区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500151'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'铜梁区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500152'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'潼南区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500153'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'荣昌区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500154'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'开州区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500155'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'梁平区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500156'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'武隆区'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500229'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'城口县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500230'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'丰都县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500231'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'垫江县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500233'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'忠县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500235'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'云阳县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500236'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'奉节县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500237'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'巫山县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500238'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'巫溪县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500240'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'石柱土家族自治县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500241'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'秀山土家族苗族自治县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500242'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'酉阳土家族苗族自治县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500243'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'彭水苗族土家族自治县'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" chongQingCity "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500101'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'万州区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500102'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'涪陵区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500103'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'渝中区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500104'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'大渡口区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500105'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'江北区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500106'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'沙坪坝区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500107'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'九龙坡区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500108'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'南岸区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500109'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'北碚区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500110'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'綦江区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500111'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'大足区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500112'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'渝北区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500113'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'巴南区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500114'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'黔江区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500115'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'长寿区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500116'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'江津区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500117'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'合川区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500118'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'永川区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500119'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'南川区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500120'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'璧山区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500151'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'铜梁区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500152'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'潼南区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500153'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'荣昌区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500154'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'开州区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500155'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'梁平区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500156'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'武隆区'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500229'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'城口县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500230'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'丰都县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500231'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'垫江县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500233'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'忠县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500235'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'云阳县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500236'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'奉节县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'巫山县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500238'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'巫溪县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500240'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'石柱土家族自治县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500241'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'秀山土家族苗族自治县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500242'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'酉阳土家族苗族自治县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500243'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'彭水苗族土家族自治县'"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function N(Q,M){const l=u("CodeTabs");return i(),r("div",null,[d,v,n("details",m,[b,c(l,{id:"7",data:[{title:"TS版本"},{title:"JS版本"}],active:0,"tab-id":"shell"},{tab0:a(({title:t,value:e,isActive:o})=>[g]),tab1:a(({title:t,value:e,isActive:o})=>[y]),_:1})]),x,f,n("details",w,[h,c(l,{id:"23",data:[{title:"TS版本"},{title:"JS版本"}],active:0,"tab-id":"shell"},{tab0:a(({title:t,value:e,isActive:o})=>[_]),tab1:a(({title:t,value:e,isActive:o})=>[A]),_:1})]),L,P,n("details",T,[V,c(l,{id:"39",data:[{title:"TS版本"},{title:"JS版本"}],active:0,"tab-id":"shell"},{tab0:a(({title:t,value:e,isActive:o})=>[j]),tab1:a(({title:t,value:e,isActive:o})=>[O]),_:1})]),S,C,n("details",E,[G,c(l,{id:"55",data:[{title:"TS版本"},{title:"JS版本"}],active:0,"tab-id":"shell"},{tab0:a(({title:t,value:e,isActive:o})=>[J]),tab1:a(({title:t,value:e,isActive:o})=>[B]),_:1})])])}const W=p(k,[["render",N],["__file","area.html.vue"]]);export{W as default};
