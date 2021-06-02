<template>
  <div class="footer">
    <div class="content">
      <h2>Want to discover more?</h2>
      <NuxtLink to="/contacts"
        ><button class="light">Contact Us</button></NuxtLink
      >
    </div>
    <div class="content">
      <div class="right">
        <img loading="lazy" src="/logo-long.svg" alt="company logo with name" />
        <p>2010 - 2021</p>
        <p>Privacy terms</p>
      </div>
      <div class="left">
        <div class="column">
          <NuxtLink to="/areas" class="title">Areas</NuxtLink>
          <NuxtLink
            v-for="area in areas"
            :key="area.id"
            :to="`/areas/${area.id}`"
            >{{ area.title }}</NuxtLink
          >
        </div>
        <div class="column">
          <NuxtLink to="/roles" class="title">Roles</NuxtLink>
          <NuxtLink
            v-for="role in roles"
            :key="role.id"
            :to="`/roles/${role.id}`"
            >{{ role.title }}</NuxtLink
          >
        </div>
        <div class="column">
          <NuxtLink to="/products" class="title">Products</NuxtLink>
          <NuxtLink
            v-for="area in areas"
            :key="area.id"
            :to="`/products//areas/${area.id}`"
            >{{ area.title }}</NuxtLink
          >
        </div>
        <div class="column">
          <NuxtLink to="/contacts" class="title">Contacts</NuxtLink>
          <NuxtLink to="/contacts#form">Contact us</NuxtLink>
          <NuxtLink to="/contacts#number">Phone Number</NuxtLink>
          <NuxtLink to="/contacts#map">Visit us</NuxtLink>
        </div>
        <div class="column">
          <NuxtLink to="/company" class="title">Company</NuxtLink>
          <NuxtLink to="/company#about">Who we are</NuxtLink>
          <NuxtLink to="/company#values">Our values</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areas: this.$store.state.areas,
      roles: this.$store.state.roles
    }
  }
}
</script>

<style scoped>
div.footer {
  padding: 10px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
}

div.content {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 100px;
  padding-top: 100px;
  padding-bottom: 50px;
}

div.content h2 {
  font-weight: bold;
}

div.left {
  min-width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

div.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  height: 150px;
}

div.column p {
  font-size: 16px;
}

div.column .title {
  font-weight: bold;
  margin-bottom: 10px;
}

@media (max-width: 1300px) {
  div.content {
    text-align: center;
    flex-direction: column;
    padding-inline: 0px;
    padding-top: 100px;
    padding-bottom: 0px;
  }

  div.left {
    display: none;
  }
}
</style>
