const state = {
  cart: []
}

const mutations = {
  addProductToCart (state, product) {
    state.cart.push(product)
  },
  REMOVE_PRODUCT_FROM_CART (state, index) {
    console.log('borro el elemento', index)
    state.cart.splice(index, 1)
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