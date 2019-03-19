import Vue from 'vue'
import Vuex from 'vuex'

import music from './music'//此状态模块为测试（无用）
import play from './play'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        music,
        play
    }
})

export default store