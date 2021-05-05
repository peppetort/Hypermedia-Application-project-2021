<template>
  <div class="card">
    <p>{{ text }}</p>
    <span class="dot"></span>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
.card {
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

.dot {
  height: 25px;
  width: 25px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
}
</style>
