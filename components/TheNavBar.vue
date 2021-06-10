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
    path: { type: Array, default: () => [] },
    look: { type: String, default: () => 'light' }
  }
}
</script>

<style scoped>
div.nav {
  padding-top: 10px;
  padding-left: 10px;
  height: auto;
  display: flex;
  flex-direction: row;
}

div.light {
  background-color: white;
}

div.strong {
  background-color: #f2f2f2;
}

div.nav > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  height: 30px;
}

div.nav a {
  font-weight: bold;
  margin-right: 10px;
  font-size: 16px;
}
</style>
