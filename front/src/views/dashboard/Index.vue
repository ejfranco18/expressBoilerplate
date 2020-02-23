<template>
  <div id="dashboardIndex">
    <div class="nav-background">
      <NavBar/>
    </div>
    <router-view class="container"/>
  </div>
</template>

<script>
import NavBar from '@/views/dashboard/partials/Navbar.vue'

export default {
  name: 'dashboardIndex',
  components: {
    NavBar
  }
}
</script>
