<template>
  <main class="container">
    <card-section
      :props="['light', 'left', 'strong']"
      :title="'OUR AREAS'"
      :text="[
        'When everyone and everything is connected, anything is possible. Build network access that\'s wireless-first, cloud-driven, data-optimized,and highly secure.'
      ]"
      :image="'/areas/areas.png'"
      :link="{ path: '/areas', hash: '#allAreas' }"
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

      <div class="links">
        <NuxtLink v-for="area in data" :key="area.id" :to="`/areas/${area.id}`"
          ><button class="strong">
            {{ area.title }}
          </button></NuxtLink
        >
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
    return { data }
  }
}
</script>
