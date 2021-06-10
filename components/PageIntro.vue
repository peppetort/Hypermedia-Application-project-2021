<template>
  <section
    :class="`vertical animated  ${dimension}`"
    :style="`background-image: url(${gif})`"
  >
    <h1 v-if="title != ''">{{ title }}</h1>
    <div class="image" v-if="image != ''">
      <img loading="lazy" :src="image" :alt="alt" />
    </div>
    <div class="description">
      <h3>
        {{ subtitle }}
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    gif: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    alt: { type: String, default: () => '' },
    dimension: { type: String, default: () => 'large' }
  }
}
</script>

<style scoped>
section.animated {
  background-repeat: no-repeat;
  background-position: 50% -130px;
  background-color: black;
  justify-content: center;
  color: white;
}

section.large {
  height: 700px;
}

section.small {
  height: 500px;
}

div.image img {
  width: 450px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 600px) {
  div.image img {
    width: 300px;
  }
}
</style>
