<template>
  <div class="footer">
    <div class="top_bar">
      <h2 class="discover_more">Want to discover more?</h2>
      <a class="discover_more_button"
        ><button class="light">Discover more</button></a
      >
    </div>
    <div class="bottom_bar">
      <div class="copyright_section">
        <h3>NAME</h3>
        <p style="font-size = 1em">Copyright 2021</p>
        <a>Privacy - Terms</a>
      </div>
      <div class="bottom_links">
        <ul class="link_section">
          <li><h4 class="section_title">Company</h4></li>
          <li class="menu_item"><a>Who we are</a></li>
          <li class="menu_item"><a>Partners</a></li>
          <li class="menu_item"><a>Our values</a></li>
        </ul>
        <ul class="link_section">
          <li><h4 class="section_title">Contacts</h4></li>
          <li class="menu_item"><a>Contact us</a></li>
          <li class="menu_item"><a>Phone number</a></li>
          <li class="menu_item"><a>Visit us</a></li>
        </ul>
        <ul class="link_section">
          <li><h4 class="section_title">Roles</h4></li>
          <li class="menu_item"><a>Responsibles</a></li>
          <li class="menu_item"><a>Project managers</a></li>
          <li class="menu_item"><a>References</a></li>
        </ul>
        <ul class="link_section">
          <li><h4 class="section_title">Areas</h4></li>
          <li class="menu_item"><a>Network</a></li>
          <li class="menu_item"><a>Security</a></li>
          <li class="menu_item"><a>IOT</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul.link_section {
  display: inline-block;
  padding-right: 2em;
  padding-left: 2em;
  list-style-type: none;
}
li.menu_item {
  margin: 1.2em 0;
}

div.bottom_links {
  float: right;
  padding-right: 2em;
}

div.copyright_section {
  display: inline-block;
}

h4.section_title {
  margin-bottom: 1.2em;
}

h2.discover_more {
  display: inline-block;
}

button.light {
  float: right;
}

a.discover_more_button {
  float: right;
  vertical-align: middle;
}

div.footer {
  margin-top: 5em;
}
</style>
