<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/areas', 'Areas'],
        [`/areas/${data.id}`, `${data.title}`]
      ]"
      :look="'strong'"
    />
    <card-section
      :props="['strong', 'left']"
      :title="data.title"
      :text="[data.description]"
      :image="`data:image/png;base64,${data.main_image}`"
      :alt="`Image for ${data.title}`"
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
      <h2>What product we offer</h2>
      <p>
        "If you don't try area product, you won't become the superhero you were
        meant to be"​
      </p>
      <div class="cards">
        <card-preview
          v-for="product in data.products"
          :key="product.id"
          :title="product.title"
          :image="`data:image/png;base64,${product.image}`"
          :alt="`Image of ${product.title}`"
          :button="false"
        />
      </div>
      <div class="link">
        <NuxtLink :to="`/products/area/${data.id}`">More products ></NuxtLink>
      </div>
    </section>
    <section class="vertical light">
      <card-person
        :title="`${data.title} Area Manager`"
        :name="`${data.resp.name}  ${data.resp.surname}`"
        :image="`data:image/png;base64,${data.resp.image}`"
        :alt="`Portrait of ${data.title} area manager`"
        :link="`/roles/people/${data.responsible}`"
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
    const { data } = await $axios.get(`/api/areas/${id}`)
    data.features = (await $axios.get(`/api/features/area/${id}`)).data
    data.products = (await $axios.get(`api/products/area/${id}`)).data.slice(
      0,
      4
    )
    data.resp = (await $axios.get(`/api/person/${data.responsible}`)).data
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
