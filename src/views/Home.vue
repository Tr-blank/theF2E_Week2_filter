<template>
  <main class="inner">
    <aside>
      <div class="filter">
        <input type="text" placeholder="搜尋食材">
        <p>料理類型</p>
        <ul class="typelist">
          <li @click="typeFilter" >Snack (小吃)</li>
          <li @click="typeFilter" >Veggie (蔬菜)</li>
          <li @click="typeFilter" >Dessert (甜點)</li>
          <li @click="typeFilter" >Bread (麵包)</li>
          <li @click="typeFilter" >Meat (肉類)</li>
          <li @click="typeFilter" >Fish (魚類)</li>
          <li @click="typeFilter" >Soup (湯)</li>
          <li @click="typeFilter" >Pasta (義大利麵)</li>
          <li @click="typeFilter" >Cheese (起司)</li>
        </ul>
        <p>烹飪工具</p>
        <ul class="toollist">
          <li>吊鍋</li>
          <li>窯烤</li>
          <li>烤盤</li>
          <li>大吊鍋</li>
          <li>大窯烤</li>
          <li>大烤盤</li>
        </ul>
        <p>金幣數量排序</p>
        <ul class="coinlist">
          <li @click="coinSort" kind="4" >彩虹幣</li>
          <li @click="coinSort" kind="3">金幣</li>
          <li @click="coinSort" kind="2">銀幣</li>
          <li @click="coinSort" kind="1">銅幣</li>
        </ul>
      </div>
    </aside>
    <article >
      <ul>
        <li class="listItem" v-for="item in data" :key="item.id">
          <div class="itemInfo">
            <div class="title">{{item.title}}<img class='titleHr' src="img/quagmire_recipe_line_break.png" alt=""></div>
            <span :class="'itemImg item-'+item.id"></span> 
            <div><img class="icon" :src="'img/stuffIcons/'+item.tool.iconName+'.png'" alt=""><span>{{item.tool.name}}</span></div>
            <div class="typeList"><span class="typeItem" v-for="(type,index) in item.condition" :key="index">{{type}}</span></div>
          </div>
          <div class="itemDetail">
            <div>
              <span class="titleSmall">一般供奉</span>
              <span class="coin" v-for="(money,index) in item.exchange" :key="index" v-if="money!=0"><img class="icon" :src="'img/stuffIcons/quagmire_coin'+(index+1)+'.png'" alt="">{{money}}
              </span>
            </div>
            <div>
              <span class="titleSmall">銀具供奉</span>
              <span class="coin" v-for="(money,index) in item.more_exchange" :key="index" v-if="money!=0"><img class="icon" :src="'img/stuffIcons/quagmire_coin'+(index+1)+'.png'" alt="">{{money}}
              </span>
            </div>
            <p>{{ item.ingredients}}</p>
            <img src="img/quagmire_recipe_line.png" alt="">
            <div class="stuffList" v-for="(stuff,index) in item.stuffIcons" :key="index">{{index+1}}.
              <span v-for="(icon,index) in stuff.constitute" :key="index"><img :src="'img/stuffIcons/'+icon+'.png'" alt=""></span>
            </div>
          </div>
        </li>
      </ul>
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    </article>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
const {dataJson} = require('@/dataJson.js');


@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  data () {
    return {
      nowTypeClick: [],
      data:dataJson,
    }
  }
  typeFilter(event){ // `event` 是原生 DOM 事件
      // this.nowPage
      let el = event.currentTarget;
      let now = el.innerHTML;
      this.nowTypeClick.push(now);
      let removeData =[];
      let filter_num = this.nowTypeClick.length;
      console.log(this.nowTypeClick);
      for( let i = 0 ;i < this.data.length ; i++){
        let intersection = this.data[i].condition.filter(v => this.nowTypeClick.includes(v));
        // console.log(intersection);
        if(intersection.length == filter_num){
          removeData.push(this.data[i].id);
        }
      }
        // console.log(removeData);
      this.data = this.data.filter(function(item, index, array){
        for( let i = 0 ;i < removeData.length ; i++){
          if(removeData[i] == item.id){
            return  true;
          }
        };
        return false;
      });

      // console.log(this.data);

  }
  coinSort(event){ // `event` 是原生 DOM 事件
      // this.nowPage
      let el = event.currentTarget;
      let num = el.getAttribute("kind");
      this.data = this.data.sort(function (a,b) {
        let new_a = a.exchange[num-1] > a.more_exchange[num-1]?a.exchange[num-1] :a.more_exchange[num-1];
        let new_b = b.exchange[num-1] > b.more_exchange[num-1]?b.exchange[num-1] :b.more_exchange[num-1];
        let c = new_a <  new_b ? 1 : -1;
        return c;
      });
      // console.log( num);
      //var el = event.target;//哈哈
  }
}
</script>
<style lang="stylus">
@import '../stylus/home'
</style>