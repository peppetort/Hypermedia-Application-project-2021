<template>
  <section class="vertical animated" :style="`background-image: url(${image})`">
    <div class="title">
      <h1>{{ title }}</h1>
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
    image: { type: String, default: () => '' }
  }
}
</script>

<style scoped>
div.title {
  padding: 10px;
  background-color: black;
  text-align: center;
  justify-content: center;
}

section.animated {
  background-repeat: no-repeat;
  background-position: 50% -130px;
  background-color: black;
  height: 700px;
  justify-content: center;
  color: white;
}
</style>
