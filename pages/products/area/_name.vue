<template>
  <main class="container">
    <section class="horizontal light">
      <div class="text">
        <h1>{{ area.title }} Products</h1>
        <p>{{ area.description }}</p>
        <NuxtLink to="/contacts"
          ><button class="strong">Contact us</button></NuxtLink
        >
      </div>
    </section>
    <section class="horizontal light">
      <div class="cards">
        <product-preview
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :id="product.id"
        ></product-preview>
      </div>
    </section>
  </main>
</template>

<script>
import ProductPreview from '~/components/areas/ProductPreview.vue'
export default {
  components: { ProductPreview },
  data() {
    return {
      area: '',
      products: ''
    }
  },
  async mounted() {
    const { name } = this.$route.params
    const id = 0
    const { data } = await this.$axios.get(`api/products/area/${id}`)
    this.area = data.area
    this.products = data.products
  }
}
</script>

<style scoped>
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
