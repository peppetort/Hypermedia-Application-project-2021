<template>
  <div class="card">
    <div class="icon"></div>
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
  border: black;
  background: white;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
}

div.icon {
  width: 100%;
  height: 30%;
  background: red;
}

div.icon img {
  max-width: 90%;
  max-height: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.text {
  background: blue;
  width: 100%;
  padding: 20px;
  text-align: center;
}
</style>
