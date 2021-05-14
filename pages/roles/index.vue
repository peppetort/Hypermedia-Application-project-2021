<template>
  <main class="container">
    <section class="vertical strong">
      <h1>Our Roles</h1>
      <p>
        We have a team of specialists for every need. Every day they create,
        test and produce cutting-edge products for your organization
      </p>
    </section>
    <div v-for="(role, index) in data" :key="role.id">
      <card-section
        v-if="index % 2 == 0"
        :props="['light', 'left', 'light']"
        :subtitle="role.title"
        :text="[role.description]"
        :image="`data:image/png;base64,${role.image}`"
        :link="`/roles/${role.id}`"
        :button="'Learn More'"
      />
      <card-section
        v-if="index % 2 != 0"
        :props="['strong', 'right', 'light']"
        :subtitle="role.title"
        :text="[role.description]"
        :image="`data:image/png;base64,${role.image}`"
        :link="`/roles/${role.id}`"
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
    const { data } = await $axios.get('/api/roles')
    return { data }
  }
}
</script>
