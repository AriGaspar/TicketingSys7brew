<template>
  <div id="screen" class="h-screen bg-gray-200 flex flex-row">
    <Menu />
    <div id="info-side" class="bg-blue-600 flex flex-row h-full w-full">
      <div id="left-side" class="bg-white h-full w-8/12">
        <h1 class="ml-12 mt-6 -mb-6 text-2xl font-bold">Profile</h1>
        <div
          id="actual-content"
          class="bg-[#8A2432] w-8/10 h-3/4 m-10 rounded-lg flex flex-col items-center"
        >
          <div
            id="title"
            class="w-11/12 h-1/6 mt-4 flex items-center text-white font-bold text-4xl milkstore04-text"
          >
            <h1>My Tickets</h1>
          </div>
          <div
            id="MyTickets"
            class="bg-white w-11/12 h-4/6 overflow-y-auto border-solid border-black border-opacity-100"
          >
            <div
              v-for="(ticket, index) in tickets"
              :key="index"
              class="m-4 bg-[#8A2432] h-1/5 flex flex-column rounded-lg text-white"
            >
              <div
                id="ticket_status"
                class="h-full w-1/12 rounded-lg ticket-detail"
              >
                <img
                  :src="getTicketStatusImage(ticket.ticket_status)"
                  class="w-8 h-8 mt-3 ml-3"
                />
              </div>
              <div id="ticket-content" class="flex flex-row items-center">
                <div
                  id="ticket-title"
                  class="h-full w-4/12 p-1 border-r border-gray-400 flex-grow"
                >
                  {{ ticket.ticket_subject }}
                </div>
                <div
                  id="ticket-priority"
                  class="h-full w-2/12 p-1 border-r border-gray-400 flex-grow"
                >
                  {{ ticket.ticket_priority }}
                </div>
                <div
                  id="ticket-author"
                  class="h-full w-2/12 p-1 overflow-hidden border-r border-gray-400 flex-grow"
                >
                  {{ ticket.ticket_author }}
                </div>
                <div
                  id="ticket-description"
                  class="h-full p-1 w-5/12 overflow-hidden border-r border-gray-400 flex-grow"
                >
                  {{ ticket.ticket_description }}
                </div>
                <div
                  id="ticket-date"
                  class="w-12/12 h-full p-1 left ticket-detail flex-grow"
                >
                  {{ ticket.ticket_date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="right-side" class="bg-white h-full w-4/12 relative">
        <div
          id="right-side-content"
          class="bg-[#8A2432] h-3/4 mr-10 ml-10 mb-10 mt-16 w-10/12 relative shadow-2xl rounded-lg"
        >
          <div class="bg-green-200 h-1/5">
            <img
              src="../src/assets/images/coffee2.jpg"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex justify-center items-center absolute inset-0">
            <div
              id="circle"
              class="w-32 h-32 bg-red-400 rounded-full -translate-y-full z-10"
            >
              <img
                src="../src/assets/images/placeholder.jpg"
                class="rounded-full"
              />
            </div>
          </div>
          <div id="text-information" class="bg-[#8A2432] h-2/4 m-4 mt-20">
            <div
              id="inside-text"
              class="bg-[#8A2432] mr-8 mt-8 mb-8 ml-2 text-xl text-white"
            >
              <div class="flex flex-column space-x-1">
                <img
                  src="../src/assets/images/clock.png"
                  class="w-6 h-6 mt-1"
                />
                <p>{{ currentTime }} local time</p>
              </div>
              <p class="font-bold mb-2">Contact Information</p>
              <div class="flex flex-column space-x-2">
                <img
                  src="../src/assets/images/name_badge.png"
                  class="w-6 h-6"
                />
                <p>{{ user.full_name }}</p>
              </div>
              <div class="flex flex-column space-x-2">
                <img src="../src/assets/images/mail.png" class="w-6 h-6 mt-1" />
                <p>{{ user.email }}</p>
              </div>
              <div class="flex flex-column space-x-2">
                <img src="../src/assets/images/pin.png" class="w-6 h-6 mt-1" />
                <p>{{ user.location }}</p>
              </div>
              <div class="flex flex-column space-x-2">
                <img
                  src="../src/assets/images/suitcase.png"
                  class="w-6 h-6 mt-1"
                />
                <p>{{ user.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getDatabase, ref as dbRef, onValue } from "firebase/database";
import { db } from "../firebaseConfig.js";

const currentTime = ref("");
const user = ref({
  full_name: "",
  email: "",
  location: "",
  position: "",
});
const tickets = ref([]);

onMounted(async () => {
  getCurrentTime();
  await getUserDataFromFirebase();
});

function getCurrentTime() {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString();
}

async function getUserDataFromFirebase() {
  try {
    const usersRef = dbRef(db, "users/user1");
    onValue(usersRef, (snapshot) => {
      const userData = snapshot.val();
      user.value = userData;
      tickets.value = Object.values(userData.tickets_assigned || {});
      console.log("The tickets are : " + tickets.value);
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

function getTicketStatusImage(status) {
  switch (status.toLowerCase()) {
    case "complete":
      return "../images/complete.png";
    case "in progress":
      return "../images/in_progress.png";
    default:
      return "../images/invalid.png";
  }
}
</script>
