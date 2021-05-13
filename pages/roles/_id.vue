<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/roles', 'All roles'],
        [`/roles/${data.id}`, `${data.title}`]
      ]"
      :look="'strong'"
    />
    <card-section
      :props="['strong', 'left', 'h1', 'strong']"
      :title="data.title"
      :image="`data:image/png;base64,${data.icon}`"
      :link="`#people`"
      :button="'Discover More'"
    />
    <card-section
      :props="['light', 'right', 'h2']"
      :title="'Description'"
      :text="data.description"
      :image="`data:image/png;base64,${data.image}`"
    />
    <section class="vertical strong">
      <div class="text">
        <h2>General {{ title }} responsibilities</h2>
        <p>frase potente motivazionale</p>
      </div>
      <div class="card">
        <card-responsibilities :text="responsibility1"></card-responsibilities>
        <card-responsibilities :text="responsibility2"></card-responsibilities>
        <card-responsibilities :text="responsibility3"></card-responsibilities>
      </div>
    </section>
    <section class="vertical light">
      <h2>Who are our {{ title }}s</h2>
      <p>Frase potente motivazionale</p>
      <div class="card">
        <card-person
          v-for="person in data.empl"
          :key="person.id"
          :name="person.name"
          :id="person.id"
        ></card-person>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/TheNavBar.vue'
import CardSection from '~/components/TheSection.vue'
import CardResponsibilities from '~/components/CardResponsibilities.vue'
import CardPerson from '~/components/CardPerson.vue'
export default {
  components: { NavBar, CardSection, CardResponsibilities, CardPerson },
  async asyncData({ $axios, params }) {
    const { id } = params
    const { data } = await $axios.get(`api/roles/${id}`)
    data.empl = await $axios.get(`api/person/role/${id}`).data
    return { data }
  }
}
</script>

<style scoped>
div.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
  margin-top: 50px;
}
div.people {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
