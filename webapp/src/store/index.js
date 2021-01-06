import Vue from 'vue'
import Vuex from 'vuex'
import chats from '../master/chats.js'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        currentChatSent: null,
        chatButtonOptions: [],
        nextChat:null
    },
    mutations:{
        setCurrentChatSent(state,payload) {
            state.currentChatSent = payload
        }
    },
    actions:{
        
    }
})

