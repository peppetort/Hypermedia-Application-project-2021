<template>
  <main class="container">
    <section class="vertical strong">
      <h1>Our Roles</h1>
      <p>Short overview of the company roles</p>
    </section>
    <div v-for="role in roles" :key="role.id">
      <section class="horizontal light" v-if="role.id % 2 != 0">
        <div class="text">
          <h2>{{ role.title }}</h2>
          <p>{{ role.description }}</p>
          <NuxtLink :to="`/roles/${role.id}`">
            <button class="light">Learn More</button></NuxtLink
          >
        </div>
        <div class="image"></div>
      </section>
      <section class="horizontal strong" v-if="role.id % 2 == 0">
        <div class="image"></div>
        <div class="text">
          <h2>{{ role.title }}</h2>
          <p>{{ role.description }}</p>
          <NuxtLink :to="`/roles/${role.id}`">
            <button class="light">Learn More</button></NuxtLink
          >
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      roles: ''
    }
  },
  async mounted() {
    const { data } = await this.$axios.get('/api/roles')
    this.roles = data
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
