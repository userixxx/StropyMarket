(()=>{var e,t={3701:(e,t,r)=>{"use strict";r.r(t);var l=r(9196);const c=window.wp.blocks,n=window.wc.wcSettings;var o=r(2911),a=r(565);r(4010);const i=JSON.parse('{"name":"woocommerce/handpicked-products","title":"Hand-picked Products","category":"woocommerce","keywords":["Handpicked Products","WooCommerce"],"description":"Display a selection of hand-picked products in a grid.","supports":{"align":["wide","full"],"html":false},"attributes":{"align":{"type":"string"},"columns":{"type":"number","default":3},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","image":true},"title":{"type":"boolean","title":true},"price":{"type":"boolean","price":true},"rating":{"type":"boolean","rating":true},"button":{"type":"boolean","button":true}}},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"},"products":{"type":"array","default":[]},"alignButtons":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),s=window.wp.blockEditor,m=window.wp.components;var d=r(9307),u=r(5736);const E=({onChange:e,settings:t})=>{const{image:r,button:c,price:n,rating:o,title:a}=t,i=!1!==r;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Product image","woocommerce"),checked:i,onChange:()=>e({...t,image:!i})}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Product title","woocommerce"),checked:a,onChange:()=>e({...t,title:!a})}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Product price","woocommerce"),checked:n,onChange:()=>e({...t,price:!n})}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Product rating","woocommerce"),checked:o,onChange:()=>e({...t,rating:!o})}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Add to Cart button","woocommerce"),checked:c,onChange:()=>e({...t,button:!c})}))},h=({value:e,setAttributes:t})=>(0,l.createElement)(m.SelectControl,{label:(0,u.__)("Order products by","woocommerce"),value:e,options:[{label:(0,u.__)("Newness - newest first","woocommerce"),value:"date"},{label:(0,u.__)("Price - low to high","woocommerce"),value:"price_asc"},{label:(0,u.__)("Price - high to low","woocommerce"),value:"price_desc"},{label:(0,u.__)("Rating - highest first","woocommerce"),value:"rating"},{label:(0,u.__)("Sales - most first","woocommerce"),value:"popularity"},{label:(0,u.__)("Title - alphabetical","woocommerce"),value:"title"},{label:(0,u.__)("Menu Order","woocommerce"),value:"menu_order"}],onChange:e=>t({orderby:e})});var p=r(2720),g=r(7608),w=r.n(g),_=r(4333);const y={clear:(0,u.__)("Clear all selected items","woocommerce"),noItems:(0,u.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:(0,u.__)("No results for %s","woocommerce"),search:(0,u.__)("Search for items","woocommerce"),selected:e=>(0,u.sprintf)(/* translators: Number of items selected from list. */ /* translators: Number of items selected from list. */
(0,u._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:(0,u.__)("Search results updated.","woocommerce")},f=(e,t=e)=>{const r=e.reduce(((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),l=("id",t.reduce(((e,t)=>(e[String(t.id)]=t,e)),{}));const c=["0"],n=(e={})=>e.parent?[...n(l[e.parent]),e.name]:e.name?[e.name]:[],o=e=>e.map((e=>{const t=r[e.id];return c.push(""+e.id),{...e,breadcrumbs:n(l[e.parent]),children:t&&t.length?o(t):[]}})),a=o(r[0]||[]);return Object.entries(r).forEach((([e,t])=>{c.includes(e)||a.push(...o(t||[]))})),a},b=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map(((e,t)=>r.test(e)?(0,l.createElement)("strong",{key:t},e):(0,l.createElement)(d.Fragment,{key:t},e)))};function x(e,t,r){const l=new Set(t.map((e=>e[r])));return e.filter((e=>!l.has(e[r])))}const v=window.wp.htmlEntities,k=({label:e})=>(0,l.createElement)("span",{className:"woocommerce-search-list__item-count"},e),S=e=>{const{item:t,search:r}=e,c=t.breadcrumbs&&t.breadcrumbs.length;return(0,l.createElement)("span",{className:"woocommerce-search-list__item-label"},c?(0,l.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(n=t.breadcrumbs).length?n.slice(0,1).toString():2===n.length?n.slice(0,1).toString()+" › "+n.slice(-1).toString():n.slice(0,1).toString()+" … "+n.slice(-1).toString()):null,(0,l.createElement)("span",{className:"woocommerce-search-list__item-name"},b((0,v.decodeEntities)(t.name),r)));var n},C=({countLabel:e,className:t,depth:r=0,controlId:c="",item:n,isSelected:o,isSingle:a,onSelect:i,search:s="",selected:u,useExpandedPanelId:E,...h})=>{var p,g;const[_,y]=E,f=null!=e&&void 0!==n.count&&null!==n.count,C=!(null===(p=n.breadcrumbs)||void 0===p||!p.length),P=!(null===(g=n.children)||void 0===g||!g.length),O=_===n.id,N=w()(["woocommerce-search-list__item",`depth-${r}`,t],{"has-breadcrumbs":C,"has-children":P,"has-count":f,"is-expanded":O,"is-radio-button":a}),I=h.name||`search-list-item-${c}`,A=`${I}-${n.id}`,T=(0,d.useCallback)((()=>{y(O?-1:Number(n.id))}),[O,n.id,y]);return P?(0,l.createElement)("div",{className:N,onClick:T,onKeyDown:e=>"Enter"===e.key||" "===e.key?T():null,role:"treeitem",tabIndex:0},a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{type:"radio",id:A,name:I,value:n.value,onChange:i(n),onClick:e=>e.stopPropagation(),checked:o,className:"woocommerce-search-list__item-input",...h}),(0,l.createElement)(S,{item:n,search:s}),f?(0,l.createElement)(k,{label:e||n.count}):null):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(m.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:o,...!o&&n.children.some((e=>u.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:b((0,v.decodeEntities)(n.name),s),onChange:()=>{o?i(x(u,n.children,"id"))():i(function(e,t,r){const l=x(t,e,"id");return[...e,...l]}(u,n.children))()},onClick:e=>e.stopPropagation()}),f?(0,l.createElement)(k,{label:e||n.count}):null)):(0,l.createElement)("label",{htmlFor:A,className:N},a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{...h,type:"radio",id:A,name:I,value:n.value,onChange:i(n),checked:o,className:"woocommerce-search-list__item-input"}),(0,l.createElement)(S,{item:n,search:s})):(0,l.createElement)(m.CheckboxControl,{...h,id:A,name:I,className:"woocommerce-search-list__item-input",value:(0,v.decodeEntities)(n.value),label:b((0,v.decodeEntities)(n.name),s),onChange:i(n),checked:o}),f?(0,l.createElement)(k,{label:e||n.count}):null)};var P=r(837);r(1058);const O=({id:e,label:t,popoverContents:r,remove:c,screenReaderLabel:n,className:a=""})=>{const[i,s]=(0,d.useState)(!1),E=(0,_.useInstanceId)(O);if(n=n||t,!t)return null;t=(0,v.decodeEntities)(t);const h=w()("woocommerce-tag",a,{"has-remove":!!c}),p=`woocommerce-tag__label-${E}`,g=(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"screen-reader-text"},n),(0,l.createElement)("span",{"aria-hidden":"true"},t));return(0,l.createElement)("span",{className:h},r?(0,l.createElement)(m.Button,{className:"woocommerce-tag__text",id:p,onClick:()=>s(!0)},g):(0,l.createElement)("span",{className:"woocommerce-tag__text",id:p},g),r&&i&&(0,l.createElement)(m.Popover,{onClose:()=>s(!1)},r),c&&(0,l.createElement)(m.Button,{className:"woocommerce-tag__remove",onClick:c(e),label:(0,u.sprintf)(
// Translators: %s label.
// Translators: %s label.
(0,u.__)("Remove %s","woocommerce"),t),"aria-describedby":p},(0,l.createElement)(o.Z,{icon:P.Z,size:20,className:"clear-icon",role:"img"})))},N=O;r(9658);const I=e=>(0,l.createElement)(C,{...e}),A=e=>{const{list:t,selected:r,renderItem:c,depth:n=0,onSelect:o,instanceId:a,isSingle:i,search:s,useExpandedPanelId:m}=e,[u]=m;return t?(0,l.createElement)(d.Fragment,null,t.map((t=>{var E,h;const p=null!==(E=t.children)&&void 0!==E&&E.length&&!i?t.children.every((({id:e})=>r.find((t=>t.id===e)))):!!r.find((({id:e})=>e===t.id)),g=(null===(h=t.children)||void 0===h?void 0:h.length)&&u===t.id;return(0,l.createElement)(d.Fragment,{key:t.id},(0,l.createElement)("li",null,c({item:t,isSelected:p,onSelect:o,isSingle:i,selected:r,search:s,depth:n,useExpandedPanelId:m,controlId:a})),g?(0,l.createElement)(A,{...e,list:t.children,depth:n+1}):null)}))):null},T=({isLoading:e,isSingle:t,selected:r,messages:c,onChange:n,onRemove:o})=>{if(e||t||!r)return null;const a=r.length;return(0,l.createElement)("div",{className:"woocommerce-search-list__selected"},(0,l.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,l.createElement)("strong",null,c.selected(a)),a>0?(0,l.createElement)(m.Button,{variant:"link",isDestructive:!0,onClick:()=>n([]),"aria-label":c.clear},(0,u.__)("Clear all","woocommerce")):null),a>0?(0,l.createElement)("ul",null,r.map(((e,t)=>(0,l.createElement)("li",{key:t},(0,l.createElement)(N,{label:e.name,id:e.id,remove:o}))))):null)},B=({filteredList:e,search:t,onSelect:r,instanceId:c,useExpandedPanelId:n,...a})=>{const{messages:i,renderItem:s,selected:m,isSingle:d}=a,E=s||I;return 0===e.length?(0,l.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,l.createElement)(o.Z,{icon:p.Z,role:"img"})),(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,u.sprintf)(i.noResults,t):i.noItems)):(0,l.createElement)("ul",{className:"woocommerce-search-list__list"},(0,l.createElement)(A,{useExpandedPanelId:n,list:e,selected:m,renderItem:E,onSelect:r,instanceId:c,isSingle:d,search:t}))},R=e=>{const{className:t="",isCompact:r,isHierarchical:c,isLoading:n,isSingle:o,list:a,messages:i=y,onChange:s,onSearch:E,selected:h,type:p="text",debouncedSpeak:g}=e,[b,x]=(0,d.useState)(""),v=(0,d.useState)(-1),k=(0,_.useInstanceId)(R),S=(0,d.useMemo)((()=>({...y,...i})),[i]),C=(0,d.useMemo)((()=>((e,t,r)=>{if(!t)return r?f(e):e;const l=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),c=e.map((e=>!!l.test(e.name)&&e)).filter(Boolean);return r?f(c,e):c})(a,b,c)),[a,b,c]);(0,d.useEffect)((()=>{g&&g(S.updated)}),[g,S]),(0,d.useEffect)((()=>{"function"==typeof E&&E(b)}),[b,E]);const P=(0,d.useCallback)((e=>()=>{o&&s([]);const t=h.findIndex((({id:t})=>t===e));s([...h.slice(0,t),...h.slice(t+1)])}),[o,h,s]),O=(0,d.useCallback)((e=>()=>{Array.isArray(e)?s(e):-1===h.findIndex((({id:t})=>t===e.id))?s(o?[e]:[...h,e]):P(e.id)()}),[o,P,s,h]),N=(0,d.useCallback)((e=>{const[t]=h.filter((t=>!e.find((e=>t.id===e.id))));P(t.id)()}),[P,h]);return(0,l.createElement)("div",{className:w()("woocommerce-search-list",t,{"is-compact":r,"is-loading":n,"is-token":"token"===p})},"text"===p&&(0,l.createElement)(T,{...e,onRemove:P,messages:S}),(0,l.createElement)("div",{className:"woocommerce-search-list__search"},"text"===p?(0,l.createElement)(m.TextControl,{label:S.search,type:"search",value:b,onChange:e=>x(e)}):(0,l.createElement)(m.FormTokenField,{disabled:n,label:S.search,onChange:N,onInputChange:e=>x(e),suggestions:[],__experimentalValidateInput:()=>!1,value:n?[(0,u.__)("Loading…","woocommerce")]:h.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),n?(0,l.createElement)("div",{className:"woocommerce-search-list__list"},(0,l.createElement)(m.Spinner,null)):(0,l.createElement)(B,{...e,search:b,filteredList:C,messages:S,onSelect:O,instanceId:k,useExpandedPanelId:v}))};var j,F,L,G,M,$,H,Z,D,V;(0,m.withSpokenMessages)(R);const U=(0,n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),q=(U.pluginUrl,U.pluginUrl,U.buildPhase,null===(j=n.STORE_PAGES.shop)||void 0===j||j.permalink,null===(F=n.STORE_PAGES.checkout)||void 0===F||F.id,null===(L=n.STORE_PAGES.checkout)||void 0===L||L.permalink,null===(G=n.STORE_PAGES.privacy)||void 0===G||G.permalink,null===(M=n.STORE_PAGES.privacy)||void 0===M||M.title,null===($=n.STORE_PAGES.terms)||void 0===$||$.permalink,null===(H=n.STORE_PAGES.terms)||void 0===H||H.title,null===(Z=n.STORE_PAGES.cart)||void 0===Z||Z.id,null===(D=n.STORE_PAGES.cart)||void 0===D||D.permalink,null!==(V=n.STORE_PAGES.myaccount)&&void 0!==V&&V.permalink?n.STORE_PAGES.myaccount.permalink:(0,n.getSetting)("wpLoginUrl","/wp-login.php"),(0,n.getSetting)("localPickupEnabled",!1),(0,n.getSetting)("countries",{})),J=(0,n.getSetting)("countryData",{}),W=(Object.fromEntries(Object.keys(J).filter((e=>!0===J[e].allowBilling)).map((e=>[e,q[e]||""]))),Object.fromEntries(Object.keys(J).filter((e=>!0===J[e].allowBilling)).map((e=>[e,J[e].states||[]]))),Object.fromEntries(Object.keys(J).filter((e=>!0===J[e].allowShipping)).map((e=>[e,q[e]||""]))),Object.fromEntries(Object.keys(J).filter((e=>!0===J[e].allowShipping)).map((e=>[e,J[e].states||[]]))),Object.fromEntries(Object.keys(J).map((e=>[e,J[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],order:[]}),Q=((0,n.getSetting)("addressFieldsLocations",W).address,(0,n.getSetting)("addressFieldsLocations",W).contact,(0,n.getSetting)("addressFieldsLocations",W).order,(0,n.getSetting)("additionalOrderFields",{}),(0,n.getSetting)("additionalContactFields",{}),(0,n.getSetting)("additionalAddressFields",{}),window.wp.url),z=window.wp.apiFetch;var K=r.n(z);const Y=({selected:e=[],search:t="",queryArgs:r={}})=>{const l=(({selected:e=[],search:t="",queryArgs:r={}})=>{const l=U.productCount>100,c={per_page:l?100:0,catalog_visibility:"any",search:t,orderby:"title",order:"asc"},n=[(0,Q.addQueryArgs)("/wc/store/v1/products",{...c,...r})];return l&&e.length&&n.push((0,Q.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:e,per_page:0})),n})({selected:e,search:t,queryArgs:r});return Promise.all(l.map((e=>K()({path:e})))).then((e=>{const t=((e,t)=>{const r=new Map;return e.filter((e=>{const l=t(e);return!r.has(l)&&(r.set(l,e),!0)}))})(e.flat(),(e=>e.id));return t.map((e=>({...e,parent:0})))})).catch((e=>{throw e}))};var X=r(2600);const ee=window.wp.escapeHtml,te=({error:e})=>(0,l.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,l.createElement)("span",null,(0,u.__)("The following error was returned","woocommerce"),(0,l.createElement)("br",null),(0,l.createElement)("code",null,(0,ee.escapeHTML)(e))):"api"===t?(0,l.createElement)("span",null,(0,u.__)("The following error was returned from the API","woocommerce"),(0,l.createElement)("br",null),(0,l.createElement)("code",null,(0,ee.escapeHTML)(e))):e:(0,u.__)("An error has prevented the block from being updated.","woocommerce"))(e)),re=({error:e,onChange:t,onSearch:r,selected:c,products:n,isLoading:o,isCompact:a})=>{const i={clear:(0,u.__)("Clear all products","woocommerce"),list:(0,u.__)("Products","woocommerce"),noItems:(0,u.__)("Your store doesn't have any products.","woocommerce"),search:(0,u.__)("Search for products to display","woocommerce"),selected:e=>(0,u.sprintf)(/* translators: %d is the number of selected products. */ /* translators: %d is the number of selected products. */
(0,u._n)("%d product selected","%d products selected",e,"woocommerce"),e),updated:(0,u.__)("Product search results updated.","woocommerce")};return e?(0,l.createElement)(te,{error:e}):(0,l.createElement)(R,{className:"woocommerce-products",list:n.map((e=>{const t=e.sku?" ("+e.sku+")":"";return{...e,name:`${(0,v.decodeEntities)(e.name)}${t}`}})),isCompact:a,isLoading:o,selected:n.filter((({id:e})=>c.includes(e))),onSearch:r,onChange:t,messages:i})};re.defaultProps={selected:[],products:[],isCompact:!1,isLoading:!0};const le=(ae=re,({selected:e,...t})=>{const[r,c]=(0,d.useState)(!0),[n,o]=(0,d.useState)(null),[a,i]=(0,d.useState)([]),s=U.productCount>100,m=async e=>{const t=await(async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}})(e);o(t),c(!1)},u=(0,d.useRef)(e);(0,d.useEffect)((()=>{Y({selected:u.current}).then((e=>{i(e),c(!1)})).catch(m)}),[u]);const E=(0,X.y1)((t=>{Y({selected:e,search:t}).then((e=>{i(e),c(!1)})).catch(m)}),400),h=(0,d.useCallback)((e=>{c(!0),E(e)}),[c,E]);return(0,l.createElement)(ae,{...t,selected:e,error:n,products:a,isLoading:r,onSearch:s?h:null})}),ce=e=>{const{attributes:t,setAttributes:r}=e,{columns:c,contentVisibility:o,orderby:a,alignButtons:i}=t;return(0,l.createElement)(s.InspectorControls,{key:"inspector"},(0,l.createElement)(m.PanelBody,{title:(0,u.__)("Layout","woocommerce"),initialOpen:!0},(0,l.createElement)(m.RangeControl,{label:(0,u.__)("Columns","woocommerce"),value:c,onChange:e=>r({columns:e}),min:(0,n.getSetting)("minColumns",1),max:(0,n.getSetting)("maxColumns",6)}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Align Buttons","woocommerce"),help:i?(0,u.__)("Buttons are aligned vertically.","woocommerce"):(0,u.__)("Buttons follow content.","woocommerce"),checked:i,onChange:()=>r({alignButtons:!i})})),(0,l.createElement)(m.PanelBody,{title:(0,u.__)("Content","woocommerce"),initialOpen:!0},(0,l.createElement)(E,{settings:o,onChange:e=>r({contentVisibility:e})})),(0,l.createElement)(m.PanelBody,{title:(0,u.__)("Order By","woocommerce"),initialOpen:!1},(0,l.createElement)(h,{setAttributes:r,value:a})),(0,l.createElement)(m.PanelBody,{title:(0,u.__)("Products","woocommerce"),initialOpen:!1},(0,l.createElement)(le,{selected:t.products,onChange:(e=[])=>{const t=e.map((({id:e})=>e));r({products:t})},isCompact:!0})))},ne=e=>{const{attributes:t,setAttributes:r,debouncedSpeak:c,isEditing:n,setIsEditing:i}=e;return(0,l.createElement)(m.Placeholder,{icon:(0,l.createElement)(o.Z,{icon:a.Z}),label:(0,u.__)("Hand-picked Products","woocommerce"),className:"wc-block-products-grid wc-block-handpicked-products"},(0,u.__)("Display a selection of hand-picked products in a grid.","woocommerce"),(0,l.createElement)("div",{className:"wc-block-handpicked-products__selection"},(0,l.createElement)(le,{selected:t.products,onChange:(e=[])=>{const t=e.map((({id:e})=>e));r({products:t})}}),(0,l.createElement)(m.Button,{variant:"primary",onClick:()=>{i(!n),c((0,u.__)("Now displaying a preview of the Hand-picked Products block.","woocommerce"))}},(0,u.__)("Done","woocommerce"))))},oe=window.wp.serverSideRender;var ae,ie=r.n(oe);const se=(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},(0,l.createElement)("title",null,"Grid Block Preview"),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"})),me=e=>{const{attributes:t,name:r}=e;return t.isPreview?se:(0,l.createElement)(ie(),{block:r,attributes:t})},de=(0,m.withSpokenMessages)((e=>{const t=(0,s.useBlockProps)(),{attributes:{products:r}}=e,[c,n]=(0,d.useState)(!r.length);return(0,l.createElement)("div",{...t},(0,l.createElement)(s.BlockControls,null,(0,l.createElement)(m.ToolbarGroup,{controls:[{icon:"edit",title:(0,u.__)("Edit selected products","woocommerce"),onClick:()=>n(!c),isActive:c}]})),(0,l.createElement)(ce,{...e}),c?(0,l.createElement)(ne,{isEditing:c,setIsEditing:n,...e}):(0,l.createElement)(m.Disabled,null,(0,l.createElement)(me,{...e})))}));(0,c.registerBlockType)(i,{icon:{src:(0,l.createElement)(o.Z,{icon:a.Z,className:"wc-block-editor-components-block-icon"})},attributes:{...i.attributes,columns:{type:"number",default:(0,n.getSetting)("defaultColumns",3)}},edit:de,save:()=>null})},4010:()=>{},9658:()=>{},1058:()=>{},9196:e=>{"use strict";e.exports=window.React},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function l(e){var c=r[e];if(void 0!==c)return c.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,r,c,n)=>{if(!r){var o=1/0;for(m=0;m<e.length;m++){for(var[r,c,n]=e[m],a=!0,i=0;i<r.length;i++)(!1&n||o>=n)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(a=!1,n<o&&(o=n));if(a){e.splice(m--,1);var s=c();void 0!==s&&(t=s)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[r,c,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=1008,(()=>{var e={1008:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var c,n,[o,a,i]=r,s=0;if(o.some((t=>0!==e[t]))){for(c in a)l.o(a,c)&&(l.m[c]=a[c]);if(i)var m=i(l)}for(t&&t(r);s<o.length;s++)n=o[s],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(m)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=l.O(void 0,[2869],(()=>l(3701)));c=l.O(c),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["handpicked-products"]=c})();