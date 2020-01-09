<template>
	<div id="DetailNav">
		<NavBar>
			<div slot="left" @click="backClick">&lt</div>
			<div slot="center" class="title">
				<div class="titleItem" v-for="(item, index) in titles" :class="{active: index === currentIndex}" @click="titleClick(index)">{{item}}</div>
			</div>
		</NavBar>
	</div>
	
</template>

<script>
import NavBar from "components/common/navbar/navBar"
export default {
	name: 'DetailNav',
	data() {
		return {
			id: null,
			titles: ['商品', '参数', '评论', '推荐'],
			currentIndex: 0
		}
	},
	components: {
		NavBar
	},
	created() {
		this.id = this.$route.params.id
	},
	methods: {
		titleClick(index) {
			this.currentIndex = index;
		},
		backClick() {
			this.$router.back()
		}
	}
};
</script>

<style>
	.title{
		display: flex;
		font-size: 13px;
	}

	.titleItem {
		flex: 1;
	}

	.active {
		color: var(--color-high-text);
	}
</style>