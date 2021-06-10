<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/areas', 'Areas'],
        [`/areas/${data.id}`, `${data.title}`]
      ]"
      :look="'light'"
    />
    <card-section
      :props="['light', 'left']"
      :title="data.title"
      :text="[data.subtitle]"
      :image="`data:image/png;base64,${data.main_image}`"
      :alt="`Image for ${data.title}`"
    />
    <card-section
      :props="['strong', 'right']"
      :subtitle="'Description'"
      :text="[data.description]"
      :image="`data:image/png;base64,${data.second_image}`"
      :alt="`Second image for ${data.title}`"
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
      <NuxtLink id="link-products" :to="`/products/area/${data.id}`"
        >More products ></NuxtLink
      >
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
#link-products {
  text-align: right;
  font-size: 25px;
  font-weight: bold;
  margin-top: 80px;
  margin-right: 80px;
  text-decoration: none;
}
</style>
