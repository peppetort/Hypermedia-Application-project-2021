<template>
  <main class="container">
    <page-intro
      :title="'OUR PRODUCTS'"
      :subtitle="'Want some help finding products that fit your needs? We can provide your organization with solutions for everything from networking and data center to collaboration and security. Find the options best suited to your business needs.'"
      :video="'/products/products.mp4'"
      :dimension="'small'"
    />
    <section class="vertical strong">
      <h2>Select your Area</h2>
      <div class="cards">
        <card-preview
          v-for="area in data.areas"
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
import PageIntro from '~/components/PageIntro.vue'
export default {
  components: { CardPreview, PageIntro },
  async asyncData({ $axios }) {
    const areas = (await $axios.get('/api/areas')).data
    const data = { areas }
    return { data }
  }
}
</script>
