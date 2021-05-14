<template>
  <main class="container">
    <card-section
      :props="['light', 'left', 'strong']"
      :title="'OUR AREAS'"
      :text="[
        'When everyone and everything is connected, anything is possible. Build network access that\'s wireless-first, cloud-driven, data-optimized,and highly secure.'
      ]"
      :image="data.staticImages[0]"
      :link="'#allAreas'"
      :button="'Discover more'"
    />
    <section class="vertical strong">
      <a name="allAreas" />
      <h3>Areas</h3>
      <p>
        From networking and data center to collaboration and security, we have
        IT solutions to meet your organization's needs.<br />
        Find out how we can help.
      </p>
      <div class="l">
        <div class="links">
          <NuxtLink
            v-for="area in data"
            :key="area.id"
            :to="`/areas/${area.id}`"
            ><button class="strong btn">
              {{ area.title }}
            </button></NuxtLink
          >
        </div>
      </div>
    </section>
    <div v-for="(area, index) in data" :key="area.id">
      <card-section
        v-if="index % 2 != 0"
        :props="['strong', 'left', 'light']"
        :subtitle="area.title"
        :text="[area.subtitle]"
        :image="`data:image/png;base64,${area.main_image}`"
        :link="`/areas/${area.id}`"
        :button="'Learn More'"
      />
      <card-section
        v-if="index % 2 == 0"
        :props="['light', 'right', 'light']"
        :subtitle="area.title"
        :text="[area.subtitle]"
        :image="`data:image/png;base64,${area.main_image}`"
        :link="`/areas/${area.id}`"
        :button="'Learn More'"
        :wrap="'wrap-reverse'"
      />
    </div>
  </main>
</template>

<script>
import CardSection from '~/components/TheSection.vue'
export default {
  components: { CardSection },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/areas')
    var image = require('~/assets/areas/areas.png')
    data.staticImages = [image]
    return { data }
  }
}
</script>

<style scoped>
div.l {
  display: flex;
}
button {
  text-align: center;
  display: block;
  height: 80px;
  width: 140px;
  margin-top: 10px;
}
div.links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
  justify-content: space-between;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>
