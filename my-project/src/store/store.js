import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store =new Vuex.Store({
  state:{
    storeList:[]
  },
  mutations:{
    initStoreList(state,list){
      // state.storeList=list;
      sessionStorage.setItem('list',JSON.stringify(list));
      state.storeList=JSON.parse(sessionStorage.getItem('list'));
    }
  }
})

export default store;
