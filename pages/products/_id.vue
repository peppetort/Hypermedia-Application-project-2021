<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/products', 'All products'],
        [`/products/area/${data.area}`, `${data.area_title} products`],
        [`/products/${data.id}`, `${data.title}`]
      ]"
      :look="'light'"
    />
    <section class="vertical light">
      <h1>{{ data.title }}</h1>
    </section>
    <card-section
      :props="['light', 'left', 'h2']"
      :title="data.subtitle"
      :text="data.description"
      :image="`data:image/png;base64,${data.image}`"
    />
    <section class="vertical strong">
      <h2>Features</h2>
      <p>Solutions that matter for your organization​</p>
      <div class="cards">
        <card-feature
          v-for="feature in data.features"
          :key="feature.id"
          :title="feature.title"
          :text="feature.description"
        ></card-feature>
      </div>
    </section>
    <card-section
      :props="['light', 'left', 'h2', 'light']"
      :title="'Project Manager'"
      :text="`${data.man.name} ${data.man.surname}`"
      :image="`data:image/png;base64,${data.man.image}`"
      :link="`/roles/people/${data.manager}`"
      :button="'See More'"
    />
    <section class="vertical strong">
      <h2>Responsible for Assistence</h2>
      <div class="cards" v-for="ass in data.assistence" :key="ass.id">
        <card-person
          :name="`${ass.name} ${ass.surname}`"
          :image="`data:image/png;base64,${ass.image}`"
          :link="`/role/people/${ass.id}`"
        />
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/TheNavBar.vue'
import CardSection from '~/components/TheSection.vue'
import CardFeature from '~/components/CardFeauture.vue'
import CardPerson from '~/components/CardPerson.vue'
export default {
  components: { NavBar, CardSection, CardFeature, CardPerson },
  async asyncData({ $axios, params }) {
    const { id } = params
    const { data } = await $axios.get(`/api/products/${id}`)
    data.area_title = (await $axios.get(`/api/areas/${data.area}`)).data.title
    data.features = (await $axios.get(`/api/features/product/${data.id}`)).data
    data.man = (await $axios.get(`/api/person/${data.manager}`)).data
    /*     data.assistence = (
      await $axios.get(`/api/assistance/product/${data.id}`)
    ).data */
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
</style>
