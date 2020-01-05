<template>
	<div>
		<h1>用户</h1>
		<h2>{{userId}}</h2>
	</div>
	
</template>

<script>
// 动态路由
// params传值
export default {
	name: 'User',
	// computed: {
	// 	userId() {
	// 		return this.$route.params.userId
	// 	} 
	// },
	data() {
		return {
			userId:  this.$route.params.userId
		}
	}

}
</script>