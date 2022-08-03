app.component('review-form', {
  template:
  /*html*/
  `
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" v-model="name">
  
    <label for="review">Review:</label>
    <textarea name="review" id="review" v-model="review"></textarea>
  
    <label for="rating">Rating:</label>
    <select name="rating" id="rating" v-model.number="rating">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  
    <input type="submit" value="Submit" class="button">
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null) {
        alert("Fill out all the fields");
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      };

      this.$emit('review-submitted', productReview);
      
      this.name = '';
      this.review = '';
      this.rating = null;
    }
  }
});