<template>
  <main class="inner">
    <input class="hide" type="checkbox" id="asideControl">
    <label class="asideButton" for="asideControl"></label>
    <aside :style="'height:'+asideHeight()+'px;margin-top:'+pc_asideTop+'px;'">
      <div class="filter">
        <div class="total">你搜尋了<span class="totalNumber">{{dataFilted.length}}</span>篇食譜</div>
        <p class="filterTitle">料理類型</p>
        <div class="typelist">
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray" value="All" id="checkAll" name="checkFilter">
          <label for="checkAll"><i class="fas fa-dot-circle"></i>All 全部</label>
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray"  value="Snack 小吃" id="checkSnack" name="checkFilter">
          <label for="checkSnack"><i class="fas fa-dot-circle"></i>Snack 小吃</label>
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray"  value="Veggie 蔬菜" id="checkVeggie" name="checkFilter">
          <label for="checkVeggie"><i class="fas fa-dot-circle"></i>Veggie 蔬菜</label>
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray"  value="Dessert 甜點" id="checkDessert" name="checkFilter">
          <label for="checkDessert"><i class="fas fa-dot-circle"></i>Dessert 甜點</label>
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray"  value="Bread 麵包" id="checkBread" name="checkFilter">
          <label for="checkBread"><i class="fas fa-dot-circle"></i>Bread 麵包</label>
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray"  value="Meat 肉" id="checkMeat" name="checkFilter">
          <label for="checkMeat"><i class="fas fa-dot-circle"></i>Meat 肉</label>
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray"  value="Fish 魚" id="checkFish" name="checkFilter">
          <label for="checkFish"><i class="fas fa-dot-circle"></i>Fish 魚</label>
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray"  value="Soup 湯" id="checkSoup" name="checkFilter">
          <label for="checkSoup"><i class="fas fa-dot-circle"></i>Soup 湯</label>
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray"  value="Pasta 義大利麵" id="checkPasta" name="checkFilter">
          <label for="checkPasta"><i class="fas fa-dot-circle"></i>Pasta 義大利麵</label>
          <input type="radio" class="hide filterInput" @change="filterFunction" v-model="typeArray"  value="Cheese 起司" id="checkCheese" name="checkFilter">
          <label for="checkCheese"><i class="fas fa-dot-circle"></i>Cheese 起司</label>
        </div>
        <p class="filterTitle">烹飪工具</p>
        <div class="toolList">
          <input type="checkbox" class="hide filterInput" v-model="toolArray" @change="filterFunction" value="Cookpot" id="checkCookpot" name="toolFilter">
          <label for="checkCookpot">Cookpot 吊鍋<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="toolArray" @change="filterFunction" value="Oven" id="checkOven" name="toolFilter">
          <label for="checkOven">Oven 窯烤<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="toolArray" @change="filterFunction" value="Grill" id="checkGrill" name="toolFilter">
          <label for="checkGrill">Grill 烤盤<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="toolArray" @change="filterFunction" value="Big Cookpot" id="checkCookpot_big" name="toolFilter">
          <label for="checkCookpot_big">Big Cookpot 大吊鍋<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="toolArray" @change="filterFunction" value="Big Oven" id="checkOven_big" name="toolFilter">
          <label for="checkOven_big">Big Oven 大窯烤<i class="fas fa-check"></i></label>
          <input type="checkbox" class="hide filterInput" v-model="toolArray" @change="filterFunction" value="Big Grill" id="checkGrill_big" name="toolFilter">
          <label for="checkGrill_big">Big Grill 大烤盤<i class="fas fa-check"></i></label>
        </div>
        <p class="filterTitle">金幣數量排序</p>
        <div class="coinlist">
          <input type="radio" class="hide filterInput" v-model="coinString" @click="radioToggle" @change="filterFunction" value="4" id="radio4" name="coinSort">
          <label for="radio4">彩虹幣<i class="fas fa-long-arrow-alt-down"></i></label>
          <input type="radio" class="hide filterInput" v-model="coinString" @click="radioToggle" @change="filterFunction" value="3" id="radio3" name="coinSort">
          <label for="radio3">金幣<i class="fas fa-long-arrow-alt-down"></i></label>
          <input type="radio" class="hide filterInput" v-model="coinString" @click="radioToggle" @change="filterFunction" value="2" id="radio2" name="coinSort">
          <label for="radio2">銀幣<i class="fas fa-long-arrow-alt-down"></i></label>
          <input type="radio" class="hide filterInput" v-model="coinString" @click="radioToggle" @change="filterFunction" value="1" id="radio1" name="coinSort">
          <label for="radio1">銅幣<i class="fas fa-long-arrow-alt-down"></i></label>
        </div>
         <div class="textFilter"><input type="text" @change="filterFunction" v-model="textString" placeholder="輸入編號，例如45 61 16"><i class="fas fa-search"></i></div>
        <div class="footer">
        <div class="partner">特此感謝<span class="strong">笨盪孟</span>及<span class="strong">魚肉</span>協助彙整遊戲資料</div>
      <div>圖片資料皆取自<a class="footerLink" target="_blank" href="https://forums.kleientertainment.com/gorge-recipe-book/">遊戲官方食譜</a>及<a class="footerLink" target="_blank" href="https://docs.google.com/document/d/11w3icU7syMySWet8xG74Cellsl0JdOB-mq129tPDte8/edit">巴哈姆特食譜清單</a></div>
      <div>此網站為<a class="footerLink" target="_blank" href="http://www.hexschool.com/2018/05/09/2018-05-09-the_f2e/">前端修練活動</a>作品</div>
      <div>網站內容僅供資料篩選及分享用途</div>
        </div>
      </div>
    </aside> 
    <article>
      <div class="listWrapper">
        <section class="listItem" v-for="item in dataFilted" :key="item.id">
          <div class="itemInfo">
            <div class="title">{{item.title}}<img class='titleHr' src="img/quagmire_recipe_line_break.png" alt=""></div>
            <span :class="'itemImg item-'+item.id"></span> 
            <div v-for="(tool,index) in item.tool" :key="index"><img class="icon" :src="'img/stuffIcons/'+tool.iconName+'.png'" alt=""><span>{{tool.name}}</span></div>
            <div class="typeList"><span class="typeItem" v-for="(type,index) in item.condition" :key="index">{{type}}</span></div>
          </div>
          <div class="itemDetail">
            <div>
              <span class="titleSmall">一般供奉</span>
              <span class="coin" v-for="(money,index) in item.exchange" :key="index" v-if="money!=0"><img class="icon" :src="'img/stuffIcons/quagmire_coin'+(index+1)+'.png'" alt="">{{money}}
              </span>
            </div>
              <div class="note" v-html="item.exchange_Note"></div>
            <div>
              <span class="titleSmall">銀具供奉</span>
              <span class="coin" v-for="(money,index) in item.more_exchange" :key="index" v-if="money!=0"><img class="icon" :src="'img/stuffIcons/quagmire_coin'+(index+1)+'.png'" alt="">{{money}}
              </span>
            </div>
              <div class="note" v-html="item.more_exchange_Note"></div>
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
      toolArray:[],
      typeArray:'All',
      coinString:'',
      pc_asideTop:0,
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
  filterFunction(){ 
      // if(this.toolArray.length == 0 && this.typeArray.length == 0){
      //     this.dataFilted = this.data;
      // }
      this.dataFilted = this.data;
      this.pc_asideTop = 0;
      window.scroll(0, 270);
      let toolFilterData =[];
      let typeFilterData =[];
      let typeString = [];
      typeString.push(this.typeArray);
      // console.log(typeString);
      let toolFilter = this.toolArray;
      for( let i = 0 ;i < this.dataFilted.length ; i++){
        if(toolFilter.length != 0){
          let data = this.dataFilted[i].tool.filter(function(item, index, array){
            for(let x in toolFilter){
              if(toolFilter[x]==item.type){
                return true;
              }
            }
            return false;
          });
          if(data.length !=0)toolFilterData.push(this.dataFilted[i].id);
        }
        if(typeString[0] != "All"){
          //將資料陣列與篩選類型陣列做比對，符合的項目塞入typeFilterData裡面
          let intersection = this.dataFilted[i].condition.filter(function(item, index, array){return item == typeString;});
          // // console.log(intersection);
          if(intersection.length == 1){
            typeFilterData.push(this.dataFilted[i].id);
          }
        }else{
          typeFilterData.push(this.dataFilted[i].id);
        }
      }
      
      let final_id;
      toolFilter.length != 0?final_id = toolFilterData.filter(v => typeFilterData.includes(v)):final_id=typeFilterData;
      // console.log(final_id);

      let textArray = this.textString.split(" ");
      // console.log(textArray);
      this.dataFilted = this.dataFilted.filter(function(item, index, array){
        let TrueNum = 0;
        for( let i = 0 ;i < final_id.length ; i++){
          if(final_id[i] == item.id){
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

      if(this.coinString != ''){
        let coin_num = this.coinString-1;
        this.dataFilted = this.dataFilted.sort(function (a,b) {
          let new_a = a.exchange[coin_num] > a.more_exchange[coin_num]?a.exchange[coin_num] :a.more_exchange[coin_num];
          let new_b = b.exchange[coin_num] > b.more_exchange[coin_num]?b.exchange[coin_num] :b.more_exchange[coin_num];
          let c = new_a <  new_b ? 1 : -1;
          return c;
        });        
      }
  }
  asideHeight(){
    let w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          h = w.innerWidth|| e.clientWidth|| g.clientWidth,
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return h>960?y - 60: 'initial';
  }
  onScroll(){
    let w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          h = w.innerWidth|| e.clientWidth|| g.clientWidth,
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    if(h>960){      
      if(window.scrollY + window.innerHeight > document.body.scrollHeight-20 && window.innerHeight + 500 < document.body.scrollHeight){
        this.pc_asideTop = document.body.scrollHeight - window.innerHeight - 290;
      }else if(window.scrollY<300){
        this.pc_asideTop = 0;
      }else{
        this.pc_asideTop = window.scrollY - 290;
      }
    }else{
      this.pc_asideTop = 0;
    }

    if(window.scrollY + window.innerHeight > document.body.scrollHeight -10){

      // console.log(y);
    }
  }
  mounted(){
    window.addEventListener('scroll',this.onScroll);
  }
  deforeDestroy(){
    window.removeEventListener('scroll',this.onScroll);
  }
}
</script>
<style lang="stylus">
@import '../stylus/basic'
@import '../stylus/home'
</style>