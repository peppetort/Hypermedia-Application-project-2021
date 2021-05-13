<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/roles', 'All products'],
        [`/roles${this.id}`, `${this.role}`],
        [`/roles/people/${this.id}`, `${this.name} ${this.surname}`]
      ]"
      :look="'light'"
    />
    <section class="horizontal light">
      <div class="text">
        <h1>{{ name }} {{ surname }}</h1>
        <h2>{{ role }}</h2>
        <p>{{ description }}</p>

        <!--
                <h1>Tommaso Shoppingbags</h1>
                <h2>Scansafatiche</h2>
                <p>Descrizione qui</p>
                -->
      </div>

      <div class="image">
        <!-- TODO: add image dynamically -->
      </div>
    </section>

    <section class="horizontal strong">
      <div class="image">
        <!-- TODO: add image dynamically -->
      </div>

      <div class="text">
        <h3>{{ name }}'s contact informations:</h3>
        <ul class="contactInfos">
          <li>Phone: {{ phone }}</li>
          <li>Email: {{ email }}</li>
        </ul>

        <!--
                <h3>Tommaso's contact informations:</h3>
                <ul class="contactInfos">
                    <li>Phone: 111-2311232</li>
                    <li>Email: bellauagliò@ghotmail.com</li>
                </ul>
                -->
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      id: '',
      name: '',
      surname: '',
      email: '',
      phone: '',
      description: '',
      image: '',
      role: ''
    }
  },

  async mounted() {
    const { id } = this.$route.params
    const { data } = await this.$axios.get(`/api/roles/people/${id}`)
    this.id = data.person.id
    this.name = data.person.name
    this.surname = data.person.surname
    this.email = data.person.email
    this.phone = data.person.phone
    this.description = data.person.description
    this.image = data.person.image
    this.role = data.role.title
  }
}
</script>

<style scoped>
div.text {
  min-width: 400px;
  width: 50%;
  padding-left: 100px;
}

div.image {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}
</style>
