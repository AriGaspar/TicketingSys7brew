<template>
  <div
    class="milkstore04-text h-screen bg-[#8A2424] flex flex-col justify-center items-center"
  >
    <img
      class="w-[106.5px] mb-2 h-[114x]"
      src="../src/assets/images/017Brew_Tertiary.png"
    />
    <p class="text-[24px] text-white">Welcome to 7Brews Ticketing System</p>
    <form class="flex flex-col">
      <input
        v-model="email"
        class="text-[24px] w-[270px] h-[36px] p-2 mt-4"
        type="text"
        placeholder="Email"
      />
      <input
        class="text-[24px] w-[270px] h-[36px] p-2 mt-4"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <button
        class="bg-[#231F20] text-[24px] w-[270px] h-[36px] mt-4 text-white"
        @click="signInWithEmailPassword"
      >
        Sign In
      </button>
      <!--Add Buttons for Microsoft and Google, you are only going to need to use Microsoft-->
      <div class="mt-8">
        <button
          @click="loginWithMicrosoft"
          class="w-full h-12 px-6 text-white text-2xl transition-colors duration-150 hover:bg-primary-900 rounded-sm focus:shadow-outline bg-[#231F20] -mt-4"
        >
          <svg
            class="inline-block w-6 h-6 mr-2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
          >
            <title>MS-SymbolLockup</title>
            <rect x="1" y="1" width="9" height="9" fill="#f25022" />
            <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
            <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
            <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
          </svg>
          Sign in with Microsoft
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";
import { onMounted, ref } from "vue";
import { routerKey } from "vue-router";

const email = ref("");
const password = ref("");

const loginWithMicrosoft = async () => {
  const auth = getAuth();
  const provider = new OAuthProvider("microsoft.com");
  try {
    const result = await signInWithPopup(auth, provider);
    // Handle successful login
    console.log("Microsoft sign-in successful");
    // Redirect or perform other actions after successful login
  } catch (error) {
    // Handle errors
    console.error("Microsoft sign-in error:", error);
  }
};

const signInWithEmailPassword = async () => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    // Handle successful login
    console.log("Email/password sign-in successful");
    router.push("/profile");
    // Redirect or perform other actions after successful login
  } catch (error) {
    // Handle errors
    console.error("Email/password sign-in error:", error);
  }
};
</script>
