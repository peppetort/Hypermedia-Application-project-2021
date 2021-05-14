<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/areas', 'All areas'],
        [`/areas/${data.id}`, `${data.title}`]
      ]"
      :look="'strong'"
    />
    <card-section
      :props="['strong', 'left', 'light']"
      :title="data.title"
      :text="[data.subtitle]"
      :image="`data:image/png;base64,${data.main_image}`"
      :link="'/contacts'"
      :button="'Contact Us'"
    />
    <card-section
      :props="['light', 'right']"
      :subtitle="'Description'"
      :text="[data.description]"
      :image="`data:image/png;base64,${data.second_image}`"
    />
    <section class="vertical strong">
      <h2>Features</h2>
      <p>Solutions that matter for your organization​</p>
      <div class="cards">
        <feature-card
          v-for="feature in data.features"
          :key="feature.id"
          :title="feature.title"
          :text="feature.description"
          :image="feature.image"
        />
      </div>
    </section>
    <section class="vertical light">
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
          :link="`/products/${product.id}`"
        />
      </div>
      <div id="link-products">
        <NuxtLink :to="`/products/area/${data.id}`">See More ></NuxtLink>
      </div>
    </section>
    <card-section
      :props="['strong', 'left', 'light']"
      :subtitle="`${data.title} Area Manager`"
      :text="[`${data.resp.name}  ${data.resp.surname}`]"
      :image="`data:image/png;base64,${data.resp.image}`"
      :link="`/roles/people/${data.responsible}`"
      :button="'See More'"
    />
  </main>
</template>

<script>
import NavBar from '~/components/TheNavBar.vue'
import CardSection from '~/components/TheSection.vue'
import FeatureCard from '~/components/CardFeauture.vue'
import CardPreview from '~/components/CardPreview.vue'
export default {
  components: { NavBar, CardSection, FeatureCard, CardPreview },
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
  margin-inline: auto;
  width: 1420px;
  margin-top: 80px;
  text-align: right;
}

#link-products a {
  font-size: 35px;
  font-weight: bold;
  margin-right: 80px;
  text-decoration: none;
}
</style>
