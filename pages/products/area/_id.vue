<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/products', 'Products'],
        [`/products/area/${data.area.id}`, `${data.area.title} products`]
      ]"
      :look="'light'"
    />
    <section class="vertical light">
      <h1>
        <NuxtLink :to="`/areas/${data.area.id}`">{{
          data.area.title
        }}</NuxtLink>
        Products
      </h1>
      <div class="description">
        <p>{{ data.area.description }}</p>
      </div>
    </section>
    <section class="vertical light">
      <div class="grid">
        <card-preview
          v-for="product in data.products"
          :key="product.id"
          :title="product.title"
          :image="`data:image/png;base64,${product.image}`"
          :alt="`Image of ${product.title}`"
          :link="`/products/${product.id}`"
        ></card-preview>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/TheNavBar.vue'
import CardPreview from '~/components/CardPreview.vue'
export default {
  components: { NavBar, CardPreview },
  async asyncData({ $axios, params }) {
    const { id } = params
    const area = (await $axios.get(`api/areas/${id}`)).data
    const products = (await $axios.get(`api/products/area/${id}`)).data
    const data = { area, products }
    return { data }
  }
}
</script>
