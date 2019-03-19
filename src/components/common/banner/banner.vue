<template>
    <swiper v-if="list.length>1" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide 
            v-for="(item,index) in list"
            :key='index'
        >
            <img :src="item.picUrl" class="b-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
</template>
<script>
export default {
    name:'Banner',
    data(){
        return{
            list:[],
            swiperOption: {
                notNextTick: true,
                loop:true,
                pagination: {
                el: '.swiper-pagination',
                clickable :true
                },
                autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
                }
            }
        }
    },
    computed: {
      swiper(){
        return this.$refs.mySwiper.swiper
      }
    },
    created(){
                                                                           // g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&jsonpCallback=jp1
        // https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1&jsonpCallback=jp0
        this.$jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
       {g_tk:'1928093487',inCharset:'utf-8',outCharset:'utf-8',notice:'0',format:'jsonp',platform:'h5',uin:'0',needNewCode:'1',callbackQuery: 'jsonpCallback'})
       .then(json=>{
        //    console.log(json.data.slider)
           
        //    this.$nextTick(()=>{
               this.list = json.data.slider
        //    })
       })
       .catch(err=>{
           console.log(err)
       })
    },
    mounted(){
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        //    setTimeout(()=>{
        //          console.log('this is current swiper instance object', this.swiper)
        //          // this.swiper.slideTo(3, 1000, false)
        //     },500)
            
            
            
    }
}
</script>
<style lang='less'>
@import '~style/index.less';
.swiper-container{
    .w(375);
    .h(150);
    .b-img{
       .w(375);
       .h(150) 
    }
    .swiper-pagination{
        .swiper-pagination-bullet{
            background: #fff;
        }
        .swiper-pagination-bullet-active{
            width: 20px;
            border-radius: 5px;
            opacity: 0.8;
        }
    }
    
}

</style>

