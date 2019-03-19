<template>
    <div class="m-header">
      Chicken Music
    </div>
</template>

<script>
    export default {
        name: "Mheader"
    }
</script>

<style lang="less" scoped>
@import url('~style/index.less');
  .m-header{
    .w(375);
    .h(44);
    .l_h(44);
    color:@font-color-header;
    text-align:center;
    font-size:@font-size-m;
    font-weight:400;
  }
</style>
