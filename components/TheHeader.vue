<template>
  <div class="header">
    <div class="logo">
      <NuxtLink to="/">
        <img src="~/static/logo.png" />
      </NuxtLink>
    </div>
    <div class="nav">
      <div class="dropdown">
        <NuxtLink to="/areas">Areas</NuxtLink>
        <div class="dropdown-content">
          <NuxtLink
            v-for="area in areas"
            :key="area.id"
            :to="`/areas/${area.id}`"
            >{{ area.title }}</NuxtLink
          >
        </div>
      </div>
      <div class="dropdown">
        <NuxtLink to="/products">Products</NuxtLink>
        <div class="dropdown-content">
          <NuxtLink
            v-for="area in areas"
            :key="area.id"
            :to="`/products/area/${area.id}`"
            >{{ area.title }} products</NuxtLink
          >
        </div>
      </div>
      <div class="dropdown">
        <NuxtLink to="/roles">Roles</NuxtLink>
        <div class="dropdown-content">
          <NuxtLink to="/roles/0">Responsible of Area</NuxtLink>
          <NuxtLink to="/roles/1">Project Manager</NuxtLink>
          <NuxtLink to="/roles/2">Reference for Assistence</NuxtLink>
        </div>
      </div>
      <NuxtLink to="/company">Company</NuxtLink>
      <NuxtLink to="/contacts">Contacts</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areas: ''
    }
  },
  async mounted() {
    const { data } = await this.$axios.get('/api/areas')
    this.areas = data
  }
}
</script>

<style scoped>
div.header {
  height: 50px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
}

div.logo {
  height: 100%;
  width: 60px;
}

div.logo img {
  width: auto;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

div.nav {
  height: 100%;
  min-width: 530px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 60px;
}

div.nav a {
  text-align: center;
  border-radius: 2px;
  padding: 20px;
  font-weight: bold;
}

div.nav a:hover {
  background: black;
  color: white;
}

div.dropdown-content {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 65px;
  background-color: #f2f2f2;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

div.dropdown-content a {
  text-align: left;
}

.dropdown:hover .dropdown-content {
  display: flex;
}

.dropdown:hover > a {
  background: black;
  color: white;
}
</style>
