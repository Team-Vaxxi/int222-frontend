<template>
  <div>
    <default-navbar></default-navbar>
    <authentication></authentication>
  </div>
</template>
<script>
import DefaultNavbar from '~/components/DefaultNavbar.vue'
import authentication from '~/pages/authen/authentication.vue'
export default {
  components: { authentication },
  component: { DefaultNavbar}
}
</script>
<style>

</style>