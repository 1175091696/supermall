<template>
	<div class="backTop">
		<img src="~assets/image/top.png" alt="">
	</div>
</template>

<script>
	export default {
		name: 'BackTop',
		
	};
</script>

<style scoped>
	.backTop {
		position: fixed;;
		right: 10px;
		bottom:60px;
	}

	img {
		width: 30px;
		height: 30px;
		border-radius: 15px;
	}
</style>