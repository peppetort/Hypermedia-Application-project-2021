<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/products', 'Products'],
        [`/products/area/${data.product.area}`, `${data.area.title} products`],
        [`/products/${data.product.id}`, `${data.product.title}`]
      ]"
      :look="'light'"
    />
    <section class="vertical light">
      <h1>{{ data.product.title }}</h1>
    </section>
    <card-section
      :props="['light', 'left', 'light']"
      :subtitle="data.product.subtitle"
      :text="[data.product.description]"
      :image="`data:image/png;base64,${data.product.image}`"
      :alt="`Image of ${data.product.title}`"
      :link="`/areas/${data.area.id}`"
      :button="`#${data.area.title.toLowerCase()}`"
    />
    <section class="vertical strong">
      <h2>Features</h2>
      <p>Solutions that matter for your organization​</p>
      <div class="cards">
        <card-feature
          v-for="feature in data.features"
          :key="feature.id"
          :title="feature.title"
          :image="feature.image"
          :alt="`Icon of feature number ${feature.id} of ${data.product.title}}`"
          :text="feature.description"
        ></card-feature>
      </div>
    </section>
    <section class="vertical">
      <card-person
        :title="'Project Manager'"
        :name="`${data.manager.name} ${data.manager.surname}`"
        :image="`data:image/png;base64,${data.manager.image}`"
        :link="`/roles/people/${data.product.manager}`"
        :alt="`Portrait of ${data.product.title} project manager`"
      />
    </section>
    <section class="vertical">
      <div class="cards">
        <card-person
          v-for="person in data.referents"
          :key="person.id"
          :title="'Assistance Referent'"
          :name="`${person.name} ${person.surname}`"
          :image="`data:image/png;base64,${person.image}`"
          :link="`/roles/people/${person.id}`"
          :alt="`Portrait of ${person.name} `"
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
    const product = (await $axios.get(`/api/products/${id}`)).data
    const area = (await $axios.get(`/api/areas/${product.area}`)).data
    const features = (await $axios.get(`/api/features/product/${product.id}`))
      .data
    const manager = (await $axios.get(`/api/person/${product.manager}`)).data
    const referents = (
      await $axios.get(`/api/assistance/product/${product.id}`)
    ).data
    const data = { product, area, features, manager, referents }
    return { data }
  }
}
</script>
