import Vue from 'vue';
import  Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        list: [],
    },
    getters:{},
    mutation:{
        setList(state,list){
            state.list = list;
        },
    },
    actions:{},
    modules:{},
    plugins:[createPersistedState()],

});