<template>
  <div>
    <home />
    <!-- <admin /> -->
  </div>
</template>

<script>
import Home from './user/Home.vue'
export default {
  components: { Home },
  layout: 'user',
  middleware: 'auth'
}
</script>

