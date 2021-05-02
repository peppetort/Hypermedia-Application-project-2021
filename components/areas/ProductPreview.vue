<template>
  <div class="card">
    <div class="image"></div>
    <div class="text">
      <h2>{{ title }}</h2>
    </div>
    <NuxtLink :to="`/products/${id}`"
      ><a href="#" class="light">see more ></a></NuxtLink
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
  flex-direction: column;
  margin-inline: 10px;
  padding-bottom: 20%;
}
div.image {
  background-color: black;
  width: 100%;
  height: 300px;
}
div.text {
  width: 100%;
}
div.text p {
  display: block;
  margin-inline: 10px;
  width: 100%;
  word-wrap: wrap;
  word-break: break-all;
  text-align: left;
  font-weight: bold;
}
a:link {
  color: black;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
