<template>
  <main class="container">
    <section class="vertical strong">
      <div>
        <h1>Company Name</h1>
        <p>Lorem ipsum sit amet, consectetur</p>
      </div>
      <a href="#discover"><button class="strong">Discover more</button></a>
    </section>

    <section class="horizontal light">
      <a name="discover" />
      <div class="image"></div>

      <div class="text">
        <h2>WHO WE ARE</h2>
        <p>
          Ciao noi siamo i più fighi sto freestylando perchè non mi va di
          cercare e copincollare il lorem ipsum yo senti che rime le stampo
          meglio di un epson
        </p>
        <p class="subParagraph">
          Yo ah si continuo col freestyle no non mi fermare dai, senti questi
          versi fuori da questo mondo anzi fuori dall'universo
        </p>
      </div>
    </section>

    <section class="vertical strong">
      <div>
        <h2>OUR VALUES</h2>
        <p>
          Ah, si, sono di nuovo io ascolta ste parole zio fidati di me oggi
          rappo sul tè, quello verde, quello bianco, quello sordo, quello stanco
        </p>
      </div>
    </section>

    <section class="horizontal strong">
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

<style scoped>
div.text {
  min-width: 400px;
  width: 50%;
  padding-left: 100px;
}

div.image {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}

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
