(self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[]).push([[7385],{8894:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Block:()=>g,default:()=>f});var o=n(9196),r=n(5736),s=n(7608),a=n.n(s),l=n(2864),c=n(947),i=n(721),u=n(6946);n(2499);const d=e=>({width:e/5*100+"%"}),m=({parentClassName:e})=>{const t=d(0);return(0,o.createElement)("div",{className:a()("wc-block-components-product-rating__norating-container",`${e}-product-rating__norating-container`)},(0,o.createElement)("div",{className:"wc-block-components-product-rating__norating",role:"img"},(0,o.createElement)("span",{style:t})),(0,o.createElement)("span",null,(0,r.__)("No Reviews","woocommerce")))},p=e=>{const{rating:t,reviews:n,parentClassName:s}=e,l=d(t),c=(0,r.sprintf)(/* translators: %f is referring to the average rating value */ /* translators: %f is referring to the average rating value */
(0,r.__)("Rated %f out of 5","woocommerce"),t),i={__html:(0,r.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */ /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
(0,r._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",n,"woocommerce"),(0,r.sprintf)('<strong class="rating">%f</strong>',t),(0,r.sprintf)('<span class="rating">%d</span>',n))};return(0,o.createElement)("div",{className:a()("wc-block-components-product-rating__stars",`${s}__product-rating__stars`),role:"img","aria-label":c},(0,o.createElement)("span",{style:l,dangerouslySetInnerHTML:i}))},v=e=>{const{reviews:t}=e,n=(0,r.sprintf)(/* translators: %s is referring to the total of reviews for a product */ /* translators: %s is referring to the total of reviews for a product */
(0,r._n)("(%s customer review)","(%s customer reviews)",t,"woocommerce"),t);return(0,o.createElement)("span",{className:"wc-block-components-product-rating__reviews_count"},n)},g=e=>{const{textAlign:t,isDescendentOfSingleProductBlock:n,shouldDisplayMockedReviewsWhenProductHasNoReviews:r}=e,s=(0,c.F)(e),{parentClassName:i}=(0,l.useInnerBlockLayoutContext)(),{product:d}=(0,l.useProductDataContext)(),g=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(d),f=(e=>{const t=(0,u.isNumber)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(d),y=a()(s.className,"wc-block-components-product-rating",{[`${i}__product-rating`]:i,[`has-text-align-${t}`]:t}),b=r?(0,o.createElement)(m,{parentClassName:i}):null,_=f?(0,o.createElement)(p,{rating:g,reviews:f,parentClassName:i}):b;if(f||r)return(0,o.createElement)("div",{className:y,style:s.style},(0,o.createElement)("div",{className:"wc-block-components-product-rating__container"},_,f&&n?(0,o.createElement)(v,{reviews:f}):null))},f=(0,i.withProductDataContext)(g)},947:(e,t,n)=>{"use strict";n.d(t,{F:()=>c});var o=n(7608),r=n.n(o),s=n(6946),a=n(3392),l=n(172);const c=e=>{const t=(e=>{const t=(0,s.isObject)(e)?e:{style:{}};let n=t.style;return(0,s.isString)(n)&&(n=JSON.parse(n)||{}),(0,s.isObject)(n)||(n={}),{...t,style:n}})(e),n=(0,l.vc)(t),o=(0,l.l8)(t),c=(0,l.su)(t),i=(0,a.f)(t);return{className:r()(i.className,n.className,o.className,c.className),style:{...i.style,...n.style,...o.style,...c.style}}}},3392:(e,t,n)=>{"use strict";n.d(t,{f:()=>r});var o=n(6946);const r=e=>{const t=(0,o.isObject)(e.style.typography)?e.style.typography:{},n=(0,o.isString)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:n,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},172:(e,t,n)=>{"use strict";n.d(t,{l8:()=>d,su:()=>m,vc:()=>u});var o=n(7608),r=n.n(o),s=n(7427),a=n(2289),l=n(6946);function c(e={}){const t={};return(0,a.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function i(e,t){return e&&t?`has-${(0,s.o)(t)}-${e}`:""}function u(e){var t,n,o,s,a,u,d;const{backgroundColor:m,textColor:p,gradient:v,style:g}=e,f=i("background-color",m),y=i("color",p),b=function(e){if(e)return`has-${e}-gradient-background`}(v),_=b||(null==g||null===(t=g.color)||void 0===t?void 0:t.gradient);return{className:r()(y,b,{[f]:!_&&!!f,"has-text-color":p||(null==g||null===(n=g.color)||void 0===n?void 0:n.text),"has-background":m||(null==g||null===(o=g.color)||void 0===o?void 0:o.background)||v||(null==g||null===(s=g.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,l.isObject)(null==g||null===(a=g.elements)||void 0===a?void 0:a.link)?null==g||null===(u=g.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:c({color:(null==g?void 0:g.color)||{}})}}function d(e){var t;const n=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:n,style:o}=e,s=n?i("border-color",n):"";return r()({"has-border-color":!!n||!(null==o||null===(t=o.border)||void 0===t||!t.color),[s]:!!s})}(e),style:c({border:n})}}function m(e){var t;return{className:void 0,style:c({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},2499:()=>{}}]);