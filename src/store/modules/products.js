import productsJson from '../../statics/products.json'

const state = {
  currentProducts: productsJson.products,
  filteredProducts: productsJson.products,
}

const mutations = {
  filterProducts (state, keyword) {
    let regex = new RegExp(keyword, 'gi')
    let filtered = state.currentProducts.filter((product) => {
      return product.name.match(regex)
    })
    state.filteredProducts = filtered
  }
}

const actions = {
  'FILTER_PRODUCT' ({commit, state},keyword) {
    commit('filterProducts', keyword)
  }
}

const getters = {
  getProducts (state, getters, rootState, keyword) {
    return state.filteredProducts
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}