<template>
  <div class="card">
    <div class="icon"></div>
    <div class="text">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    text: { type: String, default: () => '' }
  }
}
</script>

<style scoped>
div.card {
  border-width: 2px;
  border-color: black;
  border-style: solid;
  background: white;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-inline: 35px;
}

div.icon {
  width: 100%;
  height: 30%;
}

div.icon img {
  max-width: 90%;
  max-height: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.text {
  width: 100%;
}

div.text p {
  display: block;
  margin-inline: auto;
  width: 90%;
  word-wrap: wrap;
  word-break: break-all;
}
</style>
