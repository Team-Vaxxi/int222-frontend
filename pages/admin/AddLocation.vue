<template>
  <div>
    <!-- กล่องกรอกเพิ่มสถานที่-->

    <div class="flex justify-center">
      <bg-card class="w-3/5 bgcard mt-10 lg:w-1/2 p-5"
        ><h1 class="text-center font-extrabold text-xl p-5">
          เพิ่มสถานที่ให้บริการวัคซีน
        </h1>
        <form @submit.prevent="validateForm">
          <div class="flex flex-col justify-between md:flex-row p-3 md:p-3">
            <label for="adding-place" class="font-semibold w-auto"
              >ชื่อสถานที่ให้บริการวัคซีน</label
            >
            <!--  input location -->
            <input
              id="adding-place"
              v-model="addingLocation.name"
              type="text"
              name="addingLocation-name"
              placeholder="ชื่อสถานที่"
              class="
                text
                bg-white
                opacity-100
                hover:shadow-xl
                placeholder-transparent
                p-2
                w-full
                lg:w-2/3
              "
            />
          </div>

          <div class="flex justify-end">
            <input type="submit" value="เพิ่ม" class="save-button" />
          </div>
        </form>
      </bg-card>
    </div>

    <!-- show locations -->
    <div class="flex justify-center">
      <bg-card class="m-5 w-3/5 bgcard mt-10 lg:w-1/2 p-5">
        <h1 class="text-center font-extrabold text-xl p-5">
          สถานที่ให้บริการวัคซีนที่มีในระบบขณะนี้
        </h1>
        <div
          v-for="(location, index) in tempLocations"
          :key="location.idLocation"
          class="flex mt-3"
        >
          <div class="flex-auto self-center">
            <span class="align-middle inline-block"
              >{{ index + 1 }}. {{ location.name }} </span
            >
          </div>
          <div class="flex-initial">
            <button
              class="
                bg-red-600
                p-2
                md:px-4
                rounded-xl
                text-white
                ml-5
                md:ml-0
                md:mt-3
                w-16
                md:w-auto
                hover:text-black
                flex-initial
              "
              @click="deleteLocation(location.idLocation)"
            >
              ลบ
            </button>
          </div>
        </div>
      </bg-card>
    </div>
  </div>
</template>

<script>
import BgCard from '../../components/BgCard.vue'
export default {
  components: { BgCard },
  layout: 'admin',
  data() {
    return {
      addingLocation: {
        name: '',
      },
      locationValidate: false,
      tempLocations: [],
    }
  },
  async created() {
    this.tempLocations = await this.$axios.$get(`/locations`)
  },
  methods: {
    async validateForm() {
      this.locationValidate = false
      if (this.addingLocation.name === '') {
        this.locationValidate = true
        alert('กรุณากรอกสถานที่')
      }
      if (this.locationValidate === false) {
        await this.$axios.$post(`/locations`, this.addingLocation).then(
          (response) => {
            alert('Upload succeeded!')
            window.location.reload()
          },
          (error) => {
            alert(error)
          }
        )
      }
    },

    async deleteLocation(idLocation) {
      const del = confirm('Are you sure?')
      if (del) {
        await this.$axios.$delete(`/locations/${idLocation}`).then(
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

<style scoped>
ol {
  list-style-type: decimal;
}
.save-button {
  padding: 3%;
  background-color: #10afb9;
  border-radius: 0.5rem;
  color: aliceblue;
}
.save-button:hover {
  color: black;
  cursor: pointer;
}
h1 {
  color: #106f8c;
}
input {
  background-color: lightsteelblue;
}
@media (min-width: 320px) {
  .bgcard {
    width: 85%;
  }
}
@media (min-width: 768px) {
  .bgcard {
    width: 60%;
  }
}
@media (min-width: 1024px) {
  .save-button {
    padding: 1% 2% 1% 2%;
  }
  .bgcard {
    width: 50%;
  }
}
@media (min-width: 1440px) {
  .bgcard {
    width: 45%;
  }
}
</style>