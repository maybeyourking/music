<template>
    <div>
        <h3>404 Not Found</h3>
        <p>抱歉！您访问的页面未找到！</p>
    </div>
</template>
<script>
export default {
    name:'NotFound',
    mounted(){
        setTimeout(() => {
            this.$router.push({path:'/'})
        }, 2000);
    }
}

</script>
<style lang="less" scoped>
@import '~style/index.less';
h3,p{text-align: center;color: @font-color-tab;.margin(20,0,0,0) }
</style>
