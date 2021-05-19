<template>
  <div class="card">
    <div class="icon">
      <img :src="`data:image/png;base64,` + image" />
    </div>
    <div class="text">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    text: { type: String, default: () => '' },
    image: { type: String, default: () => '' }
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
  margin-top: 10px;
}

div.icon {
  width: 100%;
  height: 15%;
  padding-top: 20px;
}

div.icon img {
  width: auto;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.text {
  width: 100%;
}

div.text p {
  display: block;
  font-size: 17px;
  margin-inline: auto;
  width: 90%;
  word-wrap: wrap;
  word-break: break-all;
}

@media (max-width: 600px) {
  div.card {
    width: 80%;
    height: auto;
  }
}
</style>
