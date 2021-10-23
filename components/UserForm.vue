<template>
  <div>
    <div>
      <slot></slot>
      <bg-card>
        <form class="w-full max-w-lg">
          <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            สมัครสมาชิก
          </h1>
          <div class="flex flex-wrap -mx-3 mb-6">
            <!-- idCard -->
            <div class="w-full px-3">
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700
                  font-bold
                  mb-2
                "
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
          </div>
          <!-- password -->
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700
                  font-bold
                  mb-2
                "
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
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700
                  font-bold
                  mb-2
                "
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
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <!-- name -->
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700
                  font-bold
                  mb-2
                "
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
            <div class="w-full md:w-1/2 px-3">
              <label
                id="surname"
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700
                  font-bold
                  mb-2
                "
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
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700
                  font-bold
                  mb-2
                "
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
              <label class="block uppercase text-gray-700 font-bold mb-2">วันเกิด</label>
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
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700
                  font-bold
                  mb-2
                "
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
      </bg-card>
    </div>
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