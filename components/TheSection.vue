<template>
  <section :class="`horizontal ${props[0]} ${props[1]}`">
    <div class="image" v-if="props[1] == 'right'">
      <img loading="lazy" :src="image" :alt="alt" />
    </div>
    <div class="text">
      <h1 v-if="title != ''">{{ title }}</h1>
      <h2 v-if="subtitle != ''">{{ subtitle }}</h2>
      <div class="description">
        <p v-for="p in text" :key="p">{{ p }}</p>
      </div>
      <NuxtLink :to="link" v-if="props[2] != undefined">
        <button :class="props[2]">{{ button }}</button></NuxtLink
      >
    </div>
    <div class="image" v-if="props[1] == 'left'">
      <img loading="lazy" :src="image" :alt="alt" />
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
    alt: { type: String, default: () => '' },
    link: { type: String, default: () => '' },
    button: { type: String, default: () => '' }
  }
}
</script>

<style scoped>
section.right {
  flex-wrap: wrap-reverse;
}

section.left {
  flex-wrap: wrap;
}

div.text {
  width: 50%;
  padding-top: 50px;
}

div.image {
  width: 50%;
  display: flex;
}

div.image img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-inline: auto;
  margin-top: auto;
  margin-bottom: auto;
}

/* @media (max-width: 1150px) {
  div.image {
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  div.text {
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
} */
</style>
