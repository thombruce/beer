(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4,5,6,9],{4533:function(t,e,r){var content=r(4538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("5f973fc4",content,!0,{sourceMap:!1})},4534:function(t,e,r){"use strict";r.r(e);var n={props:["toc"]},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",t._l(t.toc,(function(link){return r("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[r("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},4535:function(t,e,r){"use strict";var n=r(4),l=r(4536),c=r(38),o=r(27),d=r(62),f=r(131);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=o(e.length),n=f(e,0);return n.length=l(n,e,e,r,0,void 0===t?1:d(t)),n}})},4536:function(t,e,r){"use strict";var n=r(96),l=r(27),c=r(76),o=function(t,e,source,r,d,f,h,_){for(var element,m=d,v=0,C=!!h&&c(h,_,3);v<r;){if(v in source){if(element=C?C(source[v],v,e):source[v],f>0&&n(element))m=o(t,e,element,l(element.length),m,f-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[m]=element}m++}v++}return m};t.exports=o},4537:function(t,e,r){"use strict";r(4533)},4538:function(t,e,r){var n=r(32)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\ndl.authors dd[data-v-7e69720c]:first-of-type:before{\n  content:"by "\n}\ndl.authors dd[data-v-7e69720c]:not(:last-child):after{\n  content:", "\n}\ndl.authors dd[data-v-7e69720c]:nth-last-child(2):after{\n  content:" and "\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},4539:function(t,e,r){"use strict";r.r(e);var n={props:["articles"]},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.articles?t._l(t.articles,(function(article){return r("article",{staticClass:"card card-side bordered mb-4"},[r("figure",[article.image?r("NuxtImg",{staticStyle:{width:"200px",height:"200px","object-fit":"cover"},attrs:{src:article.image,width:"200",height:"200"}}):t._e()],1),r("div",{staticClass:"card-body"},[r("header",[r("h2",{staticClass:"card-title"},[r("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),article.date?r("time",{attrs:{datetime:article.date}},[t._v(t._s(t._f("toLocaleString")(article.date)))]):t._e()]),article.description?r("div",[r("p",[t._v(t._s(article.description))])]):t._e()])])})):r("div",{staticClass:"text-center"},[r("span",{staticClass:"text-2xl text-secondary"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},4540:function(t,e,r){"use strict";r.r(e);r(14),r(4535);var n=r(64),l={props:["article"],computed:{categories:function(){return(this.article.categories||[this.article.category]).flat().filter(Boolean)},series:function(){return[this.article.series].flat().filter(Boolean)},tags:function(){return[this.article.tags].flat().filter(Boolean)},authors:function(){return(this.article.authors||[this.article.author]).flat().filter(Boolean)}},methods:{parameterize:function(t){return Object(n.kebabCase)(t)}}},c=(r(4537),r(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[t.categories.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Categories")]),t._l(t.categories,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/categories/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/categories/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),t.series.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Series")]),t._l(t.series,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/series/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/series/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),r("h1",[t._v(t._s(t.article.title))]),t.authors.length?r("address",[r("dl",{staticClass:"authors"},[r("dt",{staticClass:"sr-only"},[t._v("Authors")]),t._l(t.authors,(function(e){return r("dd",{staticClass:"inline"},[t.$router.match("/authors/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/authors/"+t.parameterize(e),rel:"author"}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2)]):t._e(),t.tags.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Tags")]),t._l(t.tags,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/tags/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/tags/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),t.article.date?r("time",{staticClass:"block",attrs:{pubdate:"",datetime:t.article.date}},[t._v(t._s(t._f("toLocaleString")(t.article.date)))]):t._e(),t.article.image?r("NuxtImg",{attrs:{src:t.article.image,sizes:"xs:320px sm:640px md:768px"}}):t._e()],1)}),[],!1,null,"7e69720c",null);e.default=component.exports},4541:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",[r("h2",[t._v("Table of Contents")]),r("TntUITableOfContents",{attrs:{toc:t.article.toc}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntUITableOfContents:r(4534).default})},4542:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.article.container},[r("NuxtContent",{attrs:{document:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports},4543:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("TntContentHeader",{attrs:{article:t.article}}),0!=t.article.showToC&&t.article.toc&&t.article.toc.length?[r("TntContentToC",{attrs:{article:t.article}}),r("hr")]:t._e(),r("TntContentBody",{attrs:{article:t.article}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntContentHeader:r(4540).default,TntContentToC:r(4541).default,TntContentBody:r(4542).default})},4561:function(t,e,r){"use strict";r.r(e);var n=r(3),l=(r(31),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,l,c,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.$taxonomies,c=t.params,o=c.page,e.next=4,r(o).where({draft:{$ne:!0}}).sortBy("date","desc").fetch().catch(Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(o,"",{deep:!0}).all();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))));case 4:return d=e.sent,e.abrupt("return",{slug:o,page:d});case 6:case"end":return e.stop()}}),e)})))()}}),c=r(2),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[Array.isArray(t.page)?r("article",[r("header",[r("h1",[t._v(t._s(t._f("titleize")(t.slug)))])]),r("TntBlogList",{attrs:{articles:t.page}})],1):r("TntContent",{attrs:{article:t.page}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntContent:r(4543).default,TntBlogList:r(4539).default})}}]);