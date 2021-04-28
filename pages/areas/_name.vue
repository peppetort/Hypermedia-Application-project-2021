<template>
  <main class="container">
    <card-intro
      :background="'strong'"
      :title="this.title"
      :text="this.subtitle"
      :button="'Contact Us'"
      :image="require('~/static/areas/mokup_area-1.png')"
    >
    </card-intro>
    <section class="light">
      <div class="intro-text">
        <h2>Description</h2>
        <p>{{ this.description }}</p>
      </div>
      <div class="intro-image">
        <img :src="image" />
      </div>
    </section>
    <section class="features strong">
      <h2>Features</h2>
      <p>Solutions that matter for your organization​</p>
      <div class="cards">
        <feature-card
          :text="'prova prova provappppppppppppppppp'"
        ></feature-card>
      </div>
    </section>
  </main>
</template>

<script>
import CardIntro from '~/components/CardIntro.vue'
import FeatureCard from '~/components/FeautureCard.vue'
export default {
  components: { CardIntro, FeatureCard },
  data() {
    return {
      id: '',
      title: '',
      subtitle: '',
      description: ''
    }
  },
  async mounted() {
    const { name } = this.$route.params
    const { data } = await this.$axios.get(`/api/areas/${name}`)
    this.id = data.id
    this.title = data.title
    this.subtitle = data.subtitle
    this.description = data.description
  }
}
</script>

<style scoped>
div.intro-text {
  min-width: 400px;
  width: 50%;
  padding-top: 100px;
  padding-left: 100px;
}

div.intro-image {
}

section.features {
  flex-direction: column;
  text-align: center;
}

div.cards {
  display: flex;
  width: 600px;
  justify-content: space-between;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>
