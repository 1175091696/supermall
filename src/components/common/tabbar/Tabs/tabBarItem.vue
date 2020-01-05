<template>
  <div class="tab-bar-item" @click="itemClick">
	<div :style="activeStyle">
		<slot name="item-text"></slot>	
	</div>
	
  </div>
</template>

<script>

export default {
	name: 'home',
	props: {
			path: String,
			activeColor: {
				type: String,
				default: 'red'
			}
		},
	data() {
		return {
			// isActive: false
		}
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path) !== -1
		},
		activeStyle() {
			return this.isActive ? {color: this.activeColor} : {}
		}
	},
	methods: {
		itemClick() {
			this.$router.replace(this.path);
		}
	},
};
</script>

<style>
/*@import url(../assets/css/base.css);*/

#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1)
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

/*.active {
	color: red
}*/

</style>