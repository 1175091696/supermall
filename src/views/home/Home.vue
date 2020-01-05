<template>
	<div id="home">
	<!-- <h2>1</h2> -->
		<navBar class="home-nav">
			<div slot="center">购物街</div>		
		</navBar>
			<RecommendView :recommends="recommends" />
			<FeatureView />
			<TabControl :titles="['流行', '新款', '精选']" class="title" @tabClick="tabClick" />
			<GoodsList :goods="showGoods"></GoodsList>
			
			<ul>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
				<li>列表</li>
			</ul>
	</div>
</template>

<script>
	import navBar from "components/common/navbar/navBar"	
	import TabControl from "components/content/tabControl/TabControl"
	import GoodsList from "components/content/goods/GoodsList"
	
	import RecommendView from "./childComps/RecommendView.vue"
	import FeatureView from "./childComps/FeatureView.vue"
	
	import {getHomeData, getHomeGoods} from "network/resData/home.js"

	export default {
		name: 'home',
		components: {
		navBar,
		TabControl,
		GoodsList,

		RecommendView,
		FeatureView,
		},
		data() {
			return {
				// banners: [],
				recommends: [],
				goods: {
		      "pop": {page: 0, list: []} ,
		      "news": {page: 0, list: []},
		      "sell": {page: 0, list: []},
		    },
		    currentType: 'pop'
			}
		},
		computed: {
		showGoods() {
			return this.goods[this.currentType].list
		}
		},
		created() {
			this.getHomeData();
			this.getHomeGoods('pop');
			this.getHomeGoods('news');
			this.getHomeGoods('sell');
		},
		methods: {
			// 时间监听方法
			tabClick(index) {
				switch(index) {
					case 0: 
						this.currentType = 'pop';
						break;
					case 1: 
						this.currentType = 'news';
						break;
					case 2: 
						this.currentType = 'sell';
						break;
					default:
						break
				}
			},
			//网络请求相关方法
			getHomeData() {
				// 请求图片
				getHomeData().then(res => {
				this.recommends = res.swipe;
				// console.log(this.recommends)
				}) ;
				
			},
			getHomeGoods(type) {
				const page = this.goods[type].page;
				// 请求列表数据
				getHomeGoods(type).then(res => {
					this.goods[type].list.push(...res.goods[page][type]);
					this.goods[type].page += 1;
					// console.log(type)
					// console.log(this.goods[type].list)
				})
			}
		}
	};
</script>

<style scoped>
	#home {
		padding-top: 44px;
	}
	.home-nav {
		background: var(--color-tint);
		color: #fff;

		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
	}

	.title {
		position: sticky; 
		/*sticky会在滚动到设置的值时变为fixed，兼容性差，移动端比较适合*/
		top: 44px;
	}
</style>