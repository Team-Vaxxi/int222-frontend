<template>
  <div class="vaxxi-bar flex flex-row">
    <div class="p-4 pl-5 text-2xl font-bold text-white">
      <a href="/"><h1 class="vaxxi font-bold">Vaxxi</h1></a>
    </div>
    <div class="flex justify-center w-full">
      <div
        class="
          flex
          justify-between
          flex-wrap
          content-center
          smallDevice
          text-xl
        "
      >
        <NuxtLink
          to="/admin/ShowVaccine"
          class="font-light text-white hover:text-black"
        >
          วัคซีน
        </NuxtLink>
        <NuxtLink
          to="/admin/AddLocation"
          class="font-light text-white hover:text-black"
        >
          สถานที่
        </NuxtLink>
        <NuxtLink
          to="/admin/UserManage"
          class="font-light text-white hover:text-black"
        >
          ผู้ใช้งาน
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

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