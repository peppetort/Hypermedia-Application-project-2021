<template>
  <div class="header">
    <div class="logo"></div>
    <div class="bar">
      <!--
        <NuxtLink to="/pages/areas/"> <p class="menu_link">Area</p> </NuxtLink>
        <NuxtLink to="/pages/products/"> <p class="menu_link">Products</p> </NuxtLink>
        <NuxtLink to="/pages/roles/"> <p class="menu_link">Roles</p> </NuxtLink>
        <NuxtLink to="/pages/company"> <p class="menu_link">Company</p> </NuxtLink>
        <NuxtLink to="/pages/contacts"> <p class="menu_link">Contacts</p> </NuxtLink> -->
      <ul class="link_list">
        <li><a href="/company" class="menu_item">Company</a></li>
        <li><a href="/contacts" class="menu_item">Contacts</a></li>
        <li><a href="/areas" class="menu_item">Areas</a></li>
        <li><a href="/products" class="menu_item">Products</a></li>
        <li><a href="/roles" class="menu_item">Roles</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
div.header {
  height: 50px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  float: right;
  float: center;
}

.menu_item {
  display: block;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: black;
}

div.logo {
  background-color: black;
  width: 100px;
  height: 50px;
  float: left;
}

/*
a {
    text-align: center;
    display: inline-block;
}
*/
</style>
