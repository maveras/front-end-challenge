<template>
  <div class="navbar">
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
      <div class="option__item pos-rel">
        <span><i class="fas fa-shopping-bag"></i></span>
        <span class="cart_qty pos-a">1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'navbar',

  data () {
    return {

    }
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
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  border: solid 1px;
  color: white;
  background: #2c3e50;
  border-radius: 50%
}
</style>