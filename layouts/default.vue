<template>
  <div>
    <the-header />
    <Nuxt />
    <chat :chatList="list" />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import Chat from '~/components/Chat.vue'
import MMCCMixin from '~/mixins/mmcc-mixin'
export default {
  components: {
    TheHeader,
    TheFooter,
    Chat
  },
  mixins: [MMCCMixin]
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

main {
  margin-top: 60px;
}

h1 {
  font-size: 60px;
}

h2 {
  font-size: 35px;
  font-weight: bold;
}

p {
  font-size: 23px;
}

section {
  display: flex;
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
  align-items: center;
  padding-bottom: 30px;
}

section.horizontal {
  flex-direction: row;
  padding: 40px;
  padding-inline: 80px;
}

div.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}

div.description {
  width: 80%;
}

div.links {
  display: flex;
  flex-direction: row;
  width: 650px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}
div.grid {
  display: grid;
  padding-left: 5%;
  padding-right: 5%;
  grid-gap: 5%;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, 100%);
  justify-content: center;
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
  margin-top: 10px;
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

@media (max-width: 800px) {
  div.links {
    flex-direction: column;
    align-items: center;
    width: auto;
  }
}

@media (max-width: 1300px) {
  div.cards {
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 200px) {
  div.grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 700px) {
  div.grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1200px) {
  div.grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1500px) {
  div.grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
