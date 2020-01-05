<template>
	<div>
		<h1>Mine</h1>
		<h2>{{userId}}</h2>
	</div>
	
</template>

<script>
// 动态路由
export default {
	name: 'Mine',
	// computed: {
	// 	userId() {
	// 		return this.$route.params.userId
	// 	} 
	// },
	data() {
		return {
			userId:  this.$route.query.name + '-' +this.$route.query.age
		}
	}

}
</script>