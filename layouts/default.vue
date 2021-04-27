<template>
  <div>
    <!-- <the-header></the-header> -->
    <Nuxt />
    <!-- <the-footer></the-footer> -->
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
html {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

.container {
  padding: 10px;
}

section{
  display: flex;
  padding: 50px;
  flex-direction: row;
}

button {
  text-align: center;
  height: 50px;
  padding-inline: 30px;
  border-radius: 5px;
}

button.strong {
  color: white;
  border: none;
  background-color: black;
}

button.light {
  color: black;
  border-color: black;
  border-radius: 5px;
  background-color: white;
}


</style>

