<template>
  <div class="grid sm:grid-cols-10 md:grid-cols-5 lg:grid-cols-5">
    <bg-card
      class="
        w-full
        sm:col-start-3 sm:col-end-9
        md:col-start-2 md:col-end-5
        lg:col-start-2 lg:col-end-5
        mt-10
      "
    >
    <div class="flex justify-center
    ">
      <form class="w-4/5 xl:w-3/5">
        <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          สมัครสมาชิก
        </h1>
        <!-- idCard -->
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-password"
          >
            บัตรประชาชน
          </label>
          <input
            id="idCard"
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            type="text"
          />
        </div>
        <!-- password -->
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
          >
            รหัสผ่าน
          </label>
          <input
            id="password"
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            type="password"
          />
        </div>
        <!-- verifyPassword -->
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
          >
            ยืนยันรหัสผ่าน
          </label>
          <input
            id="verifyPassword"
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            type="password"
          />
        </div>
        <!-- name -->
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            ชื่อ
          </label>
          <input
            id="name"
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            type="text"
          />
        </div>
        <!-- surname -->
        <div class="w-full">
          <label
            id="surname"
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
          >
            นามสกุล
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            type="text"
          />
        </div>
        <!-- gender -->
        
        <label class="block text-gray-700 font-bold mb-2">เพศ</label>
        <div class="flex">
          <div class="flex items-center mb-2 mr-4">
            <input
              id="male"
              type="radio"
              name="male"
              class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
            />
            <label class="text-gray-700">ชาย</label>
          </div>
          <div class="flex items-center mb-2">
            <input
              id="male"
              type="radio"
              name="male"
              class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
            />
            <label class="text-gray-700">หญิง</label>
          </div>
        </div>
        <!-- address -->
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              id="address"
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
              for="grid-password"
            >
              ที่อยู่
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              type="text"
            />
          </div>
        </div>
        <!-- dob -->
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase text-gray-700 font-bold mb-2"
              >วันเกิด</label
            >
            <input
              id="birthday"
              type="date"
              name="birthday"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
            />
          </div>
        </div>
        <!-- tel -->
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            >
              เบอร์โทรศัพท์
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
    </bg-card>
  </div>
</template>

<script>
// import Datepicker from '@themesberg/tailwind-datepicker/Datepicker'
import BgCard from './BgCard.vue'
export default {
  components: { BgCard },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
</style>