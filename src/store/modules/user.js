const state = {
  cart: []
}

const mutations = {
  addProductToCart (state, product) {
    state.cart.push(product)
  }
}
const getters = {
  getCart (state, getters, rootState) {
    return state.cart
  }
}

const actions = {
  'ADD_PRODUCT_TO_CART' ({commit, state}, product) {
    commit('addProductToCart', product)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}