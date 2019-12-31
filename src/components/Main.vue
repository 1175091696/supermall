<template>
	<div>
		<h2 v-for="item in a">{{item.data}}</h2>
	</div>
</template>

<script>
export default {
	name: 'Main',
	data() {
		return {
			a: []
		}
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