<template>
  <main class="container">
    <section class="horizontal strong">
      <div class="text">
        <h1>{{ this.title }}</h1>
        <p>{{ this.subtitle }}</p>
        <!-- TODO: add link to Contacts -->
        <a><button class="light">Contact Us</button></a>
      </div>
      <div class="image">
        <!-- TODO: add image dynamically -->
      </div>
    </section>
    <section class="horizontal light">
      <div class="image">
        <!-- TODO: add image dynamically -->
      </div>
      <div class="text">
        <h2>Description</h2>
        <p>{{ this.description }}</p>
      </div>
    </section>
    <section class="vertical strong">
      <h2>Features</h2>
      <p>Solutions that matter for your organization​</p>
      <div class="cards">
        <!-- TODO: generate dynamically -->
        <feature-card :text="'text text text'"></feature-card>
        <feature-card :text="'text text text'"></feature-card>
        <feature-card :text="'text text text'"></feature-card>
      </div>
    </section>
    <section class="vertical light">
      <h2>What product we offer</h2>
      <p>
        "If you don't try this product, you won't become the superhero you were
        meant to be"​
      </p>
      <div class="cards">
        <!-- TODO: generate dynamically -->
        <card-product-preview :text="'Prodotto 1'"></card-product-preview>
        <card-product-preview :text="'Prodotto 2'"></card-product-preview>
        <card-product-preview :text="'Prodotto 3'"></card-product-preview>
        <card-product-preview :text="'Prodotto 4'"></card-product-preview>
      </div>
      <div id="link-products">
        <a href="">See More ></a>
      </div>
    </section>
    <section class="horizontal strong">
      <div class="text">
        <h2>Responsible for {{ this.title }}</h2>
        <p>Description</p>
        <a><button class="light">See More</button></a>
      </div>
      <div class="image">
        <!-- TODO: generate dynamically -->
      </div>
    </section>
  </main>
</template>

<script>
import FeatureCard from '~/components/areas/CardFeauture.vue'
import CardProductPreview from '~/components/areas/CardProductPreview.vue'
export default {
  components: { FeatureCard, CardProductPreview },
  data() {
    return {
      id: '',
      title: '',
      subtitle: '',
      description: ''
    }
  },
  async mounted() {
    const { name } = this.$route.params
    const { data } = await this.$axios.get(`/api/areas/${name}`)
    this.id = data.id
    this.title = data.title
    this.subtitle = data.subtitle
    this.description = data.description
  }
}
</script>

<style scoped>
div.text {
  min-width: 400px;
  width: 50%;
  padding-top: 100px;
  padding-left: 100px;
}

div.image {
  width: 50%;
}

div.cards {
  display: flex;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

#link-products {
  margin-inline: auto;
  width: 1420px;
  margin-top: 80px;
  text-align: right;
}

#link-products a {
  font-size: 35px;
  color: black;
  font-weight: bold;
  margin-right: 100px;
  text-decoration: none;
}

#link-products a:hover {
  color: grey;
}
</style>
