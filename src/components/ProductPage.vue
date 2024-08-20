<template>
  <div>
    <div class="container">
      <div class="product">
        <div class="image">
          <img v-bind:src="productImg" alt="" />
        </div>
        <div class="content">
          <h1>{{ title }}</h1>
          <div class="stockInfo">
            <span class="green" v-if="inventory > 10">In stock</span>
            <span class="amber" v-else-if="inventory <= 10 && inventory > 0"
              >Only few left in stock</span
            >
            <span class="red" v-else>Out of stock</span>
          </div>
          <ul class="features">
            <li v-for="feature in features" :key="feature.id">{{ feature }}</li>
          </ul>
          <div class="ship">Shipping:{{ shipping }}</div>
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

          <div class="add">
            <button
              v-on:click="addtocart"
              :disabled="inventory <= 0"
              :class="{ disabledState: inventory <= 0 }"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <product-tab :reviews="reviews"></product-tab>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import ProductTab from "./ProductTab.vue";
// import ProductReview from "./ProductReview.vue";
export default {
  components: { ProductTab },
  name: "ProductPage",
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
      reviews: [],
    };
  },
  methods: {
    addtocart() {
      this.$emit("Addtocart", this.variants[this.selectedVariant].variantId);
    },
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
    shipping() {
      if (this.member === true) {
        return "Free";
      }
      return "$" + 2.99;
    },
  },
  mounted() {
    eventBus.$on("review-submited", (productReview) => {
      this.reviews.push(productReview);
    });
  },
};
</script>
