<template>
	<div class="topic-list">
		<div class="list">
			<item v-for="item in displayItems" :key="item.id" :item="item"></item> 
		</div>
	</div>
</template>

<script >

import Item from '../component/Item.vue'

export default {
  name: 'item-list',
  components: {
  	Item
  },
  props:{
  	type: String
  },
  data() {
  	return {
  		displayItems: this.$store.getters.activeItems,
      distype: this.$store.activeType
  	}
  },
  computed: {
  	page () {
  	  return Number(this.$route.params.page) || 1
  	},
  	hasMore () {

  	}
  },

  beforeMount () {
  	this.loadItems(this.page)
  },
  beforeDestory () {

  },

  methods: {
  	loadItems (page = this.page) {
  	  this.$store.dispatch('FETCH_ITEMS',{type: this.type, page:this.page})
        .then(() => {this.displayItems = this.$store.getters.activeItems})
  	}
  }
}

</script>


<style lang="stylus">

.topic-list
  padding 0
  line-height 2em
  border-radius 0 0 3px 3px
  background-color #fff
  margin 0 5px
  
  .list
    margin 10px 0
    border-radius 0 0 3px 3px


</style>