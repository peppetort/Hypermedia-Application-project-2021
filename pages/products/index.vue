<template>
  <main class="container">
    <section class="vertical light">
      <h1>Our Products</h1>
      <p>Descrizione</p>
      <!-- TODO: insert image -->
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
</style>
