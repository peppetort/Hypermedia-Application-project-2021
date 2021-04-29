<template>
  <main class="container">
    <section class="horizontal light">
      <div class="text">
        <h1>OUR AREAS</h1>
        <p>
          When everyone and everything is connected, anything is possible. Build
          network access that's wireless-first, cloud-driven, data-optimized,
          and highly secure.
        </p>
        <a href="#allAreas"><button class="strong">Discover more</button></a>
      </div>
      <div class="image">
        <img src="~/static/areas/mokup_areas-1.png" />
      </div>
    </section>
    <section class="vertical strong">
      <a name="allAreas" />
      <h3>Areas</h3>
      <p>
        From networking and data center to collaboration and security, we have
        IT solutions to meet your organization's needs.<br />
        Find out how we can help.
      </p>
      <div class="links">
        <NuxtLink v-for="area in areas" :key="area.id" :to="area.title"
          ><button class="strong">
            {{ area.title }}
          </button></NuxtLink
        >
      </div>
    </section>
    <div v-for="area in areas" :key="area.id">
      <section class="horizontal light" v-if="area.id % 2 != 0">
        <div class="image"><!-- TODO: add image dynamically --></div>
        <div class="text">
          <h2>{{ area.title }}</h2>
          <p>{{ area.subtitle }}</p>
          <NuxtLink :to="area.title">
            <button class="light">Learn More</button></NuxtLink
          >
        </div>
      </section>
      <section class="horizontal strong" v-if="area.id % 2 == 0">
        <div class="text">
          <h2>{{ area.title }}</h2>
          <p>{{ area.subtitle }}</p>
          <NuxtLink :to="area.title">
            <button class="light">Learn More</button></NuxtLink
          >
        </div>
        <div class="image"><!-- TODO: add image dynamically --></div>
      </section>
    </div>
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
