const state = {
  showCart: false
}

const mutations = {
  'VIEW_CART' (state, value) {
    state.showCart = !state.showCart
  }
}

const getters = {
  showCart (state, getters, rootState) {
    return state.showCart
  }
}

export default {
  state,
  mutations,
  getters
}