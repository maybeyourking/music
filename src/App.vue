<template>
  <div id="app" v-on:touchmove.prevent>
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{

  }
}
</script>

<style lang="less">
@import "~style/index.less";
</style>
