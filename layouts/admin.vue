<template>
  <div>
    <admin-navbar />
    <Nuxt />
  </div>
</template>

<script>
import AdminNavbar from '../components/AdminNavbar.vue'
export default {
  components: { AdminNavbar },
  middleware: 'auth',
  created() {
    if (this.$auth.user.role !== 'admin') {
      alert('Access denied!')
      this.$router.replace('/');
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt');
body{
  font-family: 'Prompt', sans-serif;
  background: url(https://img.freepik.com/free-photo/vaccine-vial-with-needle-syringe-background_53876-98427.jpg?size=626&ext=jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>