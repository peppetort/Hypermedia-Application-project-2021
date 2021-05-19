<template>
  <main class="container">
    <section class="vertical strong">
      <div>
        <h1>TechToch</h1>
      </div>
      <a href="#discover"><button class="strong">Discover more</button></a>
    </section>
    <a href="about" />
    <card-section
      :props="['light', 'right']"
      :subtitle="'WHO WE ARE'"
      :text="[
        'Founded in Italy in 2000, today TechToch is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in performance engineering, analytics, security and IoT.',
        'By working with some of the most demanding enterprise customers worldwide, X has systematically spun-off, and invested in, industry-leading software companies.'
      ]"
      :image="'/company/milan.png'"
    />
    <a href="values" />
    <section class="vertical strong">
      <h2>OUR VALUES</h2>
      <p>
        We believe that science and engineering need to be seen as one. It is
        for this reason that we continuously focus on research, emerging ideas,
        and new technologies, routinely partnering with top academic and
        engineering research institutions.
      </p>
      <div class="cards">
        <card-preview
          :title="'Our recipe is simple and our goal is ambitious'"
          :image="'/company/value-1.png'"
        />
        <card-preview
          :title="'Engineering is at the core of our business'"
          :image="'/company/value-2.png'"
        />
        <card-preview
          :title="'A company in which consulting and technology businesses coexist'"
          :image="'/company/value-3.png'"
        />
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
