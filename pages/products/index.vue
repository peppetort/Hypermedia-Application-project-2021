<template>
  <main class="container">
    <section class="vertical light">
      <h1>Our Products</h1>
      <p>
        Want some help finding products that fit your needs? We can provide your
        organization with solutions for everything from networking and data
        center to collaboration and security. Find the options best suited to
        your business needs.
      </p>
      <div class="image">
        <img src="~/assets/products/product.webp" />
      </div>
    </section>
    <section class="vertical light">
      <h2>Select your Area</h2>
      <div class="links">
        <NuxtLink
          v-for="area in data"
          :key="area.id"
          :to="`products/area/${area.id}`"
          ><button class="strong">
            {{ area.title }}
          </button></NuxtLink
        >
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/areas')
    return { data }
  }
}
</script>

<style scoped>
div.links {
  display: flex;
  width: 600px;
  justify-content: space-between;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

div.image {
  width: 100%;
  max-height: 300px;
}

div.image img {
  max-width: 100%;
  height: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
