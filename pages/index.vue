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
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt');

body {
  font-family: 'Prompt', sans-serif;
  background: url(../img/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>