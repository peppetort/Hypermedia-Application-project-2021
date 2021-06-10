<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/roles', 'Team'],
        [`/roles/${data.person.role}`, `${data.role.title}`],
        [
          `/roles/people/${data.person.id}`,
          `${data.person.name} ${data.person.surname}`
        ]
      ]"
      :look="'light'"
    />
    <card-section
      v-if="data.area == undefined"
      :props="['light', 'left']"
      :title="`${data.person.name} ${data.person.surname}`"
      :subtitle="`${data.role.title}`"
      :text="[data.person.phone, data.person.email, data.person.description]"
      :image="`data:image/png;base64,${data.person.image}`"
      :alt="`Portrait of ${data.person.name} ${data.person.surname}`"
    />
    <card-section
      v-if="data.area != undefined"
      :props="['light', 'left', 'strong']"
      :title="`${data.person.name} ${data.person.surname}`"
      :subtitle="`${data.area.title} ${data.role.title}`"
      :text="[data.person.phone, data.person.email, data.person.description]"
      :image="`data:image/png;base64,${data.person.image}`"
      :alt="`Portrait of ${data.person.name} ${data.person.surname}`"
      :link="`/areas/${data.area.id}`"
      :button="`${data.area.title}`"
    />
    <section class="vertical strong" v-if="data.products != undefined">
      <h2>{{ data.role.title }} of</h2>
      <div class="grid">
        <card-preview
          v-for="product in data.products"
          :key="product.id"
          :title="product.title"
          :image="`data:image/png;base64,${product.image}`"
          :alt="`Image of ${product.title}`"
          :link="`/products/${product.id}`"
        ></card-preview>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/TheNavBar.vue'
import CardSection from '~/components/TheSection.vue'
import CardPreview from '~/components/CardPreview.vue'
export default {
  components: {
    NavBar,
    CardSection,
    CardPreview
  },
  async asyncData({ $axios, params }) {
    const { id } = params
    const person = (await $axios.get(`/api/person/${id}`)).data
    const role = (await $axios.get(`/api/roles/${person.role}`)).data
    var data
    if (person.role == 1) {
      const area = (await $axios.get(`/api/areas/manager/${id}`)).data
      data = { person, role, area }
    } else if (person.role == 2) {
      const products = (await $axios.get(`/api/products/person/${id}`)).data
      data = { person, role, products }
    } else if (person.role == 3) {
      const products = (await $axios.get(`/api/assistance/person/${id}`)).data
      data = { person, role, products }
    }
    return { data }
  }
}
</script>
