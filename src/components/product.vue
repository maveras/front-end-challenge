<template>
  <div class="product">
    <div class="product__pic pr" v-if="image !== '' ">
      <img class="product__pic__img" :src="image" alt="">
      <div class="product__avaliability" v-if="on_sale">
        <span class="not-avaliable-product pa">Not avaliable</span>
      </div>
    </div>
    <div class="product__name">
      {{name}}
    </div>
    <div class="price">
      <div class="price__original" v-if="!samePrice">
        <span>{{regular_price}}</span>
      </div>
      <div class="price__discount">
        {{actual_price}}
      </div>
    </div>
    <div class="product__sizes">
      <div class="size">
        <span>Sizes:</span>
      </div>
      <div class="size__item" v-for="size in sizes">
        <span :class="{'not-avaliable': !avaliableSize(size)}">{{size.size}}</span>
      </div>
    </div>
    <div class="product__action" v-if="!on_sale">
      <button class="btn btn--add" @click="addProductToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'product',

  data () {
    return {

    }
  },
  methods: {
    avaliableSize (size) {
      return size.available
    },
    addProductToCart(product) {
      this.$store.dispatch('ADD_PRODUCT_TO_CART', product)
    }
  },
  computed: {
    samePrice () {
      return this.actual_price === this.regular_price
    }
  },
  props: ['name',
          'image',
          'regular_price',
          'actual_price',
          'sizes',
          'on_sale',
          'product']
}
</script>


<style lang="css" scoped>
.pr {
  position: relative;
}
.pa{
  position: absolute;
}
.product {
  padding: 1rem;
  box-shadow: 5px 10px 15px #888888;
  margin: .5rem;

}
.product__pic__img {
  width: 100%
}
.product__name {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  margin: .5rem
}
.price {
  margin: .5rem;
  display: flex;
  justify-content: space-around;

}

.price__original {
  color: #B9B9B9;
  margin-left: 1rem;
  text-decoration: line-through;
}
.product__sizes {
  margin: .5rem;
  display: flex;
  justify-content: space-between;
}
.size {
  font-weight: bold;
}
.not-avaliable {
  text-decoration: line-through;
}
.product__action {
  padding: 1rem
}
.not-avaliable-product {
  transform: skewY(-20deg);
  left: 0px;
  background: #F9D45E;
  bottom: 7rem;
  width: 100%;
}
.btn--add {
  padding: 1.5rem;
  background: #FAD55F;
  color: white;
  border-style: none;
  font-size: 1rem;
  color: #2F3E4E;
  font-weight: bold;
  transition: all 1s ease;
  border-radius: 12px;
}
.btn--add:hover{
  background: #FAD55F;
  cursor: pointer;
}
</style>