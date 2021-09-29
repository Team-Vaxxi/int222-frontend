<template>
  <div>
    <div class="flex justify-center">
      <bg-card class="w-1/6 m-10 bg-card hover:shadow-lg"
        ><NuxtLink to="/admin/AddVaccine" class="flex justify-center"
          ><h2 class="p-5 font-semibold text-lg">
            เพิ่มประเภทวัคซีน
          </h2></NuxtLink
        ></bg-card
      >
    </div>
    <div class="flex justify-center">
      <div class="flex flex-row">
        <admin-vaccine-card />
      </div>
    </div>
  </div>
</template>

<script>
import AdminVaccineCard from '../../components/AdminVaccineCard.vue'
import BgCard from '../../components/BgCard.vue'
export default {
  components: { BgCard, AdminVaccineCard },
}
</script>

<style>
h2 {
  color: #10afb9;
}
@media (min-width: 320px) {
  .bg-card {
    width: 55%;
  }
}
@media (min-width: 768px) {
  .bg-card {
    width: 30%;
  }
}
@media (min-width: 1024px) {
  .bg-card {
    width: 20%;
  }
}
@media (min-width: 1440px) {
  .bg-card {
    width: 15%;
  }
}
</style>