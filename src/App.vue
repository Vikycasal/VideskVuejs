<template>
  <div id="app">
    <NavBar />
   
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar/NavBar.vue"

export default {
  name: 'app',
  components: {
    NavBar
  },
  async mounted() {
    // Users
    const userResponse = await fetch('/api/users');
    const users = await userResponse.json();
    // Reports
    const reportResponse = await fetch('/api/reports');
    const reports = await reportResponse.json();
  }
}
</script>
