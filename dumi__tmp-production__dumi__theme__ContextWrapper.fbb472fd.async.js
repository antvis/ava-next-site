"use strict";(self.webpackChunk_antv_ava_site=self.webpackChunk_antv_ava_site||[]).push([[1923],{952071:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var i=a(821071),r=a.n(i),n=a(359301),s=a(539166),o=a(806207),A=a(540943),l=a(651838),d=a(437712);function m(){var t=(0,s.pC)(),e=(0,n.useState)(!0),a=r()(e,2),i=a[0],m=a[1],h=(0,n.useRef)(s.m8.location.pathname);return(0,n.useEffect)((function(){return s.m8.listen((function(t){m(!0),t.location.pathname!==h.current&&(h.current=t.location.pathname,document.documentElement.scrollTo(0,0))}))}),[]),(0,d.jsx)(o.D.Provider,{value:{pkg:{name:"@antv/ava-site",description:"AVA site deployed on gh-pages",version:"1.1.7",license:"MIT",repository:{type:"git",url:"https://github.com/antvis/AVA"}},demos:A.DE,components:A.wx,locales:l.k,loading:i,setLoading:m,themeConfig:{footer:'Copyright © 2022 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',title:"AVA",description:"A framework and solution for more convenient visual analytics.",defaultLanguage:"zh",siteUrl:"https://ava.antv.antgroup.com",isAntVSite:!1,githubUrl:"https://github.com/antvis/AVA",showSearch:!1,showGithubCorner:!0,showGithubStars:!0,showAntVProductsCard:!0,showLanguageSwitcher:!0,showWxQrcode:!0,showChartResize:!0,showAPIDoc:!0,internalSite:{url:"https://ava.antv.antgroup.com",name:{zh:"国内镜像",en:"China Mirror"}},navs:[{slug:"docs/guide",title:{zh:"教程",en:"Guide"},order:0},{slug:"docs/api",title:{zh:"API 文档",en:"API"},order:1},{slug:"examples",title:{zh:"图表示例",en:"Examples"},order:2}],docs:[{slug:"guide/auto-chart",title:{zh:"AutoChart 组件",en:"AutoChart Component"},order:1},{slug:"guide/ckb",title:{zh:"图表知识库(CKB)",en:"Chart Knowledge Base (CKB)"},order:2},{slug:"guide/data-wizard",title:{zh:"DataWizard",en:"DataWizard"},order:3},{slug:"guide/advisor",title:{zh:"Advisor",en:"Advisor"},order:4},{slug:"guide/rules",title:{zh:"推荐规则",en:"Rules"},order:5},{slug:"guide/lite-insight",title:{zh:"LiteInsight",en:"LiteInsight"},order:6},{slug:"guide/smart-board",title:{zh:"SmartBoard",en:"SmartBoard"},order:7},{slug:"guide/smart-color",title:{zh:"SmartColor",en:"SmartColor"},order:8},{slug:"guide/ntv",title:{zh:"解读文本可视化（NTV）",en:"Narrative Text Vis (NTV)"},order:9},{slug:"api/auto-chart",title:{zh:"AutoChart",en:"AutoChart"},order:1},{slug:"api/ckb",title:{zh:"图表知识库(CKB)",en:"Chart Knowledge Base (CKB)"},order:2},{slug:"api/data-wizard",title:{zh:"DataWizard",en:"DataWizard"},order:3},{slug:"api/advisor",title:{zh:"Advisor",en:"Advisor"},order:4},{slug:"api/lite-insight",title:{zh:"LiteInsight",en:"LiteInsight"},order:6},{slug:"api/smart-board",title:{zh:"SmartBoard",en:"SmartBoard"},order:7},{slug:"api/smart-color",title:{zh:"SmartColor",en:"SmartColor"},order:8},{slug:"api/types",title:{zh:"类型 Types",en:"Types"},order:9},{slug:"api/ntv",title:{zh:"NarrativeTextVis(NTV)",en:"NarrativeTextVis(NTV)"},order:10}],examples:[{slug:"components",title:{zh:"React 组件",en:"React Components"},order:0},{slug:"data-wizard",title:{zh:"数据处理（DataWizard）",en:"DataWizard"},order:1,includes:[]},{slug:"ckb",title:{zh:"图表知识库（CKB)",en:"Chart Knowledge Base (CKB)"},order:2},{slug:"advisor",title:{zh:"图表推荐（Advisor）",en:"ChartAdvisor"},order:3},{slug:"lite-insight",title:{zh:"智能洞察（LiteInsight）",en:"LiteInsight"},order:4},{slug:"plugins",title:{zh:"插件",en:"Plugins"},order:5},{slug:"others",title:{zh:"其他",en:"Others"},order:6},{slug:"ntv",title:{zh:"解读文本可视化（NTV）",en:"Narrative Text Vis (NTV)"},order:10}],playground:{container:'<div id="container" />',devDependencies:{typescript:"latest"}},docsearchOptions:{apiKey:"2af93b002b40c8e1ef51fd6577c888d1",indexName:"antv_ava"},redirects:[],companies:[{name:"阿里云",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*V_xMRIvw2iwAAAAAAAAAAABkARQnAQ"},{name:"支付宝",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*lYDrRZvcvD4AAAAAAAAAAABkARQnAQ"},{name:"天猫",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*BQrxRK6oemMAAAAAAAAAAABkARQnAQ"},{name:"淘宝网",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*1l8-TqUr7UcAAAAAAAAAAABkARQnAQ"},{name:"网上银行",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ZAKFQJ5Bz4MAAAAAAAAAAABkARQnAQ"},{name:"京东",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*yh-HRr3hCpgAAAAAAAAAAABkARQnAQ"},{name:"yunos",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*_js7SaNosUwAAAAAAAAAAABkARQnAQ"},{name:"菜鸟",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*TgV-RZDODJIAAAAAAAAAAABkARQnAQ"}],cases:[{logo:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*-dLnTIexOxwAAAAAAAAAAABkARQnAQ",title:{zh:"智能可视化",en:"AVA"},description:{zh:"链接人和数据，联通数据分析链条上的“最后一公里”",en:"Link people and data, connect the last kilometer of the data analysis chain"},image:"https://gw.alipayobjects.com/mdn/rms_fabca5/afts/img/A*gM2JRbkGETIAAAAAAAAAAAAAARQnAQ"}],detail:{title:{zh:"AVA",en:"AVA"},description:{zh:"AVA 是为了更简便的可视分析而生的技术框架。 VA 代表可视分析（Visual Analytics），而第一个 A 具有多重涵义：其目标是成为一个自动化（Automated）、智能驱动（AI driven）、支持增强分析（Augmented）的可视分析解决方案。",en:"AVA is a framework for more convenient Visual Analytics. The first A of AVA has many meanings. It states that the goal of this framework is to become an Automated, AI driven solution that supports Augmented analytics."},image:"https://gw.alipayobjects.com/zos/bmw-prod/e11f026f-325b-4e71-8613-8297febcfdd0.svg",buttons:[{text:{zh:"图表示例",en:"Examples"},link:"/examples",type:"primary"},{text:{zh:"开始使用",en:"Getting Started"},link:"/guide/intro"}]},news:[{type:{zh:"推荐",en:"Recommend"},title:{zh:"远方·远芳 AntV 2022 年度发布",en:"AntV Anniversary 2022"},date:"2022.11.22",link:"https://www.yuque.com/antv/blog/1122_6"},{type:{zh:"推荐",en:"Recommend"},title:{zh:"AVA：见字如晤，展信舒颜",en:"AVA 3.0 Pre-Publish"},date:"2022.11.22",link:"https://www.yuque.com/antv/blog/ava2022"}]}},children:t})}}}]);