<template>
  <main class="container">
    <page-intro
      :title="'Our Team'"
      :subtitle="'We have a team of specialists for every need. Every day they create, test and produce cutting-edge products for your organization'"
      :image="'/roles/work.gif'"
    />
    <section class="vertical light">
      <div class="cards">
        <card-preview
          v-for="role in data"
          :key="role.id"
          :title="`${role.title}`"
          :image="`data:image/png;base64,${role.icon}`"
          :alt="`${role.title} image`"
          :link="`/roles/${role.id}`"
        />
      </div>
    </section>
  </main>
</template>

<script>
import PageIntro from '~/components/PageIntro.vue'
import CardPreview from '~/components/CardPreview.vue'
export default {
  components: { CardPreview, PageIntro },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/roles')
    return { data }
  }
}
</script>
