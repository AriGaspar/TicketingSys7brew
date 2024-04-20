<template>

    <div class="flex items-center flex-row h-16 justify-between mt-6 mb-6">
        <h1 class="text-3xl main-title">{{ title }}</h1>
        <button class="bg-custom-red-wine milkstore-text text-xl w-36 h-15 hover:bg-red-500 text-white font-bold py-2 px-4 inline-flex items-center justify-center">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                width="20px" height="20px" viewBox="0 0 156.199 156.199"
                xml:space="preserve">
                <g>
                    <path style="fill:#ffffff;" d="M102.496,45.204h-2.499v-0.012l-77.613-0.368l32.958-32.959l-8.277-8.28L0,50.65l47.882,47.889
                        l8.28-8.28l-33.719-33.73l71.642,0.346v0.04h8.417c23.151,0,41.993,18.838,41.993,41.997c0,23.151-18.842,41.992-41.993,41.992H0
                        v11.711h102.496c29.613,0,53.703-24.09,53.703-53.703C156.199,69.293,132.109,45.204,102.496,45.204z"/>
                </g>
            </svg>
            <span class="pl-2" @click="goBack">Return</span>
        </button>
    </div>

</template>

<script>
export default {
  props: ['title'], // Define props that the component accepts

  methods: {
    goBack() {
      this.$router.go(-1); // Go back one step in the history
    }
  }
};
</script>