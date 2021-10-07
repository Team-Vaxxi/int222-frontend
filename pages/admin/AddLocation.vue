<template>
  <div>
      <!-- กล่องกรอกเพิ่มสถานที่-->

    <div class="flex justify-center">
      <bg-card class="w-3/5 bgcard mt-10 lg:w-1/2 p-5"
        ><h1 class="text-center font-extrabold text-xl p-5">
          เพิ่มสถานที่ให้บริการวัคซีน
        </h1>
        <form>
          <!-- Location Name -->
          <div class="flex flex-col justify-between md:flex-row p-3 md:p-3">
            <label for="adding-place" class="font-semibold w-auto"
              >ชื่อสถานที่ให้บริการวัคซีน</label
            >
            <input
              id="adding-place"
              v-model="adding_place"
              type="text"
              name="adding-place"
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
          <!-- SUBMIT -->
          <div class="flex justify-end">
            <input type="submit" value="เพิ่ม" class="save-button" />
          </div>
        </form>
      </bg-card>
    </div>

<!-- กล่องแสดงสถานที่ที่มีในระบบตอนนี้ -->
    <div class="flex justify-center">
      <bg-card class="m-5 w-3/5 bgcard mt-10 lg:w-1/2 p-5">
        <h1 class="text-center font-extrabold text-xl p-5">
          สถานที่ให้บริการวัคซีนที่มีในระบบขณะนี้
        </h1>
        <ol class="p-3 lg:px-10">
          <li
            v-for="location in tempLocations"
            v-bind:key="location.idLocation"
          >
            {{ location.name }}
          </li>
        </ol>
      </bg-card>
    </div>
  </div>
</template>

<script>
import BgCard from '../../components/BgCard.vue'
export default {
  components: { BgCard },
  data() {
    return {
      vaccine: Object,
      tempLocations: [],
    }
  },
  async created() {
    this.vaccine = this.vaccineProp
    this.tempLocations = await this.$axios.$get(`/locations`)
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