<template>
    <div>
        <Mheader></Mheader>
        <Tab></Tab>
        <!-- <keep-alive> -->
        <router-view/>
        <!-- </keep-alive> -->
        <play></play> 
    </div>
</template>
<script>
  import Mheader from '@/components/common/m-header/Mheader'
  import Tab from '@/components/common/tab/Tab'
  import play from "@/components/common/play/play"
export default {
    name:'Home',
    components:{
    Mheader,
    Tab,
    play
  }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
</style>

