<template>
  <div>
    <the-header />
    <Nuxt />
    <chat />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import Chat from '~/components/Chat.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
    Chat
  }
}
</script>

<style>
body {
  margin: 0px;
}

html {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

h1 {
  font-size: 60px;
}

h2 {
  font-size: 35px;
}

p {
  font-size: 23px;
}

.container {
  padding: 10px;
}

section {
  display: flex;
  padding: 50px;
  flex-direction: row;
}

section.light {
  background-color: white;
}

section.strong {
  background-color: #f2f2f2;
}

section.vertical {
  flex-direction: column;
  text-align: center;
}

section.horizontal {
  flex-direction: row;
}

button {
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  min-width: 100px;
  height: 50px;
  padding-inline: 30px;
  border-radius: 5px;
}

button.strong {
  color: white;
  border: none;
  background-color: black;
}

button.strong:hover {
  background-color: rgb(48, 46, 46);
}

button.light {
  color: black;
  border-color: black;
  border-radius: 5px;
  background-color: transparent;
}

button.light:hover {
  background-color: rgb(204, 204, 204);
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: grey;
}
</style>
