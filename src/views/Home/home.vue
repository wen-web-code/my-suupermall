<template>
  <div id="home">
    <router-view/>
    <navbar class="home-navbar">
      <div slot="center">购物街</div>
    </navbar>
    
  </div>
</template>
<script>
import navbar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'home',
  components: {
    navbar
  }
}
</script>
<style scoped>
  .home-navbar{
    font-size: 24px;
    background-color: pink;
    color: white;
  }
</style>