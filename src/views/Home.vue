<template>
  <article >
    <ul>
      <li class="listItem" v-for="item in data" :key="item.id">
        <div class="itemInfo">
          <span :class="'itemImg item-'+item.id"></span> 
          <div><i :class="'toolIcon-'+item.tool.iconName"></i>{{item.tool.name}}</div>
          <div v-for="(type,index) in item.condition" :key="index">{{type}}</div>
        </div>
        <div class="itemDetail">
          <div>一般供奉換取：<span v-for="(money,index) in item.exchange" :key="index">{{money.quantity}}{{money.kind}}</span></div>
          <div>銀具供奉換取：<span v-for="(money,index) in item.more_exchange" :key="index">{{money.quantity}}{{money.kind}}</span></div>
          <div><span v-for="(stuff,index) in item.ingredients" :key="index">{{stuff.name}}X{{stuff.quantity}}</span></div>
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