<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/roles', 'All roles'],
        [`/roles/${data.role}`, `${data.rol.title}`],
        [`/roles/people/${data.id}`, `${data.name} ${data.surname}`]
      ]"
      :look="'light'"
    />
    <card-section
      :props="['light', 'left']"
      :title="`${data.name} ${data.surname}`"
      :subtitle="data.rol.title"
      :text="[data.phone, data.email, data.description]"
      :image="`data:image/png;base64,${data.image}`"
    />
  </main>
</template>

<script>
import NavBar from '~/components/TheNavBar.vue'
import CardSection from '~/components/TheSection.vue'
export default {
  components: {
    NavBar,
    CardSection
  },
  async asyncData({ $axios, params }) {
    const { id } = params
    const { data } = await $axios.get(`/api/person/${id}`)
    data.rol = (await $axios.get(`/api/roles/${data.role}`)).data
    return { data }
  }
}
</script>
