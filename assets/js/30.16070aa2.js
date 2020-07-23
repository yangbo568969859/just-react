(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{374:function(t,a,e){"use strict";e.r(a);var s=e(43),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("经过前几章的学习，我们终于有足够的前置知识理解"),e("strong",[t._v("状态更新")]),t._v("的整个流程。")]),t._v(" "),e("p",[t._v("这一章我们看看几种常见的触发"),e("strong",[t._v("状态更新")]),t._v("的方法是如何完成工作的。")]),t._v(" "),e("h2",{attrs:{id:"几个关键节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#几个关键节点"}},[t._v("#")]),t._v(" 几个关键节点")]),t._v(" "),e("p",[t._v("在开始学习前，我们先了解源码中几个关键节点（即几个关键函数的调用）。通过这章的学习，我们会将这些关键节点的调用路径串起来。")]),t._v(" "),e("p",[t._v("先从我们所熟知的概念开始。")]),t._v(" "),e("h3",{attrs:{id:"render阶段的开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render阶段的开始"}},[t._v("#")]),t._v(" render阶段的开始")]),t._v(" "),e("p",[t._v("我们在"),e("RouterLink",{attrs:{to:"/process/reconciler.html"}},[t._v("render阶段流程概览一节")]),t._v("讲到，")],1),t._v(" "),e("p",[e("code",[t._v("render阶段")]),t._v("开始于"),e("code",[t._v("performSyncWorkOnRoot")]),t._v("或"),e("code",[t._v("performConcurrentWorkOnRoot")]),t._v("方法的调用。这取决于本次更新是同步更新还是异步更新。")]),t._v(" "),e("h3",{attrs:{id:"commit阶段的开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit阶段的开始"}},[t._v("#")]),t._v(" commit阶段的开始")]),t._v(" "),e("p",[t._v("我们在"),e("RouterLink",{attrs:{to:"/renderer/prepare.html"}},[t._v("commit阶段流程概览一节")]),t._v("讲到，")],1),t._v(" "),e("p",[e("code",[t._v("commit阶段")]),t._v("开始于"),e("code",[t._v("commitRoot")]),t._v("方法的调用。其中"),e("code",[t._v("rootFiber")]),t._v("会作为传参。")]),t._v(" "),e("p",[t._v("我们已经知道，"),e("code",[t._v("render阶段")]),t._v("完成后会进入"),e("code",[t._v("commit阶段")]),t._v("。让我们继续补全从"),e("code",[t._v("触发状态更新")]),t._v("到"),e("code",[t._v("render阶段")]),t._v("的路径。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("触发状态更新（根据场景调用不同方法）\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\n    ？\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\nrender阶段（"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("performSyncWorkOnRoot"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" 或 "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("performConcurrentWorkOnRoot"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\ncommit阶段（"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("commitRoot"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n")])])]),e("h3",{attrs:{id:"创建update对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建update对象"}},[t._v("#")]),t._v(" 创建Update对象")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("React")]),t._v("中，有如下方法可以触发状态更新（排除"),e("code",[t._v("SSR")]),t._v("相关）：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("ReactDOM.render")])]),t._v(" "),e("li",[e("p",[t._v("this.setState")])]),t._v(" "),e("li",[e("p",[t._v("this.forceUpdate")])]),t._v(" "),e("li",[e("p",[t._v("useState")])]),t._v(" "),e("li",[e("p",[t._v("useReducer")])])]),t._v(" "),e("p",[t._v("这些方法调用的场景各不相同，他们是如何接入同一套"),e("strong",[t._v("状态更新机制")]),t._v("呢？")]),t._v(" "),e("p",[t._v("答案是：每次"),e("code",[t._v("状态更新")]),t._v("都会创建一个保存"),e("strong",[t._v("更新状态相关内容")]),t._v("的对象，我们叫他"),e("code",[t._v("Update")]),t._v("。在"),e("code",[t._v("render阶段")]),t._v("的"),e("code",[t._v("beginWork")]),t._v("中会根据"),e("code",[t._v("Update")]),t._v("计算新的"),e("code",[t._v("state")]),t._v("。")]),t._v(" "),e("p",[t._v("我们会在下一节详细讲解"),e("code",[t._v("Update")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"从fiber到root"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从fiber到root"}},[t._v("#")]),t._v(" 从fiber到root")]),t._v(" "),e("p",[t._v("现在"),e("code",[t._v("触发状态更新的fiber")]),t._v("上已经包含"),e("code",[t._v("Update")]),t._v("对象。")]),t._v(" "),e("p",[t._v("我们知道，"),e("code",[t._v("render阶段")]),t._v("是从"),e("code",[t._v("rootFiber")]),t._v("开始向下遍历。那么如何从"),e("code",[t._v("触发状态更新的fiber")]),t._v("得到"),e("code",[t._v("rootFiber")]),t._v("呢？")]),t._v(" "),e("p",[t._v("答案是：调用"),e("code",[t._v("markUpdateLaneFromFiberToRoot")]),t._v("方法。")]),t._v(" "),e("blockquote",[e("p",[t._v("你可以从"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L577",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到"),e("code",[t._v("markUpdateLaneFromFiberToRoot")]),t._v("的源码")])]),t._v(" "),e("p",[t._v("该方法做的工作可以概括为：从"),e("code",[t._v("触发状态更新的fiber")]),t._v("一直向上遍历到"),e("code",[t._v("rootFiber")]),t._v("，并返回"),e("code",[t._v("rootFiber")]),t._v("。")]),t._v(" "),e("p",[t._v("由于不同更新优先级不尽相同，所以过程中还会更新遍历到的"),e("code",[t._v("fiber")]),t._v("的优先级。这对于我们当前属于超纲内容。")]),t._v(" "),e("h3",{attrs:{id:"调度更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调度更新"}},[t._v("#")]),t._v(" 调度更新")]),t._v(" "),e("p",[t._v("现在我们拥有一个"),e("code",[t._v("rootFiber")]),t._v("，该"),e("code",[t._v("rootFiber")]),t._v("对应的"),e("code",[t._v("Fiber树")]),t._v("中某个"),e("code",[t._v("Fiber节点")]),t._v("包含一个"),e("code",[t._v("Update")]),t._v("。")]),t._v(" "),e("p",[t._v("接下来通知"),e("code",[t._v("Scheduler")]),t._v("根据"),e("strong",[t._v("更新")]),t._v("的优先级，决定以"),e("strong",[t._v("同步")]),t._v("还是"),e("strong",[t._v("异步")]),t._v("的方式调度本次更新。")]),t._v(" "),e("p",[t._v("这里调用的方法是"),e("code",[t._v("ensureRootIsScheduled")]),t._v("。")]),t._v(" "),e("p",[t._v("以下是"),e("code",[t._v("ensureRootIsScheduled")]),t._v("最核心的一段代码：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newCallbackPriority "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" SyncLanePriority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任务已经过期，需要同步执行render阶段")]),t._v("\n  newCallbackNode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleSyncCallback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("performSyncWorkOnRoot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据任务优先级异步执行render阶段")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" schedulerPriorityLevel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("lanePriorityToSchedulerPriority")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    newCallbackPriority\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  newCallbackNode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleCallback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    schedulerPriorityLevel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("performConcurrentWorkOnRoot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("你可以从"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/b6df4417c79c11cfb44f965fab55b573882b1d54/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L602",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到"),e("code",[t._v("ensureRootIsScheduled")]),t._v("的源码")])]),t._v(" "),e("p",[t._v("其中，"),e("code",[t._v("scheduleCallback")]),t._v("和"),e("code",[t._v("scheduleSyncCallback")]),t._v("会调用"),e("code",[t._v("Scheduler")]),t._v("提供的调度方法根据"),e("code",[t._v("优先级")]),t._v("调度回调函数执行。")]),t._v(" "),e("p",[t._v("可以看到，这里调度的回调函数为：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("performSyncWorkOnRoot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("performConcurrentWorkOnRoot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("即"),e("code",[t._v("render阶段")]),t._v("的入口函数。")]),t._v(" "),e("p",[t._v("至此，"),e("code",[t._v("状态更新")]),t._v("就和我们所熟知的"),e("code",[t._v("render阶段")]),t._v("连接上了。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("让我们梳理下"),e("code",[t._v("状态更新")]),t._v("的整个调用路径的关键节点：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("触发状态更新（根据场景调用不同方法）\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\n创建Update对象（接下来三节详解）\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\n从fiber到root（"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("markUpdateLaneFromFiberToRoot"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\n调度更新（"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("ensureRootIsScheduled"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\nrender阶段（"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("performSyncWorkOnRoot"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" 或 "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("performConcurrentWorkOnRoot"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\ncommit阶段（"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("commitRoot"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n")])])]),e("h2",{attrs:{id:"总结-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("本节我们了解了"),e("strong",[t._v("状态更新")]),t._v("的整个流程。")]),t._v(" "),e("p",[t._v("在接下来三节中，我们会花大量篇幅讲解"),e("code",[t._v("Update")]),t._v("的工作机制，因为他是构成"),e("code",[t._v("React concurrent mode")]),t._v("的核心机制之一。")])])}),[],!1,null,null,null);a.default=r.exports}}]);