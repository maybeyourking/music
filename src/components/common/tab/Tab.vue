<template>
    <div class="tab">
      <router-link v-for="(item,index) in tablist"
                  :key="index"
                   :to="item.path"
                   tag="div"
                   active-class="selected"
      >
        <span class="item">{{item.text}}</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        data(){
          return{
            tablist:[
              {path:'recommend',name:'recommend',text:'推荐'},
              {path:'singer',name:'singer',text:'歌手'},
              {path:'rank',name:'rank',text:'排行'},
              {path:'search',name:'search',text:'搜索'},
              // {path:'/detail/333/444',name:'detail',text:'详情'}
            ]
          }
        }
    }
</script>

<style lang="less" scoped>
  @import "~style/index.less";
  .tab{
    display: flex;
    .w(375);
    .h(44);
    div{
      color:@font-color-tab;
      font-size: @font-size-ms;
      flex:1;
      .l_h(44);
      text-align:center;
      .item{
        .padding(0,0,5,0)
      }
    }
    .selected{
      color:@font-color-header;
      .item{
        border-bottom:2px solid @font-color-header;
      }
    }
  }
</style>
