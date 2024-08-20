<!-- test template
<template>
  <div>
    <h1 class="heading1">From the mancufater</h1>

    <section class="about">
      <div class="img-div">
        <h2 class="brand">Nike Air Force:</h2>
        <img :src="image" />
        <div class="variants">
          <span
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            v-on:mouseover="uptadeImg(index)"
            class="colorBox"
            :style="{ backgroundColor: variant.variantColor }"
          >
          </span>
        </div>
      </div>
      <div class="list">
        <h2>Description</h2>
        <li>Package Dimensions 13.58 x 8.15 x 5 inches;</li>
        <li>1.1 Pounds Item model number FD7039 Date First Available May 10</li>
        <li>2023 Manufacturer</li>
        <li>NIKE ASIN :</li>
        <li>Best Sellers Rank: #18,567 in Clothing</li>
        <li>Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry)</li>
        <li>#10 in Men's Basketball Shoes</li>
        <li>Customer Reviews: 4.6 4.6 out of 5 stars</li>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedVariant: 0,
      variants: [
        {
          variantId: 0,
          variantColor: "black",
          variantImg: require("@/assets/images/1.png"),
          variantQuantity: 50,
        },
        {
          variantId: 1,
          variantColor: "white",
          variantImg: require("@/assets/images/2.png"),
          variantQuantity: 5,
        },
        {
          variantId: 2,
          variantColor: "red",
          variantImg: require("@/assets/images/3.png"),
          variantQuantity: 0,
        },
      ],
    };
  },
  methods: {
    uptadeImg(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].variantImg;
    },
  },
};
</script>
<style scoped>
img {
  width: 50%;
  margin-left: 22rem;
}
.about {
  /* display: flex; */
  padding-right: 11rem;
  padding-left: 11rem;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 60px;
  background: #f4f4f4;
}
/* .brand {
  margin-bottom: 5px;
} */

.img-div {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* margin-left: 3rem; */
}
.list {
  width: 80%;

  margin-top: 2rem;
}
.variants {
  display: flex;
}
</style> -->
<template>
  <div>
    <div class="container">
      <div class="product">
        <div class="content">
          <h1>{{ title }}</h1>
          <div class="stockInfo">
            <span class="green" v-if="inventory > 10">In stock</span>
            <span class="amber" v-else-if="inventory <= 10 && inventory > 0"
              >Only few left in stock</span
            >
            <span class="red" v-else>Out of stock</span>
          </div>

          <br />
          <div class="variants">
            <span
              v-for="(variant, index) in variants"
              :key="variant.variantId"
              v-on:mouseover="uptadeImg(index)"
              class="colorBox"
              :style="{ backgroundColor: variant.variantColor }"
            >
            </span>
          </div>
        </div>
        <div class="image">
          <img v-bind:src="productImg" alt="" />
        </div>
      </div>
      <div class="list">
        <h2 class="heading">Description</h2>
        <li>Package Dimensions 13.58 x 8.15 x 5 inches;</li>
        <li>1.1 Pounds Item model number FD7039 Date First Available May 10</li>
        <li>2023 Manufacturer</li>
        <li>NIKE ASIN :</li>
        <li>Best Sellers Rank: #18,567 in Clothing</li>
        <li>Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry)</li>
        <li>#10 in Men's Basketball Shoes</li>
        <li>Customer Reviews: 4.6 4.6 out of 5 stars</li>
        <router-link to="/" class="home">Back To Home</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import { eventBus } from "@/main";
// import ProductReview from "./ProductReview.vue";
export default {
  // components: { ProductTab },
  name: "AboutUs",
  props: {
    member: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      brand: "Nike",
      productpage: " Air Force ",
      selectedVariant: 0,
      // productImg: require("@/assets/images/nike.png"),
      // inventory: 100,
      cart: 0,
      features: ["Durable leather", "Secure lacs", "Paded ankle collar"],
      variants: [
        {
          variantId: 1,
          variantColor: "black",
          variantImg: require("@/assets/images/black.jpg"),
          variantQuantity: 50,
        },
        {
          variantId: 2,
          variantColor: "white",
          variantImg: require("@/assets/images/white.jpg"),
          variantQuantity: 5,
        },
        {
          variantId: 3,
          variantColor: "red",
          variantImg: require("@/assets/images/red.jpg"),
          variantQuantity: 0,
        },
      ],
    };
  },
  methods: {
    uptadeImg(index) {
      this.selectedVariant = index;
      console.log(index);
    },
    // addReview(productReview) {
    //   this.reviews.push(productReview);
    // },
  },
  computed: {
    title() {
      return this.brand + " " + this.productpage;
    },
    productImg() {
      return this.variants[this.selectedVariant].variantImg;
    },
    inventory() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
  },
  // mounted() {
  //   eventBus.$on("review-submited", (productReview) => {
  //     this.reviews.push(productReview);
  //   });
  // },
};
</script>

<style scoped>
.heading {
  text-align: center;
}
.image {
  width: 40%;
  float: left;
  margin-left: 28rem;
}
.home {
  background: #2985ff;
  color: #fff;
  border: 0;
  font: 16px / 1.4 "Merriweather", serif;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  transition: opacity 0.3s linear;
  text-decoration: none;
  margin-top: 10px;
}
</style>
