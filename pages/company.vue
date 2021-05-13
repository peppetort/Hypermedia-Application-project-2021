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
      :props="['light', 'right', 'h2']"
      :title="'WHO WE ARE'"
      :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
      :image="'~/static/areas/areas-intro.webp'"
    />
    <section class="vertical strong">
      <div>
        <h2>OUR VALUES</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </section>
    <section class="horizontal strong">
      <!--TODO: rivedere-->
      <div class="card">
        <div class="cardImage"></div>
        <h4 class="cardName">Value 1</h4>
      </div>

      <div class="card">
        <div class="cardImage"></div>
        <h4 class="cardName">Value 2</h4>
      </div>

      <div class="card">
        <div class="cardImage"></div>
        <h4 class="cardName">Value 3</h4>
      </div>
    </section>
  </main>
</template>

<script>
import CardSection from '~/components/TheSection.vue'
export default {
  components: { CardSection }
}
</script>

<style scoped>
div.card {
  display: flex;
  flex-direction: column;
  margin-inline: 35px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
}

h4.cardName {
  text-align: center;
}

div.cardImage {
  background: black;
  width: 200px;
  height: 250px;
}
</style>
