<template>
	<div class="goodsItem" @click="itemClick">
		<img :src="goodsItem.img" alt="" @load="imageLoad">
		<div class="info">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.coll}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "GoodsListItem",
		props: {
			goodsItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			// 监听图片加载
			imageLoad() {
				// 事件总线，类似于vuex
				this.$bus.$emit('itemImageLoad')
			},
			itemClick() {
				this.$router.push('./Detail/' + this.goodsItem.id)
				console.log(this.goodsItem.id)
			}
		}
	};
</script>

<style>
	.goodsItem {
		padding-bottom: 40px;
		position: relative;
		width: 48%;
	}

	.goodsItem img {
		width: 100%;
		border-radius: 5px
	}

	.info {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}

	.info p {
		overflow: hidden;
		-ms-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
	}

	.price {
		color: var(--color-high-text);
		margin-right: 20px
	} 

	.collect {
		position: relative;
	}

	.collect::before {
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url("~assets/image/collect.png") 0 0/14px 14px;
	}
</style>