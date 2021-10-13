<template>
  <bg-card class="p-5">
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
            <div class="flex flex-row md:flex-col md:justify-between md:w-16">
              <nuxt-link
                to="/admin/EditVaccine"
                class="md:w-auto"
                @click="setEditingVaccine(vaccine)"
              >
                <button
                  class="
                    p-2
                    w-16
                    bg-green-500
                    rounded-xl
                    text-white
                    hover:text-black
                  "
                >
                  แก้ไข
                </button>
              </nuxt-link>
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
                @click="deleteVaccine(vaccine.idVaccine)"
              >
                ลบ
              </button>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </bg-card>
</template>

<script>
import BgCard from './BgCard.vue'
export default {
  components: { BgCard },
  props: ['vaccine'],
  data() {
    return {
      imageURL: `${process.env.BACKEND_URL}/vaccines/images`,
    }
  },
  methods: {
    getImage(imageName) {
      return `${this.imageURL}/${imageName}`
    },
    setEditingVaccine(vaccine) {
      // set vaccine to vuex
    },
    async deleteVaccine(idVaccine) {
      const del = confirm('Are you sure?')
      if (del) {
        await this.$axios.$delete(`/vaccines/${idVaccine}`).then(
          (response) => {
            alert('Delete succeeded!')
            window.location.reload()
          },
          (error) => {
            alert(error)
          }
        )
      }
    },
  },
}
</script>

<style>
</style>