<template>
	<div id="detail">
		<DetailNav></DetailNav>
		<img :src="this.topImage" alt="">
		<p>{{id}}</p>
		<DetailBottomBar @addToCart="addToCart" @click.native="cartClick"></DetailBottomBar>

		<!-- <Toast :message="message" :isShow="show"></Toast> -->
	</div>
	
</template>

<script>
import DetailNav from "./childComps/DetailNav.vue"
import DetailBottomBar from "./childComps/DetailBottomBar.vue"
// import Toast from "components/common/toast/Toast.vue"

import {getDetailData} from "network/resData/detail.js"
export default {
	name: 'Detail',
	data() {
		return {
			id: null,
			topImage: [],
			// message: '',
			// show: false
		}
	},
	components: {
		DetailNav,
		DetailBottomBar,
		// Toast
	},
	created() {
		// 保存传入的id
		this.id = this.$route.params.id

		// 根据id请求数据
		getDetailData().then(res => {
			// console.log(res.detailShop.topImage)
			this.topImage = res.detailShop.topImage
		})
	},
	methods: {
		addToCart() {
			
		},
		cartClick() {
			// this.show = true;
			// 	this.message = this.id + "加入购物车"
			// setTimeout(() => {
			// 	this.show = false;
			// },1000)
			this.$toast.show(this.id)
			// console.log(this.$toast)
		}
	}
};
</script>

<style scoped>
	img {
		width: 98%;
		margin: 0 1%;
	}
</style>