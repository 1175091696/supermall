<template>
	<div id="detail">
		<DetailNav></DetailNav>
		<img :src="this.topImage" alt="">
		<p>{{id}}</p>
	</div>
	
</template>

<script>
import DetailNav from "./childComps/DetailNav.vue"
import {getDetailData} from "network/resData/detail.js"
export default {
	name: 'Detail',
	data() {
		return {
			id: null,
			topImage: []
		}
	},
	components: {
		DetailNav
	},
	created() {
		// 保存传入的id
		this.id = this.$route.params.id

		// 根据id请求数据
		getDetailData().then(res => {
			console.log(res.detailShop.topImage)
			this.topImage = res.detailShop.topImage
		})
	}

};
</script>

<style scoped>
	img {
		width: 98%;
		margin: 0 1%;
	}
</style>