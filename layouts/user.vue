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

}
</script>
