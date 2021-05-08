<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/products', 'All products'],
        [`/products/area/${this.area_id}`, `${this.area_title} products`]
      ]"
      :look="'light'"
    />
    <section class="horizontal light">
      <div class="text">
        <h1>
          <NuxtLink :to="`/areas/${area_id}`">{{ area_title }}</NuxtLink>
          Products
        </h1>
        <p>{{ area_description }}</p>
        <NuxtLink to="/contacts"
          ><button class="strong">Contact us</button></NuxtLink
        >
      </div>
    </section>
    <section class="vertical light">
      <div class="cards">
        <card-product-preview
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :id="product.id"
        ></card-product-preview>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import CardProductPreview from '~/components/CardProductPreview.vue'
export default {
  components: { NavBar, CardProductPreview },
  data() {
    return {
      area_id: '',
      area_title: '',
      area_subtitle: '',
      area_description: '',
      products: ''
    }
  },
  async mounted() {
    console.log('ciao')
    const { id } = this.$route.params
    const { data } = await this.$axios.get(`api/areas/${id}`)
    this.area_id = data.id
    this.area_title = data.title
    this.area_subtitle = data.subtitle
    this.area_description = data.description
    this.products = (await this.$axios.get(`api/products/area/${data.id}`)).data
  }
}
</script>

<style scoped>
.container {
  justify-content: center;
  max-width: 100%;
  overflow-x: hidden;
}

.text {
  margin-block: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.cards {
  display: grid;
  padding-left: 5%;
  padding-right: 5%;
  grid-gap: 5%;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  justify-content: center;
}

p {
  margin-block: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 50%;
}

@media (min-width: 200px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1200px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1500px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
