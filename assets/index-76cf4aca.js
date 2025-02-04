import{d as C,O as D,a2 as h,o as i,f as L,x as t,l as j,L as A,r as N,j as w,q as e,P as S,t as r,p as y,Q as $,D as T,w as F,T as V,F as z,s as O}from"./index-15628d6c.js";import{A as P}from"./vue3-apexcharts.common-63041d5b.js";import{b as B}from"./route-block-83d24a4e.js";const R=C({__name:"TxsInBlocksChart",setup(d){const s=D(),c=h(()=>({chart:{type:"bar",height:150},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!1},colors:["#5A67D8"],xaxis:{labels:{show:!1,rotate:-45},show:!1,categories:s.recents.map(a=>a.block.header.height).concat(Array(50-s.recents.length).fill(""))}})),l=h(()=>{var a;return[{name:"Txs",data:((a=s.recents)==null?void 0:a.map(n=>n.block.data.txs.length))||[]}]});return(a,n)=>(i(),L(t(P),{type:"bar",height:"150",options:t(c),series:t(l)},null,8,["options","series"]))}}),q={class:"tabs tabs-boxed bg-transparent mb-4"},E={class:"grid xl:!grid-cols-6 md:!grid-cols-4 grid-cols-1 gap-3"},I={class:"flex justify-between"},Q={class:"text-md font-bold sm:!text-lg"},G={class:"rounded text-xs whitespace-nowrap font-medium text-green-600"},H={class:"flex justify-between tooltip","data-tip":"Block Proposor"},J={class:"mt-2 hidden text-sm sm:!block truncate"},K={class:"text-right mt-1 whitespace-nowrap"},M=C({__name:"index",props:["chain"],setup(d){const s=j("blocks"),c=D(),l=A(),a=h(()=>c.recents);return(n,p)=>{var u,f;const b=N("RouterLink");return i(),w("div",null,[e("div",q,[e("a",{class:S(["tab text-gray-400 uppercase",{"tab-active":t(s)==="blocks"}]),onClick:p[0]||(p[0]=o=>s.value="blocks")},r(n.$t("block.recent")),3),y(b,{class:"tab text-gray-400 uppercase",to:`/${d.chain}/block/${Number(((f=(u=t(c).latest)==null?void 0:u.block)==null?void 0:f.header.height)||0)+1e4}`},{default:$(()=>[T(r(n.$t("block.future")),1)]),_:1},8,["to"])]),F(e("div",null,[y(R),e("div",E,[(i(!0),w(z,null,O(t(a),o=>(i(),L(b,{class:"flex flex-col justify-between rounded p-4 shadow bg-base-100",to:`/${d.chain}/block/${o.block.header.height}`},{default:$(()=>{var m,_,x,k,g,v;return[e("div",I,[e("h3",Q,r(o.block.header.height),1),e("span",G,r(t(l).toDay((_=(m=o.block)==null?void 0:m.header)==null?void 0:_.time,"from")),1)]),e("div",H,[e("div",J,[e("span",null,r(t(l).validator((k=(x=o.block)==null?void 0:x.header)==null?void 0:k.proposer_address)),1)]),e("span",K,r((v=(g=o.block)==null?void 0:g.data)==null?void 0:v.txs.length)+" txs ",1)])]}),_:2},1032,["to"]))),256))])],512),[[V,t(s)==="blocks"]])])}}});typeof B=="function"&&B(M);export{M as default};
