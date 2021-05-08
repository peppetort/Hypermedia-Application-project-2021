<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/areas', 'All areas'],
        [`/areas/${this.id}`, `${this.title}`]
      ]"
      :look="'strong'"
    />
    <section class="horizontal strong">
      <div class="text">
        <h1>{{ this.title }}</h1>
        <p>{{ this.subtitle }}</p>
        <NuxtLink to="/contacts"
          ><button class="light">Contact Us</button></NuxtLink
        >
      </div>
      <div class="image">
        <img :src="`data:image/png;base64,` + this.main_image" />
      </div>
    </section>
    <section class="horizontal light">
      <div class="image">
        <img :src="`data:image/png;base64,` + this.second_image" />
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
        <feature-card
          v-for="feature in this.features"
          :key="feature.id"
          :title="feature.title"
          :text="feature.description"
          :image="feature.image"
        />
      </div>
    </section>
    <section class="vertical light">
      <h2>What product we offer</h2>
      <p>
        "If you don't try this product, you won't become the superhero you were
        meant to be"​
      </p>
      <div class="cards">
        <card-product-preview
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :id="product.id"
        />
      </div>
      <div id="link-products">
        <NuxtLink :to="`/products/area/${this.id}`">See More ></NuxtLink>
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
import NavBar from '~/components/NavBar.vue'
import FeatureCard from '~/components/CardFeauture.vue'
import CardProductPreview from '~/components/CardProductPreview.vue'
export default {
  components: { NavBar, FeatureCard, CardProductPreview },
  data() {
    return {
      id: '',
      title: '',
      subtitle: '',
      description: '',
      main_image: '',
      second_image: '',
      features: '',
      products: ''
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const { data } = await this.$axios.get(`/api/areas/${id}`)
    this.id = data.id
    this.title = data.title
    this.subtitle = data.subtitle
    this.description = data.description
    this.main_image = data.main_image
    this.second_image = data.second_image
    this.features = (
      await this.$axios.get(`/api/areas/features/${data.id}`)
    ).data
    this.products = (
      await this.$axios.get(`api/products/area/${data.id}`)
    ).data.slice(0, 4)
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

div.image img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  font-weight: bold;
  margin-right: 100px;
  text-decoration: none;
}
</style>
