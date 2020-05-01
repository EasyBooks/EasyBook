import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 初始化全局的一个变量
    token:"",
    userInfo:{},
    testTxt: {"tips":"这是一条vuex的数据","id":1}
  }
})
export default store
