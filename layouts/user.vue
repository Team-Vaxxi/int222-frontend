<template>
  <div>
      <user-navbar></user-navbar>
       <Nuxt />
  </div>
</template>

<script>
import UserNavbar from '~/components/UserNavbar.vue'
export default {
  components: { UserNavbar },
  middleware: 'auth',
  created() {
    if (this.$auth.user.role !== 'user') {
      alert('Access denied!')
      this.$router.replace('/admin/ShowVaccine');
    }
  }
}
</script>
