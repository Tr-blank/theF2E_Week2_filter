<template>
  <body id="app">
    <div class="header-top">6/14~7/9 新遊戲活動「The Gorge」</div>
    <header>
      <img class="logoImg" src="img/logo.png" alt="">
    </header>
    <main class="inner">
      <aside>
        <div class="filter">
          <input type="text" placeholder="搜尋食材">
          <p>料理類型</p>
          <ul class="typelist">
            <li>Snack (小吃)</li>
            <li>Veggie (蔬菜)</li>
            <li>Dessert (甜點)</li>
            <li>Bread (麵包)</li>
            <li>Meat (肉類)</li>
            <li>Fish (魚類)</li>
            <li>Soup (湯)</li>
            <li>Pasta (義大利麵)</li>
            <li>Cheese (起司)</li>
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
            <li>彩虹幣</li>
            <li>金幣</li>
            <li>銀幣</li>
            <li>銅幣</li>
          </ul>
        </div>
      </aside>
      <router-view/>
    </main>
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
  main 
    x-inner()
    display flex
    padding  30px 0
  aside
    width 40%
  article
    width 60%
    padding-left 3%
    padding-top 25px
  @media screen and (max-width: 980px)
    main 
      display block
    aside,
    article
      width  100%
      padding: 10px;
  .filter
    border-style: solid;
    border-width: 60px 30px 60px 30px;
    -moz-border-image: url(/img/panel-centre.png) 60 30 60 30 stretch;
    -webkit-border-image: url(/img/panel-centre.png) 60 30 60 30 stretch;
    -o-border-image: url(/img/panel-centre.png) 60 30 60 30 stretch;
    border-image: url(/img/panel-centre.png) 60 30 60 30 fill stretch;
    color #efcfaa
    padding  20px
    line-height 1.75rem
    input
      border-bottom: 2px solid #e0be9f;
      background-color: transparent;
      border-radius: 3px;
      color: #fff
      width: 100%;
    p
      text-align: center;
      font-size: 1.25rem;
      line-height: 60px;
      margin: 0; 
      margin-top: 20px;
      color #fff
    ul
      display flex
      flex-wrap wrap
    li
      padding: 5px 10px;
      background-color: #18120d;
      margin: 5px 1%;
      font-size 0.85rem
      border: 1px solid #37363c;
      border-radius: 3px;
      text-align  center
      cursor: pointer;
      transition  background-color .25s ease
      &:hover
        background-color: #1e1811
  .typelist
    li
      width 48%
      font-size 1rem
  .coinlist
    li
      width 23%
  .toollist
    li
      width  31%
</style>
