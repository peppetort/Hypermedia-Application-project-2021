<template>
  <main class="container">
    <section class="vertical light">
      <h1>Ops</h1>
      <h2>It seems that the page you are looking for does not exist</h2>
      <NuxtLink to="/"><button class="strong">Home</button></NuxtLink>
    </section>
    <img id="cat" src="~/static/cat.png" />
  </main>
</template>

<style scoped>
#cat {
  margin-left: auto;
  margin-right: auto;
  max-width: 30%;
  height: auto;
  display: block;
}
</style>
