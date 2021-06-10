<template>
  <section :class="`vertical animated  ${dimension}`">
    <video
      v-if="loop == true"
      :src="video"
      type="video/mp4"
      autoplay
      muted
      loop
    />
    <video v-if="loop == false" :src="video" type="video/mp4" autoplay muted />
    <h1 v-if="title != ''">{{ title }}</h1>
    <div class="image" v-if="image != ''">
      <img loading="lazy" :src="image" :alt="alt" />
    </div>
    <div class="description">
      <h3>
        {{ subtitle }}
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    video: { type: String, default: () => '' },
    loop: { type: Boolean, default: () => true },
    image: { type: String, default: () => '' },
    alt: { type: String, default: () => '' },
    dimension: { type: String, default: () => 'large' }
  }
}
</script>

<style scoped>
section.animated {
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  color: white;
}

section.large {
  height: 700px;
}

section.small {
  height: 500px;
}

section.animated video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

div.image img {
  width: 450px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 600px) {
  div.image img {
    width: 300px;
  }
}
</style>
