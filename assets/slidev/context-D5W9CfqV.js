import{a2 as n,a8 as r,t as j,y as u,av as $,aD as v}from"../modules/vue-BvuM7Cwn.js";import{T as p,a1 as C,aj as x,a0 as S,Z as T,$ as k,ak as l,Y as R,al as E,am as F}from"../index-BfA8V4vA.js";function g(){const t=n(x),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(T),c=n(k),o=n(l,{}),d=n(R,void 0),m=n(p,j(1)),f=n(C,u(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function O(t){var i,c;$(l,t);const{$slidev:a,$page:s}=g(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function b(t,a){return{...v(t,a===0?E:F),frontmatter:t}}export{b as f,O as p,g as u};
