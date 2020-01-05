<template>
	<div class="tabControl">
		<div v-for="(item, index) in titles" class="title" :class="{active: index == currentIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('tabClick', index)
				// console.log(index)
			}
		}
	};
</script>

<style scoped>
	.tabControl {
		display: flex;
		text-align: center;
		font-size: 15px;
		height: 40px;
		line-height: 40px;
		background: white;
	}

	.title {
		flex: 1;
		z-index: 9;
	}

	.active span {
		color: var(--color-high-text);
		padding: 4px;
		border-bottom: 2px solid var(--color-tint);
	}
</style>