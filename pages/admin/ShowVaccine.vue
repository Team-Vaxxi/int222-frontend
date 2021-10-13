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

    <div class="w-full flex justify-center">
      <div
        class="
          flex flex-col
          items-center
          gap-10
          md:grid
          grid-cols-2
          md:w-8/12
          mb-10
        "
      >
        <admin-vaccine-card
          v-for="vaccine in vaccineList"
          :key="vaccine.idVaccine"
          class="w-72 md:h-60 md:w-auto shadow-2xl"
        >
          <ul>
            <div class="flex flex-col md:flex-row">
              <!-- แทนกล่องรูป เปลี่ยนตัวแปร-->
              <li class="">
                <img class="ml-1 md:w-3/4" :src="getImage(vaccine.image)" />
              </li>
              <li class="mt-5">
                <span class="text-gray-900 font-bold text-lg lg:text-xl">
                  {{ vaccine.name }}
                </span>
                <div class="md:mt-5">
                  <div
                    class="flex flex-row md:flex-col md:justify-between md:w-16"
                  >
                    <button
                      class="
                        bg-green-500
                        p-2
                        rounded-xl
                        text-white
                        w-16
                        md:w-auto
                        hover:text-black
                      "
                    >
                      แก้ไข
                    </button>
                    <button
                      class="
                        bg-red-600
                        p-2
                        rounded-xl
                        text-white
                        ml-5
                        md:ml-0
                        md:mt-3
                        w-16
                        md:w-auto
                        hover:text-black
                      "
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </admin-vaccine-card>
      </div>
    </div>
  </div>
</template>

<script>
import AdminVaccineCard from '../../components/AdminVaccineCard.vue'
import BgCard from '../../components/BgCard.vue'

export default {
  components: { BgCard, AdminVaccineCard },
  data() {
    return {
      imageURL: `${process.env.BACKEND_URL}/vaccines/images`,
      vaccineList: [],
      imageList: [],
    }
  },
  methods: {
    getImage(imageName) {
      return `${this.imageURL}/${imageName}`
    },
  },
  async created() {
    console.log('-- created -- ');
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