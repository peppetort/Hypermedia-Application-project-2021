<template>
  <NuxtLink :to="`${link}`">
    <div class="card">
      <div class="image">
        <img :src="image" />
      </div>
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
    image: { type: String, default: () => '' },
    link: { type: String, default: () => '' }
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
  width: 100%;
  height: 200px;
  max-height: 300px;
}

div.image img {
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.text {
  width: 100%;
  text-decoration: none;
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
</style>
