(function(t){function n(n){for(var i,s,r=n[0],l=n[1],c=n[2],p=0,d=[];p<r.length;p++)s=r[p],o[s]&&d.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(n);while(d.length)d.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],i=!0,r=1;r<e.length;r++){var l=e[r];0!==o[l]&&(i=!1)}i&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var i={},o={1:0},a=[];function s(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)s.d(e,i,function(n){return t[n]}.bind(null,i));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var c=0;c<r.length;c++)n(r[c]);var u=l;a.push([3,0]),e()})({"1LSj":function(t,n,e){"use strict";var i=e("TpHb"),o=e.n(i);o.a},"2WZG":function(t,n,e){"use strict";e.r(n),e.d(n,"dataJson",function(){return i});var i=[{id:1,title:"Bread",tool:{name:"Oven (窯烤)",iconName:"casseroledish_small"},condition:["Bread (麵包)","Snack (小吃)"],ingredients:"全麵粉",stuffIcons:[{constitute:["flour","flour","flour"]},{constitute:["flour","flour","flour","flour"]}],exchange:[{kind:1,quantity:6}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:2}]},{id:2,title:"Chips",tool:{name:"Oven (窯烤)",iconName:"casseroledish_small"},condition:["Veggie (蔬菜)","Snack (小吃)"],ingredients:"馬鈴薯*2+馬鈴薯或香料粉",stuffIcons:[{constitute:["potato","potato","potato"]},{constitute:["potato","potato","spotspice_ground"]},{constitute:["potato","potato","potato","spotspice_ground"]}],exchange:[{kind:1,quantity:6}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:2}]},{id:3,title:"Veggie Soup",tool:{name:"Cookpot (吊鍋)",iconName:"pot_small"},condition:["Veggie (蔬菜)","Snack (小吃)","Soup (湯)"],ingredients:"蔬菜*3(不可全相同)",stuffIcons:[{constitute:["mushrooms","potato","potato"]},{constitute:["mushrooms","mushrooms","potato"]},{constitute:["carrot","potato","turnip"]},{constitute:["carrot","potato","potato"]},{constitute:["potato","potato","turnip"]}],exchange:[{kind:1,quantity:8}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:1}]},{id:4,title:"Jelly Sandwich",tool:{name:"Grill (烤盤)",iconName:"grill_small"},condition:["Snack (小吃)","Bread (麵包)"],ingredients:"漿果+麵粉、楓糖",stuffIcons:[{constitute:["berries","berries","flour"]},{constitute:["berries","flour","syrup"]},{constitute:["berries","flour","flour","syrup"]},{constitute:["berries","berries","flour","flour"]},{constitute:["berries","berries","berries","flour"]}],exchange:[{kind:1,quantity:8}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:4}]},{id:5,title:"Fish Stew",tool:{name:"Cookpot (吊鍋)",iconName:"pot_small"},condition:["Soup(湯)","Fish (魚類)"],ingredients:"魚類+蔬菜",stuffIcons:[{constitute:["salmon","potato","potato"]},{constitute:["salmon","foliage","foliage"]},{constitute:["salmon","carrot","carrot"]},{constitute:["salmon","salmon","potato"]},{constitute:["salmon","salmon","salmon"]}],exchange:[{kind:1,quantity:8}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:4}]},{id:6,title:"Turnip Cake",tool:{name:"Oven (窯烤)",iconName:"casseroledish_small"},condition:["Soup(湯)","Veggie (蔬菜)"],ingredients:"甜菜*2+甜菜或蔬菜",stuffIcons:[{constitute:["turnip","turnip","carrot"]},{constitute:["turnip","turnip","ingredient_slot"]},{constitute:["turnip","turnip","turnip"]},{constitute:["turnip","turnip","turnip","carrot"]},{constitute:["turnip","turnip","turnip","turnip"]}],exchange:[{kind:1,quantity:8}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:4}]},{id:7,title:"Potato Pancakes",tool:{name:"Grill (烤盤)",iconName:"grill_small"},condition:["Soup(湯)","Veggie (蔬菜)"],ingredients:"馬鈴薯*2+馬鈴薯或洋蔥",stuffIcons:[{constitute:["potato","potato","potato"]},{constitute:["potato","potato","ingredient_slot"]},{constitute:["potato","potato","potato","ingredient_slot"]}],exchange:[{kind:1,quantity:8}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:4}]},{id:8,title:"Potato Pancakes",tool:{name:"Cookpot (吊鍋)",iconName:"pot_small"},condition:["Soup(湯)","Veggie (蔬菜)","Snack (小吃)"],ingredients:"馬鈴薯*2+馬鈴薯或香料粉",stuffIcons:[{constitute:["potato","potato","potato"]},{constitute:["potato","potato","spotspice_ground"]},{constitute:["potato","potato","potato","potato"]},{constitute:["potato","potato","potato","spotspice_ground"]}],exchange:[{kind:1,quantity:10}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:7}]},{id:9,title:"Fishball Skewers",tool:{name:"Grill (烤盤)",iconName:"grill_small"},condition:["Fish (魚類)","Snack (小吃)"],ingredients:"魚類+樹枝、蔬菜",stuffIcons:[{constitute:["twigs","salmon","potato"]},{constitute:["twigs","salmon","carrot"]},{constitute:["twigs","salmon","ingredient_slot"]},{constitute:["twigs","salmon","turnip"]},{constitute:["twigs","salmon","salmon"]}],exchange:[{kind:1,quantity:10}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:7}]},{id:10,title:"Meatballs",tool:{name:"Cookpot (吊鍋)",iconName:"pot_small"},condition:["Meat (肉類)","Snack (小吃)"],ingredients:"全肉或肉類+蔬菜",stuffIcons:[{constitute:["smallmeat","potato","potato"]},{constitute:["smallmeat","foliage","foliage"]},{constitute:["smallmeat","carrot","carrot"]},{constitute:["smallmeat","carrot","potato"]},{constitute:["smallmeat","smallmeat","smallmeat"]}],exchange:[{kind:1,quantity:10}],more_exchange:[{kind:2,quantity:1},{kind:1,quantity:7}]}]},3:function(t,n,e){t.exports=e("zUnb")},"7EbL":function(t,n,e){},TpHb:function(t,n,e){},VhOD:function(t,n,e){"use strict";var i=e("sTEK"),o=e.n(i);o.a},ZCWV:function(t,n,e){"use strict";var i=e("7EbL"),o=e.n(i);o.a},sTEK:function(t,n,e){},zUnb:function(t,n,e){"use strict";e.r(n);e("VRzm");var i=e("Kw5r"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("body",{attrs:{id:"app"}},[e("div",{staticClass:"header-top"},[t._v("6/14~7/9 新遊戲活動「The Gorge」")]),t._m(0),e("main",{staticClass:"inner"},[t._m(1),e("router-view")],1)])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("img",{staticClass:"logoImg",attrs:{src:"img/logo.png",alt:""}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("aside",[e("div",{staticClass:"filter"},[e("input",{attrs:{type:"text",placeholder:"搜尋食材"}}),e("p",[t._v("料理類型")]),e("ul",{staticClass:"typelist"},[e("li",[t._v("Snack (小吃)")]),e("li",[t._v("Veggie (蔬菜)")]),e("li",[t._v("Dessert (甜點)")]),e("li",[t._v("Bread (麵包)")]),e("li",[t._v("Meat (肉類)")]),e("li",[t._v("Fish (魚類)")]),e("li",[t._v("Soup (湯)")]),e("li",[t._v("Pasta (義大利麵)")]),e("li",[t._v("Cheese (起司)")])]),e("p",[t._v("烹飪工具")]),e("ul",{staticClass:"toollist"},[e("li",[t._v("吊鍋")]),e("li",[t._v("窯烤")]),e("li",[t._v("烤盤")]),e("li",[t._v("大吊鍋")]),e("li",[t._v("大窯烤")]),e("li",[t._v("大烤盤")])]),e("p",[t._v("金幣數量排序")]),e("ul",{staticClass:"coinlist"},[e("li",[t._v("彩虹幣")]),e("li",[t._v("金幣")]),e("li",[t._v("銀幣")]),e("li",[t._v("銅幣")])])])])}],s=(e("ZCWV"),e("KHd+")),r={},l=Object(s["a"])(r,o,a,!1,null,null,null),c=l.exports,u=e("jE9Z"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",[e("ul",t._l(t.data,function(n){return e("li",{key:n.id,staticClass:"listItem"},[e("div",{staticClass:"itemInfo"},[e("div",{staticClass:"title"},[t._v(t._s(n.title)),e("img",{staticClass:"titleHr",attrs:{src:"img/quagmire_recipe_line_break.png",alt:""}})]),e("span",{class:"itemImg item-"+n.id}),e("div",[e("img",{staticClass:"icon",attrs:{src:"img/stuffIcons/"+n.tool.iconName+".png",alt:""}}),e("span",[t._v(t._s(n.tool.name))])]),e("div",{staticClass:"typeList"},t._l(n.condition,function(n,i){return e("span",{key:i,staticClass:"typeItem"},[t._v(t._s(n))])}))]),e("div",{staticClass:"itemDetail"},[e("div",[e("span",{staticClass:"titleSmall"},[t._v("一般供奉")]),t._l(n.exchange,function(n,i){return e("span",{key:i,staticClass:"coin"},[e("img",{staticClass:"icon",attrs:{src:"img/stuffIcons/quagmire_coin"+n.kind+".png",alt:""}}),t._v(t._s(n.quantity)+"\n          ")])})],2),e("div",[e("span",{staticClass:"titleSmall"},[t._v("銀具供奉")]),t._l(n.more_exchange,function(n,i){return e("span",{key:i,staticClass:"coin"},[e("img",{staticClass:"icon",attrs:{src:"img/stuffIcons/quagmire_coin"+n.kind+".png",alt:""}}),t._v(t._s(n.quantity)+"\n          ")])})],2),e("p",[t._v(t._s(n.ingredients))]),e("img",{attrs:{src:"img/quagmire_recipe_line.png",alt:""}}),t._l(n.stuffIcons,function(n,i){return e("div",{key:i,staticClass:"stuffList"},[t._v(t._s(i+1)+".\n          "),t._l(n.constitute,function(t,n){return e("span",{key:n},[e("img",{attrs:{src:"img/stuffIcons/"+t+".png",alt:""}})])})],2)})],2)])}))])},d=[],f=e("xmWZ"),m=e("3Aqn"),g=e("qpph"),_=e("0yhX"),v=e("EdlT"),h=e("mrSG"),y=e("YKMj"),b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[t._v("\n    123\n")])},k=[],q=function(t){function n(){return Object(f["a"])(this,n),Object(_["a"])(this,Object(v["a"])(n).apply(this,arguments))}return Object(m["a"])(n,t),n}(y["c"]);h["a"]([Object(y["b"])(),h["b"]("design:type",String)],q.prototype,"msg",void 0),q=h["a"]([y["a"]],q);var x=q,C=x,O=(e("1LSj"),Object(s["a"])(C,b,k,!1,null,"1883246a",null)),S=O.exports,j=e("2WZG"),w=j.dataJson,I=function(t){function n(){return Object(f["a"])(this,n),Object(_["a"])(this,Object(v["a"])(n).apply(this,arguments))}return Object(g["a"])(n,[{key:"data",value:function(){return{nowNumber:0,data:w}}}]),Object(m["a"])(n,t),n}(y["c"]);I=h["a"]([Object(y["a"])({components:{HelloWorld:S}})],I);var E=I,N=E,V=(e("VhOD"),Object(s["a"])(N,p,d,!1,null,null,null)),P=V.exports,T=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],$={},F=Object(s["a"])($,T,M,!1,null,null,null),G=F.exports;i["default"].use(u["a"]);var L=new u["a"]({routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:G}]}),J=e("L2JU");i["default"].use(J["a"]);var W=new J["a"].Store({state:{},mutations:{},actions:{}}),Z=e("lIOY");Object(Z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["default"].config.productionTip=!1,new i["default"]({router:L,store:W,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.1046ed65.js.map