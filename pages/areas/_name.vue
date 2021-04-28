<template>
  <main class="container">
    <card-intro
      :background="'strong'"
      :title="'AREA TITLE'"
      :text="'Short overview of the area'"
      :button="'Contact Us'"
      :image="require('~/static/areas/mokup_area-1.png')"
    >
    </card-intro>
  </main>
</template>

<script>
import CardIntro from '~/components/CardIntro.vue';
export default {
  components: { CardIntro },
};
</script>
