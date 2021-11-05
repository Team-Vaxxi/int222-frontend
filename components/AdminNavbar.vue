<template>
  <div class="vaxxi-bar flex flex-row">
    <div class="p-4 pl-5 text-2xl font-bold ">
      <a href="/"><h1 class="vaxxi text-white font-bold sm:text-sm md:text-4xl">Vaxxi</h1></a>
    </div>
    <div class="flex justify-center w-full">
      <div
        class="
          flex
          justify-between
          flex-wrap
          content-center
          smallDevice
        "
      >
        <NuxtLink
          to="/admin/ShowVaccine"
          class="font-light text-white hover:text-black sm:text-sm md:text-2xl"
        >
          วัคซีน
        </NuxtLink>
        <NuxtLink
          to="/admin/AddLocation"
          class="font-light text-white hover:text-black sm:text-sm md:text-2xl"
        >
          สถานที่
        </NuxtLink>
        <NuxtLink
          to="/admin/UserManage"
          class="font-light text-white hover:text-black sm:text-sm md:text-2xl"
        >
          ผู้ใช้งาน
        </NuxtLink>
      </div>
    </div>
    <div @click="logout"
    class="flex-initial self-center pr-3">
      <button
      type="button"
      class="font-light text-white hover:text-black sm:text-sm md:text-2xl whitespace-nowrap">
        ออกจากระบบ
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.replace('/authen/authentication')
    },
  }
}
</script>

<style>
body {
  font-family: 'Prompt', sans-serif;
}
.vaxxi-bar {
  background: #106f8c;
}
/* @media (max-width: 426px) {
  .smallDevice {
    width: 80%;
  }
  .vaxxi {
    text-align: center;
  }
} */

@media (max-width: 320px) {
  a {
    font-size: medium;
  }
}

@media (min-width: 320px) {
  .smallDevice {
    width: 80%;
  }
  .vaxxi {
    text-align: center;
  }
}

@media (min-width: 768px) {
  .smallDevice {
    width: 65%;
    margin-left: -10%;
  }
}

@media (min-width: 768px) {
  .smallDevice {
    width: 65%;
    margin-left: -10%;
  }
}

@media (min-width: 1024px) {
  .smallDevice {
    width: 40%;
  }
}
</style>