<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-03-14 16:18:52
 * @LastEditTime: 2019-10-21 21:03:17
 -->
<template>
  <div id="app">
    <transition name="bounce">
      <router-view/>
    </transition>
  </div>
</template>
<script type="text/babel">
  export default {
  }
</script>
<style scoped>
#app{
  height: 100%;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-out 1s;
}
</style>
