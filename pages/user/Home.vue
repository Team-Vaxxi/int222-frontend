<template>
  <div class="w-full flex justify-center mt-5 md:mt-10">
    <div class="
          grid md:grid-cols-3
          justify-items-center
          w-full
          ">

      <bg-card v-for="vaccine in vaccineList" :key="vaccine.idVaccine"
      class="hover:shadow-lg m-3 md:m-5 w-1/2 md:w-5/6 bgcard rounded-xl "
      >
      <Nuxt-link to="/user/Product" @click.native="sentVaccineProductPage(vaccine)">
        <div>
          <div><img class="md:w-full md:h-36 object-cover rounded-t-lg " :src="getImage(vaccine.image)" /></div>
          <div class="text-center">{{ vaccine.name }}</div>
        </div>
        </Nuxt-link>
      </bg-card>
    </div>
  </div>
</template>

<script>
import BgCard from '~/components/BgCard.vue'

export default {
  components: { BgCard },
  layout: 'user',
  data() {
    return {
      vaccineList: [],
      imageList: [],
      imageURL: `${process.env.BACKEND_URL}/vaccines/images`,
    }
  },
  async created() {
    this.vaccineList = await this.$axios.$get('/vaccines')
  },
  methods: {
    getImage(imageName) {
      return `${this.imageURL}/${imageName}`
    },

    sentVaccineProductPage(vaccine){
      console.log('sent');
      console.log(vaccine.image);
      const imageURL = this.getImage(vaccine.image)
      console.log(imageURL);
      this.$store.commit('vaccine/setEditingVaccine', vaccine)
      this.$store.commit('vaccine/setImageURL', imageURL)
    }
  },
}
</script>

<style>
</style>