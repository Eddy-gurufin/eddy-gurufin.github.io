import{d as f,L as g,n as h,l as s,a9 as b,m as k,o,j as n,q as t,F as v,s as B,t as d,x as l,p as y}from"./index-15628d6c.js";import{_ as q}from"./PaginationBar.vue_vue_type_script_setup_true_lang-f2c916b6.js";import{b as m}from"./route-block-83d24a4e.js";const x={class:"overflow-auto bg-base-100"},F={class:"table table-compact"},R=t("thead",{class:"bg-base-200"},[t("tr",null,[t("td",null,"Token"),t("td",null,"Amount")])],-1),S={class:"hover"},w=f({__name:"index",props:["chain"],setup(L){g();const _=h(),c=s([]),e=s(new b),r=s({});k(()=>{u(1)});function u(i){e.value.setPage(i),_.rpc.getBankSupply(e.value).then(a=>{c.value=a.supply,r.value=a.pagination})}return(i,a)=>(o(),n("div",x,[t("table",F,[R,(o(!0),n(v,null,B(l(c),p=>(o(),n("tr",S,[t("td",null,d(p.denom),1),t("td",null,d(p.amount),1)]))),256))]),y(q,{limit:l(e).limit,total:l(r).total,callback:u},null,8,["limit","total"])]))}});typeof m=="function"&&m(w);export{w as default};
