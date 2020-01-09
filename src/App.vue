<template>
  <div id="app">
	<MainTabBar></MainTabBar>
	<keep-alive>
		<router-view />
	</keep-alive>
	
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar.vue"
export default {
  name: 'app',
  components: {
   MainTabBar
  }
}
</script>

<style>
@import url(assets/css/base.css);
</style>
