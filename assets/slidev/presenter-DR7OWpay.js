import{h as Q,i as U,l as W,m as j}from"../modules/unplugin-icons-DIDpQoV1.js";import{d as R,c,i as $,z as e,o,t as z,y as C,D,M as J,ac as O,J as K,ae as X,a1 as Y,b as y,e as s,l as t,k,g as F,h as I,x as Z,F as ee,p as te,a as se}from"../modules/vue-BvuM7Cwn.js";import{_ as q,a as oe,u as ne,e as ae,s as re,c as le,d as ie,h as ce,p as ue,j as de,k as pe,l as me,m as _e}from"../index-BfA8V4vA.js";import{r as ve,u as fe,S as xe,o as ge,N as ke,G as he,Q as Ce,C as ye}from"./ContextMenu-Ckz2Jj0J.js";import{b as be,c as Se,a as M,S as we}from"./DrawingPreview-BRgP_bEe.js";import{N as Ne}from"./NoteDisplay-DUG3jWMq.js";import ze from"./DrawingControls-DLE6A43x.js";import{I as B}from"./IconButton-CedUpDGK.js";import{C as De}from"./ClicksSlider-C5Uh6ROm.js";import"../modules/shiki-ivrj4umG.js";import"./context-D5W9CfqV.js";const Fe=R({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(r){const l=r,{info:a}=be(l.no);return(u,d)=>{var v,f;return o(),c(Ne,{class:$(l.class),note:(v=e(a))==null?void 0:v.note,"note-html":(f=e(a))==null?void 0:f.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Ie=q(Fe,[["__file","C:/Users/20113/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteStatic.vue"]]),b=r=>(te("data-v-15891912"),r=r(),se(),r),Me={class:"bg-main h-full slidev-presenter"},Be=b(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),Re={class:"relative grid-section next flex flex-col p-2 lg:p-4"},$e=b(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),qe={key:0,class:"grid-section note of-auto"},Pe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Te={class:"border-t border-main py-1 px-2 text-sm"},Ee={class:"grid-section bottom flex"},Ve=b(()=>s("div",{"flex-auto":""},null,-1)),Ae={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ge={class:"progress-bar"},He=R({__name:"presenter",setup(r){const l=z();ve(),fe(l);const{clicksContext:a,currentSlideNo:u,currentSlideRoute:d,hasNext:v,nextRoute:f,slides:P,queryClicks:T,getPrimaryClicks:E,total:V}=oe(),{isDrawing:A}=Se();ne({title:`Presenter - ${re}`}),z(!1);const{timer:G,resetTimer:S}=ae(),H=C(()=>P.value.map(g=>le(g))),i=C(()=>a.value.current<a.value.total?[d.value,a.value.current+1]:v.value?[f.value,0]:null),x=C(()=>i.value&&H.value[i.value[0].no-1]);D([d,T],()=>{x.value&&(x.value.current=i.value[1])},{immediate:!0});const w=J();return O(()=>{const g=l.value.querySelector("#slide-content"),p=K(X()),h=Y();D(()=>{if(!h.value||A.value||!ce.value)return;const n=g.getBoundingClientRect(),m=(p.x-n.left)/n.width*100,_=(p.y-n.top)/n.height*100;if(!(m<0||m>100||_<0||_>100))return{x:m,y:_}},n=>{ie.cursor=n})}),(g,p)=>{var N;const h=Q,n=U,m=W,_=j;return o(),y(ee,null,[s("div",Me,[s("div",{class:$(["grid-container",`layout${e(ue)}`])},[s("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col"},[t(M,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ge)},{default:k(()=>[t(xe,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(o(),c(De,{key:(N=e(d))==null?void 0:N.no,"clicks-context":e(E)(e(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Be],512),s("div",Re,[i.value&&x.value?(o(),c(M,{key:"next"},{default:k(()=>[(o(),c(we,{key:i.value[0].no,"clicks-context":x.value,route:i.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):F("v-if",!0),$e]),w.value&&e(de)?(o(),y("div",qe,[t(e(w))])):(o(),y("div",Pe,[(o(),c(Ie,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:I({fontSize:`${e(pe)}em`}),"clicks-context":e(a)},null,8,["no","style","clicks-context"])),s("div",Te,[t(B,{title:"Increase font size",onClick:e(me)},{default:k(()=>[t(h)]),_:1},8,["onClick"]),t(B,{title:"Decrease font size",onClick:e(_e)},{default:k(()=>[t(n)]),_:1},8,["onClick"]),F("v-if",!0)])])),s("div",Ee,[t(ke,{persist:!0}),Ve,s("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:p[2]||(p[2]=(...L)=>e(S)&&e(S)(...L))},[t(m,{class:"absolute"}),t(_,{class:"absolute opacity-0"})]),s("div",Ae,Z(e(G)),1)]),(o(),c(ze,{key:2}))],2),s("div",Ge,[s("div",{class:"progress h-3px bg-primary transition-all",style:I({width:`${(e(u)-1)/(e(V)-1)*100+1}%`})},null,4)])]),t(he),t(Ce),t(ye)],64)}}}),et=q(He,[["__scopeId","data-v-15891912"],["__file","C:/Users/20113/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter.vue"]]);export{et as default};
