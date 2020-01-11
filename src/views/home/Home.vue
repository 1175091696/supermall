<template>
	<div id="home">
	<!-- <h2>1</h2> -->
		<navBar class="home-nav">
			<div slot="center">购物街</div>		
		</navBar>
		<TabControl :titles="['流行', '新款', '精选']" class="title2" @tabClick="tabClick" ref="TabControl1" v-show="isTabFixed" />
		<Scroll class="content" 
						ref="scroll" 
						:probeType="3"
						:pullUpLoad="true" 
						@scroll="contentScroll"
						@pullingUp="loadMore"
						>						
			<RecommendView :recommends="recommends" />
			<FeatureView @FeatureViewImageLoad="FeatureViewImageLoad" />
			<TabControl :titles="['流行', '新款', '精选']" class="title" @tabClick="tabClick" ref="TabControl2" :class="{fixed: isTabFixed}" v-show="!isTabFixed" />
			<GoodsList :goods="showGoods"></GoodsList>
		</Scroll>
		
		<BackTop @click.native="backClick" v-show="isShowBackTop" />
	</div>
</template>

<script>
	import navBar from "components/common/navbar/navBar"
	import Scroll from "components/common/scroll/Scroll"
	// import BackTop from "components/common/backTop/BackTop"

	import TabControl from "components/content/tabControl/TabControl"
	import GoodsList from "components/content/goods/GoodsList"
	
	import RecommendView from "./childComps/RecommendView.vue"
	import FeatureView from "./childComps/FeatureView.vue"
	
	import {getHomeData, getHomeGoods} from "network/resData/home.js"
	import {debounce} from "common/utils.js"
	import {itemListenerMixin,backTopMixin} from "common/mixin.js"

	export default {
		name: 'home',
		components: {
		navBar,
		Scroll,
		// BackTop,
		TabControl,
		GoodsList,

		RecommendView,
		FeatureView,
		},
		//混入封装
		mixins: [itemListenerMixin,backTopMixin],
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
		    // isShowBackTop: false,
		    tabOffsetTop: 0,
		    isTabFixed: false,
		    saveY: 0
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list
			}
		},
		created() {
			// 请求数据
			this.getHomeData();
			this.getHomeGoods('pop');
			this.getHomeGoods('news');
			this.getHomeGoods('sell');
		},
		mounted() {
			// 监听item中图片加载完成与否
			// const refresh = debounce(this.$refs.scroll.refresh, 1000)
			// this.$bus.$on('itemImageLoad', () => {			
			// 	refresh()
			// })
			// 改为从mixin混入
		},
		destroyed() {
			// 测试路由是否销毁
			console.log('11')
		},
		activated() {
			this.$refs.scroll.scrollTo(0, this.saveY, 0);
			this.$refs.scroll.refresh()
		},
		deactivated() {
			this.saveY = this.$refs.scroll.getScrollY()
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
				this.$refs.TabControl1.currentIndex = index;
				this.$refs.TabControl2.currentIndex = index;
			},
			//网络请求相关方法
			getHomeData() {
				// 请求图片
				getHomeData().then(res => {
				this.recommends = res.swipe;
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
			// backClick() {
			// 	// 通过ref父组件1.直接访问scroll组件的scroll的scrollTo事件，2。直接使用scrollTo事件
			// 	// this.$refs.scroll.scroll.scrollTo(0,0)
			// 	this.$refs.scroll.scrollTo(0,0,1000)
			// },
			// 监听滚动
			contentScroll(position) {
				// 判断BackTop是否显示
				// this.listenShowBackTop = -position.y > BACK_POSITION
				this.listenShowBackTop(position);
				// 决定tabControl是否吸顶（position: fix)
				this.isTabFixed = (-position.y) > this.tabOffsetTop
			},
			// 监听上拉事件
			loadMore() {
				this.getHomeGoods(this.currentType);
				// 刷新，重新计算dom的高度
				this.$refs.scroll.refresh()
				// console.log(this.goods[this.currentType].list)			
			},
			// 监听FeatureView的图片是否加载完成，主要监听对offsetTop影响大的组件  
			FeatureViewImageLoad() {
				// 获取TabControl的offsetTop
				// 所有组件都有一个属性$el:用于获取组件的元素
				this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop;
				// console.log(this.tabOffsetTop)
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

	/*使用better-Scroll后这两次吸顶效果都失效*/
	/*.title {
		position: sticky; 
		sticky会在滚动到设置的值时变为fixed，兼容性差，移动端比较适合
		top: 44px;
		z-index: 9;
	}*/
	/*.fixed {
		position: fixed;
		left: 0;
		right: 0;
		top: 44px;
		z-index: 10;
	}*/
	.title2 {
		position: relative;
		left: 0;
		right: 0;
		top: 44px;
		z-index: 10;
		/*margin-top: 44px;*/
	}

	.content {
		height: calc(100% - 100px);
		overflow: hidden;
		margin-top: 45px;
		/*background: red;*/
	}
</style>