import{c as s,j as e}from"./index-CheTHP6N.js";/**
 * @license lucide-react v0.494.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],a=s("dollar-sign",o);/**
 * @license lucide-react v0.494.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],p=s("trending-down",x);/**
 * @license lucide-react v0.494.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],h=s("trending-up",u);/**
 * @license lucide-react v0.494.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],j=s("users",m),n=({title:c,value:d,trend:r,trendText:i,icon:l,trendUp:t})=>e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-card-header",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"stat-card-title",children:c}),e.jsx("p",{className:"stat-card-value",children:d})]}),e.jsx("div",{className:"stat-card-icon-container",children:l})]}),e.jsxs("div",{className:"stat-card-trend",children:[t?e.jsx(h,{className:"trend-icon trend-up"}):e.jsx(p,{className:"trend-icon trend-down"}),e.jsx("span",{className:`trend-value ${t?"trend-up":"trend-down"}`,children:r}),e.jsx("span",{className:"trend-text",children:i})]})]}),N=()=>e.jsxs("div",{className:"stat-cards-grid",children:[e.jsx(n,{title:"Sales",value:"$239,220",trend:"+15%",trendText:"since last month",icon:e.jsx(a,{className:"icon-blue"}),trendUp:!0}),e.jsx(n,{title:"Customers",value:"9,300",trend:"+10%",trendText:"since last month",icon:e.jsx(j,{className:"icon-green"}),trendUp:!0}),e.jsx(n,{title:"Avg. Revenue",value:"$1,200",trend:"+8%",trendText:"since last month",icon:e.jsx(a,{className:"icon-purple"}),trendUp:!0})]});export{N as StatCards,N as default};
