<template>
  <main class="container">
    <section class="vertical strong">
      <div>
        <h1>Company Name</h1>
        <p>Lorem ipsum sit amet, consectetur</p>
      </div>
      <a href="#discover"><button class="strong">Discover more</button></a>
    </section>
    <card-section
      :props="['light', 'right']"
      :subtitle="'WHO WE ARE'"
      :text="[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ]"
      :image="'~/static/areas/areas-intro.webp'"
    />
    <section class="vertical strong">
      <h2>OUR VALUES</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div class="cards">
        <card-preview :title="'Value 1'" :image="``" />
        <card-preview :title="'Value 2'" :image="``" />
        <card-preview :title="'Value 3'" :image="``" />
      </div>
    </section>
  </main>
</template>

<script>
import CardSection from '~/components/TheSection.vue'
import CardPreview from '~/components/CardPreview.vue'
export default {
  components: { CardSection, CardPreview }
}
</script>
