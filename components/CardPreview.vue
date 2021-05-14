<template>
  <div>
    <NuxtLink :to="`${link}`" v-if="link != ''">
      <div class="card">
        <div class="image">
          <img :src="image" />
        </div>
        <div class="text">
          <p>{{ title }}</p>
        </div>
      </div>
    </NuxtLink>
    <div class="card" v-if="link == ''">
      <div class="image">
        <img :src="image" />
      </div>
      <div class="text">
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    link: { type: String, default: () => '' }
  }
}
</script>

<style scoped>
div.card {
  width: 100%;
  display: flex;
  flex-direction: column;
}

div.image {
  width: 100%;
  max-height: 300px;
}

div.image img {
  max-width: 100%;
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.text {
  width: 100%;
  text-decoration: none;
}

div.text p {
  display: block;
  margin-inline: 10px;
  width: 100%;
  word-wrap: wrap;
  text-align: center;
  font-weight: bold;
}

@media (min-width: 900px) {
  div.card {
    width: 300px;
    margin-inline: 35px;
  }
}
</style>
