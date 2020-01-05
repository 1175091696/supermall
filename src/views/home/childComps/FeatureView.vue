<template>
	<div id="FeatureView">
		<a href="#">
			<!-- templaet里使用地址别名，需要增加~ -->
			<img src="~assets/image/1.png" alt="">
		</a>
	</div>
</template>

<script>
	export default {
		name: 'FeatureView',	
	};
</script>

<style scoped>
#FeatureView {
	border-bottom: 8px solid #eee;
}

img {
	width: 100%
}
</style>