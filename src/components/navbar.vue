<template>
  <div class="navbar" :class="{'navbar--fixed':stickNavBar}">
    <div class="navbar__item__hamburger">
      <span><i class="fas fa-bars"></i></span>
    </div>
    <div class="navbar__logo">logo</div>
    <div class="navbar__options">
      <div class="option__item">
        <span><i class="fas fa-search"></i></span>
      </div>
      <div class="option__item">
        <span><i class="far fa-heart"></i></span>
      </div>
      <div class="option__item pos-rel" @click="showCart">
        <span><i class="fas fa-shopping-bag"></i></span>
        <span class="cart_qty pos-a">{{cartProducts}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'navbar',

  data () {
    return {
      stickNavBar: false
    }
  },
  methods: {
    setScrollBar () {
      let navbar = document.querySelector('.navbar')
      let navarSize = navbar.offsetHeight
      window.addEventListener('scroll', evt => {
        if (window.pageYOffset > navarSize) {
          this.stickNavBar = true
        } else {
          this.stickNavBar = false
        }
      })
    },
    showCart () {
      this.$store.commit('VIEW_CART')
    }
  },
  computed :{
    cartProducts () {
      return this.$store.getters.getCart.length
    }
  },
  mounted () {
    this.setScrollBar()
  }
}
</script>

<style lang="css" scoped>
.pos-a {
  position: absolute;
}

.pos-rel {
  position: relative;
}
.navbar {
  display: flex;
  padding: 1rem;
  flex-flow: row;
  justify-content: space-between;
  box-shadow: 4px 0px 33px #888888;
}
.navbar--fixed {
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
  background: white;
  position: fixed;
}

.navbar__options {
  display: flex;
  flex-flow: row;
}

.option__item {
  margin: .2rem
}

.cart_qty {
  bottom: 16px;
  left: 11px;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  border: solid 1px;
  background: #FAD55F;
  border-radius: 50%;
  font-size: .8rem;
  font-weight: bold;
}
</style>