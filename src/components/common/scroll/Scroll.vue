<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'Scroll',
		data() {
			return {
				scroll: null
			}
		},
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			// 创建scroll对象
			this.scroll = new BScroll(this.$refs.wrapper, {
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			});
			// 监听滚动位置
			this.scroll.on('scroll', (position) => {
				// console.log(position)
				this.$emit('scroll', position)
			});
			// 监听上啦事件
			this.scroll.on('pullingUp', () => {
				// console.log('2')
				this.$emit('pullingUp');
				setTimeout(() => {
					this.scroll.finishPullUp()
				},2000)
			})
		},
		methods: {
			scrollTo(x, y, time = 300) {
				this.scroll.scrollTo(x, y, time)
			}
		}
	};
</script>

<style scoped>
	
</style>