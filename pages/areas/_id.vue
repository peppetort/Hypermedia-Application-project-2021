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
      :props="['strong', 'left', 'h1', 'light']"
      :title="data.title"
      :text="data.subtitle"
      :image="`data:image/png;base64,${data.main_image}`"
      :link="'/contacts'"
      :button="'Contact Us'"
    />
    <card-section
      :props="['light', 'right', 'h2']"
      :title="'Description'"
      :text="data.description"
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
        <card-product-preview
          v-for="product in data.products"
          :key="product.id"
          :title="product.title"
          :id="product.id"
        />
      </div>
      <div id="link-products">
        <NuxtLink :to="`/products/area/${data.id}`">See More ></NuxtLink>
      </div>
    </section>
    <card-section
      :props="['strong', 'left', 'h2', 'light']"
      :title="`Responsible for ${data.title}`"
      :text="`${data.resp.name}  ${data.resp.surname}`"
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
import CardProductPreview from '~/components/CardProductPreview.vue'
export default {
  components: { NavBar, CardSection, FeatureCard, CardProductPreview },
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
div.cards {
  display: flex;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

#link-products {
  margin-inline: auto;
  width: 1420px;
  margin-top: 80px;
  text-align: right;
}

#link-products a {
  font-size: 35px;
  font-weight: bold;
  margin-right: 100px;
  text-decoration: none;
}
</style>
