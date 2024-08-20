<template>
  <div>
    <form  class="review-form" @submit.prevent="onSubmit">
      <div class="errorMessage" v-if="errors.length">
        <h3>Please fill the following fields:</h3>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <div class="row">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="row">
        <label for="name">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </div>
      <div class="row">
        <label for="name">Rating:</label>
        <select name="" id="rating" v-model="rating">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="0.5">0.5</option>
        </select>
      </div>
      <div class="row">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  name: "product-review",
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
        };
        eventBus.$emit("review-submited", productReview);
        this.name = null;
        this.review = null;
        this.rating = null;
      } else {
        if (!this.name) this.errors.push("Name Required");
        if (!this.review) this.errors.push("Field Required");
        if (!this.rating) this.errors.push("Field Required");
      }
    },
  },
};
</script>
