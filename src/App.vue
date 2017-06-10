<template>
<div id="app">
  <header>
    <div class="logo">
  	  <router-link to="/">
  	    <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" >
  	  </router-link>
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/all">全部</router-link></li>
        <li><router-link to="/good">精华</router-link></li>
        <li><router-link to="/ask">问答</router-link></li>
        <li><router-link to="/job">招聘</router-link></li>
        <li><router-link to="/share">分享</router-link></li>
      </ul>
    </nav>
  	
  </header>
  <transition name="fade" mode="out-in">
  	<router-view class="view"></router-view>
  </transition>
</div>
</template>



<style lang="stylus">
body
  font-size 14px
  margin 0
  background-color #e1e1e1
  color #444

img
  height auto
  max-width 100%
  vertical-align middle
  border 0
.logo
  width 188px
  padding 9px 20px
  height 45px
  margin 0 auto
  a
   display block
header
  position relative
  z-index 999
  width auto!important
  background #444
  margin 0 5px
  font-size 13px
  overflow visible
  .nav
    width 100%
    ul 
      width 100%
      position relative
      height 35px
      overflow hidden
      margin 10px auto
      padding 0
    li 
      display inline-block
      width 19%
      text-align center
    a 
      color #ccc
      padding 3px 4px
      border-radius 3px
      text-decoration none
      display inline-block
      text-align center
      &.router-link-active
        color #fff
        background-color #80bd01
.view
  position relative

.fade-enter-active, .fade-leave-active
  transition all .3s ease
.fade-enter, .fade-leave-active
  opacity 0

</style>