<template>
  <div class="grid sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-12">
    <!-- Login Form -->
    <div
      v-show="!isRegis"
      class="
        sm:col-start-3 sm:col-end-9
        md:col-start-4 md:col-end-8
        lg:col-start-5 lg:col-end-9
        md:mt-8
      "
    >
      <div class="m-5 md:m-0">
        <bg-card
          class="
            bgcard
            rounded-xl
            w-full
            min-h-full
            flex
            items-center
            justify-center
            py-12
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div class="space-y-8">
            <div>
              <h2 class="text-center text-3xl font-extrabold text-gray-900">
                เข้าสู่ระบบจองวัคซีน
              </h2>
            </div>
            <form class="mt-8 space-y-6" @submit="login">
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="idCard" class="sr-only">บัตรประชาชน</label>
                  <input
                    id="idCard"
                    v-model="user.idCard"
                    name="idCard"
                    type="text"
                    autocomplete="idCard"
                    class="
                      appearance-none
                      rounded-none
                      relative
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      placeholder-gray-500
                      text-gray-900
                      rounded-t-md
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      focus:z-10
                      sm:text-sm
                    "
                    placeholder="บัตรประชาชน"
                  />
                </div>
                <div>
                  <label for="password" class="sr-only">รหัสผ่าน</label>
                  <input
                    id="password"
                    v-model="user.password"
                    name="password"
                    type="password"
                    autocomplete="password"
                    class="
                      appearance-none
                      rounded-none
                      relative
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      placeholder-gray-500
                      text-gray-900
                      rounded-b-md
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      focus:z-10
                      sm:text-sm
                    "
                    placeholder="รหัสผ่าน"
                  />
                </div>
              </div>
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
                    text-sm
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
                  เข้าสู่ระบบ
                </button>
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
                    text-sm
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
                  @click="toggleRegis"
                >
                  <span
                    class="absolute left-0 inset-y-0 flex items-center pl-3"
                  >
                  </span>
                  สมัครสมาชิก
                </button>
              </div>
            </form>
          </div>
        </bg-card>
      </div>
    </div>

    <!-- Register form -->
    <user-form
      v-show="isRegis"
      class="
        sm:col-span-12
        md:col-start-1 md:col-end-11
        lg:col-start-3 lg:col-end-11
        md:mt-5
        rounded-xl
      "
      @toggle-regis="toggleRegis"
    >
    </user-form>
  </div>
</template>

<script>
import BgCard from '~/components/BgCard.vue'
import UserForm from '~/components/UserForm.vue'

export default {
  components: { BgCard, UserForm },
  layout: 'default',
  data() {
    return {
      isRegis: false,
      user: {
        idCard: '',
        password: '',
      },
    }
  },
  methods: {
    toggleRegis() {
      this.isRegis = !this.isRegis
    },
    async login(e) {
      e.preventDefault()

      try {
        const response = await this.$auth.loginWith('local', { data: this.user })
        console.log(response)
        this.$router.replace('/')
      } catch (err) {
        console.log(err)
        this.$router.push('/authen/authentication')
      }
    },
  },
}
</script>

<style>
</style>