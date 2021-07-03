import { login } from '@/api/oauth'
import { setToken,getToken } from '@/utils/auth'
//本module用户用户状态管理 vuex实现

//状态定义
const getDefaultState = () => {
    return {
      token: getToken(),
      name: '',
      avatar: '',
      roles: [],
      router:'',
    }
}
const state =getDefaultState();
//定义状态修改mutations
const mutations={
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}

//定义actions 可以是异步操作
const actions ={
    Login({ commit }, user) {
         const username = user.username.trim() 
         const password = user.password.trim() 
         return new Promise((resolve, reject) => {
           var params = new URLSearchParams()
             params.append('username', username)
             params.append('password', password)
           login(params).then(response => {
             const { data } = response
             commit('SET_TOKEN', data.access_token) //调用mutation设置token，存入store
             setToken(data.access_token)  //cookie设置token
             resolve()
           }).catch(error => {
             reject(error)
           })
         })
    }
}


export default {
    namespaced: true,//使用命名空间
    state,
    mutations,
    actions
}