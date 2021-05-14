<template>
  <section :class="`horizontal ${props[0]}`" :style="{ 'flex-wrap': wrap }">
    <div class="image" v-if="props[1] == 'right'">
      <img :src="image" />
    </div>
    <div class="text">
      <h1 v-if="title != undefined">{{ title }}</h1>
      <h2 v-if="subtitle != undefined">{{ subtitle }}</h2>
      <p v-for="p in text" :key="p">{{ p }}</p>
      <NuxtLink :to="link" v-if="props[2] != undefined">
        <button :class="props[2]">{{ button }}</button></NuxtLink
      >
    </div>
    <div class="image" v-if="props[1] == 'left'">
      <img :src="image" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    props: { type: Array, default: () => ['light', 'right', 'strong'] },
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    text: { type: Array, default: () => [] },
    image: { type: String, default: () => '' },
    link: { type: String, default: () => '' },
    button: { type: String, default: () => '' },
    wrap: { type: String, default: () => 'wrap' }
  }
}
</script>

<style scoped>
div.text {
  width: 80%;
  padding-top: 100px;
  text-align: center;
}

div.image img {
  margin-top: 10%;
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 700px) {
  div.image img {
    margin-left: 30%;
    margin-right: auto;
    width: 400px;
  }
  div.text {
    width: 100%;
  }
}

@media (min-width: 1100px) {
  div.image {
    width: 40%;
    margin-top: 10%;
  }
  div.text {
    width: 50%;
  }
  div.text {
    text-align: justify;
  }
}
</style>
