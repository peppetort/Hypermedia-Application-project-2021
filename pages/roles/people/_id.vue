<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/roles', 'All roles'],
        [`/roles/${data.role}`, `${data.rol.title}`],
        [`/roles/people/${data.id}`, `${data.name} ${data.surname}`]
      ]"
      :look="'strong'"
    />
    <card-section
      v-if="data.area == undefined"
      :props="['strong', 'left']"
      :title="`${data.name} ${data.surname}`"
      :subtitle="`${data.rol.title}`"
      :text="[data.phone, data.email, data.description]"
      :image="`data:image/png;base64,${data.image}`"
      :alt="`Portrait of ${data.name} ${data.surname}`"
    />
    <card-section
      v-if="data.area != undefined"
      :props="['strong', 'left', 'strong']"
      :title="`${data.name} ${data.surname}`"
      :subtitle="`${data.area.title} ${data.rol.title}`"
      :text="[data.phone, data.email, data.description]"
      :image="`data:image/png;base64,${data.image}`"
      :alt="`Portrait of ${data.name} ${data.surname}`"
      :link="`/areas/${data.area.id}`"
      :button="`${data.area.title}`"
    />
    <section class="vertical light" v-if="data.products != undefined">
      <h2>{{ data.rol.title }} of</h2>
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
    const { data } = await $axios.get(`/api/person/${id}`)
    data.rol = (await $axios.get(`/api/roles/${data.role}`)).data
    if (data.role == 1) {
      data.area = (await $axios.get(`/api/areas/manager/${id}`)).data
    } else if (data.role == 2) {
      data.products = (await $axios.get(`/api/products/person/${id}`)).data
    } else if (data.role == 3) {
      data.products = (await $axios.get(`/api/assistance/person/${id}`)).data
    }
    return { data }
  }
}
</script>
