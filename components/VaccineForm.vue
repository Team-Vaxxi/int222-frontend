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

        <!-- ชื่อวัคซีน -->
        <div class="flex flex-col md:flex-row p-1">
          <label for="vaccine-name" class="vacname font-semibold"
            >ชื่อวัคซีน</label
          >
          <!-- v-model="product.productName" -->
          <input
            id="vaccine-name"
            v-model="vaccine.vaccineName"
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

        <!-- รายละเอียดวัคซีน-->
        <div class="flex flex-col md:flex-row p-1 pt-3">
          <label for="vaccine-desc" class="font-semibold"
            >รายละเอียดวัคซีน</label
          >
          <!-- v-model="product.productDetail" -->
          <textarea
            id="vaccine-desc"
            v-model="vaccine.vaccineDetail"
            type="text"
            name="vaccine-desc"
            placeholder="รายละเอียดวัคซีน"
            class="textarea hover:shadow-xl w-full placeholder-transparent"
          />
        </div>

        <!-- สถานที่ฉีด -->
        <div>
          <div class="flex flex-col p-3 pl-0">
            <span id="colors-heading" class="p-1 font-semibold"
              >สถานที่ฉีดวัคซีน
            </span>
            <div class="grid-place md:grid grid-cols-2">
              <!--  v-for="color in tempColors"
            v-bind:key="color.colorID" -->
              <div class="w-auto choice-container">
                <input
                  id="SCG-Bangsue"
                  type="checkbox"
                  name="vaccinate-place"
                  value="SCG-Bangsue"
                  class="check-with-label"
                />
                <label for="SCG-Bangsue" class="label-checkbox"
                  >SCG บางซื่อ</label
                >
              </div>
              <!-- :checked="colorIsChecked(color)"
              @click="colorHandler(color.colorID)"
              value="{{color.colorName.toLowerCase()}}" 
               id="{{color.colorName.toLowerCase()}} -->

              <!-- <span
              class="checkmark"
              :class="color.colorName.toLowerCase()"
            ></span> -->
              <div class="choice-container">
                <input
                  id="True-Digital-Park"
                  type="checkbox"
                  name="vaccinate-place"
                  value="True-Digital-Park"
                  class="check-with-label"
                />
                <label for="True-Digital-Park" class="label-checkbox">
                  True Digital Park
                </label>
              </div>

              <div class="choice-container">
                <input
                  id="Central-World"
                  type="checkbox"
                  name="vaccinate-place"
                  value="Central-World"
                  class="check-with-label"
                />
                <label for="Central-World" class="label-checkbox">
                  เซ็นทรัลเวิลด์
                </label>
              </div>

              <div class="choice-container">
                <input
                  id="PTT-Station"
                  type="checkbox"
                  name="vaccinate-place"
                  value="PTT-Station"
                  class="check-with-label"
                />
                <label for="PTT-Station" class="label-checkbox">
                  PTT Station พระราม 2
                </label>
              </div>

              <div class="choice-container">
                <input
                  id="Central-Pinklao"
                  type="checkbox"
                  name="vaccinate-place"
                  value="Central-Pinklao"
                  class="check-with-label"
                />
                <label for="Central-Pinklao" class="label-checkbox">
                  เซ็นทรัลปิ่นเกล้า
                </label>
              </div>

              <div class="choice-container">
                <input
                  id="The-Mall-BKP"
                  type="checkbox"
                  name="vaccinate-place"
                  value="The-Mall-BKP"
                  class="check-with-label"
                />
                <label for="The-Mall-BKP" class="label-checkbox">
                  เดอะมอลล์บางกะปิ
                </label>
              </div>

              <div class="choice-container">
                <input
                  id="The-Mall-Bangkae"
                  type="checkbox"
                  name="vaccinate-place"
                  value="The-Mall-Bangkae"
                  class="check-with-label"
                />
                <label for="The-Mall-Bangkae" class="label-checkbox">
                  เดอะมอลล์ บางแค
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Old IMAGE Form -->
        <div class="image-upload">
          <center>
            <label for="vaccine-img" class="pic-label w-min bg-gray-600">
              <img src="../static/image-upload.jpg" id="upload-pic" class="hover:shadow-2xl"/>
            </label>
            <input
              
              type="file"
              id="vaccine-img"
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
// import axios from "axios";
import BgCard from './BgCard.vue'
export default {
  components: { BgCard },

  props: {
    vaccineProp: Object,
  },

  data() {
    return {
      backendURL: 'http://23.98.67.216/backend/vaccines',
      vaccineValidate: false,
      lastVaccineProductId: null,
      tempPlaces: [],
      vaccinetImageFile: null,
      currentImage: null,
      vaccine: Object,
    }
  },

  methods: {
    validateForm() {
      this.vaccineValidate = false
      if (this.vaccine.vaccineName === '') {
        this.vaccineValidate = true
        alert('กรุณากรอกชื่อวัคซีน')
      }
      if (this.vaccine.vaccineDetail === '') {
        this.vaccineValidate = true
        alert('กรุณากรอกรายละเอียดวัคซีน')
      }
      if (this.vaccineImageFile === null) {
        this.vaccineValidate = true
        alert('กรุณาอัปโหลดไฟล์ภาพวัคซีน')
      }
      // if (this.vaccine.places.length === 0) {
      //   this.vaccineValidate = true
      //   alert('กรุณาเลือกสถานที่ให้บริการวัคซีน')
      // }
      if (this.productValidate === false) {
        this.submitForm()
      }
    },
  },
}

// Checkbox --- Eslint Error
// $(document).on("change", "input[type='checkbox']", function () {
// 	$(this).parent()[this.checked ? "addClass" : "removeClass"]("checked");
// });
</script>

<style scoped>
input[type="file"]{
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
  .textarea {
    padding: 1%;
    margin-left: 5%;
    height: 12vw;
  }
}
</style>