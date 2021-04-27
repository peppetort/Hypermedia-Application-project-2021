<template>
  <main class="container">
    <section class="intro">
      <div class="intro-text">
        <h1>OUR AREAS</h1>
        <p>Short overview of the 4 different areas</p>
        <button class="strong">Go to all areas</button>
      </div>
      <div class="intro-image">
        <img src="~/static/areas/mokup_areas-1.png">
      </div>
    </section>
    <section class="accelerators">
      <h3>Areas</h3>
      <p>Introductory text of the 4 areas</p>
      <div class="links">
        <!-- TODO: generare dinamicamente -->
        <button class="strong">Area1</button>
        <button class="strong">Area2</button>
        <button class="strong">Area3</button>
        <button class="strong">Area4</button>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default{
  async asyncData({ $axios }) {
    const { data } = await $axios.get("${process.env.BASE_URL}/api/areas")
    const areas = data
    return {
      areas,
    }
  },

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

div.intro-image img{
  max-width: 1000px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto 
}

section.accelerators{
  flex-direction: column;
  text-align: center;
  background: #f2f2f2;
}

.links {
  display: flex;
  width: 600px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>