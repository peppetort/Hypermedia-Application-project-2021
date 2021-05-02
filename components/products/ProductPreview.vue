<template>
  <div class="card">
    <div class="image"></div>
    <div class="text">
      <h2>{{ title }}</h2>
    </div>
    <NuxtLink to="products/${id}"
      ><button class="light">see more</button></NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    id: Number
  }
}
</script>

<style scoped>
div.card {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-inline: 35px;
}
</style>
