<template>
  <main class="container">
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
        <feature-card
          v-for="feature in this.features"
          :key="feature.id"
          :title="feature.title"
          :text="feature.description"
        ></feature-card>
      </div>
    </section>
  </main>
</template>

<script>
import FeatureCard from '~/components/areas/CardFeauture.vue'
export default {
  components: { FeatureCard },
  data() {
    return {
      id: '',
      title: '',
      subtitle: '',
      description: '',
      features: ''
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const { data } = await this.$axios.get(`/api/products/${id}`)
    this.id = data.id
    this.title = data.title
    this.subtitle = data.subtitle
    this.description = data.description
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
