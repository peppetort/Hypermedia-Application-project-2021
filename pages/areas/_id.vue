<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/areas', 'Areas'],
        [`/areas/${data.area.id}`, `${data.area.title}`]
      ]"
      :look="'strong'"
    />
    <card-section
      :props="['strong', 'left']"
      :title="data.area.title"
      :text="[data.area.description]"
      :image="`data:image/png;base64,${data.area.main_image}`"
      :alt="`Image for ${data.area.title}`"
    />
    <section class="vertical light">
      <h2>Features</h2>
      <p>Solutions that matter for your organization​</p>
      <div class="cards">
        <feature-card
          v-for="feature in data.features"
          :key="feature.id"
          :title="feature.title"
          :text="feature.description"
          :image="feature.image"
          :alt="`Icon for feature number ${feature.id} of ${data.title} area`"
        />
      </div>
    </section>
    <section class="vertical strong">
      <h2>What products we offer</h2>
      <p>
        "If you don't try {{ data.area.title }} product, you won't become the
        superhero you were meant to be"​
      </p>
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
      <div class="link">
        <NuxtLink :to="`/products/area/${data.area.id}`"
          >More products ></NuxtLink
        >
      </div>
    </section>
    <section class="vertical light">
      <card-person
        :title="`${data.area.title} Area Manager`"
        :name="`${data.manager.name}  ${data.manager.surname}`"
        :image="`data:image/png;base64,${data.manager.image}`"
        :alt="`Portrait of ${data.area.title} area manager`"
        :link="`/roles/people/${data.area.responsible}`"
      />
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/TheNavBar.vue'
import CardSection from '~/components/TheSection.vue'
import FeatureCard from '~/components/CardFeauture.vue'
import CardPreview from '~/components/CardPreview.vue'
import CardPerson from '~/components/CardPerson.vue'
export default {
  components: { NavBar, CardSection, FeatureCard, CardPreview, CardPerson },
  async asyncData({ $axios, params }) {
    const { id } = params
    const area = (await $axios.get(`/api/areas/${id}`)).data
    const features = (await $axios.get(`/api/features/area/${id}`)).data
    const products = (await $axios.get(`/api/products/area/${id}`)).data.slice(
      0,
      4
    )
    const manager = (await $axios.get(`/api/person/${area.responsible}`)).data
    const data = { area, features, products, manager }
    return { data }
  }
}
</script>

<style scoped>
div.link {
  width: 100%;
  margin-top: 70px;
  text-align: right;
}

div.link a {
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
