<template>
  <body id="app">
    <div class="header-top">6/14~7/9 新遊戲活動「The Gorge」</div>
    <header>
      <img class="logoImg" src="img/logo.png" alt="">
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
    color #fff
  header
    text-align  center
    background-color: rgba(0,0,0,.6);
    box-shadow: 0 20px 30px 0px rgba(0,0,0,.6);
    padding: 40px 0 0 0;
  .logoImg
    width 260px
</style>
