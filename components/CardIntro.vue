<template>
  <section :class="`intro ${background}`">
    <div class="intro-text">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
      <a :href="link"><button class="strong">{{ button }}</button></a>
    </div>
    <div class="intro-image">
      <img :src="image" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    background: { type: String, default: () => '' },
    title: { type: String, default: () => '' },
    text: { type: String, default: () => '' },
    button: { type: String, default: () => '' },
    link: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
  },
};
</script>

<style scoped>
div.intro-text {
  min-width: 400px;
  width: 50%;
  padding-top: 100px;
  padding-left: 100px;
}

div.intro-image {
}

div.intro-image img {
  max-width: 90%;
  max-height: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
