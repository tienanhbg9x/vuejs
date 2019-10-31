const state =  {
  result: 0,
}

const getters = {
  tenResult: state => {
    return state.result*10
  },
  nameResult: state => {
    return state.result + ' name product'
  },
}

const mutations = {
  increment(state, n){
    state.result++
  },
  decrement(state){
    state.result--
  },
}

const actions = {
    increment({ commit }) {
      commit('increment')
    },
    decrementAsync: ({ commit })=>{
      setTimeout(()=>{
        commit('decrement')
      },2000)
    }
}

export default {
  state, getters, mutations, actions
}
