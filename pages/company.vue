<template>
  <main class="container">
    <page-intro
      :title="'TechToch'"
      :subtitle="'TechToch technology is creating a world of potential'"
      :video="'/company/work.mp4'"
      :dimension="'small'"
    />
    <section class="vertical light">
      <h2>WHO WE ARE</h2>
      <p>
        Founded in Italy in 2000, today TechToch is a multinational group that
        focuses its consulting offering on hard technology challenges with
        large-scale business impact in performance engineering, analytics,
        security and IoT.
      </p>
      <p>
        By working with some of the most demanding enterprise customers
        worldwide, X has systematically spun-off, and invested in,
        industry-leading software companies.
      </p>
    </section>
    <section class="vertical strong" id="values">
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
          :alt="'Image of value number 1 of the company'"
        />
        <card-preview
          :title="'Engineering is at the core of our business'"
          :image="'/company/value-2.png'"
          :alt="'Image of value number 2 of the company'"
        />
        <card-preview
          :title="'A company in which consulting and technology businesses coexist'"
          :image="'/company/value-3.png'"
          :alt="'Image of value number 3 of the company'"
        />
      </div>
    </section>
  </main>
</template>

<script>
import CardPreview from '~/components/CardPreview.vue'
import PageIntro from '~/components/PageIntro.vue'
export default {
  components: { CardPreview, PageIntro }
}
</script>
