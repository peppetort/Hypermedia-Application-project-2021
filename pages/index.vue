<template>
  <main class="container">
    <section class="vertical home">
      <div class="image">
        <img loading="lazy" src="/logo-long.svg" alt="Company logo" />
      </div>
      <div class="slogan">
        <h3>"Between hope and possible, there’s a bridge"</h3>
      </div>
    </section>
    <section class="vertical strong">
      <h2>Areas</h2>
      <div class="cards">
        <card-preview
          v-for="area in data"
          :key="area.id"
          :title="area.title"
          :image="`data:image/png;base64,${area.main_image}`"
          :alt="`Image of ${area.title}`"
          :link="`/areas/${area.id}`"
        />
      </div>
    </section>
    <section class="vertical">
      <h2>Best sellers</h2>
      <div class="cards">
        <card-preview
          v-for="product in data.products"
          :key="product.id"
          :title="product.title"
          :image="`data:image/png;base64,${product.image}`"
          :alt="`Image of ${product.title}`"
          :link="`/products/${product.id}`"
        />
      </div>
    </section>
    <section class="vertical strong">
      <h2>Our partners</h2>
      <div class="cards">
        <a href="https://www.cisco.com/" title="Image of Cisco"
          ><img
            src="https://www.freepnglogos.com/uploads/cisco-png-logo/new-cisco-logo-png-1.png"
            alt="new cisco logo png"
        /></a>
        <a href="https://www.google.com/" title="Image of Google"
          ><img
            src="https://www.freepnglogos.com/uploads/new-google-logo-png-0.png"
            alt="google logos png"
        /></a>
        <a href="https://www.netflix.com" title="Image of Netflix"
          ><img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="netflix logo"
        /></a>
        <a href="https://www.microsoft.com" title="Image of Microsoft"
          ><img
            src="https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-background-1.png"
            alt="microsoft logo png transparent background"
        /></a>
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
    data.products = (await $axios.get(`/api/products`)).data.slice(10, 14)
    return { data }
  }
}
</script>

<style scoped>
div.image img {
  width: 450px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.slogan h3 {
  color: white;
}

div.cards img {
  width: 200px;
  height: auto;
  display: block;
  padding: 50px;
}

section.home {
  /*   background-image: url('/expl.gif'); */
  background-repeat: no-repeat;
  background-position: 50% -130px;
  background-size: 1000px;
  background-color: black;
  height: 700px;
  justify-content: center;
}

@media (max-width: 600px) {
  div.image img {
    width: 100%;
  }

  div.cards img {
    padding-inline: 0px;
    padding-top: 50px;
  }
}
</style>
