<template>
  <div>
    <div class="card" v-if="link != ''">
      <NuxtLink :to="link">
        <div class="image">
          <img loading="lazy" :src="image" :alt="alt" />
        </div>
        <div class="text">
          <p>{{ title }}</p>
        </div>
      </NuxtLink>
    </div>
    <div class="card" v-if="link == ''">
      <div class="image">
        <img loading="lazy" :src="image" :alt="alt" />
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
    alt: { type: String, default: () => '' },
    link: { type: String, default: () => '' }
  }
}
</script>

<style scoped>
div.card {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-inline: 35px;
  margin-top: 20px;
}

div.image {
  width: 100%;
  max-height: 300px;
}

div.image img {
  max-width: 100%;
  height: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.text {
  width: 90%;
  text-decoration: none;
}

div.text p {
  display: block;
  margin-inline: 10px;
  width: 100%;
  word-wrap: wrap;
  text-align: center;
  font-weight: bold;
  word-break: keep-all;
}

@media (max-width: 600px) {
  div.card {
    margin-inline: 0px;
    margin-top: 50px;
  }
}
</style>
