<template>
  <section :class="`horizontal ${props[0]}`">
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
    button: { type: String, default: () => '' }
  }
}
</script>

<style scoped>
div.text {
  width: 50%;
  padding-top: 80px;
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

@media (max-width: 1400px) {
  section.horizontal {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }

  div.text {
    padding-top: 0px;
    padding-left: 0px;
    text-align: center;
    padding-bottom: 20px;
  }

  div.image {
    padding-top: 20px;
  }
}
</style>
