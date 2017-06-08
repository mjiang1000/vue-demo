<template>
<div class="item">
  <div class="topic_title_wrapper">
  	<span v-if="item.top" class="put_top">置顶</span>
  	<span v-else-if="item.good" class="put_good">精华</span>
  	<span v-else class="topiclist-tab" v-show="!!item.tab">{{TabnaemZN[item.tab] || "全部"}}</span>
  	<a class="topic_title" v-bind:title=item.title >{{item.title}}</a>
  </div>

  <a class="user_avatar"><img v-bind:src=item.author.avatar_url></a>
  <span class="user_loginname">{{item.author.loginname}}</span>

  <span class="reply_count">
    <span class="count_of_replies" title="回复数">{{item.reply_count}}</span>
    <span class="count_of_sepertor">/</span>
    <span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
  </span>
  <a >
  <span class="create_at">创建于：{{item.create_at | dateFormat('Y-m-d H:m:s')}}</span>
    <span class="last_active_time">{{item.last_reply_at | timeAgo}}前</span>
  </a>

</div>
	
</template>

<script> 
export default {
  name: 'item-view',
  props: ['item'],
  data(){
  	return {
  		TabnaemZN:{
  			share:"分享",
  			ask:"问答",
  			job:"招聘"
  		}
  	}
  }

}
</script>

<style lang="stylus">
  
.item 
  padding-right 10px
  background #fff
  border-top 1px solid #f0f0f0
  position relative
  padding 10px 0 10px 10px
  height 70px
  &:nth-child(1)
    border-top 0

.user_avatar
  color #778087
  float left
  display block 
  margin-top 4px
  img
    width 40px
    height 40px
    border-radius 20px
.user_loginname
  color #000
  position relative
  font-size 0.9em
  left 10px
.reply_count
  display inline-block
  text-align center
  float left
  .count_of_replies
    color #80bd01
  .count_of_sepertor
    margin 0 -3px
    font-size 10px
  .count_of_visits
    font-size 10px
    color #b4b4b4

.create_at
  text-decoration none
  color #778087

.last_active_time
  text-align right
  min-width 50px
  display inline-block
  white-space nowrap
  font-size .8em
  color #778087
  position absolute
  right 15px
  bottom 0

.topic_title_wrapper
  text-overflow ellipsis
  white-space nowrap
  .topiclist-tab
    background-color #e5e5e5
    color #999
    padding 2px 4px
    border-radius 3px
    font-size 12px
  .put_good, .put_top
    background-color #80bd01
    color #fff
    padding 2px 4px
    border-radius 3px
    font-size 12px
    position relative
    left 4px
  .topic_title
    color #333
    max-width 70%
    white-space nowrap
    display inline-block
    vertical-align middle
    font-size 16px
    line-height 30px
    text-overflow ellipsis
    overflow hidden


@media (max-width: 979px)
  .reply_count
    position absolute
    right 15px
    line-height 2em
    font-size 10px

   .create_at
     position absolute
     bottom 0
     left 60px
     font-size .8em
   .topic_title_wrapper
     .topic_title
       font-size 1em
       width 100%
       left 15px
       position relative
</style>
