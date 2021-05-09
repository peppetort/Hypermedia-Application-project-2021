<template>
  <main class="container">
    <section class="vertical strong">
      <h1>Our Roles</h1>
      <p>Short overview of the company roles</p>
    </section>
    <section class="horizontal light">
      <div class="image"></div>
      <div class="text">
        <h2>Responsible</h2>
        <p>Short description</p>
        <NuxtLink :to="`/roles/0`">
          <button class="light">Learn More</button></NuxtLink
        >
      </div>
    </section>
    <section class="horizontal strong">
      <div class="text">
        <h2>Project Manager</h2>
        <p>Short description</p>
        <NuxtLink :to="`/roles/1`">
          <button class="light">Learn More</button></NuxtLink
        >
      </div>
      <div class="image"></div>
    </section>
    <section class="horizontal light">
      <div class="image"></div>
      <div class="text">
        <h2>Reference Assistence</h2>
        <p>Short description</p>
        <NuxtLink :to="`/roles/2`">
          <button class="light">Learn More</button></NuxtLink
        >
      </div>
    </section>
  </main>
</template>

<script>
export default {
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
div.text {
  min-width: 400px;
  width: 50%;
  padding-top: 100px;
  padding-left: 100px;
}
div.image {
  width: 50%;
}

div.image img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
