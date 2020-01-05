<template>
	<div id="recommends">
		<div v-for="item in recommends">
			<!-- {{item}} -->
			<img :src="item.recommend" alt="" style="float: left;padding: 0 20px">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RecommendView',
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		},
	};
</script>

<style scoped>
	
</style>