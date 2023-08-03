import Vue from 'vue'
import Vuex from 'vuex'
import playMusic from './modules/playMusic'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        playMusic
    }
})

export default store