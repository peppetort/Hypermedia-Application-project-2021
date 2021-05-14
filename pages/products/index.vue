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
      <div class="l">
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
div.l {
  display: flex;
}
div.links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
  justify-content: space-between;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

div.image img {
  height: auto;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

button {
  text-align: center;
  display: block;
  height: 80px;
  width: 140px;
  margin-top: 10px;
}

@media (min-width: 900px) {
  div.image {
    height: auto;
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
