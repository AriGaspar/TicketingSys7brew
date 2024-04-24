<template >
    <div class="h-screen bg-white flex flex-col px-40 gap-4">
      
<!-- MAIN TITLE (TICKET VIEW) -->
<!-- <div class="flex items-center flex-row h-16 justify-between mt-6 mb-6"> -->
    <Popup 
			v-if="popupTriggers.buttonTrigger" 
			:TogglePopup="() => TogglePopup('buttonTrigger')">
			<h2>My Button Popup</h2>
		</Popup>
      <MainTitleComp :title="'Ticket View'"/>
      <!-- TICKET NUMBER -->
      <div class="text-card flex justify-center">Ticket Code: {{ useRoute().params.id.slice(1,6) }}</div>
      <div class="flex w-full flex-row gap-4">
        <div class="flex flex-col main-content w-2/3 gap-4">

  <!-- TICKET -->
          <div class="bg-white h-52 flex flex-col border border-black">
            <div class="bg-custom-700 h-16 flex items-center justify-between px-4 text-white">
              <div v-html="subject"></div>
              <div class="relative ">
                STATUS
                <button @click="toggleDropdown('status')" class="text-black border px-4 bg-white h-10 focus:outline-none focus:border-blue-500">
                  {{ selectedOption ? selectedOption : 'Select an option' }}
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="30" height="30" 
                  viewBox="0 0 30 30" 
                  id="down-drop-arrow"
                  class="inline-block ml-2 -mr-1">
                    <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                  </svg>
                </button>
                <div v-if="isOpen" class="text-black absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                  <ul>
                    <li v-for="(option, index) in options" :key="index" @click="selectOption(option,'status')" class="py-2 px-4 cursor-pointer hover:bg-gray-100">
                      {{ option }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>  
            <div class="h-full flex flex-col">
              <textarea
                id="description"
                class="p-4 flex-1 resize-none w-full border h-auto focus:ring-blue-500 focus:border-blue-500 lg:text-lg"
                placeholder="Enter a response..."
                disabled
                v-html="description"
              ></textarea>
            </div>
          </div>
  <!-- RESPONSE -->

          <div class="bg-white h-52 flex flex-col border border-black">
            <div class="bg-custom-red-wine h-16 flex items-center justify-between px-4 text-white">
              <div>RESPONSE</div>
              <div class="relative ">
                ASSIGN
                <button @click="toggleDropdown('emp')" class="text-black border px-4 bg-white h-10 focus:outline-none focus:border-blue-500">
                  {{ selectedEmp ? selectedEmp : 'Select an option' }}
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="30" height="30" 
                  viewBox="0 0 30 30" 
                  id="down-drop-arrow"
                  class="inline-block ml-2 -mr-1">
                    <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                  </svg>
                </button>
                <div v-if="isOpenEmp" class="text-black absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                  <ul>
                    <li v-for="(e, index) in employees" :key="index" @click="selectOption(e , 'emp')" class="py-2 px-4 cursor-pointer hover:bg-gray-100">
                      {{ e.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>  
               
            <div class="h-full flex flex-col">
              <textarea
              v-model="response"
                id="response"
                class="p-4 flex-1 resize-none w-full border h-auto focus:ring-blue-500 focus:border-blue-500 lg:text-lg"
                placeholder="Enter Response"
              >{{ this.response }}</textarea>
            </div>
            
          </div>
  <!-- SUBMIT BUTTON -->
  
          <div class="flex justify-end">
            <button @click="submitForm" type="submit" class="bg-custom-red-wine milkstore-text text-xl w-36 h-15 hover:bg-red-500 text-white font-bold py-2 px-4 items-center justify-center">
              <span class="pl-2">SUBMIT</span>
            </button>
          </div>
        </div>
<!-- RIGHT SIDEBAR -->
        <div class="flex flex-col text-white w-auto milkstore-text gap-4 justify-center items-end" >
          <!-- REQUESTER INFO -->
          <div id="requester-info" class="p-2 h-25 w-2/3 rounded bg-custom-700 flex flex-col text-lg">
            
            <div id="requester-header" class="flex flex-row justify-center ">
              <span class="pt-1 pl-3  w-1/3 justify-center">
                <svg width="50%" height="50%" viewBox="0 0 25 25" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z" fill="#ffffff"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z" fill="#ffffff"/>
                </svg>
              </span>

              <span class=" w-2/3" >
                REQUESTER INFORMATION
              </span>
            </div>

            <div id="requester-user" class="flex flex-row items-center">
              <span class="w-1/3 flex justify-center ">
                <svg width="65px" height="65px" viewBox="0 0 19 19" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"  fill="#ffffff"/>
                </svg>
              </span>
              <span class="flex flex-col w-2/3">
                <span v-html="requester"></span>
                <span v-html="department"class="text-xxs milkstore04-text"></span>
              </span>

            </div>

          </div>
          <!-- TICKET INFO -->
          <div id="ticket-info" class="h-auto w-2/3 bg-blue-200 bg-custom-700 rounded flex flex-col">
            
            <div id="ticket-info-header" class="flex flex-row justify-center pt-3">
              <span class="pl-6 w-1/3 justify-center">
                <svg width="20px" height="20px" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#ffffff"/>
                </svg>
              </span>

              <span class=" w-2/3" >
                TICKET INFORMATION
              </span>
            </div>

            <div class="grid grid-cols-2 gap-2 flex p-4">
              <div class="flex flex-col">
                <span>PRIORITY</span>
                <div class="flex flex-row gap-2 items-center">
                  <span :class="['dot', chooseTheDotColor(priority)]" ></span>
                  <span v-html="priority"></span>
                </div>
              </div>
              <div class="flex flex-col">
                <span>RESPONSE DUE DATE</span>
                <div class="flex flex-row gap-2 items-center">
                  <span v-html="date"></span>
                </div>
              </div>

              <div class="flex flex-col">
                <span>STATUS</span>
                <div class="flex flex-row gap-2 items-center">
                  <span v-if="status.toLocaleLowerCase() == 'pending' || status.toLocaleLowerCase() == 'open'" v-html="status.toLocaleLowerCase()" class="text-blue-400"></span>
                  <span v-if="status.toLocaleLowerCase() == 'closed'" v-html="status.toLocaleLowerCase()" class="text-red-400"></span>
                </div>
              </div>

              <div class="flex flex-col">
                <span>SOLVE BY</span>
                <div class="flex flex-row gap-2 items-center">
                  <span>12/03/2024</span>
                  <div class="relative">
                    <input ref="datePicker" type="date" v-model="selectedDate" class="h-1 w-1">
                    <button @click="openDatePicker">
                      <i class="fas fa-calendar" ></i>
                    </button>
                  </div>
                </div>
              </div>

            </div>
            

          </div>
          <!-- SIMILAR TICKETS -->
          <div id="similar-tickets" class="h-auto w-2/3 bg-blue-200 bg-custom-700 rounded flex flex-col">
            
            <div id="similar-tickets-header" class="flex flex-row justify-center pt-3">
              <span class="pl-6 w-1/3 justify-center">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 19.0052V4.99481C17.5 4.35586 16.7879 3.97474 16.2562 4.32917L14.9867 5.17551C14.6969 5.36876 14.3153 5.3522 14.0432 5.13457L12.4998 3.8998C12.2076 3.66606 11.7924 3.66607 11.5002 3.89981L9.95679 5.13457C9.68475 5.3522 9.30314 5.36876 9.01327 5.17551L7.74376 4.32917C7.21212 3.97474 6.5 4.35586 6.5 4.99481V19.0052C6.5 19.6441 7.21212 20.0253 7.74376 19.6708L9.01327 18.8245C9.30314 18.6312 9.68475 18.6478 9.95679 18.8654L11.5002 20.1002C11.7924 20.3339 12.2076 20.3339 12.4998 20.1002L14.0432 18.8654C14.3153 18.6478 14.6969 18.6312 14.9867 18.8245L16.2562 19.6708C16.7879 20.0253 17.5 19.6441 17.5 19.0052Z" stroke="#ffffff"/>
                  <path d="M9.5 9.5H14.5" stroke="#222222" stroke-linecap="round"/>
                  <path d="M9.5 12H14.5" stroke="#222222" stroke-linecap="round"/>
                  <path d="M9.5 14.5H14.5" stroke="#222222" stroke-linecap="round"/>
                </svg>
              </span>

              <span class="w-2/3" >
                SIMILAR TICKETS
              </span>
            </div>

            <div class="flex flex-col p-4 justify-center">
              <hr>

              <div>
                <span class="pl-3">
                  #2014 HYGIENE
                </span>
                <hr>
              </div>
              <div >
                <span class="pl-3">
                  #2014 HYGIENE
                </span>
                <hr>
              </div>
              <div >
                <span class="pl-3">
                  #2014 HYGIENE
                </span>
                <hr>
              </div>
              <div >
                <span class="pl-3">
                  #2014 HYGIENE
                </span>
                <hr>
              </div>

              <hr>
            </div>  
            

          </div>
        </div>
      </div>
    </div>
  </template>

<style lang="scss">
@import '../../src/assets/scss/fonts.scss';
.main-title{
    font-family: 'Magneton';
    font-size: 90px;
}

</style>

<style lang="css">
  @import "../../src/assets/css/general-styles.css";
  

</style>

<script>
import MainTitleComp from '../../components/MainTitleComp.vue';
import { db } from "../../firebaseConfig.js";
import { ref, push, child, set, update, get} from "firebase/database";
import { DateTime } from 'luxon';
import '@fortawesome/fontawesome-free/css/all.css';
import Popup from '../../components/popup.vue';
import { ref as refer } from 'vue';


export default {
  components: {
    MainTitleComp,
    Popup
  },
  setup () {
		const popupTriggers = refer({
			buttonTrigger: false,
			timedTrigger: false
		});

		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}
        setTimeout(() => {
			popupTriggers.value.timedTrigger = true;
		}, 3000);
        
		return {
			Popup,
			popupTriggers,
			TogglePopup
		}
	},
  data() {
    return {
        JSONUser:[],
        response:'',
        userpath: '',
      requester: '',
      date: '',
      department: '',
      description: '',
      priority: '',
      status: '',
      subject: '',
      isOpen: false,
      isOpenEmp: false,
      selectedOption: null,
      selectedEmp: null,
      selectedDate: '',
      options: ['Open', 'Closed', 'Pending'], // Add your dropdown options here
      employees: [] // Add your dropdown options here
    };
  },
  methods: {
    submitForm: async function() {
        const updates = {};
        console.log(ref(db),"users/"+this.userpath+"/tickets_assigned");
        set(child(ref(db),"users/"+this.userpath+"/tickets_assigned/"+ useRoute().params.id), {
            ticket_author: this.requester,
            ticket_date: this.date,
            ticket_subject:this.subject,
            ticket_department:this.department,
            ticket_description:this.description,
            ticket_priority:this.priority,
            ticket_user_assigned: this.selectedEmp,
            ticket_status: "Pending",
            ticket_reply: this.response
        });
        console.log(ref(db),"tickets/"+useRoute().params.id)
        update(child(ref(db),"tickets/"+useRoute().params.id+"/"), {
            ticket_user_assigned: this.selectedEmp,
            ticket_reply: this.response,
            ticket_status:"Pending"
        });
        this.TogglePopup('buttonTrigger')
    },
    readUsers(userRef){
        get(userRef).then((snapshot) => {
            this.JSONUser = snapshot.val();
            this.readUserProp(this.JSONUser)
        })
    },
    readUserProp(data){
        for (const userId in data) {
            
            if (Object.hasOwnProperty.call(data, userId)) {
                const user = data[userId];
                this.employees.push({id: userId , name: user.full_name})
            }
        };
    },
    readTicket(reference){
      get(reference).then((snapshot) => { 
        const formattedDate = DateTime.fromFormat(snapshot.val().ticket_date.slice(0,15), 'ccc MMM dd yyyy').toFormat('M/d/yy');
        this.requester = snapshot.val().ticket_author;
        this.date = formattedDate; 
        this.department = snapshot.val().ticket_department + " Department";
        this.description = snapshot.val().ticket_description;
        this.priority = snapshot.val().ticket_priority;
        this.status = snapshot.val().ticket_status;
        this.subject = snapshot.val().ticket_subject;
        if(snapshot.val().ticket_reply !== ""){
            this.response = snapshot.val().ticket_reply;
        }
      })
    },
    toggleDropdown(type) {
      if(type == "status"){
        this.isOpen = !this.isOpen;
        this.isOpenEmp = false;
      }else{
        this.isOpenEmp = !this.isOpenEmp;
        this.isOpen = false;
      }
    },
    selectOption(option , type) {
      if(type == "status"){
        this.selectedOption = option.name;
        this.userpath = option.id;
        this.isOpen = false;
      }else{
        this.selectedEmp = option.name;
        this.userpath = option.id;
        this.isOpenEmp = false;
      }
    },
    chooseTheDotColor(priority) {
      switch (priority.toLocaleLowerCase().trim()) {
        case "high":
          return "";
        case "medium":
          return "dot-yellow";
        case "low":
          return "dot-green";
      }
    },
    openDatePicker() {
      this.$refs.datePicker.click();
      console.log(this.selectedDate);
    }
  },
  beforeMount() {
    const { id } = useRoute().params;
    const reference = ref(db, "tickets/"+id+"/");
    this.readTicket(reference)
    this.readUsers(ref(db, "users/"))
},
};
</script>