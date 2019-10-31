import Vue from 'vue'
import Vuex from 'vuex'
import Result from './modules/Result'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      value: ""
    },
    getters,
    mutations,
    actions,
    modules: {
      Result
    }
});
