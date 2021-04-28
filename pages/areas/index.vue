<template>
  <main class="container">
    <card-intro
      :background="'light'"
      :title="'OUR AREAS'"
      :text="'From networking and data center to collaboration and security, we have IT solutions to meet your organization\'s needs. Find out how we can help.'"
      :button="'Discover more'"
      :link="'#allAreas'"
      :image="require('~/static/areas/mokup_areas-1.png')"
    >
    </card-intro>
    <section class="accelerators strong">
      <a name="allAreas" />
      <h3>Areas</h3>
      <p>Introductory text of the 4 areas</p>
      <div class="links">
        <NuxtLink v-for="area in areas" :key="area.id" :to="area.title"
          ><button class="strong">
            {{ area.title }}
          </button></NuxtLink
        >
      </div>
    </section>
  </main>
</template>

<script>
import CardIntro from '~/components/CardIntro.vue'

export default {
  components: { CardIntro },
  data() {
    return {
      areas: ''
    }
  },
  async mounted() {
    const { data } = await this.$axios.get('/api/areas')
    this.areas = data
  }
}
</script>

<style scoped>
div.intro-text {
  flex-grow: 2;
  padding-top: 100px;
}
div.intro-image {
  flex-grow: 3;
  align-content: center;
}

div.intro-image img {
  max-width: 1000px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

section.accelerators {
  flex-direction: column;
  text-align: center;
}

div.links {
  display: flex;
  width: 600px;
  justify-content: space-between;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>
