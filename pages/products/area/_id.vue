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
      <div class="cards">
        <card-product-preview
          v-for="product in data.products"
          :key="product.id"
          :title="product.title"
          :id="product.id"
        ></card-product-preview>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/TheNavBar.vue'
import CardProductPreview from '~/components/CardProductPreview.vue'
export default {
  components: { NavBar, CardProductPreview },
  async asyncData({ $axios, params }) {
    const { id } = params
    const { data } = await $axios.get(`api/areas/${id}`)
    data.products = (await $axios.get(`api/products/area/${id}`)).data
    return { data }
  }
}
</script>

<style scoped>
div.cards {
  display: grid;
  padding-left: 5%;
  padding-right: 5%;
  grid-gap: 5%;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  justify-content: center;
}

@media (min-width: 200px) {
  div.cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 600px) {
  div.cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1200px) {
  div.cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1500px) {
  div.cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
