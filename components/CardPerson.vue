<template>
  <div class="card">
    <div class="image"></div>
    <div class="text">
      <h3>{{ name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' }
  }
}
</script>

<style scoped>
div.card {
  display: flex;
  flex-direction: column;
  margin-inline: 35px;
}

div.image {
  background: black;
  width: 200px;
  height: 250px;
  /* width: 100%;
  height: 30%; */
}

div.image img {
  max-width: 90%;
  max-height: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
