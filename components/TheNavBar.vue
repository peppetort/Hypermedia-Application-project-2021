<template>
  <div :class="`nav ${look}`">
    <div v-for="(p, index) in path" :key="p">
      <NuxtLink :to="p[0]">{{ p[1] }}</NuxtLink>
      <p v-if="index != path.length - 1">></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
div.nav {
  padding-bottom: 5px;
  padding-left: 30px;
  height: auto;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 59px;
  width: 100%;
  background: black;
}

div.nav > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  height: 30px;
}

div.nav p {
  color: white;
}

div.nav a {
  color: white;
  font-weight: bold;
  margin-right: 10px;
  font-size: 16px;
}
</style>
