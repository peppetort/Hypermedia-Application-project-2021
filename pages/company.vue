<template>
  <main class="container">
    <section class="vertical strong">
      <div>
        <h1>Company Name</h1>
      </div>
      <a href="#discover"><button class="strong">Discover more</button></a>
    </section>
    <card-section
      :props="['light', 'right']"
      :subtitle="'WHO WE ARE'"
      :text="[
        'Founded in Italy in 2000, today X is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in performance engineering, analytics, security and IoT.',
        'By working with some of the most demanding enterprise customers worldwide, X has systematically spun-off, and invested in, industry-leading software companies.'
      ]"
      :image="staticImages[0]"
    />
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
          :image="staticImages[1]"
        />
        <card-preview
          :title="'Engineering is at the core of our business'"
          :image="staticImages[2]"
        />
        <card-preview
          :title="'A company in which consulting and technology businesses coexist'"
          :image="staticImages[3]"
        />
      </div>
    </section>
  </main>
</template>

<script>
import CardSection from '~/components/TheSection.vue'
import CardPreview from '~/components/CardPreview.vue'
export default {
  components: { CardSection, CardPreview },
  async asyncData() {
    var milan = require('~/assets/company/milan.png')
    var value1 = require('~/assets/company/value-1.png')
    var value2 = require('~/assets/company/value-2.png')
    var value3 = require('~/assets/company/value-3.png')
    const staticImages = [milan, value1, value2, value3]
    return { staticImages }
  }
}
</script>
