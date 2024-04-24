<template>
  <div
    class="milkstore04-text h-screen bg-[#8A2424] flex flex-col justify-center items-center"
  >
    <img
      class="w-[106.5px] mb-2 h-[114x]"
      src="../src/assets/images/017Brew_Tertiary.png"
    />
    <p class="text-[24px] text-white">Welcome to 7Brew's Ticketing System</p>
    <div class="flex flex-col items-center mt-8">
      <input
        v-model="email"
        class="text-[24px] w-[270px] h-1/5 p-2"
        type="text"
        placeholder="Email"
      />
      <input
        v-model="password"
        class="text-[24px] w-[270px] h-1/5 p-2 mt-4"
        type="password"
        placeholder="Password"
      />
      <button
        @click="signInWithEmailAndPass"
        class="bg-[#231F20] text-[24px] w-[270px] h-1/5 mt-4 text-white"
      >
        Sign In
      </button>
      <button
        @click="loginWithMicrosoft"
        class="w-[270px] h-1/5 px-6 py-2 text-white text-lg mt-4 transition-colors duration-150 hover:bg-primary-900 rounded-sm focus:shadow-outline bg-[#231F20]"
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
  </div>
</template>

<script>
import {
  getAuth,
  OAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword as signInWithEmail,
} from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "../firebaseConfig.js";

export default {
  setup() {
    const auth = getAuth();
    const router = useRouter();
    const email = ref("tester@gmail.com");
    const password = ref("testingaccount1");
    const signInWithEmailAndPass = () => {
      signInWithEmail(auth, email.value, password.value)
        .then((data) => {
          console.log("Successfully signed in!");
          router.push("/ticketTable");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              console.log("Sign in error (invalid-email):" + error);
              break;
            default:
              console.log(error);
              break;
          }
        });
    };

    const loginWithMicrosoft = async () => {
      const provider = new OAuthProvider("microsoft.com");
      try {
        const result = await signInWithPopup(auth, provider);
        const credential = OAuthProvider.credentialFromResult(result);
        console.log(1);
        router.push("/ticketTable"); //send user to home page
      } catch (error) {
        console.log(error);
      }
    };

    return { signInWithEmailAndPass, loginWithMicrosoft };
  },
};
</script>
