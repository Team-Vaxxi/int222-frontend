<template>
  <div class="w-full">
    <div class="grid md:grid-cols-5 md:justify-items-center w-full">
      <bg-card class="md:col-start-2 md:col-end-5 md:mt-5 p-2 md:p-5">
        <form @submit.prevent="orderVaccine">
          <!-- image -->
          <div>
            <img
              class="md:w-full md:h-1/6 object-cover rounded-xl"
              :src="getImage(vaccine.image)"
            />
          </div>
          <!-- main  -->
          <div>
            <!-- vaccine name  and price -->
            <div class="flex mt-5">
              <div class="flex-auto self-center">
                <h1 class="text-5xl md:text-5xl font-extrabold">
                  {{ vaccine.name }}
                </h1>
              </div>
              <div class="flex-initial self-center">
                <div class="text-lg md:text-xl">ราคา</div>
                <div class="mb-5">
                  <p class="text-3xl md:text-4xl">฿{{ vaccine.price }}</p>
                </div>
              </div>
            </div>

            <!-- location -->
            <div class="mt-3 text-lg md:text-xl font-extrabold">
              <div>สถานที่สะดวกฉีด</div>
              <div
                v-for="location in vaccine.locations"
                :key="location.idLocation"
                class="mt-1 text-gray-900"
              >
                <label>
                  <input
                    v-model="selectedLocation"
                    type="radio"
                    class="radio"
                    name="location"
                    :value="location.idLocation"
                  />
                  {{ location.name }}
                </label>
              </div>
            </div>

            <!-- description -->
            <div class="mt-5">
              <p class="text-lg font-extrabold md:text-xl">รายละเอียด</p>
              <p class="mt-1 md:mt-3 text-gray-900 md:text-lg">
                {{ vaccine.description }}
              </p>
            </div>
          </div>

          <!-- buy and back button -->
          <div class="mt-5">
            <div>
              <button
                type="submit"
                class="
                  group
                  relative
                  w-full
                  flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  text-lg
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                จองวัคซีน
              </button>
            </div>
            <div class="mt-2">
              <Nuxt-link to="/user/home">
                <button
                  type="button"
                  class="
                    group
                    relative
                    w-full
                    flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    text-l
                    font-medium
                    rounded-md
                    text-indigo-600
                    bg-white
                    border-indigo-700
                    hover:bg-indigo-700 hover:text-white
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                    mt-2
                  "
                >
                  <span
                    class="absolute left-0 inset-y-0 flex items-center pl-3"
                  >
                  </span>
                  กลับเข้าสู่หน้าเลือกวัคซีน
                </button>
              </Nuxt-link>
            </div>
          </div>
        </form>
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
      user: Object,
      selectedLocation: null,
      vaccine: this.$store.state.vaccine.vaccine,
      imageURL: `${process.env.BACKEND_URL}/vaccines/images`,
    }
  },
  created() {
    this.vaccine = this.$store.state.vaccine.vaccine
    this.user = { ...this.$auth.user }
    this.user.password = null
  },
  methods: {
    getImage(imageName) {
      return `${this.imageURL}/${imageName}`
    },
    async orderVaccine() {
      if (this.user.vaccine === null) {
        if (this.selectedLocation === null) {
          alert('Please select the location')
        } else {
          const tempUser = this.user
          tempUser.vaccine = this.vaccine.idVaccine
          tempUser.location = this.selectedLocation
          tempUser.isOrder = '1'
          await this.$axios.$put(`/users/add/${this.user.idUser}`, tempUser).then(
            (response) => {
              this.user.vaccine = tempUser.vaccine
              this.user.location = tempUser.location
              this.user.isOrder = tempUser.isOrder
              this.$auth.setUser(this.user)
              alert('Vaccine has been ordered!')
              this.$router.replace('/user/personal')
            },
            (error) => {
              alert(error.response.data.error)
            }
          )
        }
      } else {
        alert("You can't order anymore vaccine!")
      }
    },
  },
}
</script>

<style>
h1 {
  color: #106f8c;
}
</style>