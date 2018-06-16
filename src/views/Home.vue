<template>
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
            <span class="coin" v-for="(money,index) in item.exchange" :key="index"><img class="icon" :src="'img/stuffIcons/quagmire_coin'+money.kind+'.png'" alt="">{{money.quantity}}
            </span>
          </div>
          <div>
            <span class="titleSmall">銀具供奉</span>
            <span class="coin" v-for="(money,index) in item.more_exchange" :key="index"><img class="icon" :src="'img/stuffIcons/quagmire_coin'+money.kind+'.png'" alt="">{{money.quantity}}
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
      nowNumber: 0,
      data:dataJson,
    }
  }
}
</script>
<style lang="stylus">
@import '../stylus/home'
</style>