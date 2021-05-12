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
  margin-top: 10%;
}

p {
  margin-block: auto;
  margin-bottom: 20px;
  align-content: center;
  font: 30px;
}

.dot {
  height: 35px;
  width: 35px;
  background-color: black;
  border-radius: 70%;
  margin-block: auto;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
