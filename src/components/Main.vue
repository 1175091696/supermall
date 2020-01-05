<template>
	<div class="main">
		<!-- <h2 v-for="item in a">{{item.data}}</h2> -->
		<TabBar></TabBar>
	</div>
</template>

<script>
import TabBar from "./content/MainTabBar.vue"
export default {
	name: 'Main',
	data() {
		return {
			a: []
		}
	},
	components: {
		TabBar
	},
	mounted() {
		this.getData()
	},
	methods: {
		getData() {
			let that = this;
			this.$http.get( '/user')
			.then(res => {
				that.a = res.data.data;
			})
			.catch(err => {
				console.log(err)
				// return err
			})
		}
	}
}
</script>