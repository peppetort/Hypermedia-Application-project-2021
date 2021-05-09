<template>
  <main class="container">
    <section class="vertical light">
      <h1>Contacts</h1>
      <p>
        Tell us about your issue so we can get you to the right people, as soon
        as possible.
      </p>
    </section>
    <section class="horizontal strong">
      <div class="contactInfos">
        <a name="number" />
        <h2>Call Us</h2>
        <p>+02 35467832</p>
      </div>
      <div class="verticalLine" />
      <div class="contactInfos">
        <h2>Send Us a Message</h2>
        <a href="#form"><button class="strong">Send Message</button></a>
      </div>
    </section>
    <section class="horizontal light">
      <div class="text">
        <h2>HEADQUARTER</h2>
        <p>Via San Vito, 9, 20123 MILAN (MI) - LOMBARDIA</p>
      </div>
      <div class="mapouter">
        <a name="map" />
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
    <section class="vertical strong">
      <a name="form" />
      <h2>Contact Us</h2>
      <form class="contact">
        <p>Name*</p>
        <input type="text" />
        <p>Surname*</p>
        <input type="text" />
        <p>Email*</p>
        <input type="email" />
        <p>Message*</p>
        <textarea />
        <button class="strong">Submit</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
div.text {
  min-width: 400px;
  width: 50%;
  padding-top: 100px;
  padding-left: 100px;
}

div.contactInfos {
  min-width: 400px;
  width: 50%;
  text-align: center;
}

div.verticalLine {
  border-left: 3px solid black;
  height: auto;
}

div.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
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
  height: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

form.contact {
  padding: 10px;
  margin-inline: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
}

form.contact input {
  height: 35px;
  width: 200px;
  border-radius: 5px;
}

form.contact textarea {
  resize: none;
  height: 200px;
  width: 400px;
  border-radius: 5px;
}

form.contact button {
  margin-top: 50px;
}
</style>
