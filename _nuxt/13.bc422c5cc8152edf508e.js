(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{398:function(e,t,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("cc6ac9b0",content,!0,{sourceMap:!1})},401:function(e,t,n){"use strict";var l={components:{AtomLinkTo:n(185).a},props:{type:{type:String,default:function(){return null}},list:{type:Array,default:function(){return[]}}},computed:{styleClasses:function(){var e={};return e["type--"+this.type]=this.type,e}},methods:{getUrl:function(e){return"$i18n"in this?this.localePath(e.url):e.url}}},o=(n(411),n(12)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway"),expression:"$getFont('Raleway')"}],staticClass:"molecule-link-list",class:e.styleClasses},[e._t("default",(function(){return e._l(e.list,(function(t){return n("li",{key:t.title},[n("atom-link-to",{attrs:{url:e.getUrl(t)}},[e._v("\n        "+e._s(t.title)+"\n      ")])],1)}))}))],2)}),[],!1,null,null,null);t.a=component.exports},411:function(e,t,n){"use strict";n(398)},412:function(e,t,n){var l=n(51)((function(i){return i[1]}));l.push([e.i,".molecule-link-list.type--page-menu-links{padding:0;margin:0;list-style:none}.molecule-link-list.type--page-menu-links li{display:block;font-size:8.53333vw;line-height:2em}@media (min-width:576px){.molecule-link-list.type--page-menu-links li{font-size:32px}}@media (min-width:992px){.molecule-link-list.type--page-menu-links li{font-size:36px}}.molecule-link-list.type--page-menu-links li a{color:#000;text-decoration:none;opacity:.6}.molecule-link-list.type--page-menu-links li a.nuxt-link-exact-active{opacity:1}.type--page-menu-links .molecule-link-list.type--page-menu-links{line-height:1;text-align:center}.type--page-menu-links .molecule-link-list.type--page-menu-links li{display:inline-block;margin:0 2.66667vw;font-size:5.86667vw;line-height:1.5em}@media (min-width:576px){.type--page-menu-links .molecule-link-list.type--page-menu-links li{margin:0 10px;font-size:22px}}@media (min-width:992px){.type--page-menu-links .molecule-link-list.type--page-menu-links li{font-size:26px}}.molecule-link-list.type--page-footer{padding:0;margin:0;list-style:none}@media (max-width:991px){.molecule-link-list.type--page-footer{text-align:center}}.molecule-link-list.type--page-footer li{display:inline-block;margin-right:2.66667vw;font-size:4.26667vw;line-height:2em}@media (min-width:576px){.molecule-link-list.type--page-footer li{font-size:16px}}.molecule-link-list.type--page-footer li a{color:#000;text-decoration:none;opacity:.6}.molecule-link-list.type--page-footer li a.nuxt-link-exact-active{opacity:1}",""]),l.locals={},e.exports=l},427:function(e,t,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("4426b2a0",content,!0,{sourceMap:!1})},470:function(e,t,n){"use strict";n(427)},471:function(e,t,n){var l=n(51)((function(i){return i[1]}));l.push([e.i,".page-footer{padding:5.33333% 0;margin:0}@media (min-width:576px){.page-footer{padding:20px 0}}.page-footer{background:#eee}",""]),l.locals={},e.exports=l},489:function(e,t,n){"use strict";n.r(t);var l=n(184),o=n(401),r={components:{LayoutDefaultContainer:l.a,LinkList:o.a},props:{options:{type:Object,default:function(){return{}}},navigation:{type:Array,default:function(){return[]}}}},c=(n(470),n(12)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-default-container",{staticClass:"page-footer",attrs:{tag:"footer"}},[n("nav",[n("link-list",{attrs:{list:e.navigation,type:"page-footer"}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);