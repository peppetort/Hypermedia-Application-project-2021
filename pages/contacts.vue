<template>
  <main class="container">
    <section class="vertical light">
      <h1>Contacts</h1>
      <div class="description">
        <p>
          Tell us about your issue so we can get you to the right people, as
          soon as possible.
        </p>
      </div>
    </section>
    <section class="horizontal strong">
      <div class="contactInfos" id="number">
        <h2>Call Us</h2>
        <p>Tel: +02 35467832</p>
        <p>Fax: +02 45623981</p>
      </div>
      <div class="verticalLine" />
      <div class="contactInfos">
        <h2>HEADQUARTER</h2>
        <p>Via San Vito, 9, 20123 MILAN (MI) - LOMBARDIA</p>
      </div>
    </section>
    <section class="horizontal light">
      <div class="text">
        <h2>Contact Us</h2>
        <form class="contact">
          <p>Name*</p>
          <input type="text" />
          <p>Surname*</p>
          <input type="text" />
          <p>Email*</p>
          <input type="email" />
          <p>Message*</p>
          <textarea type="text" />
        </form>
        <button class="strong">Send</button>
      </div>
      <div class="mapouter" id="map">
        <div class="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Via%20San%20Vito,%209,%20Milano&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
div.text {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  text-align: center;
}

div.contactInfos {
  width: 50%;
  text-align: center;
}

div.verticalLine {
  border-left: 3px solid black;
  height: auto;
}

div.mapouter {
  width: 80%;
}

div.gmap_canvas {
  background: none !important;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.gmap_canvas iframe {
  width: 100%;
  min-width: 100px;
  height: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

form.contact input {
  height: 35px;
  width: 300px;
  border-radius: 5px;
}

form.contact textarea {
  height: 150px;
  width: 300px;
  resize: none;
  border-radius: 5px;
  border: 2px solid;
}

@media (max-width: 1400px) {
  section.horizontal {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }

  div.text {
    padding-top: 0px;
    padding-left: 0px;
    text-align: center;
    padding-bottom: 20px;
  }
}
</style>
