<template>
  <div id="app">
    <navbar></navbar>
    <product v-for="product in products"
    :image="product.image"
    :name="product.name"
    :regular_price="product.regular_price"
    :actual_price="product.actual_price"
    :sizes="product.sizes"
    :on_sale="product.on_sale"
    ></product>
  </div>
</template>

<script>
import productsJson from './statics/products.json'
import navbar from './components/navbar'
import product from './components/product'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    navbar,
    product
  },
  computed : {
    products () {
      return productsJson.products
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.5rem;
}
</style>
