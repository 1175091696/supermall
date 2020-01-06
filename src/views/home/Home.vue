<template>
	<div id="home">
	<!-- <h2>1</h2> -->
		<navBar class="home-nav">
			<div slot="center">购物街</div>		
		</navBar>

		<Scroll class="content" 
						ref="scroll" 
						:probeType="3"
						:pullUpLoad="true" 
						@scroll="contentScroll"
						@pullingUp="loadMore">
			<RecommendView :recommends="recommends" />
			<FeatureView />
			<TabControl :titles="['流行', '新款', '精选']" class="title" @tabClick="tabClick" />
			<GoodsList :goods="showGoods"></GoodsList>
		</Scroll>
		
		<BackTop @click.native="backClick" v-show="isShowTop" />
	</div>
</template>

<script>
	import navBar from "components/common/navbar/navBar"
	import Scroll from "components/common/scroll/Scroll"
	import BackTop from "components/common/backTop/BackTop"

	import TabControl from "components/content/tabControl/TabControl"
	import GoodsList from "components/content/goods/GoodsList"
	
	import RecommendView from "./childComps/RecommendView.vue"
	import FeatureView from "./childComps/FeatureView.vue"
	
	import {getHomeData, getHomeGoods} from "network/resData/home.js"

	export default {
		name: 'home',
		components: {
		navBar,
		Scroll,
		BackTop,
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
		    currentType: 'pop',
		    isShowTop: false
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
				if (page <= 4) {
					// 请求列表数据
					getHomeGoods(type).then(res => {
						this.goods[type].list.push(...res.goods[page][type]);
						this.goods[type].page += 1;
					})
				}				
			},
			// 组件backTop监听事件
			backClick() {
				// 通过ref父组件1.直接访问scroll组件的scroll的scrollTo事件，2。直接使用scrollTo事件
				// this.$refs.scroll.scroll.scrollTo(0,0)
				this.$refs.scroll.scrollTo(0,0,1000)
			},
			contentScroll(position) {
				// console.log(position)
				this.isShowTop = (-position.y) > 1000;
			},
			loadMore() {
				this.getHomeGoods(this.currentType);
				// 刷新，重新计算dom的高度
				this.$refs.scroll.scroll.refresh()
				// console.log(this.goods[this.currentType].list)			
			}
		}
	};
</script>

<style scoped>
	#home {
		/*padding-top: 44px;*/
		height: 100vh;
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
		z-index: 9;
	}

	.content {
		height: calc(100% - 100px);
		overflow: hidden;
		margin-top: 45px;
		/*background: red;*/
	}
</style>