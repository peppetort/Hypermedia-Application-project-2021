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
    <card-section
      :props="['strong', 'left', 'light']"
      :subtitle="`Need to improve the ${data.title} of your company?`"
      :image="`data:image/png;base64,${data.main_image}`"
      :alt="`Image for ${data.title}`"
      :link="`/areas/${data.id}`"
      :button="'Discover More'"
    />
    <section class="vertical">
      <h2>Our most popular products</h2>
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
import CardSection from '~/components/TheSection.vue'
import CardPreview from '~/components/CardPreview.vue'
export default {
  components: { CardSection, CardPreview },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/areas/3')
    data.products = (await $axios.get(`api/products`)).data.slice(10, 14)
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
  width: 100px;
  height: auto;
  display: block;
  padding-inline: 50px;
}

section.home {
  background-image: url('/expl.gif');
  background-repeat: no-repeat;
  background-position: 50% -130px;
  background-size: 1000px;
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
