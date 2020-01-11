//混入封装
import {debounce} from "./utils.js";
import BackTop from 'components/common/backTop/BackTop';
import {BACK_POSITION} from "common/const"

export const itemListenerMixin = {
	mounted() {
		let newRefresh = debounce(this.$refs.scroll.refresh, 1000);
		this.itemListener = () => {
			newRefresh()
		}
		this.$bus.$on('itemImageLoad', this.itemListener)
		// console.log('11')
	}
}

export const backTopMixin = {
	components: {
		BackTop
	},
	data() {
		return {
			isShowBackTop: false
		}
	},
	methods: {
		backClick() {
			this.$refs.scroll.scrollTo(0,0,1000)
		},
		listenShowBackTop(position) {
			this.isShowBackTop = -position.y > BACK_POSITION
		}
	}
}