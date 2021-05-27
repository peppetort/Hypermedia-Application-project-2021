<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/products', 'All products'],
        [`/products/area/${data.id}`, `${data.title} products`]
      ]"
      :look="'light'"
    />
    <section class="vertical light">
      <h1>
        <NuxtLink :to="`/areas/${data.id}`">{{ data.title }}</NuxtLink>
        Products
      </h1>
      <p>{{ data.description }}</p>
      <NuxtLink to="/contacts"
        ><button class="strong">Contact us</button></NuxtLink
      >
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
    const { data } = await $axios.get(`api/areas/${id}`)
    data.products = (await $axios.get(`api/products/area/${id}`)).data
    return { data }
  }
}
</script>
