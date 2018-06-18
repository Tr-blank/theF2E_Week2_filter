<template>
  <body id="app">
    <nav class="header-top"><router-link to="/about">Don't Starve Together 新活動「The Gorge」6/14~7/9 </router-link></nav>
    <header>
      <h1 class="hide">Don't Starve Together「The Gorge」活動食譜篩選 - 前端修練時光屋第二周 篩選器｜提亞</h1> 
      <router-link to="/"><img class="logoImg" src="img/logo.png" alt=""></router-link>
    </header>
    <router-view/>
  </body>
</template>

<style lang="stylus">
  @import 'stylus/normalize'
  @import '../stylus/basic'
  body
    background-image: url(/img/background.jpg);
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
  .header-top
    background-color #161421
    text-align  center
    line-height 40px
    a
      color #fff
  header
    text-align  center
    background-color: rgba(0,0,0,.6);
    box-shadow: 0 20px 30px 0px rgba(0,0,0,.6);
    padding: 40px 0 0 0;
  .logoImg
    width 260px
</style>
