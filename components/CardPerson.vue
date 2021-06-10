<template>
  <div class="container">
    <div class="image">
      <img loading="lazy" :src="image" :alt="alt" />
    </div>
    <div class="text">
      <h2>{{ title }}</h2>
      <p>{{ name }}</p>
      <NuxtLink :to="link"
        ><button class="strong">Discover More</button></NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    name: { type: String, default: () => '' },
    link: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    alt: { type: String, default: () => '' }
  }
}
</script>

<style scoped>
div.container {
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  width: 500px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  align-items: center;
}

div.image {
  width: 100%;
  max-height: 300px;
}

div.image img {
  max-width: 100%;
  height: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.text {
  width: 100%;
  text-decoration: none;
  text-align: left;
}

@media (max-width: 700px) {
  div.container {
    flex-direction: column;
    width: auto;
  }

  div.text {
    text-align: center;
    padding: 10px;
  }
}
</style>
