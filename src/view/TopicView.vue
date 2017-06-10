<template>
  <div class="topic-view">
  	<div class="topic-title">{{topic.title}}</div>
  	<div class="meta-info">
  	  <a class="avatar"><img :src="topic.author.avatar_url" ></a>
  	  <span class="type">{{topic.tab}}</span>
  	  <span class="comb"> 
  	    <span class="createat">{{topic.create_at | timeAgo}}前创建</span>
  	    <span class="visit">&nbsp;{{topic.visit_count}}次浏览</span>
  	  </span>
  	  <span class="collect">收藏</span>
  	</div>
  	<div class="content" v-html="topic.content">
  		
  	</div>
  	<div class="reply-list">
  	  <p>{{topic.reply_count}}次评论</p>

  	</div>


  </div>
</template>

<script>
function fetchTopic(store, route) {
  // debugger
  return store.dispatch('FETCH_TOPIC',{id : route.params.id})
}
export default {
  name: 'topic',
  components:{

  },
  data () {

  	return {
  	  loading: true
  	}
  },

  computed: {
  	topic () {
  	  return this.$store.state.topics[this.$route.params.id] 
  	}
  },
  beforeMount () {
    fetchTopic(this.$store, this.$route).then(() => {
    	this.loading = false
    })
  }
}
</script>

<style lang="stylus">
.topic-view
  margin 0 5px;
  background-color #fff
  .topic-title
    color #222
    margin 0
    padding 8px 
    line-height 1.5
    font-weight bold
  .meta-info
    position relative
    height 50px
    margin 5px 0
    .avatar
      display block
      float left
      img
        width 50px
        height 50px
        border-radius 30px

    .type
      position relative
      left 10px
      font-size 0.8em
      top 3px
      padding 3px 4px
      border-radius 5px
      color #555
      background-color #e1e1e1
    .comb
      position absolute
      bottom 3px
      left 60px
      display block
      font-size 0.8em
    .createat
      display inline-block
    .visit
      display inline-block
    .collect
      position absolute
      right 20px
      color #789
  
  .content 
    padding 10px
    padding-top 0
  .reply-list
    margin 10px auto


</style>