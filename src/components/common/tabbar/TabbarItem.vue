<template>
  
    <div class="tab-bar-item" @click="itemclick">
      <div v-if="!isActive"><slot name='item-icon'></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :class="{active: isActive}"><slot name='item-text'></slot></div>
    </div>
  
</template>
<script>
export default {
  name: 'TabbarItem',
  data() {
    return {
      // isActive: true
    }
  },
  props: {
    path: String
  },
  methods: {
    itemclick () {
      let boo = this.$route.path.indexOf(this.path) !== -1;
      if (!boo){
        this.$router.replace(this.path);
      }
    }
  },
 computed: {
   isActive () {
     return this.$route.path.indexOf(this.path) !== -1
   }
 }
}
</script>
<style scoped>
  .tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
.tab-bar-item .active{
  color: red;
}
</style>