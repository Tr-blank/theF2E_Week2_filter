(function(t){function e(e){for(var a,n,c=e[0],s=e[1],l=e[2],p=0,d=[];p<c.length;p++)n=c[p],o[n]&&d.push(o[n][0]),o[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},o={1:0},i=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([3,0]),r()})({"1LSj":function(t,e,r){"use strict";var a=r("TpHb"),o=r.n(a);o.a},"2WZG":function(t,e,r){"use strict";r.r(e),r.d(e,"dataJson",function(){return a});var a=[{id:1,title:"Bread",tool:[{type:"Oven",name:"Oven窯烤",iconName:"casseroledish_small"}],condition:["Bread 麵包","Snack 小吃"],ingredients:"全麵粉",stuffIcons:[{constitute:["flour","flour","flour"]},{constitute:["flour","flour","flour","flour"]}],exchange:[6,0,0,0],more_exchange:[2,1,0,0]},{id:2,title:"Chips",tool:[{type:"Oven",name:"Oven窯烤",iconName:"casseroledish_small"}],condition:["Veggie 蔬菜","Snack 小吃"],ingredients:"馬鈴薯*2+馬鈴薯或香料粉",stuffIcons:[{constitute:["potato","potato","potato"]},{constitute:["potato","potato","spotspice_ground"]},{constitute:["potato","potato","potato","spotspice_ground"]}],exchange:[6,0,0,0],more_exchange:[2,1,0,0]},{id:3,title:"Veggie Soup",tool:[{type:"Cookpot",name:"Cookpot吊鍋",iconName:"pot_small"}],condition:["Veggie 蔬菜","Snack 小吃","Soup 湯"],ingredients:"蔬菜*3(不可全相同)",stuffIcons:[{constitute:["mushrooms","potato","potato"]},{constitute:["mushrooms","mushrooms","potato"]},{constitute:["carrot","potato","turnip"]},{constitute:["carrot","potato","potato"]},{constitute:["potato","potato","turnip"]}],exchange:[5,0,0,0],more_exchange:[4,1,0,0]},{id:4,title:"Jelly Sandwich",tool:[{type:"Grill",name:"Grill烤盤",iconName:"grill_small"}],condition:["Snack 小吃","Bread 麵包"],ingredients:"漿果+麵粉、楓糖",stuffIcons:[{constitute:["berries","berries","flour"]},{constitute:["berries","flour","syrup"]},{constitute:["berries","flour","flour","syrup"]},{constitute:["berries","berries","flour","flour"]},{constitute:["berries","berries","berries","flour"]}],exchange:[8,0,0,0],more_exchange:[4,1,0,0]},{id:5,title:"Fish Stew",tool:[{type:"Cookpot",name:"Cookpot吊鍋",iconName:"pot_small"}],condition:["Soup 湯","Fish 魚類"],ingredients:"魚類+蔬菜",stuffIcons:[{constitute:["salmon","potato","potato"]},{constitute:["salmon","foliage","foliage"]},{constitute:["salmon","carrot","carrot"]},{constitute:["salmon","salmon","potato"]},{constitute:["salmon","salmon","salmon"]}],exchange:[8,0,0,0],more_exchange:[4,1,0,0]},{id:6,title:"Turnip Cake",tool:[{type:"Oven",name:"Oven窯烤",iconName:"casseroledish_small"}],condition:["Snack 小吃","Veggie 蔬菜"],ingredients:"甜菜*2+甜菜或蔬菜",stuffIcons:[{constitute:["turnip","turnip","carrot"]},{constitute:["turnip","turnip","ingredient_slot"]},{constitute:["turnip","turnip","turnip"]},{constitute:["turnip","turnip","turnip","carrot"]},{constitute:["turnip","turnip","turnip","turnip"]}],exchange:[8,0,0,0],more_exchange:[4,1,0,0]},{id:7,title:"Potato Pancakes",tool:[{type:"Grill",name:"Grill烤盤",iconName:"grill_small"}],condition:["Snack 小吃","Veggie 蔬菜"],ingredients:"馬鈴薯*2+馬鈴薯或洋蔥",stuffIcons:[{constitute:["potato","potato","potato"]},{constitute:["potato","potato","ingredient_slot"]},{constitute:["potato","potato","potato","ingredient_slot"]}],exchange:[8,0,0,0],more_exchange:[4,1,0,0]},{id:8,title:"Potato Pancakes",tool:[{type:"Cookpot",name:"Cookpot吊鍋",iconName:"pot_small"}],condition:["Soup 湯","Veggie 蔬菜","Snack 小吃"],ingredients:"馬鈴薯*2+馬鈴薯或香料粉",stuffIcons:[{constitute:["potato","potato","potato"]},{constitute:["potato","potato","spotspice_ground"]},{constitute:["potato","potato","potato","potato"]},{constitute:["potato","potato","potato","spotspice_ground"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:9,title:"Fishball Skewers",tool:[{type:"Grill",name:"Grill烤盤",iconName:"grill_small"}],condition:["Fish 魚類","Snack 小吃"],ingredients:"魚類+樹枝、蔬菜",stuffIcons:[{constitute:["twigs","salmon","potato"]},{constitute:["twigs","salmon","carrot"]},{constitute:["twigs","salmon","ingredient_slot"]},{constitute:["twigs","salmon","turnip"]},{constitute:["twigs","salmon","salmon"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:10,title:"Meatballs",tool:[{type:"Cookpot",name:"Cookpot吊鍋",iconName:"pot_small"}],condition:["Meat 肉類","Snack 小吃"],ingredients:"全肉或肉類+蔬菜",stuffIcons:[{constitute:["smallmeat","potato","potato"]},{constitute:["smallmeat","foliage","foliage"]},{constitute:["smallmeat","carrot","carrot"]},{constitute:["smallmeat","carrot","potato"]},{constitute:["smallmeat","smallmeat","smallmeat"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:11,title:"Meat Skewers",tool:[{type:"Grill",name:"Grill烤盤",iconName:"grill_small"}],condition:["Meat 肉類","Snack 小吃"],ingredients:"肉類*2+樹枝",stuffIcons:[{constitute:["twigs","smallmeat","smallmeat"]},{constitute:["twigs","smallmeat","smallmeat","ingredient_slot"]},{constitute:["twigs","smallmeat","smallmeat","mushrooms"]},{constitute:["twigs","smallmeat","smallmeat","garlic"]},{constitute:["twigs","smallmeat","smallmeat","smallmeat"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:12,title:"Offering",tool:[{type:"Cookpot",name:"Cookpot吊鍋",iconName:"pot_small"}],condition:["Soup 湯","Snack 小吃"],ingredients:"石頭+隨意*2",stuffIcons:[{constitute:["rocks","foliage","berries"]},{constitute:["rocks","foliage","potato"]},{constitute:["rocks","berries","potato"]},{constitute:["rocks","mushrooms","potato"]},{constitute:["rocks","mushrooms","foliage"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:13,title:"Croquette",tool:[{type:"Oven",name:"Oven窯烤",iconName:"casseroledish_small"}],condition:["Veggie 蔬菜","Snack 小吃"],ingredients:"馬鈴薯+麵粉、蔬菜",stuffIcons:[{constitute:["flour","potato","potato"]},{constitute:["flour","potato","carrot"]},{constitute:["flour","potato","turnip"]},{constitute:["flour","potato","ingredient_slot"]},{constitute:["flour","potato","mushrooms"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:14,title:"Roasted Veggies",tool:[{type:"Oven",name:"Oven窯烤",iconName:"casseroledish_small"},{type:"Grill",name:"Grill烤盤",iconName:"grill_small"}],condition:["Veggie 蔬菜"],ingredients:"蔬菜*3(不可全相同)",stuffIcons:[{constitute:["potato","potato","carrot"]},{constitute:["potato","potato","turnip"]},{constitute:["potato","turnip","turnip"]},{constitute:["potato","carrot","carrot"]},{constitute:["potato","carrot","turnip"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:15,title:"Meatloaf",tool:[{type:"Oven",name:"Oven窯烤",iconName:"casseroledish_small"}],condition:["Meat 肉類"],ingredients:"肉類+肉或蔬菜",stuffIcons:[{constitute:["smallmeat","potato","potato"]},{constitute:["smallmeat","potato","carrot"]},{constitute:["smallmeat","carrot","carrot"]},{constitute:["smallmeat","mushrooms","potato"]},{constitute:["smallmeat","smallmeat","smallmeat"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:16,title:"Carrot Soup",tool:[{type:"Cookpot",name:"Cookpot吊鍋",iconName:"pot_small"}],condition:["Soup 湯","Veggie 蔬菜","Snack 小吃"],ingredients:"蘿蔔*2+蘿蔔、香料、蒜",stuffIcons:[{constitute:["carrot","carrot","carrot"]},{constitute:["carrot","carrot","garlic"]},{constitute:["carrot","carrot","spotspice_ground"]},{constitute:["carrot","carrot","carrot","spotspice_ground"]},{constitute:["carrot","carrot","carrot","carrot"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:17,title:"Fish Pie",tool:[{type:"Oven",name:"Oven窯烤",iconName:"casseroledish_small"}],condition:["Fish 魚類"],ingredients:"麵粉+魚、蔬菜",stuffIcons:[{constitute:["flour","salmon","carrot"]},{constitute:["flour","salmon","turnip"]},{constitute:["flour","salmon","ingredient_slot"]},{constitute:["flour","salmon","tomato"]},{constitute:["flour","salmon","mushrooms"]}],exchange:[10,0,0,0],more_exchange:[7,1,0,0]},{id:18,title:"Fish And Chips",tool:[{type:"Oven",name:"Oven窯烤",iconName:"casseroledish_small"}],condition:["Fish 魚類"],ingredients:"麵粉+魚+馬鈴薯",stuffIcons:[{constitute:["flour","salmon","potato"]},{constitute:["flour","salmon","potato","potato"]},{constitute:["flour","salmon","potato","flour"]},{constitute:["flour","salmon","potato","salmon"]}],exchange:[12,0,0,0],more_exchange:[2,3,0,0]},{id:19,title:"Meat Pie",tool:[{type:"Oven",name:"Oven窯烤",iconName:"casseroledish_small"}],condition:["Meat 肉類"],ingredients:"麵粉+肉類+蔬菜",stuffIcons:[{constitute:["flour","smallmeat","potato"]},{constitute:["flour","smallmeat","carrot"]},{constitute:["flour","smallmeat","turnip"]},{constitute:["flour","smallmeat","ingredient_slot"]},{constitute:["flour","smallmeat","mushrooms"]}],exchange:[12,0,0,0],more_exchange:[2,3,0,0]},{id:20,title:"Slider",tool:[{type:"Grill",name:"Grill烤盤",iconName:"grill_small"}],condition:["Bread 麵包","Snack 小吃","Meat 肉類"],ingredients:"麵粉+肉類、任意",stuffIcons:[{constitute:["flour","flour","smallmeat"]},{constitute:["flour","smallmeat","foliage"]},{constitute:["flour","smallmeat","spotspice_ground"]},{constitute:["flour","smallmeat","tomato"]},{constitute:["flour","smallmeat","smallmeat"]}],exchange:[12,0,0,0],more_exchange:[2,3,0,0]}]},3:function(t,e,r){t.exports=r("zUnb")},"7EbL":function(t,e,r){},TpHb:function(t,e,r){},VhOD:function(t,e,r){"use strict";var a=r("sTEK"),o=r.n(a);o.a},ZCWV:function(t,e,r){"use strict";var a=r("7EbL"),o=r.n(a);o.a},sTEK:function(t,e,r){},zUnb:function(t,e,r){"use strict";r.r(e);r("VRzm");var a=r("Kw5r"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("body",{attrs:{id:"app"}},[r("div",{staticClass:"header-top"},[t._v("6/14~7/9 新遊戲活動「The Gorge」")]),t._m(0),r("router-view")],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("img",{staticClass:"logoImg",attrs:{src:"img/logo.png",alt:""}})])}],n=(r("ZCWV"),r("KHd+")),c={},s=Object(n["a"])(c,o,i,!1,null,null,null),l=s.exports,u=r("jE9Z"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"inner"},[r("input",{staticClass:"hide",attrs:{type:"checkbox",id:"asideControl"}}),r("label",{staticClass:"asideButton",attrs:{for:"asideControl"}}),r("aside",{style:"height:"+t.asideHeight()+"px;margin-top:"+t.pc_asideTop+"px;"},[r("div",{staticClass:"filter"},[r("div",{staticClass:"total"},[t._v("你搜尋了"),r("span",{staticClass:"totalNumber"},[t._v(t._s(t.dataFilted.length))]),t._v("篇食譜")]),r("div",{staticClass:"textFilter"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.textString,expression:"textString"}],attrs:{type:"text",placeholder:"輸入編號，例如45 61 16"},domProps:{value:t.textString},on:{change:t.filterFunction,input:function(e){e.target.composing||(t.textString=e.target.value)}}}),r("i",{staticClass:"fas fa-search"})]),r("p",[t._v("料理類型")]),r("div",{staticClass:"typelist"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.typeArray,expression:"typeArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Snack 小吃",id:"checkSnack",name:"checkFilter"},domProps:{checked:Array.isArray(t.typeArray)?t._i(t.typeArray,"Snack 小吃")>-1:t.typeArray},on:{change:[function(e){var r=t.typeArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Snack 小吃",n=t._i(r,i);a.checked?n<0&&(t.typeArray=r.concat([i])):n>-1&&(t.typeArray=r.slice(0,n).concat(r.slice(n+1)))}else t.typeArray=o},t.filterFunction]}}),t._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:t.typeArray,expression:"typeArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Veggie 蔬菜",id:"checkVeggie",name:"checkFilter"},domProps:{checked:Array.isArray(t.typeArray)?t._i(t.typeArray,"Veggie 蔬菜")>-1:t.typeArray},on:{change:[function(e){var r=t.typeArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Veggie 蔬菜",n=t._i(r,i);a.checked?n<0&&(t.typeArray=r.concat([i])):n>-1&&(t.typeArray=r.slice(0,n).concat(r.slice(n+1)))}else t.typeArray=o},t.filterFunction]}}),t._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:t.typeArray,expression:"typeArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Dessert 甜點",id:"checkDessert",name:"checkFilter"},domProps:{checked:Array.isArray(t.typeArray)?t._i(t.typeArray,"Dessert 甜點")>-1:t.typeArray},on:{change:[function(e){var r=t.typeArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Dessert 甜點",n=t._i(r,i);a.checked?n<0&&(t.typeArray=r.concat([i])):n>-1&&(t.typeArray=r.slice(0,n).concat(r.slice(n+1)))}else t.typeArray=o},t.filterFunction]}}),t._m(2),r("input",{directives:[{name:"model",rawName:"v-model",value:t.typeArray,expression:"typeArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Bread 麵包",id:"checkBread",name:"checkFilter"},domProps:{checked:Array.isArray(t.typeArray)?t._i(t.typeArray,"Bread 麵包")>-1:t.typeArray},on:{change:[function(e){var r=t.typeArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Bread 麵包",n=t._i(r,i);a.checked?n<0&&(t.typeArray=r.concat([i])):n>-1&&(t.typeArray=r.slice(0,n).concat(r.slice(n+1)))}else t.typeArray=o},t.filterFunction]}}),t._m(3),r("input",{directives:[{name:"model",rawName:"v-model",value:t.typeArray,expression:"typeArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Meat 肉類",id:"checkMeat",name:"checkFilter"},domProps:{checked:Array.isArray(t.typeArray)?t._i(t.typeArray,"Meat 肉類")>-1:t.typeArray},on:{change:[function(e){var r=t.typeArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Meat 肉類",n=t._i(r,i);a.checked?n<0&&(t.typeArray=r.concat([i])):n>-1&&(t.typeArray=r.slice(0,n).concat(r.slice(n+1)))}else t.typeArray=o},t.filterFunction]}}),t._m(4),r("input",{directives:[{name:"model",rawName:"v-model",value:t.typeArray,expression:"typeArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Fish 魚類",id:"checkFish",name:"checkFilter"},domProps:{checked:Array.isArray(t.typeArray)?t._i(t.typeArray,"Fish 魚類")>-1:t.typeArray},on:{change:[function(e){var r=t.typeArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Fish 魚類",n=t._i(r,i);a.checked?n<0&&(t.typeArray=r.concat([i])):n>-1&&(t.typeArray=r.slice(0,n).concat(r.slice(n+1)))}else t.typeArray=o},t.filterFunction]}}),t._m(5),r("input",{directives:[{name:"model",rawName:"v-model",value:t.typeArray,expression:"typeArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Soup 湯",id:"checkSoup",name:"checkFilter"},domProps:{checked:Array.isArray(t.typeArray)?t._i(t.typeArray,"Soup 湯")>-1:t.typeArray},on:{change:[function(e){var r=t.typeArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Soup 湯",n=t._i(r,i);a.checked?n<0&&(t.typeArray=r.concat([i])):n>-1&&(t.typeArray=r.slice(0,n).concat(r.slice(n+1)))}else t.typeArray=o},t.filterFunction]}}),t._m(6),r("input",{directives:[{name:"model",rawName:"v-model",value:t.typeArray,expression:"typeArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Pasta 義大利麵",id:"checkPasta",name:"checkFilter"},domProps:{checked:Array.isArray(t.typeArray)?t._i(t.typeArray,"Pasta 義大利麵")>-1:t.typeArray},on:{change:[function(e){var r=t.typeArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Pasta 義大利麵",n=t._i(r,i);a.checked?n<0&&(t.typeArray=r.concat([i])):n>-1&&(t.typeArray=r.slice(0,n).concat(r.slice(n+1)))}else t.typeArray=o},t.filterFunction]}}),t._m(7),r("input",{directives:[{name:"model",rawName:"v-model",value:t.typeArray,expression:"typeArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Cheese 起司",id:"checkCheese",name:"checkFilter"},domProps:{checked:Array.isArray(t.typeArray)?t._i(t.typeArray,"Cheese 起司")>-1:t.typeArray},on:{change:[function(e){var r=t.typeArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Cheese 起司",n=t._i(r,i);a.checked?n<0&&(t.typeArray=r.concat([i])):n>-1&&(t.typeArray=r.slice(0,n).concat(r.slice(n+1)))}else t.typeArray=o},t.filterFunction]}}),t._m(8)]),r("p",[t._v("烹飪工具")]),r("div",{staticClass:"toolList"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.toolArray,expression:"toolArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Cookpot",id:"checkCookpot",name:"toolFilter"},domProps:{checked:Array.isArray(t.toolArray)?t._i(t.toolArray,"Cookpot")>-1:t.toolArray},on:{change:[function(e){var r=t.toolArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Cookpot",n=t._i(r,i);a.checked?n<0&&(t.toolArray=r.concat([i])):n>-1&&(t.toolArray=r.slice(0,n).concat(r.slice(n+1)))}else t.toolArray=o},t.filterFunction]}}),t._m(9),r("input",{directives:[{name:"model",rawName:"v-model",value:t.toolArray,expression:"toolArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Oven",id:"checkOven",name:"toolFilter"},domProps:{checked:Array.isArray(t.toolArray)?t._i(t.toolArray,"Oven")>-1:t.toolArray},on:{change:[function(e){var r=t.toolArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Oven",n=t._i(r,i);a.checked?n<0&&(t.toolArray=r.concat([i])):n>-1&&(t.toolArray=r.slice(0,n).concat(r.slice(n+1)))}else t.toolArray=o},t.filterFunction]}}),t._m(10),r("input",{directives:[{name:"model",rawName:"v-model",value:t.toolArray,expression:"toolArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Grill",id:"checkGrill",name:"toolFilter"},domProps:{checked:Array.isArray(t.toolArray)?t._i(t.toolArray,"Grill")>-1:t.toolArray},on:{change:[function(e){var r=t.toolArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Grill",n=t._i(r,i);a.checked?n<0&&(t.toolArray=r.concat([i])):n>-1&&(t.toolArray=r.slice(0,n).concat(r.slice(n+1)))}else t.toolArray=o},t.filterFunction]}}),t._m(11),r("input",{directives:[{name:"model",rawName:"v-model",value:t.toolArray,expression:"toolArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Cookpot_big",id:"checkCookpot_big",name:"toolFilter"},domProps:{checked:Array.isArray(t.toolArray)?t._i(t.toolArray,"Cookpot_big")>-1:t.toolArray},on:{change:[function(e){var r=t.toolArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Cookpot_big",n=t._i(r,i);a.checked?n<0&&(t.toolArray=r.concat([i])):n>-1&&(t.toolArray=r.slice(0,n).concat(r.slice(n+1)))}else t.toolArray=o},t.filterFunction]}}),t._m(12),r("input",{directives:[{name:"model",rawName:"v-model",value:t.toolArray,expression:"toolArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Oven_big",id:"checkOven_big",name:"toolFilter"},domProps:{checked:Array.isArray(t.toolArray)?t._i(t.toolArray,"Oven_big")>-1:t.toolArray},on:{change:[function(e){var r=t.toolArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Oven_big",n=t._i(r,i);a.checked?n<0&&(t.toolArray=r.concat([i])):n>-1&&(t.toolArray=r.slice(0,n).concat(r.slice(n+1)))}else t.toolArray=o},t.filterFunction]}}),t._m(13),r("input",{directives:[{name:"model",rawName:"v-model",value:t.toolArray,expression:"toolArray"}],staticClass:"hide filterInput",attrs:{type:"checkbox",value:"Grill_big",id:"checkGrill_big",name:"toolFilter"},domProps:{checked:Array.isArray(t.toolArray)?t._i(t.toolArray,"Grill_big")>-1:t.toolArray},on:{change:[function(e){var r=t.toolArray,a=e.target,o=!!a.checked;if(Array.isArray(r)){var i="Grill_big",n=t._i(r,i);a.checked?n<0&&(t.toolArray=r.concat([i])):n>-1&&(t.toolArray=r.slice(0,n).concat(r.slice(n+1)))}else t.toolArray=o},t.filterFunction]}}),t._m(14)]),r("p",[t._v("金幣數量排序")]),r("div",{staticClass:"coinlist"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.coinString,expression:"coinString"}],staticClass:"hide filterInput",attrs:{type:"radio",value:"4",id:"radio4",name:"coinSort"},domProps:{checked:t._q(t.coinString,"4")},on:{click:t.radioToggle,change:[function(e){t.coinString="4"},t.filterFunction]}}),t._m(15),r("input",{directives:[{name:"model",rawName:"v-model",value:t.coinString,expression:"coinString"}],staticClass:"hide filterInput",attrs:{type:"radio",value:"3",id:"radio3",name:"coinSort"},domProps:{checked:t._q(t.coinString,"3")},on:{click:t.radioToggle,change:[function(e){t.coinString="3"},t.filterFunction]}}),t._m(16),r("input",{directives:[{name:"model",rawName:"v-model",value:t.coinString,expression:"coinString"}],staticClass:"hide filterInput",attrs:{type:"radio",value:"2",id:"radio2",name:"coinSort"},domProps:{checked:t._q(t.coinString,"2")},on:{click:t.radioToggle,change:[function(e){t.coinString="2"},t.filterFunction]}}),t._m(17),r("input",{directives:[{name:"model",rawName:"v-model",value:t.coinString,expression:"coinString"}],staticClass:"hide filterInput",attrs:{type:"radio",value:"1",id:"radio1",name:"coinSort"},domProps:{checked:t._q(t.coinString,"1")},on:{click:t.radioToggle,change:[function(e){t.coinString="1"},t.filterFunction]}}),t._m(18)])])]),r("article",[r("div",{staticClass:"listWrapper"},t._l(t.dataFilted,function(e){return r("section",{key:e.id,staticClass:"listItem"},[r("div",{staticClass:"itemInfo"},[r("div",{staticClass:"title"},[t._v(t._s(e.title)),r("img",{staticClass:"titleHr",attrs:{src:"img/quagmire_recipe_line_break.png",alt:""}})]),r("span",{class:"itemImg item-"+e.id}),t._l(e.tool,function(e,a){return r("div",{key:a},[r("img",{staticClass:"icon",attrs:{src:"img/stuffIcons/"+e.iconName+".png",alt:""}}),r("span",[t._v(t._s(e.name))])])}),r("div",{staticClass:"typeList"},t._l(e.condition,function(e,a){return r("span",{key:a,staticClass:"typeItem"},[t._v(t._s(e))])}))],2),r("div",{staticClass:"itemDetail"},[r("div",[r("span",{staticClass:"titleSmall"},[t._v("一般供奉")]),t._l(e.exchange,function(e,a){return 0!=e?r("span",{key:a,staticClass:"coin"},[r("img",{staticClass:"icon",attrs:{src:"img/stuffIcons/quagmire_coin"+(a+1)+".png",alt:""}}),t._v(t._s(e)+"\n            ")]):t._e()})],2),r("div",[r("span",{staticClass:"titleSmall"},[t._v("銀具供奉")]),t._l(e.more_exchange,function(e,a){return 0!=e?r("span",{key:a,staticClass:"coin"},[r("img",{staticClass:"icon",attrs:{src:"img/stuffIcons/quagmire_coin"+(a+1)+".png",alt:""}}),t._v(t._s(e)+"\n            ")]):t._e()})],2),r("p",[t._v(t._s(e.ingredients))]),r("img",{attrs:{src:"img/quagmire_recipe_line.png",alt:""}}),t._l(e.stuffIcons,function(e,a){return r("div",{key:a,staticClass:"stuffList"},[t._v(t._s(a+1)+".\n            "),t._l(e.constitute,function(t,e){return r("span",{key:e},[r("img",{attrs:{src:"img/stuffIcons/"+t+".png",alt:""}})])})],2)})],2)])}))])])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkSnack"}},[t._v("Snack 小吃"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkVeggie"}},[t._v("Veggie 蔬菜"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkDessert"}},[t._v("Dessert 甜點"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkBread"}},[t._v("Bread 麵包"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkMeat"}},[t._v("Meat 肉類"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkFish"}},[t._v("Fish 魚類"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkSoup"}},[t._v("Soup 湯"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkPasta"}},[t._v("Pasta 義大利麵"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkCheese"}},[t._v("Cheese 起司"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkCookpot"}},[t._v("Cookpot 吊鍋"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkOven"}},[t._v("Oven 窯烤"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkGrill"}},[t._v("Grill 烤盤"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkCookpot_big"}},[t._v("Big Cookpot 大吊鍋"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkOven_big"}},[t._v("Big Oven 大窯烤"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"checkGrill_big"}},[t._v("Big Grill 大烤盤"),r("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"radio4"}},[t._v("彩虹幣"),r("i",{staticClass:"fas fa-long-arrow-alt-down"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"radio3"}},[t._v("金幣"),r("i",{staticClass:"fas fa-long-arrow-alt-down"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"radio2"}},[t._v("銀幣"),r("i",{staticClass:"fas fa-long-arrow-alt-down"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"radio1"}},[t._v("銅幣"),r("i",{staticClass:"fas fa-long-arrow-alt-down"})])}],m=(r("KKXr"),r("Z2Ku"),r("L9s1"),r("Vd3H"),r("xmWZ")),f=r("3Aqn"),h=r("qpph"),y=r("0yhX"),g=r("EdlT"),v=r("mrSG"),_=r("YKMj"),A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[t._v("\n    123\n")])},k=[],b=function(t){function e(){return Object(m["a"])(this,e),Object(y["a"])(this,Object(g["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),e}(_["c"]);v["a"]([Object(_["b"])(),v["b"]("design:type",String)],b.prototype,"msg",void 0),b=v["a"]([_["a"]],b);var C=b,x=C,w=(r("1LSj"),Object(n["a"])(x,A,k,!1,null,"1883246a",null)),S=w.exports,F=r("2WZG"),O=F.dataJson,I=function(t){function e(){return Object(m["a"])(this,e),Object(y["a"])(this,Object(g["a"])(e).apply(this,arguments))}return Object(h["a"])(e,[{key:"data",value:function(){return{data:O,dataFilted:O,textString:"",toolArray:[],typeArray:[],coinString:"",pc_asideTop:0}}},{key:"radioToggle",value:function(t){var e=t.currentTarget,r=e.getAttribute("value");this.coinString==r&&(this.coinString="",this.dataFilted=this.dataFilted.sort(function(t,e){return t.id>e.id?1:-1}))}},{key:"filterFunction",value:function(){var t=this;this.dataFilted=this.data;for(var e,r=[],a=[],o=this.toolArray,i=0;i<this.dataFilted.length;i++){if(0!=o.length){var n=this.dataFilted[i].tool.filter(function(t,e,r){for(var a in o)if(o[a]==t.type)return!0;return!1});0!=n.length&&r.push(this.dataFilted[i].id)}var c=this.dataFilted[i].condition.filter(function(e){return t.typeArray.includes(e)});c.length==this.typeArray.length&&a.push(this.dataFilted[i].id)}e=0!=o.length?r.filter(function(t){return a.includes(t)}):a,console.log(e);var s=this.textString.split(" ");if(this.dataFilted=this.dataFilted.filter(function(t,r,a){for(var o=0,i=0;i<e.length;i++)if(e[i]==t.id){o++;break}if(0!=s.length){for(var n=0,c=0;c<s.length;c++)if(s[c]>0&&s[c]<=70){if(s[c]==t.id){o++;break}}else n++;n==s.length&&o++}else o++;return 2==o}),""!=this.coinString){var l=this.coinString-1;this.dataFilted=this.dataFilted.sort(function(t,e){var r=t.exchange[l]>t.more_exchange[l]?t.exchange[l]:t.more_exchange[l],a=e.exchange[l]>e.more_exchange[l]?e.exchange[l]:e.more_exchange[l],o=r<a?1:-1;return o})}}},{key:"asideHeight",value:function(){var t=window,e=document,r=e.documentElement,a=e.getElementsByTagName("body")[0],o=t.innerWidth||r.clientWidth||a.clientWidth,i=t.innerHeight||r.clientHeight||a.clientHeight;return o>960?i-60:"initial"}},{key:"onScroll",value:function(){var t=window,e=document,r=e.documentElement,a=e.getElementsByTagName("body")[0],o=t.innerWidth||r.clientWidth||a.clientWidth;t.innerHeight||r.clientHeight||a.clientHeight;o>960?window.scrollY+window.innerHeight>document.body.scrollHeight-50?this.pc_asideTop=window.scrollY-window.innerHeight+600:window.scrollY<320?this.pc_asideTop=0:this.pc_asideTop=window.scrollY-325:this.pc_asideTop=0,window.scrollY,window.innerHeight,document.body.scrollHeight}},{key:"mounted",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"deforeDestroy",value:function(){window.removeEventListener("scroll",this.onScroll)}}]),Object(f["a"])(e,t),e}(_["c"]);I=v["a"]([Object(_["a"])({components:{HelloWorld:S}})],I);var N=I,E=N,P=(r("VhOD"),Object(n["a"])(E,p,d,!1,null,null,null)),j=P.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")])])}],T={},V=Object(n["a"])(T,G,$,!1,null,null,null),M=V.exports;a["default"].use(u["a"]);var H=new u["a"]({routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:M}]}),B=r("L2JU");a["default"].use(B["a"]);var W=new B["a"].Store({state:{},mutations:{},actions:{}}),q=r("lIOY");Object(q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["default"].config.productionTip=!1,new a["default"]({router:H,store:W,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.b329c07a.js.map