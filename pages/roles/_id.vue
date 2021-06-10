<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/roles', 'Team'],
        [`/roles/${data.role.id}`, `${data.role.title}`]
      ]"
      :look="'light'"
    />
    <card-section
      :props="['light', 'left', 'strong']"
      :title="data.role.title"
      :image="`data:image/png;base64,${data.role.icon}`"
      :alt="`${data.role.title} second image`"
      :text="[data.role.description]"
      :link="'#people'"
      :button="'View more'"
    />
    <section class="vertical strong">
      <div class="text">
        <h2>General {{ data.role.title }} responsibilities</h2>
      </div>
      <div class="cards">
        <card-preview
          :title="data.role.responsibility1"
          :image="'/roles/1.png'"
        />
        <card-preview
          :title="data.role.responsibility2"
          :image="'/roles/2.png'"
        />
        <card-preview
          :title="data.role.responsibility3"
          :image="'/roles/3.png'"
        />
      </div>
    </section>
    <section class="vertical light" id="people">
      <h2>Who are our {{ data.role.title }}s</h2>
      <div class="cards">
        <card-preview
          v-for="person in data.employees"
          :key="person.id"
          :title="`${person.name} ${person.surname}`"
          :image="`data:image/png;base64,${person.image}`"
          :alt="`${data.role.title} feature number ${person.id} image`"
          :link="`/roles/people/${person.id}`"
        />
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/TheNavBar.vue'
import CardSection from '~/components/TheSection.vue'
import CardPreview from '~/components/CardPreview.vue'
export default {
  components: { NavBar, CardSection, CardPreview },
  async asyncData({ $axios, params }) {
    const { id } = params
    const role = (await $axios.get(`/api/roles/${id}`)).data
    const employees = (await $axios.get(`/api/person/role/${id}`)).data
    const data = { role, employees }
    return { data }
  }
}
</script>
