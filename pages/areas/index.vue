<template>
  <main class="container">
    <page-intro
      :title="'OUR AREAS'"
      :subtitle="'When everyone and everything is connected, anything is possible. Build network access that\'s wireless-first, cloud-driven, data-optimized,and highly secure.'"
      :video="'/areas/work.mp4'"
      :dimension="'small'"
    />
    <section class="vertical strong">
      <h2>Areas</h2>
      <p>
        From networking and data center to collaboration and security, we have
        IT solutions to meet your organization's needs.<br />
        Find out how we can help.
      </p>
      <div class="links">
        <NuxtLink
          v-for="area in data.areas"
          :key="area.id"
          :to="`/areas/${area.id}`"
          ><button class="strong">
            {{ area.title }}
          </button></NuxtLink
        >
      </div>
    </section>
    <div v-for="(area, index) in data.areas" :key="area.id">
      <card-section
        v-if="index % 2 != 0"
        :props="['strong', 'left', 'light']"
        :subtitle="area.title"
        :text="[area.subtitle]"
        :image="`data:image/png;base64,${area.main_image}`"
        :alt="`Image for ${area.title}`"
        :link="`/areas/${area.id}`"
        :button="'Discover More'"
      />
      <card-section
        v-if="index % 2 == 0"
        :props="['light', 'right', 'light']"
        :subtitle="area.title"
        :text="[area.subtitle]"
        :image="`data:image/png;base64,${area.main_image}`"
        :alt="`Image for ${area.title}`"
        :link="`/areas/${area.id}`"
        :button="'Discover More'"
      />
    </div>
  </main>
</template>

<script>
import CardSection from '~/components/TheSection.vue'
import PageIntro from '~/components/PageIntro.vue'
export default {
  components: { CardSection, PageIntro },
  async asyncData({ $axios }) {
    const areas = (await $axios.get('/api/areas')).data
    const data = { areas }
    return { data }
  }
}
</script>
