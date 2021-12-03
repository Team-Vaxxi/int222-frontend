<template>
  <bg-card class="w-full m-5">
    <div>
      <div>
        <img class="w-full h-36 object-cover rounded-t-lg" :src="getImage(vaccine.image)" />
      </div>
      <div class="flex justify-center">
        <span class="text-gray-900 font-bold text-lg lg:text-xl">
          {{ vaccine.name }}
        </span>
      </div>
      <div class="flex">
        <div class="flex-auto">
          <nuxt-link
            to="/admin/EditVaccine"
            @click.native="setEditingVaccine(vaccine)"
          >
            <button
              class="
                m-3
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
        </div>
        <div class="flex-initial">
          <button
            class="
              m-3
              p-2
              w-16
              bg-red-600
              rounded-xl
              text-white
              hover:text-black
            "
            @click="deleteVaccine(vaccine.idVaccine)"
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
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
    // set vaccine to vuex
    setEditingVaccine(vaccine) {
      const imageURL = this.getImage(vaccine.image)
      this.$store.commit('vaccine/setEditingVaccine', vaccine)
      this.$store.commit('vaccine/setImageURL', imageURL)
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