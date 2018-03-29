<template>
  <div>
    <div class="offlist">
    </div>
    <div class="pa cart" :class="{'cart--show': showCart}">
      <div class="cart__list">
        <li class="cart__list__item" v-for="product in userCart">
          <div class="cart-item__img">
            <img class="cart_img" :src="product.image" alt="">
          </div>
          <div class="cart-item-detail">
            <div class="cart-item-detail__title">
              {{product.name}}
            </div>
          </div>
          <div class="cart-item__remove">
            X
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'cart',

  data () {
    return {

    }
  },
  computed: {
    showCart () {
      return this.$store.getters.showCart
    },
    userCart () {
      return this.$store.getters.getCart
    }
  }
}
</script>

<style lang="css" scoped>
  .pa {
    position: absolute;
  }
  .offlist{
    background-color:rgb(255,0,0);
   opacity:0.6; /* Opacidad 60% */
  }
  .cart {
    top:0px;
    background: white;
    list-style: none;
    padding: 1rem;
    background-color: white;
    left: 100%;
    position: fixed;
    z-index: 100;
    transform:translateX(0%);
    transition: all .5s ease;
    opacity: 0;
    height:100%;
    overflow-y: scroll;
  }

  .cart__list__item {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid grey;
    margin: 1rem;
  }
  .cart--show {
    transform: translateX(-100%);
    opacity: 1
  }
  .cart_img {
    height: 100px;
    width: 100px;
  }
</style>