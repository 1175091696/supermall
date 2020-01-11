<template>
	<div class="cart">
		<NavBar class="NavBar">
			<div slot="center">购物车</div>
		</NavBar>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/navBar"

	export default {
		name: 'Cart',
		components: {
			NavBar
		},
	};
</script>

<style scoped>
	.NavBar {
		background-color: var(--color-tint);
		color: #fff;
		font-weight: 700;
	}
</style>