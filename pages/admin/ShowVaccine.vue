<template>
  <div>
    <div class="flex justify-center">
      <bg-card class="w-1/6 m-10 bg-card hover:shadow-lg rounded-xl">
        <NuxtLink to="/admin/AddVaccine" class="flex justify-center">
          <h2 class="p-5 font-semibold text-lg">เพิ่มประเภทวัคซีน</h2>
        </NuxtLink>
      </bg-card>
    </div>

    <div class="w-full flex justify-center">
      <div
        class="
          justify-items-center
          grid md:grid-cols-2
          mx-10
          md:gap-10
        "
      >
        <admin-vaccine-card
          v-for="vaccine in vaccineList"
          :key="vaccine.idVaccine"
          :vaccine="vaccine"
          class="shadow-2xl rounded-xl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AdminVaccineCard from '../../components/AdminVaccineCard.vue'
import BgCard from '../../components/BgCard.vue'

export default {
  components: { BgCard, AdminVaccineCard },
  layout: 'admin',
  data() {
    return {
      vaccineList: [],
      imageList: [],
    }
  },
  async created() {
    this.vaccineList = await this.$axios.$get('/vaccines')
  },
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