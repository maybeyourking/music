<template>
    <div class="wrapper">
        <div class="content">
            <ul class="conlist">
                <li v-for="(item,index) in list"
                    :key='index'
                    class="list-item"
                >
                    <img width="100" height="100" :src="item.picUrl">
                    <ol>
                        <li v-for="(group,index) in item.songList"
                            :key="index"
                            class="olist-item"
                        >
                            <span>{{index+1}}</span>
                            <span>{{group.songname}}-{{group.singername}}</span>
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name: "Rank",
        data(){
            return{
                list:[]
            }
        },
        methods:{

        },
        created(){
            //https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&uin=0&needNewCode=1&platform=h5&jsonpCallback=jp1
            this.$jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
            {g_tk:'1928093487',inCharset:'utf-8',outCharset:'utf-8',notice:'0',format:'jsonp',uin:'0',needNewCode:'1',platform:'h5',callbackQuery:'jsonpCallback'})
            .then(json=>{
                // console.log(json)
                this.list = json.data.topList
            })
            .catch(err=>{
                console.log(err)
            })
        },
        mounted(){
            this.scroll = new BScroll('.wrapper')
        }

    }
</script>

<style lang='less' scoped>
@import '~style/index.less';
.wrapper{
    .w(375);
    position: fixed;
    .top(88);
    .bottom(0);
    overflow: hidden;
    .conlist{
        .list-item{
            display: flex;
            list-style: none;
            .h(100);
            .margin(0,20,0,20);
            .padding(20,0,0,0);
            ol{
                flex: 1;
                background:@bg-color-title;
                .h(100);
                .padding(0,20,0,20);
                display: flex;
                flex-direction:column;
                justify-content: center;
                overflow: hidden;
                .olist-item{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    list-style:none;
                    font-size: @font-size-s;
                    color:@font-color-ranklist;
                    .l_h(26);
                }
            }
        }
        
    }
}
</style>
