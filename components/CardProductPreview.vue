<template>
  <NuxtLink :to="`/products/${id}`">
    <div class="card">
      <div class="image"></div>
      <div class="text">
        <p>{{ title }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    id: { type: Number, default: () => 1 }
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

div.image {
  background-color: black;
  width: 100%;
  height: 300px;
}

div.image img:hover {
  opacity: 0.6;
}

div.text {
  width: 100%;
  text-decoration: none;
}

div.text p {
  display: block;
  color: black;
  margin-inline: 10px;
  width: 100%;
  word-wrap: wrap;
  word-break: break-all;
  text-align: left;
  font-weight: bold;
}

div.text p:hover {
  color: gray;
}
a {
  text-decoration: none;
}
</style>
