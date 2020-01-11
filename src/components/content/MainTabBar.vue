<template>
  <div>    
    <tabBar>
      <tabBarItem path="/Home" >
        <div slot="item-text">首页</div>
      </tabBarItem>
      <tabBarItem path="/about" activeColor="blue">
        <div slot="item-text">分类</div>
      </tabBarItem>
      <tabBarItem path="/Cart" activeColor="green">
        <div slot="item-text">购物车</div>
      </tabBarItem>
      <tabBarItem path="/Mine" activeColor="yellow">
        <div slot="item-text">我的</div>
      </tabBarItem>
    </tabBar>
    
  </div>
</template>

<script>
import tabBar from "components/common/tabbar/tabbar.vue"
import tabBarItem from "components/common/tabbar/Tabs/tabBarItem.vue"
export default {
  name: 'MainTabBar',
  data() {
    return {
      userId: 'lisi'  // 动态路由
    }
  },
  components: {
    tabBar,
    tabBarItem
  }
};
</script>

<style>

</style>
