import state from './state'
export default {
    addsonglist(state,params){
        state.playList = params;
    },
    showbigplayer(state,params){
        state.bigplayer = !state.bigplayer
        if( params || params === 0 ){
            state.playIndex = params
        }
        
    },
    changeIndex(state,params){
    //上一曲/下一曲 改变全局index并且边界处理    
        if(params == 'next'){
            state.playIndex >= (state.playList.length-1) ? state.playIndex=0 : state.playIndex++
        }else if( params == 'prev' ){
            state.playIndex <=0 ? state.playIndex=(state.playList.length-1) : state.playIndex--
        }
    }
}