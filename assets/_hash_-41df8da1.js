import{d as B,n as C,O as L,L as N,l as T,a2 as D,r as F,o as r,j as l,q as t,p as d,Q as x,D as i,t as s,x as e,P as y,K as p,F as V,s as O}from"./index-15628d6c.js";import{a as R}from"./index-93086923.js";import{s as j}from"./index-7ab19415.js";import"./browser-469803bd.js";import"./index-5b75d705.js";const q={class:"tabs tabs-boxed bg-transparent mb-4"},z=t("a",{class:"tab text-gray-400 uppercase tab-active"},"Transaction",-1),E={key:0,class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow mb-4"},J={class:"card-title truncate mb-2"},K={class:"overflow-hidden"},P={class:"table text-sm"},Q={class:"overflow-hidden"},A={key:1,class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow mb-4"},G={class:"card-title truncate mb-2"},H={class:"border border-slate-400 rounded-md mt-4"},I={key:0},M={key:2,class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},U=t("h2",{class:"card-title truncate mb-2"},"JSON",-1),st=B({__name:"[hash]",props:["hash","chain"],setup(h){const m=h,$=C(),w=L(),u=N(),a=T({});m.hash&&$.rpc.getTx(m.hash).then(o=>a.value=o);const _=D(()=>{var o,b;return((b=(o=a.value.tx)==null?void 0:o.body)==null?void 0:b.messages.map(n=>{var c;return(c=n.packet)!=null&&c.data&&(n.message=u.base64ToString(n.packet.data)),n}))||[]});return(o,b)=>{var c,g,f,v,k;const n=F("RouterLink");return r(),l("div",null,[t("div",q,[d(n,{class:"tab text-gray-400 uppercase",to:`/${h.chain}/tx/?tab=recent`},{default:x(()=>[i(s(o.$t("block.recent")),1)]),_:1},8,["to"]),d(n,{class:"tab text-gray-400 uppercase",to:`/${h.chain}/tx/?tab=search`},{default:x(()=>[i("Search")]),_:1},8,["to"]),z]),e(a).tx_response?(r(),l("div",E,[t("h2",J,s(o.$t("tx.title")),1),t("div",K,[t("table",P,[t("tbody",null,[t("tr",null,[t("td",null,s(o.$t("tx.tx_hash")),1),t("td",Q,s(e(a).tx_response.txhash),1)]),t("tr",null,[t("td",null,s(o.$t("account.height")),1),t("td",null,[d(n,{to:`/${m.chain}/block/${e(a).tx_response.height}`,class:"text-primary dark:invert"},{default:x(()=>[i(s(e(a).tx_response.height),1)]),_:1},8,["to"])])]),t("tr",null,[t("td",null,s(o.$t("staking.status")),1),t("td",null,[t("span",{class:y(["text-xs truncate relative py-2 px-4 w-fit mr-2 rounded",`text-${e(a).tx_response.code===0?"success":"error"}`])},[t("span",{class:y(["inset-x-0 inset-y-0 opacity-10 absolute",`bg-${e(a).tx_response.code===0?"success":"error"}`])},null,2),i(" "+s(e(a).tx_response.code===0?"Success":"Failed"),1)],2),t("span",null,s(e(a).tx_response.code===0?"":(g=(c=e(a))==null?void 0:c.tx_response)==null?void 0:g.raw_log),1)])]),t("tr",null,[t("td",null,s(o.$t("account.time")),1),t("td",null,s(e(u).toLocaleDate(e(a).tx_response.timestamp))+" ("+s(e(u).toDay(e(a).tx_response.timestamp,"from"))+") ",1)]),t("tr",null,[t("td",null,s(o.$t("tx.gas")),1),t("td",null,s(e(a).tx_response.gas_used)+" / "+s(e(a).tx_response.gas_wanted),1)]),t("tr",null,[t("td",null,s(o.$t("tx.fee")),1),t("td",null,s(e(u).formatTokens((k=(v=(f=e(a).tx)==null?void 0:f.auth_info)==null?void 0:v.fee)==null?void 0:k.amount,!0,"0,0.[00]")),1)]),t("tr",null,[t("td",null,s(o.$t("tx.memo")),1),t("td",null,s(e(a).tx.body.memo),1)])])])])])):p("",!0),e(a).tx_response?(r(),l("div",A,[t("h2",G,s(o.$t("account.messages"))+": ("+s(e(_).length)+") ",1),(r(!0),l(V,null,O(e(_),(S,W)=>(r(),l("div",null,[t("div",H,[d(R,{value:S},null,8,["value"])])]))),256)),e(_).length===0?(r(),l("div",I,s(o.$t("tx.no_messages")),1)):p("",!0)])):p("",!0),e(a).tx_response?(r(),l("div",M,[U,d(e(j),{value:e(a),theme:e(w).theme,style:{background:"transparent"},copyable:"",boxed:"",sort:"","expand-depth":"5"},null,8,["value","theme"])])):p("",!0)])}}});export{st as default};
