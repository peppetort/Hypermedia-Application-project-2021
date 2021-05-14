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
      :props="['strong', 'left', 'strong']"
      :title="data.title"
      :image="`data:image/png;base64,${data.icon}`"
      :link="`#people`"
      :button="'Discover More'"
    />
    <card-section
      :props="['light', 'right']"
      :subtitle="'Description'"
      :text="[data.description]"
      :image="`data:image/png;base64,${data.image}`"
    />
    <section class="vertical strong">
      <div class="text">
        <h2>General {{ data.title }} responsibilities</h2>
      </div>
      <div class="cards">
        <card-preview
          :title="data.responsibility1"
          :image="data.staticImages[0]"
        />
        <card-preview
          :title="data.responsibility2"
          :image="data.staticImages[1]"
        />
        <card-preview
          :title="data.responsibility3"
          :image="data.staticImages[2]"
        />
      </div>
    </section>
    <section class="vertical light">
      <a href="people" />
      <h2>Who are our {{ data.title }}s</h2>
      <div class="cards">
        <card-preview
          v-for="person in data.empl"
          :key="person.id"
          :title="`${person.name} ${person.surname}`"
          :image="`data:image/png;base64,${person.image}`"
          :link="`/role/people/${person.id}`"
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
    const { data } = await $axios.get(`api/roles/${id}`)
    data.empl = await $axios.get(`api/person/role/${id}`).data
    var resp1 = require('~/assets/roles/1.png')
    var resp2 = require('~/assets/roles/2.png')
    var resp3 = require('~/assets/roles/3.png')
    data.staticImages = [resp1, resp2, resp3]
    return { data }
  }
}
</script>
