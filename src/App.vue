<template>
  <div id="app" class="pr">
    <navbar></navbar>
    <product v-for="product in products"
    :image="product.image"
    :name="product.name"
    :regular_price="product.regular_price"
    :actual_price="product.actual_price"
    :sizes="product.sizes"
    :on_sale="product.on_sale"
    :product="product"
    ></product>
    <cart></cart>

  </div>
</template>

<script>
import navbar from './components/navbar'
import product from './components/product'
import cart from './components/cart'

export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    navbar,
    product,
    cart
  },
  computed : {
    products () {
      return this.$store.getters.getProducts
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

body {
  margin: 0;
  padding: 0;
}
.pa {
  position: absolute;
}

.pr {
  position: relative;
}


</style>
