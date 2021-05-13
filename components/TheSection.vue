<template>
  <section :class="`horizontal ${props[0]}`">
    <div class="image" v-if="props[1] == 'right'">
      <img :src="image" />
    </div>
    <div class="text">
      <h2 v-if="props[2] == 'h2'">{{ title }}</h2>
      <h1 v-if="props[2] == 'h1'">{{ title }}</h1>
      <p>{{ text }}</p>
      <NuxtLink :to="link" v-if="props[3] != undefined">
        <button :class="props[3]">{{ button }}</button></NuxtLink
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
    props: { type: Array, default: () => ['light', 'right', 'h2', 'strong'] },
    title: { type: String, default: () => '' },
    text: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    link: { type: String, default: () => '' },
    button: { type: String, default: () => '' }
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
