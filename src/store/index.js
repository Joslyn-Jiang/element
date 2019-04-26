import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state={
    //要设置的全局访问的state对象
    showFooter:true,
    //要设置的初始属性值
    changableNum:0
};

const getters = {
    //实时监听state值的变化（最新状态）
    isShow(state) {
        //承载变化的showFooter的值
        return state.showFooter
    },
    getChangeNum(){
        //承载变化的changableNum的值
        return state.changableNum
    }
}

const mutations = {
    show(state) {
        //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showFooter = true;
    },
    hide(state) {
        state.showFooter = false;
    },
    newNum(state,sum){
        state.changableNum+=sum;
    }
}

const actions = {
    hideFooter(context){
        //自定义触发mutations里函数的方法，context与store实例具有相同方法和属性
        context.commit('hide');
    },
    showFooter(context){
        context.commit('show');
    },
    getNewNum(context,num){
        context.commit('newNum',num)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;