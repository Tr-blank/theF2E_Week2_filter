<template>
  <main class="inner">
    <input class="hide" type="checkbox" id="asideControl">
    <label class="asideButton" for="asideControl"></label>
    <aside>
      <div class="filter">
        <div class="total">你搜尋了<span class="totalNumber">{{dataFilted.length}}</span>篇食譜</div>
        <div class="textFilter"><input type="text" @change="filterFunction" v-model="textString" placeholder="輸入編號，例如45 61 16"><i class="fas fa-search"></i></div>
        <p>料理類型</p>
        <div class="typelist">
          <input type="checkbox" class="hide filterInput" v-model="typeArray" @change="filterFunction" value="Snack (小吃)" id="checkSnack" name="checkFilter">
          <label for="checkSnack">Snack (小吃)<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="typeArray" @change="filterFunction" value="Veggie (蔬菜)" id="checkVeggie" name="checkFilter">
          <label for="checkVeggie">Veggie (蔬菜)<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="typeArray" @change="filterFunction" value="Dessert (甜點)" id="checkDessert" name="checkFilter">
          <label for="checkDessert">Dessert (甜點)<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="typeArray" @change="filterFunction" value="Bread (麵包)" id="checkBread" name="checkFilter">
          <label for="checkBread">Bread (麵包)<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="typeArray" @change="filterFunction" value="Meat (肉類)" id="checkMeat" name="checkFilter">
          <label for="checkMeat">Meat (肉類)<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="typeArray" @change="filterFunction" value="Fish (魚類)" id="checkFish" name="checkFilter">
          <label for="checkFish">Fish (魚類)<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="typeArray" @change="filterFunction" value="Soup (湯)" id="checkSoup" name="checkFilter">
          <label for="checkSoup">Soup (湯)<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="typeArray" @change="filterFunction" value="Pasta (義大利麵)" id="checkPasta" name="checkFilter">
          <label for="checkPasta">Pasta (義大利麵)<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="typeArray" @change="filterFunction" value="Cheese (起司)" id="checkCheese" name="checkFilter">
          <label for="checkCheese">Cheese (起司)<i class="fas fa-check"></i></label>
        </div>
        <p>烹飪工具</p>
        <select v-model="toolString"  @change="filterFunction"  name="toolFilter" id="toolFilter">
          <option value="All">All (全部)</option>
          <option value="Cookpot">Cookpot (吊鍋)</option>
          <option value="Oven">Oven (窯烤)</option>
          <option value="Grill">Grill (烤盤)</option>
          <option value="Cookpot_big">Big Cookpot (大吊鍋)</option>
          <option value="Oven_big">Big Oven (大窯烤)</option>
          <option value="Grill_big">Big Grill (大烤盤)</option>
        </select>
        <p>金幣數量排序</p>
        <ul class="coinlist">
          <input type="radio" class="hide filterInput" v-model="coinString" @click="radioToggle" @change="filterFunction" value="4" id="radio4" name="coinSort">
          <label for="radio4">彩虹幣<i class="fas fa-long-arrow-alt-down"></i></label>
          <input type="radio" class="hide filterInput" v-model="coinString" @click="radioToggle" @change="filterFunction" value="3" id="radio3" name="coinSort">
          <label for="radio3">金幣<i class="fas fa-long-arrow-alt-down"></i></label>
          <input type="radio" class="hide filterInput" v-model="coinString" @click="radioToggle" @change="filterFunction" value="2" id="radio2" name="coinSort">
          <label for="radio2">銀幣<i class="fas fa-long-arrow-alt-down"></i></label>
          <input type="radio" class="hide filterInput" v-model="coinString" @click="radioToggle" @change="filterFunction" value="1" id="radio1" name="coinSort">
          <label for="radio1">銅幣<i class="fas fa-long-arrow-alt-down"></i></label>
        </ul>
      </div>
    </aside>
    <article>
      <div class="listWrapper">
        <section class="listItem" v-for="item in dataFilted" :key="item.id">
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
        </section>
      </div>
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
      data:dataJson,
      dataFilted:dataJson,
      textString:'',
      toolString:'All',
      typeArray:[],
      coinString:'',
    }
  }
  radioToggle(event){
    let el = event.currentTarget;
    let now = el.getAttribute("value");
    if(this.coinString == now){
      this.coinString= '';
      this.dataFilted = this.dataFilted.sort(function (a,b) {
        return  a.id >  b.id ? 1 : -1;
      });
    }
  }
  filterFunction(event){ 
      let el = event.currentTarget;
      // let now = el.getAttribute("value");
      let toolnow = this.toolString;
      // console.log(toolnow);
      if(toolnow != "All"){
        this.dataFilted = this.data.filter(function(item, index, array){
          return item.tool.type == toolnow ;
        });
      }else{
        this.dataFilted = this.data;
      }

      let typeFilterData =[];
      for( let i = 0 ;i < this.dataFilted.length ; i++){
        let intersection = this.dataFilted[i].condition.filter(v => this.typeArray.includes(v));
        // console.log(intersection);
        if(intersection.length == this.typeArray.length){
          typeFilterData.push(this.dataFilted[i].id);
        }
      }

      let textArray = this.textString.split(" ");
      // console.log(textArray);
      this.dataFilted = this.dataFilted.filter(function(item, index, array){
        let TrueNum = 0;
        for( let i = 0 ;i < typeFilterData.length ; i++){
          if(typeFilterData[i] == item.id){
            TrueNum++;
            break ;
          }
        };
        if(textArray.length != 0){
          let textNull =0;
          for( let i = 0 ;i < textArray.length ; i++){
            if(textArray[i]>0 && textArray[i]<=70){
              if(textArray[i] == item.id){
                TrueNum++;
                // console.log(TrueNum);
                break ;
              }
            }else {
              textNull++;
            }
          };
          if(textNull == textArray.length)TrueNum++;
        }else{
          TrueNum++;
        };
        return TrueNum == 2 ? true:false;
      });
      let coin_num = this.coinString-1;
      this.dataFilted = this.dataFilted.sort(function (a,b) {
        let new_a = a.exchange[coin_num] > a.more_exchange[coin_num]?a.exchange[coin_num] :a.more_exchange[coin_num];
        let new_b = b.exchange[coin_num] > b.more_exchange[coin_num]?b.exchange[coin_num] :b.more_exchange[coin_num];
        let c = new_a <  new_b ? 1 : -1;
        return c;
      });

  }

}
</script>
<style lang="stylus">
@import '../stylus/basic'
@import '../stylus/home'
</style>