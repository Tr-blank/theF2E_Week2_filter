<template>
  <div class="aboutMain">
    <div class="about">
      <h2 class="aboutTitle">Don't Starve Together「The Gorge」</h2>
    <div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/SfzvtHDsgTU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
      <p>After barely escaping through the Molten Gateway, our survivors plummet headfirst into the ruins of a sickly city ruled by a ravenous beast. Work together to cook fine dishes and placate the Eternal Gnaw's hunger to avoid the curse of its terrible plague. Cook well enough, and you may even get to go home.
      </p>
<p>The Gorge is a free limited time 3-player co-op challenge with tons of new skins, emotes, items and more. Your goal is to cook and offer food on the Altar of Gnaw, but you'll need all the cooks in the kitchen to keep it fed, so work together to survive!</p>
      <p class="link"><a href="https://store.steampowered.com/app/322330/Dont_Starve_Together/">購買遊戲</a> / <a href="https://forum.gamer.com.tw/B.php?bsn=23632">巴哈討論區</a></p>
    </div>
    <footer>
      <div class="partner">特此感謝<span class="strong">笨蛋孟</span>及<span class="strong">魚肉</span>協助彙整遊戲資料</div>
      <div>圖片資料皆取自<a class="footerLink" target="_blank" href="https://forums.kleientertainment.com/gorge-recipe-book/">遊戲官方食譜</a>及<a class="footerLink" target="_blank" href="https://docs.google.com/document/d/11w3icU7syMySWet8xG74Cellsl0JdOB-mq129tPDte8/edit">巴哈姆特食譜清單</a></div>
      <div>此網站為<a class="footerLink" target="_blank" href="http://www.hexschool.com/2018/05/09/2018-05-09-the_f2e/">前端修練活動</a>作品，網站內容僅供資料篩選及分享用途</div>
    </footer>
  </div>
</template>
<style lang="stylus">
  .aboutMain
    max-width 768px
    margin 0 auto
    padding 40px 0
  .aboutTitle
    line-height: 2rem;
    margin: 20px 0 50px;
    font-size: 2rem;
    font-weight: bold;
  .link
    font-size: 1.125rem;
  .video
    width 100%
    padding 28%
    position relative
    iframe
      position absolute
      top 0
      left 0
      width 100%
      height  100%
  .about
    width  100%
    text-align center
    color #573c1d
    border-style: solid;
    border-width: 30px 40px 30px 40px;
    -o-border-image: url(/img/item_bg.png) 30 40 30 40 stretch;
    border-image: url(/img/item_bg.png) 30 40 30 40 fill stretch;
  .strong
    color: #efcfaa
    padding: 0 5px;
  footer
    text-align: center;
    color: #c1c1c1;
    font-size: 0.752rem;
    padding: 40px;
</style>