<template>
  <div>
    <show-vaccine />
    <!-- <admin /> -->
  </div>
</template>

<script>
import ShowVaccine from './admin/ShowVaccine.vue'
export default {
  components: { ShowVaccine },
  middleware: 'auth'
}
</script>

