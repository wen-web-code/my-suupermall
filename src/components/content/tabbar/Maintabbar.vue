<template>
  <div id="maintabbar">
    <tabbar>
      <tabbaritem path="/home" active>
        <img slot="item-icon" src="~assets/img/tabbar/shouye.png"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/shouye.png"/>
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/shangpin.png"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/shangpin.png"/>
        <div slot="item-text">商品</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/tabbar-gwc.png"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/tabbar-gwc.png"/>
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile"> 
        <img slot="item-icon" src="~assets/img/tabbar/wodedangxuan.png"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/wodedangxuan.png"/>
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from "components/common/tabbar/tabbar.vue";
import tabbaritem from "components/common/tabbar/TabbarItem.vue";
export default {
  name: 'maintabbar',
  components: {
    tabbar,
    tabbaritem
  }
}
</script>
<style scoped>
  
</style>