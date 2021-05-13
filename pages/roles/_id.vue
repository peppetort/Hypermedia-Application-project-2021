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
        <card-responsibilities :text="responsibility1"></card-responsibilities>
        <card-responsibilities :text="responsibility2"></card-responsibilities>
        <card-responsibilities :text="responsibility3"></card-responsibilities>
      </div>
    </section>
    <section class="vertical light">
      <div class="text center">
        <h2>Who are our {{ title }}s</h2>
        <p>Frase potente motivazionale</p>
      </div>
      <div class="people">
        <card-person
          v-for="person in people"
          :key="person.id"
          :name="person.name"
          :id="person.id"
        ></card-person>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import CardResponsibilities from '~/components/CardResponsibilities.vue'
import CardPerson from '~/components/CardPerson.vue'
export default {
  components: { NavBar, CardResponsibilities, CardPerson },
  data() {
    return {
      id: '',
      title: '',
      description: '',
      image: '',
      icon: '',
      responsibility1: '',
      responsibility2: '',
      responsibility3: '',
      people: ''
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const { data } = await this.$axios.get(`api/roles/${id}`)
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.image = data.image
    this.icon = data.icon
    this.responsibility1 = data.responsibility1
    this.responsibility2 = data.responsibility2
    this.responsibility3 = data.responsibility3

    const empl = await this.$axios.get(`api/person/${id}`)
    this.people = empl.data
  }
}
</script>

<style scoped>
div.image {
  width: 400px;
  min-width: 300px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
}

div.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
  margin-top: 50px;
}

div.center {
  margin-block: auto;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
}

div.people {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
