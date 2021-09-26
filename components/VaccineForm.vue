<template>
  <div class="flex justify-center">
    <bg-card class="w-2/5 bgcard mt-10">
      <form class="flex flex-col opacity-100 p-3">
        <h1 class="Heading text-center font-bold text-xl p-2 ">
          เพิ่มประเภทวัคซีน
        </h1>

        <!-- ชื่อวัคซีน -->
        <div class="flex flex-row p-1"> 
          <label for="vaccine-name" class="vacname">ชื่อวัคซีน</label>
          <!-- v-model="product.productName" -->
          <input
            id="vaccine-name"
            type="text"
            name="vaccine-name"
            placeholder="ชื่อวัคซีน"
            class="text bg-white opacity-100 placeholder-white  hover:shadow-lg	"

          />
        </div>

        <!-- รายละเอียดวัคซีน-->
        <div class="flex flex-row p-1 pt-3">
          <label for="vaccine-desc">รายละเอียดวัคซีน</label>
          <!-- v-model="product.productDetail" -->
          <textarea
            id="vaccine-desc"
            type="text"
            name="vaccine-desc"
            placeholder="รายละเอียดวัคซีน"
            class="textarea placeholder-white  hover:shadow-lg	" 
          />

          <!-- Old IMAGE Form -->
          <!-- <div class="image-upload">
        <label for="product-img" id="IMAGE-heading"
          >IMAGE <br />
          <p class="font-normal">.png only</p>
          <img src="@/assets/FormsImg/add-image.png" id="upload-pic" />
        </label>
        <input
          @change="imageHandler"
          type="file"
          id="product-img"
          name="product-img"
          accept="image/png"
        />
        <br />
        <span id="click-here"> Click To Upload an Image. </span>
      </div> -->
        </div>

        <!-- สถานที่ฉีด -->
        <div>
          <div class="flex flex-col p-3 pl-0">
            <span id="colors-heading">สถานที่ฉีดวัคซีน </span>
            <div class="for-nextLine flex flex-row">
              <!--  v-for="color in tempColors"
            v-bind:key="color.colorID" -->
              <label class="container">
                <!-- :checked="colorIsChecked(color)"
              @click="colorHandler(color.colorID)"
              value="{{color.colorName.toLowerCase()}}" 
               id="{{color.colorName.toLowerCase()}} -->

                <input type="checkbox" name="vaccinate-place" />
                <!-- <span
              class="checkmark"
              :class="color.colorName.toLowerCase()"
            ></span> -->
              </label>
            </div>
          </div>
        </div>

        <!-- SUBMIT -->
        <div class="flex justify-end">
          <input
            type="submit"
            value="บันทึก"
            class="save-button"
          />
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
}
</script>

<style scoped>
/* บัคอส หาไม่ได้ */
h1{
  color: #106F8C;
}

/* .bgcard{
  opacity: 75%;
} */

.save-button{
  padding: 3%;
  background-color: #10AFB9;
  border-radius: 0.5rem;
  color: aliceblue;

}
@media (min-width: 320px) {
  .bgcard{
    width: 85%;
  }
  .text{
    border-width: 1px;
  	border-radius: 0.5rem;
  	/* border-color: #106F8C; */
    margin-left: 6%;
    padding: 3%;
    width: 50vw;
    background-color: lightsteelblue;
  }
  .textarea{
    border-width: 1px;
  	border-radius: 0.5rem;
  	/* border-color: #106F8C; */
    padding: 3%;
    width: 50vw;
    height: 30vw;
    margin-left: 1%;
    background-color: lightsteelblue;
  }

}

@media (min-width: 768px) {
  .bgcard{
    width: 70%;
  }
   .textarea{
     margin-left: 1%;
    height: 13vw;
  }
}
</style>