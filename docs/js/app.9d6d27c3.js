(function(n){function t(t){for(var i,r,c=t[0],l=t[1],u=t[2],d=0,f=[];d<c.length;d++)r=c[d],a[r]&&f.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],i=!0,c=1;c<e.length;c++){var l=e[c];0!==a[l]&&(i=!1)}i&&(o.splice(t--,1),n=r(r.s=e[0]))}return n}var i={},a={1:0},o=[];function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)r.d(e,i,function(t){return n[t]}.bind(null,i));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([3,0]),e()})({"1LSj":function(n,t,e){"use strict";var i=e("TpHb"),a=e.n(i);a.a},"2WZG":function(n,t,e){"use strict";e.r(t),e.d(t,"dataJson",function(){return i});var i=[{id:1,tool:{name:"窯烤(羊媽第二個)",iconName:"tool1"},condition:["bread(麵包)","snack(小吃)"],ingredients:[{name:"麵粉",quantity:3}],exchange:[{kind:"銅",quantity:6}],more_exchange:[{kind:"藍",quantity:1},{kind:"銅",quantity:2}]},{id:2,tool:{name:"窯烤(羊媽第二個)",iconName:"tool1"},condition:["bread(麵包)","snack(小吃)"],ingredients:[{name:"flour",quantity:3}],exchange:[{kind:"銅",quantity:6}],more_exchange:[{kind:"藍",quantity:1},{kind:"銅",quantity:2}]},{id:3,tool:{name:"窯烤(羊媽第二個)",iconName:"tool1"},condition:["bread(麵包)","snack(小吃)"],ingredients:[{name:"flour",quantity:3}],exchange:[{kind:"銅",quantity:6}],more_exchange:[{kind:"藍",quantity:1},{kind:"銅",quantity:2}]},{id:4,tool:{name:"窯烤(羊媽第二個)",iconName:"tool1"},condition:["bread(麵包)","snack(小吃)"],ingredients:[{name:"flour",quantity:3}],exchange:[{kind:"銅",quantity:6}],more_exchange:[{kind:"藍",quantity:1},{kind:"銅",quantity:2}]},{id:5,tool:{name:"窯烤(羊媽第二個)",iconName:"tool1"},condition:["bread(麵包)","snack(小吃)"],ingredients:[{name:"flour",quantity:3}],exchange:[{kind:"銅",quantity:6}],more_exchange:[{kind:"藍",quantity:1},{kind:"銅",quantity:2}]},{id:6,tool:{name:"窯烤(羊媽第二個)",iconName:"tool1"},condition:["bread(麵包)","snack(小吃)"],ingredients:[{name:"flour",quantity:3}],exchange:[{kind:"銅",quantity:6}],more_exchange:[{kind:"藍",quantity:1},{kind:"銅",quantity:2}]},{id:7,tool:{name:"窯烤(羊媽第二個)",iconName:"tool1"},condition:["bread(麵包)","snack(小吃)"],ingredients:[{name:"flour",quantity:3}],exchange:[{kind:"銅",quantity:6}],more_exchange:[{kind:"藍",quantity:1},{kind:"銅",quantity:2}]},{id:8,tool:{name:"窯烤(羊媽第二個)",iconName:"tool1"},condition:["bread(麵包)","snack(小吃)"],ingredients:[{name:"flour",quantity:3}],exchange:[{kind:"銅",quantity:6}],more_exchange:[{kind:"藍",quantity:1},{kind:"銅",quantity:2}]}]},3:function(n,t,e){n.exports=e("zUnb")},"7EbL":function(n,t,e){},TpHb:function(n,t,e){},VhOD:function(n,t,e){"use strict";var i=e("sTEK"),a=e.n(i);a.a},ZCWV:function(n,t,e){"use strict";var i=e("7EbL"),a=e.n(i);a.a},sTEK:function(n,t,e){},zUnb:function(n,t,e){"use strict";e.r(t);e("VRzm");var i=e("Kw5r"),a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("body",{attrs:{id:"app"}},[e("div",{staticClass:"header-top"},[n._v("6/14~7/9 新遊戲活動「The Gorge」")]),n._m(0),e("main",{staticClass:"inner"},[n._m(1),e("router-view")],1)])},o=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("header",[e("img",{staticClass:"logoImg",attrs:{src:"img/logo.png",alt:""}})])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("aside",[e("div",{staticClass:"filter"},[e("input",{attrs:{type:"text",placeholder:"搜尋食材"}}),e("p",[n._v("料理類型")]),e("ul",{staticClass:"typelist"},[e("li",[n._v("Snack (小吃)")]),e("li",[n._v("Veggie (蔬菜)")]),e("li",[n._v("Dessert (甜點)")]),e("li",[n._v("Bread (麵包)")]),e("li",[n._v("Meat (肉類)")]),e("li",[n._v("Fish (魚類)")]),e("li",[n._v("Soup (湯)")]),e("li",[n._v("Pasta (義大利麵)")]),e("li",[n._v("Cheese (起司)")])]),e("p",[n._v("特殊金幣")]),e("ul",{staticClass:"coinlist"},[e("li",[n._v("彩虹幣")]),e("li",[n._v("金幣")]),e("li",[n._v("銀幣")]),e("li",[n._v("銅幣")])]),e("p",[n._v("烹飪工具")]),e("ul",{staticClass:"toollist"},[e("li",[n._v("吊鍋")]),e("li",[n._v("窯烤")]),e("li",[n._v("烤盤")]),e("li",[n._v("大吊鍋")]),e("li",[n._v("大窯烤")]),e("li",[n._v("大烤盤")])])])])}],r=(e("ZCWV"),e("KHd+")),c={},l=Object(r["a"])(c,a,o,!1,null,null,null),u=l.exports,s=e("jE9Z"),d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("article",[e("ul",n._l(n.data,function(t){return e("li",{key:t.id,staticClass:"listItem"},[e("div",{staticClass:"itemInfo"},[e("span",{class:"itemImg item-"+t.id}),e("div",[e("i",{class:"toolIcon-"+t.tool.iconName}),n._v(n._s(t.tool.name))]),n._l(t.condition,function(t,i){return e("div",{key:i},[n._v(n._s(t))])})],2),e("div",{staticClass:"itemDetail"},[e("div",[n._v("一般供奉換取："),n._l(t.exchange,function(t,i){return e("span",{key:i},[n._v(n._s(t.quantity)+n._s(t.kind))])})],2),e("div",[n._v("銀具供奉換取："),n._l(t.more_exchange,function(t,i){return e("span",{key:i},[n._v(n._s(t.quantity)+n._s(t.kind))])})],2),e("div",n._l(t.ingredients,function(t,i){return e("span",{key:i},[n._v(n._s(t.name)+"X"+n._s(t.quantity))])}))])])}))])},f=[],v=e("xmWZ"),p=e("3Aqn"),m=e("qpph"),_=e("0yhX"),h=e("EdlT"),y=e("mrSG"),g=e("YKMj"),b=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"hello"},[n._v("\n    123\n")])},k=[],q=function(n){function t(){return Object(v["a"])(this,t),Object(_["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(p["a"])(t,n),t}(g["c"]);y["a"]([Object(g["b"])(),y["b"]("design:type",String)],q.prototype,"msg",void 0),q=y["a"]([g["a"]],q);var x=q,j=x,O=(e("1LSj"),Object(r["a"])(j,b,k,!1,null,"1883246a",null)),w=O.exports,C=e("2WZG"),E=C.dataJson,N=function(n){function t(){return Object(v["a"])(this,t),Object(_["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(m["a"])(t,[{key:"data",value:function(){return{nowNumber:0,data:E}}}]),Object(p["a"])(t,n),t}(g["c"]);N=y["a"]([Object(g["a"])({components:{HelloWorld:w}})],N);var S=N,T=S,$=(e("VhOD"),Object(r["a"])(T,d,f,!1,null,null,null)),P=$.exports,I=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},M=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"about"},[e("h1",[n._v("This is an about page")])])}],V={},W=Object(r["a"])(V,I,M,!1,null,null,null),Z=W.exports;i["default"].use(s["a"]);var J=new s["a"]({routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:Z}]}),K=e("L2JU");i["default"].use(K["a"]);var L=new K["a"].Store({state:{},mutations:{},actions:{}}),A=e("lIOY");Object(A["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}}),i["default"].config.productionTip=!1,new i["default"]({router:J,store:L,render:function(n){return n(u)}}).$mount("#app")}});
//# sourceMappingURL=app.9d6d27c3.js.map