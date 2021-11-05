<template>
  <div class="w-full">
    <div class="grid md:grid-cols-5 md:justify-items-center md:mb-3 w-full">
      <!-- insert value each input by jwttoken user -->
      <bg-card
        class="md:col-start-2 md:col-end-5 md:mt-5 p-2 md:p-5 md:w-10/12"
      >
        <div class="w-full flex justify-center">
          <form class="w-full">
            <h1
              class="
                mt-6
                mb-5
                text-center text-3xl
                font-extrabold
                text-gray-900
              "
            >
              ข้อมูลส่วนตัว
            </h1>
            <!-- idCard -->
            <div class="w-full mb-3">
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
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                :value="user.idCard"
                type="text"
                readonly
              />
            </div>
            <!-- name -->
            <div class="w-full mb-3">
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
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                :value="user.name"
                type="text"
                readonly
              />
            </div>
            <!-- surname -->
            <div class="w-full mt-2 mb-3">
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
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                :value="user.surname"
                type="text"
                readonly
              />
            </div>
            <!-- gender -->
            <label class="block text-gray-700 font-bold mb-2 mt-3">เพศ</label>
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
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              type="text"
              :value="user.gender"
              readonly
            />
            <!-- address -->
            <div class="flex flex-wrap -mx-3 mt-3">
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
                    leading-tight
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                  "
                  :value="user.address"
                  readonly
                />
              </div>
            </div>
            <!-- dob -->
            <div class="flex flex-wrap -mx-3 mt-3">
              <div class="w-full px-3">
                <label class="block uppercase text-gray-700 font-bold mb-2"
                  >วันเกิด</label
                >
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
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                  "
                  :value="user.dob"
                  readonly
                />
              </div>
            </div>
            <!-- tel -->
            <div class="flex flex-wrap -mx-3 mt-3">
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
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                  "
                  type="text"
                  :value="user.tel"
                  readonly
                />
              </div>
            </div>
            <!-- สถานะการจองวัคซีน -->
            <!-- v-if -->
            <div class="flex flex-wrap -mx-3 mt-3">
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
                  สถานะการจองวัคซีน
                </label>
                <p v-if="!user.vaccine" class="text-red-500">
                  คุณยังไม่ได้จองวัคซีน
                </p>
                <p v-else class="text-green-500">คุณจองวัคซีนเรียบร้อยแล้ว</p>
              </div>
            </div>
            <!-- วัคซีนที่จอง -->
            <div v-if="user.vaccine" class="flex flex-wrap -mx-3 mt-3">
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
                  วัคซีนที่จอง
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
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                  "
                  type="text"
                  :value="user.vaccine.name"
                  readonly
                />
              </div>
            </div>
            <!-- สถานที่ฉีดวัคซีน -->
            <div v-if="user.location" class="flex flex-wrap -mx-3 mt-3">
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
                  สถานที่ฉีดวัคซีน
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
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                  "
                  type="text"
                  :value="user.location.name"
                  readonly
                />
              </div>
            </div>
            <div class="mt-10">
              <div>
                <Nuxt-link to="/user/home">
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
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
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
              <div class="mt-2" @click="logout">
                <Nuxt-link to="/">
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
                      hover:bg-indigo-700
                      hover:text-white
                      focus:outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      mt-2
                    "
                  >
                    <span
                      class="absolute left-0 inset-y-0 flex items-center pl-3"
                    >
                    </span>
                    ออกจากระบบ
                  </button>
                </Nuxt-link>
              </div>
            </div>
          </form>
        </div>
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
      user: this.$auth.user,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.replace('/authen/authentication')
    },
  },
}
</script>

<style>
</style>