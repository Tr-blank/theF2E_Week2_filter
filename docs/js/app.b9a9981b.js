(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],p=0,f=[];p<r.length;p++)s=r[p],i[s]&&f.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={1:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([3,0]),n()})({"1LSj":function(t,e,n){"use strict";var o=n("TpHb"),i=n.n(o);i.a},"2WZG":function(t,e,n){"use strict";n.r(e),n.d(e,"dataJson",function(){return o});var o=[{id:1,title:"Bread",tool:{name:"Oven (窯烤)",iconName:"casseroledish_small"},condition:["Bread (麵包)","Snack (小吃)"],ingredients:"全麵粉",stuffIcons:[{constitute:["flour","flour","flour"]},{constitute:["flour","flour","flour","flour"]}],exchange:[6,0,0,0],more_exchange:[2,1,0,0]},{id:2,title:"Chips",tool:{name:"Oven (窯烤)",iconName:"casseroledish_small"},condition:["Veggie (蔬菜)","Snack (小吃)"],ingredients:"馬鈴薯*2+馬鈴薯或香料粉",stuffIcons:[{constitute:["potato","potato","potato"]},{constitute:["potato","potato","spotspice_ground"]},{constitute:["potato","potato","potato","spotspice_ground"]}],exchange:[6,0,0,0],more_exchange:[2,1,0,0]},{id:3,title:"Veggie Soup",tool:{name:"Cookpot (吊鍋)",iconName:"pot_small"},condition:["Veggie (蔬菜)","Snack (小吃)","Soup (湯)"],ingredients:"蔬菜*3(不可全相同)",stuffIcons:[{constitute:["mushrooms","potato","potato"]},{constitute:["mushrooms","mushrooms","potato"]},{constitute:["carrot","potato","turnip"]},{constitute:["carrot","potato","potato"]},{constitute:["potato","potato","turnip"]}],exchange:[5,0,0,0],more_exchange:[4,1,0,0]},{id:4,title:"Jelly Sandwich",tool:{name:"Grill (烤盤)",iconName:"grill_small"},condition:["Snack (小吃)","Bread (麵包)"],ingredients:"漿果+麵粉、楓糖",stuffIcons:[{constitute:["berries","berries","flour"]},{constitute:["berries","flour","syrup"]},{constitute:["berries","flour","flour","syrup"]},{constitute:["berries","berries","flour","flour"]},{constitute:["berries","berries","berries","flour"]}],exchange:[8,0,0,0],more_exchange:[4,1,0,0]},{id:5,title:"Fish Stew",tool:{name:"Cookpot (吊鍋)",iconName:"pot_small"},condition:["Soup (湯)","Fish (魚類)"],ingredients:"魚類+蔬菜",stuffIcons:[{constitute:["salmon","potato","potato"]},{constitute:["salmon","foliage","foliage"]},{constitute:["salmon","carrot","carrot"]},{constitute:["salmon","salmon","potato"]},{constitute:["salmon","salmon","salmon"]}],exchange:[8,0,0,0],more_exchange:[4,1,0,0]},{id:6,title:"Turnip Cake",tool:{name:"Oven (窯烤)",iconName:"casseroledish_small"},condition:["Snack (小吃)","Veggie (蔬菜)"],ingredients:"甜菜*2+甜菜或蔬菜",stuffIcons:[{constitute:["turnip","turnip","carrot"]},{constitute:["turnip","turnip","ingredient_slot"]},{constitute:["turnip","turnip","turnip"]},{constitute:["turnip","turnip","turnip","carrot"]},{constitute:["turnip","turnip","turnip","turnip"]}],exchange:[8,0,0,0],more_exchange:[4,1,0,0]},{id:7,title:"Potato Pancakes",tool:{name:"Grill (烤盤)",iconName:"grill_small"},condition:["Snack (小吃)","Veggie (蔬菜)"],ingredients:"馬鈴薯*2+馬鈴薯或洋蔥",stuffIcons:[{constitute:["potato","potato","potato"]},{constitute:["potato","potato","ingredient_slot"]},{constitute:["potato","potato","potato","ingredient_slot"]}],exchange:[8,0,0,0],more_exchange:[4,1,0,0]},{id:8,title:"Potato Pancakes",tool:{name:"Cookpot (吊鍋)",iconName:"pot_small"},condition:["Soup (湯)","Veggie (蔬菜)","Snack (小吃)"],ingredients:"馬鈴薯*2+馬鈴薯或香料粉",stuffIcons:[{constitute:["potato","potato","potato"]},{constitute:["potato","potato","spotspice_ground"]},{constitute:["potato","potato","potato","potato"]},{constitute:["potato","potato","potato","spotspice_ground"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:9,title:"Fishball Skewers",tool:{name:"Grill (烤盤)",iconName:"grill_small"},condition:["Fish (魚類)","Snack (小吃)"],ingredients:"魚類+樹枝、蔬菜",stuffIcons:[{constitute:["twigs","salmon","potato"]},{constitute:["twigs","salmon","carrot"]},{constitute:["twigs","salmon","ingredient_slot"]},{constitute:["twigs","salmon","turnip"]},{constitute:["twigs","salmon","salmon"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:10,title:"Meatballs",tool:{name:"Cookpot (吊鍋)",iconName:"pot_small"},condition:["Meat (肉類)","Snack (小吃)"],ingredients:"全肉或肉類+蔬菜",stuffIcons:[{constitute:["smallmeat","potato","potato"]},{constitute:["smallmeat","foliage","foliage"]},{constitute:["smallmeat","carrot","carrot"]},{constitute:["smallmeat","carrot","potato"]},{constitute:["smallmeat","smallmeat","smallmeat"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]}]},3:function(t,e,n){t.exports=n("zUnb")},"7EbL":function(t,e,n){},TpHb:function(t,e,n){},VhOD:function(t,e,n){"use strict";var o=n("sTEK"),i=n.n(o);i.a},ZCWV:function(t,e,n){"use strict";var o=n("7EbL"),i=n.n(o);i.a},sTEK:function(t,e,n){},zUnb:function(t,e,n){"use strict";n.r(e);n("VRzm");var o=n("Kw5r"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{attrs:{id:"app"}},[n("div",{staticClass:"header-top"},[t._v("6/14~7/9 新遊戲活動「The Gorge」")]),t._m(0),n("router-view")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("img",{staticClass:"logoImg",attrs:{src:"img/logo.png",alt:""}})])}],s=(n("ZCWV"),n("KHd+")),r={},c=Object(s["a"])(r,i,a,!1,null,null,null),l=c.exports,u=n("jE9Z"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"inner"},[n("aside",[n("div",{staticClass:"filter"},[n("input",{attrs:{type:"text",placeholder:"搜尋食材"}}),n("p",[t._v("料理類型")]),n("ul",{staticClass:"typelist"},[n("li",{on:{click:t.typeFilter}},[t._v("Snack (小吃)")]),n("li",{on:{click:t.typeFilter}},[t._v("Veggie (蔬菜)")]),n("li",{on:{click:t.typeFilter}},[t._v("Dessert (甜點)")]),n("li",{on:{click:t.typeFilter}},[t._v("Bread (麵包)")]),n("li",{on:{click:t.typeFilter}},[t._v("Meat (肉類)")]),n("li",{on:{click:t.typeFilter}},[t._v("Fish (魚類)")]),n("li",{on:{click:t.typeFilter}},[t._v("Soup (湯)")]),n("li",{on:{click:t.typeFilter}},[t._v("Pasta (義大利麵)")]),n("li",{on:{click:t.typeFilter}},[t._v("Cheese (起司)")])]),n("p",[t._v("烹飪工具")]),t._m(0),n("p",[t._v("金幣數量排序")]),n("ul",{staticClass:"coinlist"},[n("li",{attrs:{kind:"4"},on:{click:t.coinSort}},[t._v("彩虹幣")]),n("li",{attrs:{kind:"3"},on:{click:t.coinSort}},[t._v("金幣")]),n("li",{attrs:{kind:"2"},on:{click:t.coinSort}},[t._v("銀幣")]),n("li",{attrs:{kind:"1"},on:{click:t.coinSort}},[t._v("銅幣")])])])]),n("article",[n("ul",t._l(t.data,function(e){return n("li",{key:e.id,staticClass:"listItem"},[n("div",{staticClass:"itemInfo"},[n("div",{staticClass:"title"},[t._v(t._s(e.title)),n("img",{staticClass:"titleHr",attrs:{src:"img/quagmire_recipe_line_break.png",alt:""}})]),n("span",{class:"itemImg item-"+e.id}),n("div",[n("img",{staticClass:"icon",attrs:{src:"img/stuffIcons/"+e.tool.iconName+".png",alt:""}}),n("span",[t._v(t._s(e.tool.name))])]),n("div",{staticClass:"typeList"},t._l(e.condition,function(e,o){return n("span",{key:o,staticClass:"typeItem"},[t._v(t._s(e))])}))]),n("div",{staticClass:"itemDetail"},[n("div",[n("span",{staticClass:"titleSmall"},[t._v("一般供奉")]),t._l(e.exchange,function(e,o){return 0!=e?n("span",{key:o,staticClass:"coin"},[n("img",{staticClass:"icon",attrs:{src:"img/stuffIcons/quagmire_coin"+(o+1)+".png",alt:""}}),t._v(t._s(e)+"\n            ")]):t._e()})],2),n("div",[n("span",{staticClass:"titleSmall"},[t._v("銀具供奉")]),t._l(e.more_exchange,function(e,o){return 0!=e?n("span",{key:o,staticClass:"coin"},[n("img",{staticClass:"icon",attrs:{src:"img/stuffIcons/quagmire_coin"+(o+1)+".png",alt:""}}),t._v(t._s(e)+"\n            ")]):t._e()})],2),n("p",[t._v(t._s(e.ingredients))]),n("img",{attrs:{src:"img/quagmire_recipe_line.png",alt:""}}),t._l(e.stuffIcons,function(e,o){return n("div",{key:o,staticClass:"stuffList"},[t._v(t._s(o+1)+".\n            "),t._l(e.constitute,function(t,e){return n("span",{key:e},[n("img",{attrs:{src:"img/stuffIcons/"+t+".png",alt:""}})])})],2)})],2)])}))])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"toollist"},[n("li",[t._v("吊鍋")]),n("li",[t._v("窯烤")]),n("li",[t._v("烤盤")]),n("li",[t._v("大吊鍋")]),n("li",[t._v("大窯烤")]),n("li",[t._v("大烤盤")])])}],m=(n("Vd3H"),n("Z2Ku"),n("L9s1"),n("xmWZ")),g=n("3Aqn"),d=n("qpph"),_=n("0yhX"),h=n("EdlT"),v=n("mrSG"),b=n("YKMj"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t._v("\n    123\n")])},y=[],x=function(t){function e(){return Object(m["a"])(this,e),Object(_["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(g["a"])(e,t),e}(b["c"]);v["a"]([Object(b["b"])(),v["b"]("design:type",String)],x.prototype,"msg",void 0),x=v["a"]([b["a"]],x);var C=x,S=C,w=(n("1LSj"),Object(s["a"])(S,k,y,!1,null,"1883246a",null)),O=w.exports,j=n("2WZG"),I=j.dataJson,T=function(t){function e(){return Object(m["a"])(this,e),Object(_["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(d["a"])(e,[{key:"data",value:function(){return{nowTypeClick:[],data:I}}},{key:"typeFilter",value:function(t){var e=this,n=t.currentTarget,o=n.innerHTML;this.nowTypeClick.push(o);var i=[],a=this.nowTypeClick.length;console.log(this.nowTypeClick);for(var s=0;s<this.data.length;s++){var r=this.data[s].condition.filter(function(t){return e.nowTypeClick.includes(t)});r.length==a&&i.push(this.data[s].id)}this.data=this.data.filter(function(t,e,n){for(var o=0;o<i.length;o++)if(i[o]==t.id)return!0;return!1})}},{key:"coinSort",value:function(t){var e=t.currentTarget,n=e.getAttribute("kind");this.data=this.data.sort(function(t,e){var o=t.exchange[n-1]>t.more_exchange[n-1]?t.exchange[n-1]:t.more_exchange[n-1],i=e.exchange[n-1]>e.more_exchange[n-1]?e.exchange[n-1]:e.more_exchange[n-1],a=o<i?1:-1;return a})}}]),Object(g["a"])(e,t),e}(b["c"]);T=v["a"]([Object(b["a"])({components:{HelloWorld:O}})],T);var F=T,E=F,N=(n("VhOD"),Object(s["a"])(E,p,f,!1,null,null,null)),V=N.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],M={},$=Object(s["a"])(M,P,L,!1,null,null,null),q=$.exports;o["default"].use(u["a"]);var G=new u["a"]({routes:[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:q}]}),H=n("L2JU");o["default"].use(H["a"]);var Z=new H["a"].Store({state:{},mutations:{},actions:{}}),J=n("lIOY");Object(J["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["default"].config.productionTip=!1,new o["default"]({router:G,store:Z,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.b9a9981b.js.map