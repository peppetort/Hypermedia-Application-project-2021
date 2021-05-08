<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/roles', 'All roles'],
        [`/roles/${this.id}`, `${this.title}`]
      ]"
      :look="'strong'"
    />
    <section class="horizontal strong">
      <div class="text">
        <h1>{{ this.title }}</h1>
        <p>frase potente motivazionale</p>
        <a href="#people"><button class="strong">Discover More</button></a>
      </div>
      <div class="image"><!--TODO: add image --></div>
    </section>
    <section class="horizontal light">
      <div class="icon"><!--TODO: add image --></div>
      <div class="text">
        <h2>Description of the role</h2>
        <p>{{ description }}</p>
      </div>
    </section>
    <section class="vertical strong">
      <div class="text">
        <h2>General {{ title }} responsibilities</h2>
        <p>frase potente motivazionale</p>
      </div>
      <div class="cards">
        <card-responsibilities
          v-for="(resp, index) in responsibilities"
          :key="index"
          :text="resp"
        ></card-responsibilities>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import CardResponsibilities from '~/components/CardResponsibilities.vue'
export default {
  components: { NavBar, CardResponsibilities },
  data() {
    return {
      title: '',
      description: '',
      image: '',
      icon: '',
      responsibilities: ''
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const { data } = await this.$axios.get(`api/roles/${id}`)
    this.title = data.title
    this.description = data.description
    this.image = data.image
    this.icon = data.icon
    this.responsibilities = data.responsibilities
  }
}
</script>

<style scoped>
div.image {
  width: 400px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
}

div.cards {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>
