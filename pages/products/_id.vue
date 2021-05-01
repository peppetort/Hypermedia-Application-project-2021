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
  </main>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      title: '',
      subtitle: '',
      description: ''
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const { data } = await this.$axios.get(`/api/products/${id}`)
    this.id = data.id
    this.title = data.title
    this.subtitle = data.subtitle
    this.description = data.description
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
</style>
