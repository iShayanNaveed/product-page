<template>
  <div id="app">
    <header id="header">
      <div class="container">
        <div class="cart">
          <div>
            <router-link to="/" class="home">Home</router-link>
            <router-link to="/about" class="about">About</router-link>
          </div>
          <p><i class="fas fa-shopping-cart"></i>{{ cart.length }}</p>
        </div>
      </div>
    </header>
    <ProductPage :member="member" @Addtocart="uptadeCart" />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import ProductPage from './components/ProductPage.vue';
export default {
  // components: { ProductPage },
  name: "App",

  data() {
    return {
      member: true,
      cart: [],
    };
  },
  methods: {
    uptadeCart(id) {
      this.cart.push(id);
    },
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  justify-content: space-between;
}
.home {
  margin-right: 10px;
  text-decoration: none;
  color: black;
}
.about {
  margin-right: 10px;
  text-decoration: none;
  color: black;
}
.about:visited {
  color: rgb(141, 113, 113);
}
.home:visited {
  color: rgb(141, 113, 113);
}
.home:hover {
  color: red;
}
.about:hover {
  color: red;
}
</style>
