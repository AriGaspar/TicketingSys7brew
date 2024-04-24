<template>
  <!--Menu for Pc-->
  <div
    class="bg-[#8A2432] group items-center h-[100svh] w-[80px] flex flex-col p-4"
  >
    <!--Logo-->
    <img class="w-8 h-8" src="../images/017Brew_Tertiary.png" />
    <!--Everything except for the logo-->
    <div class="flex flex-col justify-between h-[100%]">
      <!--Menu Items-->
      <div
        class="mt-6 flex h-[20vh] w-10 flex-col items-center justify-between"
      >
        <!--Home-->
        <NuxtLink to="/index_">
          <div class="flex justify-center flex-col items-center">
            <svg
              class="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                clip-rule="evenodd"
              />
            </svg>
            <a class="font-[Milkstore] tracking-wide text-white text-lg"
              >Home</a
            >
          </div>
        </NuxtLink>
        <!--Tickets-->
        <div class="flex justify-center flex-col items-center">
          <svg
            class="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.5 12A2.5 2.5 0 0 1 21 9.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 1 0 5V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.5a2.5 2.5 0 0 1-2.5-2.5Z"
            />
          </svg>
          <a class="font-[Milkstore] tracking-wide text-white text-lg"
            >Tickets</a
          >
        </div>
        <!--Faqs-->
        <NuxtLink to="/FAQs">
          <div class="flex justify-center flex-col items-center">
            <svg
              class="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <a class="font-[Milkstore] tracking-wide text-white text-lg"
              >FAQs</a
            >
          </div>
        </NuxtLink>
      </div>

      <!--Bottom Menu-->
      <div class="flex justify-between h-1/6 flex-col items-center">
        <!--User Icon-->
        <div class="flex justify-center flex-col items-center">
          <svg
            class="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!--Settings Icon-->

        <div>
          <button @click="changeColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="h-6 w-10">
          <h1 class="text-2 text-white dark:text-black font-Milkstore">
            Log Out
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const colorMode = useColorMode();
const changeColor = () =>
  (colorMode.preference = colorMode.value === "light" ? "dark" : "light");
</script>
<script>
export default {
  name: "Menu",
};
</script>
