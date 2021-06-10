<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/roles', 'Team'],
        [`/roles/${data.id}`, `${data.title}`]
      ]"
      :look="'light'"
    />
    <card-section
      :props="['light', 'left', 'strong']"
      :title="data.title"
      :image="`data:image/png;base64,${data.icon}`"
      :alt="`${data.title} second image`"
      :text="[data.description]"
      :link="'#people'"
      :button="'View more'"
    />
    <section class="vertical strong">
      <div class="text">
        <h2>General {{ data.title }} responsibilities</h2>
      </div>
      <div class="cards">
        <card-preview :title="data.responsibility1" :image="'/roles/1.png'" />
        <card-preview :title="data.responsibility2" :image="'/roles/2.png'" />
        <card-preview :title="data.responsibility3" :image="'/roles/3.png'" />
      </div>
    </section>
    <section class="vertical light" id="people">
      <h2>Who are our {{ data.title }}s</h2>
      <div class="cards">
        <card-preview
          v-for="person in data.empl"
          :key="person.id"
          :title="`${person.name} ${person.surname}`"
          :image="`data:image/png;base64,${person.image}`"
          :alt="`${data.title} feature number ${person.id} image`"
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
    const { data } = await $axios.get(`/api/roles/${id}`)
    data.empl = (await $axios.get(`/api/person/role/${id}`)).data
    return { data }
  }
}
</script>
