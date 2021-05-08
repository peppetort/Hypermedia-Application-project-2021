<template>
  <main class="container">
    <nav-bar
      :path="[
        ['/products', 'All products'],
        [`/products/area/${this.area_id}`, `${this.area_title} products`],
        [`/products/${this.id}`, `${this.title}`]
      ]"
    />
    <section class="vertical light">
      <h1>{{ this.title }}</h1>
    </section>
    <section class="horizontal light">
      <div class="text">
        <h2>{{ this.subtitle }}</h2>
        <p>{{ this.description }}</p>
      </div>
      <div class="image">
        <!-- TODO: add image dynamically -->
      </div>
    </section>
    <section class="vertical strong">
      <h2>Features</h2>
      <p>Solutions that matter for your organization​</p>
      <div class="cards">
        <card-feature
          v-for="feature in this.features"
          :key="feature.id"
          :title="feature.title"
          :text="feature.description"
        ></card-feature>
      </div>
    </section>
    <section class="horizontal light">
      <div class="text">
        <h2>Project Manager</h2>
        <p>Description</p>
        <a><button class="light">See More</button></a>
      </div>
      <div class="image">
        <!-- TODO: generate dynamically -->
      </div>
    </section>
    <section class="vertical strong">
      <h2>Responsible for Assistence</h2>
      <div class="cards">
        <!-- TODO: generate dynamically -->
        <card-person :name="'Mario Rossi'"></card-person>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import CardFeature from '~/components/CardFeauture.vue'
import CardPerson from '~/components/CardPerson.vue'
export default {
  components: { NavBar, CardFeature, CardPerson },
  data() {
    return {
      id: '',
      title: '',
      subtitle: '',
      description: '',
      features: '',
      area_id: '',
      area_title: ''
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const { data } = await this.$axios.get(`/api/products/${id}`)
    this.id = data.id
    this.title = data.title
    this.subtitle = data.subtitle
    this.description = data.description
    this.area_id = data.area
    this.area_title = (
      await this.$axios.get(`/api/areas/${data.area}`)
    ).data.title
    this.features = (
      await this.$axios.get(`/api/products/features/${data.id}`)
    ).data
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
}

div.cards {
  display: flex;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>
