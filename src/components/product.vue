<template>
  <div class="product">
    <div class="product__pic">
      <img class="product__pic__img" :src="image" alt="">
      <div class="product__avaliability">
        <span>Not avaliable</span>
      </div>
    </div>
    <div class="product__name">
      {{name}}
    </div>
    <div class="price">
      <div class="price__original">
        <span>1</span>
      </div>
      <div class="price__discount">
        1000
      </div>
    </div>
    <div class="product__sizes">
      <div class="size">
        <span>Sizes:</span>
      </div>
      <div class="size__item">
        <span>xs</span>
      </div>
      <div class="size__item">
        <span>xs</span>
      </div>
      <div class="size__item">
        <span>xs</span>
      </div>
      <div class="size__item">
        <span>xs</span>
      </div>
    </div>
    <div class="product__action">
      <button>Add to cart</button>
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
  props: ['name',
          'image',
          'regular_price',
          'actual_price',
          'sizes','on_sale']
}
</script>


<style lang="css" scoped>
.product {
  padding: 1rem;
  box-shadow: 5px 10px 10px #888888;
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
  justify-content: flex-start;
}

.price__original {
  color: #B9B9B9
}
.product__sizes {
  margin: .5rem;
  display: flex;
  justify-content: space-between;
}
.size {
  font-weight: bold;
}

</style>