import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import app from './modules/app'
import settings from './modules/settings'
import permission from './modules/permission' //导入permission
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        app,
        user,
        settings,
        permission
    },
    getters
})

export default store