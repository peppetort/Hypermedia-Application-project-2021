<template>
  <main class="container">
    <section class="vertical light">
      <h1>Our Products</h1>
      <div class="description">
        <p>
          Want some help finding products that fit your needs? We can provide
          your organization with solutions for everything from networking and
          data center to collaboration and security. Find the options best
          suited to your business needs.
        </p>
      </div>
      <div class="image">
        <img
          loading="lazy"
          src="/products/product.webp"
          alt="PC showning product example"
        />
      </div>
    </section>
    <section class="vertical strong">
      <h2>Select your Area</h2>
      <div class="cards">
        <card-preview
          v-for="area in data"
          :key="area.id"
          :title="area.title"
          :image="`data:image/png;base64,${area.main_image}`"
          :alt="`Image of ${area.title}`"
          :link="`/areas/${area.id}`"
        ></card-preview>
      </div>
    </section>
  </main>
</template>

<script>
import CardPreview from '~/components/CardPreview.vue'
export default {
  components: { CardPreview },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/areas')
    return { data }
  }
}
</script>

<style scoped>
div.image img {
  max-width: 60%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
