import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state={
   count:1
};

const getters = {
    //实时监听state值的变化（最新状态）
    count(state) {
        //承载变化的showFooter的值
        return state.count +=100;
    }
}

const mutations = {
   add(state,n){
       state.count+=n
   },
   reduce(state){
       state.count-=1
   }
}

const actions ={
    addplus(context){
        context.commit('add',10)
    },
    subplus({commit}){
        commit('sub')
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default store;