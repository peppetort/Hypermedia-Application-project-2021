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
  padding: 5%;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, auto);
}

p {
  margin-block: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 50%;
}
</style>
