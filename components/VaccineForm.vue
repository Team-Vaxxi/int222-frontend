<template>
  <div class="flex justify-center">
    <bg-card class="w-2/5 bgcard mt-10">
      <form
        class="flex flex-col opacity-100 p-3"
        @submit.prevent="validateForm"
      >
        <h1 class="text-center font-extrabold text-xl p-2">
          เพิ่มประเภทวัคซีน
        </h1>

        <!-- name -->
        <div class="flex flex-col md:flex-row p-1">
          <label for="vaccine-name" class="vacname font-semibold"
            >ชื่อวัคซีน</label
          >
          <input
            id="vaccine-name"
            v-model="vaccine.name"
            type="text"
            name="vaccine-name"
            placeholder="ชื่อวัคซีน"
            class="
              text
              bg-white
              opacity-100
              hover:shadow-xl
              placeholder-transparent
              w-full
            "
          />
        </div>

        <!-- Description-->
        <div class="flex flex-col md:flex-row p-1 pt-3">
          <label for="vaccine-desc" class="font-semibold"
            >รายละเอียดวัคซีน</label
          >
          <!-- v-model="product.productDetail" -->
          <textarea
            id="vaccine-desc"
            v-model="vaccine.description"
            type="text"
            name="vaccine-desc"
            placeholder="รายละเอียดวัคซีน"
            class="textarea hover:shadow-xl w-full placeholder-transparent"
          />
        </div>

        <!-- Price -->
        <div class="flex flex-col md:flex-row p-1">
          <label for="vaccine-name" class="vacname font-semibold"
            >ราคาวัคซีน</label
          >
          <input
            id="vaccine-price"
            v-model="vaccine.price"
            type="double"
            name="vaccine-price"
            placeholder="ราคา"
            class="
              text
              bg-white
              opacity-100
              hover:shadow-xl
              placeholder-transparent
              w-full
            "
            required
          />
        </div>
        <!-- Location -->
        <div>
          <div class="flex flex-col p-3 pl-0">
            <span id="colors-heading" class="p-1 font-semibold"
              >สถานที่ฉีดวัคซีน
            </span>
            <div
              v-for="location in tempLocations"
              v-bind:key="location.idLocation"
              class="grid-place md:grid grid-cols-2"
            >
              <div class="w-auto choice-container">
                <input
                  :id="location.name.toLowerCase()"
                  :checked="locationIsChecked(location)"
                  @click="locationHandler(location.idLocation)"
                  type="checkbox"
                  name="location"
                  :value="location.name.toLowerCase()"
                  class="check-with-label"
                />
                <label for="SCG-Bangsue" class="label-checkbox">{{
                  location.name
                }}</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="image-upload">
          <center>
            <label for="vaccine-img" class="pic-label w-min bg-gray-600">
              <img
                id="upload-pic"
                src="../static/image-upload.jpg"
                class="hover:shadow-2xl"
              />
            </label>
            <input
              @change="imageHandler"
              id="vaccine-img"
              type="file"
              name="vaccine-img"
              accept="image/*"
            />
            <!-- @change="imageHandler" -->
          </center>
        </div>

        <!-- SUBMIT -->
        <div class="flex justify-end">
          <input type="submit" value="บันทึก" class="save-button" />
          <!-- @click="backToHomePage" -->
        </div>
      </form>
    </bg-card>
  </div>
</template>

<script>
import BgCard from './BgCard.vue'
export default {
  components: { BgCard },
  data() {
    return {
      vaccine: Object,
      vaccineValidate: false,
      tempLocations: [],
      vaccineImageFile: null,
    }
  },
  props: {
    vaccineProp: Object,
  },

  methods: {
    validateForm() {
      this.vaccineValidate = false
      if (this.vaccine.name === '') {
        this.vaccineValidate = true
        alert('กรุณากรอกชื่อวัคซีน')
      }
      if (this.vaccine.description === '') {
        this.vaccineValidate = true
        alert('กรุณากรอกรายละเอียดวัคซีน')
      }
      if (this.vaccine.image === null) {
        this.vaccineValidate = true
        alert('กรุณาอัปโหลดไฟล์ภาพวัคซีน')
      }
      if (this.vaccine.price === 0 || this.vaccine.price === null) {
        this.vaccineValidate = true
        alert('กรุณากรอกราคาวัคซีน')
      }
      if (this.vaccine.location.length === 0) {
        this.vaccineValidate = true
        alert('กรุณาเลือกสถานที่ให้บริการวัคซีน')
      }
      if (this.vaccineValidate === false) {
        this.submitForm()
      }
    },

    submitForm() {
      console.log('method: submitForm')
      this.$emit('submit-form', this.vaccine, this.vaccineImageFile)
    },

    imageHandler(event) {
      const input = event.target.files[0]
      this.vaccineImageFile = input
    },

    locationHandler(selectLocationID) {
      const locationIsExist = this.vaccine.locations.filter(function (e) {
        return e.idLocation === selectLocationID
      })
      for (let index = 0; index < this.vaccine.locations.length; index++) {
        if (this.vaccine.locations[index] === locationIsExist[0]) {
          this.vaccine.locations.splice(index, 1)
        }
      }
      if (locationIsExist.length === 0) {
        const index = this.tempLocations
          .map(function (e) {
            return e.idLocation
          })
          .indexOf(selectLocationID)
        this.vaccine.locations.push({
          idLocation: this.tempLocations[index].idLocation,
          name: this.tempLocations[index].name,
        })
      }
    },

    locationIsChecked(location) {
      const selected = this.vaccine.locations.filter(
        (item) => item.idLocation === location.idLocation
      )
      if (selected.length > 0) {
        return true
      } else {
        return false
      }
    },
  },
  async created() {
    this.vaccine = this.vaccineProp
    this.tempLocations = await this.$axios.$get(`/locations`)
    // structure of object
    // console.log(this.vaccine)
  },
}
</script>

<style scoped>
input[type='file'] {
  width: 50%;
}
img {
  width: 30%;
  cursor: pointer;
}
#vaccine-img::-webkit-file-upload-button {
  display: none;
}

h1 {
  color: #106f8c;
}

.choice-container {
  padding: 2%;
}
.label-checkbox {
  padding: 2%;
}

.check-with-label:checked + .label-checkbox {
  background-color: #2356a1;
  border-radius: 0.25rem;
  color: aliceblue;
}

/* .choice-container.checked {
	background: red;	
} */

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
@media (min-width: 320px) {
  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .bgcard {
    width: 85%;
  }
  .text {
    border-width: 1px;
    border-radius: 0.5rem;
    /* border-color: #106F8C; */
    /* margin-left: 6%; */
    padding: 3%;
    /* width: 50vw; */
    background-color: lightsteelblue;
  }
  .textarea {
    border-width: 1px;
    border-radius: 0.5rem;
    /* border-color: #106F8C; */
    padding: 3%;
    /* width: 50vw; */
    height: 40vw;
    margin-left: 1%;
    background-color: lightsteelblue;
  }
}
@media (min-width: 768px) {
  .grid-place {
    margin-left: 10%;
  }
  .bgcard {
    width: 70%;
    height: auto;
  }
  .text {
    margin-left: 16%;
    padding: 2%;
    width: 70%;
  }
  #vaccine-price {
    margin-left: 14%;
    padding: 2%;
    width: 70%;
  }
  .textarea {
    width: 70%;
    padding: 2%;
    margin-left: 5%;
    height: 12vw;
  }
}
@media (min-width: 1024px) {
  .save-button {
    padding: 1% 2% 1% 2%;
  }
  .bgcard {
    width: 50%;
    height: auto;
  }
  .text {
    padding: 2%;
    margin-left: 13%;
  }
  #vaccine-price {
    margin-left: 10%;
    padding: 2%;
    width: 70%;
  }
  .textarea {
    padding: 2%;
    margin-left: 1%;
    height: 12vw;
  }
}

@media (min-width: 1440px) {
  .bgcard {
    width: 45%;
  }
  .text {
    padding: 1%;
    margin-left: 14%;
  }
  #vaccine-price {
    margin-left: 12%;
    padding: 1%;
    width: 70%;
  }
  .textarea {
    padding: 1%;
    margin-left: 5%;
    height: 12vw;
  }
}
</style>