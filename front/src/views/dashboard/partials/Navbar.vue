<template>
  <nav class="navbar navbar-expand-lg container">
    <router-link class="navbar-brand" :to='{ name: "home_path" }'><font-awesome-icon icon="home" /></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link active" :to='{ name: "categories_path" }'>Categories</router-link>
        <router-link class="nav-item nav-link active" :to='{ name: "movies_path" }'>Movies</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'dashboardNavbar',
    methods: {
      // logout() {
      //   this.$store.dispatch('doLogout')
      //   this.$router.push({ name: 'login_path' })
      // }
    }
  }
</script>
