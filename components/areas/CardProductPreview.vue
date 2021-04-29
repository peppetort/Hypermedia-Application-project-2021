<template>
  <div class="card">
    <div class="image"></div>
    <div class="text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: () => '' }
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
  background-color: black;
  width: 100%;
  height: 300px;
}

div.text {
  width: 100%;
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
