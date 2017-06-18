import ListView from './ListView.vue'

export default function createListView(type) {
  // console.log(type)
  return {
  	name: `${type}-stories-view`,
  	title: type,
  	asyncData ({ store }) {
      return store.dispatch('FETCH_ITEMS', { type })
    },
  	render(h) {
  	 return	h(ListView, {props: {type}})
  	}
  }
}
