<template>
<div>
    <div class="wrapper" id="singgerwrapper">
        <dl class="content">
            <dt v-for="(item,index) in list"
                :key="index"
            >
                <p :ref="item.title">{{item.title}}</p>
                <ul>
                    <li v-for="(group,index) in item.item"
                        :key='index'
                        @click="gotosingerDetail(group)"
                    >
                        <img v-lazy="group.avator" width="50" height="50">
                        <span>{{group.name}}</span>
                    </li>
                </ul>
            </dt>
        </dl>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
        <ol @touchstart='touchclick'
            @touchmove='touchmove'
        >
            <li v-for="(item,index) in silder"
                :key="index"
                :class="index==classIndex?'selected':''"
            >
            {{item}}
            </li>
        </ol>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name: "Singer",
        data(){
            return{
                list:[],
                classIndex:0
            }
        },
        computed:{
            silder(){
                return this.list.map((item)=>{
                    if( item.title ==='热门' ){
                        return '热'
                    }else{
                        return item.title
                    }
                })
            },
            plist(){
                var arr=[];
                for( var i in this.$refs  ){
                    arr.push(this.$refs[i][0])
                }
                var brr =[];
                for( var i = 0 ; i < arr.length ; i++ ){
                    brr.push(arr[i].offsetTop)
                }
                return brr;
            }
        },
        methods:{
            gotosingerDetail(data){
                // console.log(data)
                this.$router.push({name:'singerDetail',params:data})
            },
            changeIndex(e){
                var prr = this.plist;
                var moveY = parseInt(Math.abs(e.y));
                // console.log(parseInt(Math.abs(e.y)));
                for(var i in prr){
                    if( moveY >= prr[i] ){
                        this.classIndex = i
                    }
                }
            },
            touchclick(e){
                // console.log(e)
                // console.log(this.$refs)
                // console.log(this.$refs["A"][0])
                let index = this.silder.indexOf(e.target.innerText);
                // console.log(index)
                this.classIndex = index;
                if(e.target.innerText.length <=1){
                    let src = e.target.innerText == '热' ? '热门' :  e.target.innerText;
                    let element = this.$refs[src][0];
                    this.scroll.scrollToElement(element);
                }
                
            },
            touchmove(e){
                // console.log(e)
                let moveX = e.touches[0].clientX;//获取移动时的clientX
                let moveY = e.touches[0].clientY;//获取移动时的clientY

                let getElement = document.elementFromPoint ( moveX , moveY )//用此方法可以获取移动时的dom元素

                if( getElement ){
                    let src = getElement.innerText == '热' ? '热门' :  getElement.innerText;
                    // console.log(src)
                    if( src.length <=1 || src ==='热门' ){
                        let element = this.$refs[src][0];
                        this.scroll.scrollToElement(element);

                        let index = this.silder.indexOf(src);
                        src =='热门'?this.classIndex = 0 : this.classIndex = index;
                        
                    }
                }
                
                
            },
            normaldata(data){
                let lists = {
                    'hot':{
                        'title':'热门',
                        item:[]
                    }
                }
                // https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000
                for( var i = 0 ; i < data.length ; i ++ ){
                    let imgsrc = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${data[i].Fsinger_mid}.jpg?max_age=2592000`
                    if(i < 10){
                        lists.hot.item.push({
                            name:data[i].Fsinger_name,
                            id:data[i].Fsinger_id,
                            avator: imgsrc,
                            mid:data[i].Fsinger_mid
                        })
                    }
                    if(!lists[data[i].Findex]){
                        lists[data[i].Findex] = {
                            title:data[i].Findex,
                            item:[{
                                name:data[i].Fsinger_name,
                                id:data[i].Fsinger_id,
                                avator: imgsrc,
                                mid:data[i].Fsinger_mid
                            }]
                        }
                    }else{
                        lists[data[i].Findex].item.push({
                            name:data[i].Fsinger_name,
                            id:data[i].Fsinger_id,
                            avator: imgsrc,
                            mid:data[i].Fsinger_mid
                        })
                    }
                }
                let hot = []
                let arr = []
                for( var i in lists ){
                    // console.log(i)
                    if(i === 'hot'){
                        hot.push(lists[i])
                    }else{
                        if(i.match(/[a-zA-Z]/)){
                        arr.push(lists[i])
                        }
                    }
                    
                }
                // hot[0].title = '热'
                // console.log(hot,arr)
                arr.sort((a,b)=>{
                    return a.title.charCodeAt(0)-b.title.charCodeAt(0);
                })

                lists = hot.concat(arr)
                this.list = lists
            }
        },
        // g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&jsonpCallback=jp1
        created(){
            //用jsonp请求数据
            this.$jsonp('https://c.y.qq.com/v8/fcg-bin/v8.fcg',
            {g_tk:'1928093487',inCharset:'utf-8',outCharset:'utf-8',notice:'0',format:'jsonp',channel:'singer',page:'list',key:'all_all_all',pagesize:'100',pagenum:'1',hostUin:'0',needNewCode:'0',platform:'yqq',callbackQuery: 'jsonpCallback'})
            .then(json=>{
                // console.log(json);
                this.normaldata(json.data.list);
                // console.log(this.list)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        mounted(){
            this.scroll = new BScroll('#singgerwrapper',{
                probeType:3,
                click:true
            })
            this.scroll.on('scroll',this.changeIndex)
        }
    }
</script>

<style lang='less' scoped>
@import '~style/index.less';
.selected{
    color:@font-color-header;
}
.wrapper{
    .w(375);
    position:fixed;
    .top(88);
    .left(0);
    .right(0);
    .bottom(0);
    overflow: hidden;
    dl{
        dt{
            .margin(0,0,20,0);
            p{
                .h(30);
                .l_h(30);
                .padding(0,0,0,20);
                font-size: @font-size-s;
                color:@font-color-tab;
                background:@bg-color-title;
            }
            ul{
                li{
                    display: flex;
                    align-items: center;
                    .padding(20,0,0,30);
                    img{
                        border-radius: 50%;
                    }
                    span{
                        .margin(0,0,0,20);
                        font-size: @font-size-ms;
                        color:@font-color-tab;  
                        }
                    }
                }
            }
        }
    ol{
        .w(20);
        position:fixed;
        right:0;
        top:50%;
        transform: translateY(-40%);
        list-style: none;
        text-align: center;
        border-radius:10px;
        font-size: @font-size-s;
        background:@bg-color-cebian;
        color:@font-color-tab;
        z-index:0;
        .padding(20,0,20,0);
        li{
            .padding(0,2,2,0)
        }
    }
    
   
}
</style>
