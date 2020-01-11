<template>
	<div class="DetailBottomBar">
		<div class="cart" @click="addToCart">加入购物车</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailBottomBar',
		methods: {
			addToCart() {
				this.$emit('addToCart')
			}
		}
	};
</script>

<style scoped>
	.DetailBottomBar {
		height: 49px;
		line-height: 49px;
		background: #ddd;
		text-align: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 20;
	}
</style>