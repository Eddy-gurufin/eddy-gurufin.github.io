import{d as L,cv as M,l as x,O as N,n as V,L as D,m as F,r as j,o as i,j as u,q as t,P as m,x as a,t as s,w as d,T as g,F as q,s as I,p as k,Q as y,D as w,a5 as A,y as E}from"./index-15628d6c.js";import{b as $}from"./route-block-83d24a4e.js";const H={class:"tabs tabs-boxed bg-transparent mb-4"},O={class:"bg-base-100 rounded overflow-x-auto"},P={class:"table w-full table-compact"},Q={class:"bg-base-200"},U={style:{position:"relative","z-index":"2"}},Z={style:{position:"relative","z-index":"2"}},G=["index"],J={class:"text-sm text-primary"},K={class:"truncate text-primary",width:"50%"},W={class:"p-4"},X={class:"alert relative bg-transparent"},Y=t("div",{class:"alert absolute inset-x-0 inset-y-0 w-full h-full bg-info opacity-10"},null,-1),tt={class:"text-info flex gap-2"},et=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-current flex-shrink-0 w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),st={class:"bg-base-100 rounded overflow-x-auto"},ot={class:"p-4"},at={class:"form-control"},nt=L({__name:"index",props:["chain"],setup(R){var b;const h=R,p=M(),o=x("recent"),B=N(),c=V(),v=D(),C=/^[A-Z\d]{64}$/,r=x(""),S=((b=c==null?void 0:c.current)==null?void 0:b.chainName)||"";F(()=>{o.value=String(p.currentRoute.value.query.tab||"recent"),console.log(o.value)});function T(){C.test(r.value)&&p.push({path:`/${S}/tx/${r.value}`})}return(n,l)=>{const _=j("RouterLink");return i(),u("div",null,[t("div",H,[t("a",{class:m(["tab text-gray-400 uppercase",{"tab-active":a(o)==="recent"}]),onClick:l[0]||(l[0]=e=>o.value="recent")},s(n.$t("block.recent")),3),t("a",{class:m(["tab text-gray-400 uppercase",{"tab-active":a(o)==="search"}]),onClick:l[1]||(l[1]=e=>o.value="search")},"Search",2)]),d(t("div",O,[t("table",P,[t("thead",Q,[t("tr",null,[t("th",U,s(n.$t("account.height")),1),t("th",Z,s(n.$t("account.hash")),1),t("th",null,s(n.$t("account.messages")),1),t("th",null,s(n.$t("block.fees")),1)])]),t("tbody",null,[(i(!0),u(q,null,I(a(B).txsInRecents,(e,z)=>{var f;return i(),u("tr",{index:z,class:"hover"},[t("td",J,[k(_,{to:`/${h.chain}/block/${e.height}`},{default:y(()=>[w(s(e.height),1)]),_:2},1032,["to"])]),t("td",K,[k(_,{to:`/${h.chain}/tx/${e.hash}`},{default:y(()=>[w(s(e.hash),1)]),_:2},1032,["to"])]),t("td",null,s(a(v).messages(e.tx.body.messages)),1),t("td",null,s(a(v).formatTokens((f=e.tx.authInfo.fee)==null?void 0:f.amount)),1)],8,G)}),256))])]),t("div",W,[t("div",X,[Y,t("div",tt,[et,t("span",null,s(n.$t("block.only_tx")),1)])])])],512),[[g,a(o)==="recent"]]),d(t("div",st,[t("div",ot,[t("div",at,[d(t("input",{"onUpdate:modelValue":l[2]||(l[2]=e=>A(r)?r.value=e:null),type:"text",class:"input input-bordered",placeholder:"Search by Tx Hash",onBlur:T},null,544),[[E,a(r)]])])])],512),[[g,a(o)==="search"]])])}}});typeof $=="function"&&$(nt);export{nt as default};
