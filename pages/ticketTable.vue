<template>
    <div class="p-10 milkstore-text text-xl w-full">
<!-- TITLE -->
        <div class="flex items-center flex-row h-16 justify-between mt-6 mb-6">
            <h1 class="text-3xl main-title">Tickets</h1>
            <router-link to="/createTicket" class="bg-custom-red-wine milkstore-text text-xl w-36 h-15 hover:bg-red-500 text-white font-bold py-2 px-4 inline-flex items-center justify-center">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#ffffff"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="#ffffff"/>
                </svg>
                <span class="pl-2">Create Ticket</span>
            </router-link to="/createTicket">
        </div>
<!-- SEARCH BAR -->
        <div class="flex justify-center items-center">
            <div class="relative w-2/4">
                <input
                type="text"
                ref="searchBar"
                placeholder="Subject"
                v-model="searchQuery"
                class="pl-10 pr-4 py-2 border border-custom-700 focus:outline-none focus:border-blue-500  text-xl w-full"
                @keyup.enter="SearchKeyword($event.target.value)"
                />
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        class="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                        />
                    </svg>
                </div>
                <button v-if="searchQuery" @click="resetSearch()" class="absolute inset-y-1 right-0 flex items-center pr-3">
                    <svg width="15px" height="15px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path stroke="#535358" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 23.5l15-15M23.5 23.5l-15-15"/>
                    </svg>
                </button>
            </div>
        </div>
        <!-- <div class="flex justify-center">SEARCH: "REASD ASD ASD A"</div> -->
<!-- FILTERS -->
        <div class="flex flex-row justify-center gap-4 py-4 items-center w-full">
            FILTER BY: 
            <div class="w-40">
                <DropboxComp id="requester" :has_clear_button="true" :default_caption="'REQUESTER'" :text_type="'milkstore04-text text-sm'" :options="requester_options" @input="receiveDataFromRequester" />
                <span class="flex milkstore04-text text-xxs justify-center">
                    <!-- Requester -->
                </span>
            </div>
            <div class="w-40">
                <DropboxComp id="priority" :has_clear_button="true" :default_caption="'PRIORITY'" :text_type="'milkstore04-text text-sm'" :options="priorities_options" @input="receiveDataFromPriority" />
                <span class="flex milkstore04-text text-xxs justify-center">
                    <!-- Priority -->
                </span>
            </div>
            <div class="w-40">
                <DatePicker id="date" @dateValue="receiveDataFromDate" />
                <span class="flex milkstore04-text text-xxs justify-center">
                    <!-- Date -->
                </span>
            </div>
            <button @click="SearchByFilter" class="flex rounded-full justify-center items-center bg-custom-red-wine text-white border border-custom-red-wine p-2 focus:outline-none focus:border-blue-500">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
<!-- TABLE -->
        <table class="table-auto w-full border-collapse border border-custom-red-wine milkstore-text">
            <thead class="bg-custom-red-wine text-white">
                <tr>
                    <th class="border-white border-r py-2">SUBJECT</th>
                    <th class="border-white border-r py-2">REQUESTER</th>
                    <th class="border-white border-r py-2">PRIORITY</th>
                    <th class="border-white border-r py-2">STATUS</th>
                    <th class="border-white border-r py-2">DATE</th>
                    <th class="">ASSIGNED TO</th>
                </tr>
            </thead>
            <tbody class="milkstore04-text text-base">
                <tr v-for="(ticket , index) in table_tickets" :key="index">
                    <td class="border-custom-red-wine border-r w-2/6 py-1 pl-10">{{ ticket.subject }}</td>
                    <td class="border-custom-red-wine border-r w-1/4 text-center">{{ ticket.requester }}</td>
                    <td class="border-custom-red-wine border-r text-center px-10">{{ ticket.priority }}</td>
                    <td class="border-custom-red-wine border-r text-center px-10">{{ ticket.status }}</td>
                    <td class="border-custom-red-wine border-r text-center px-10">{{ ticket.date }}</td>
                    <td class="border-custom-red-wine border-r w-1/4 text-center">{{ ticket.assigned_to }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="css">
  @import "../src/assets/css/general-styles.css";
</style>

<script>
    import MainTitleComp from '../components/MainTitleComp.vue';
    import DropboxComp from '../components/DropboxComp.vue';
    import DatePicker from '../components/DatePicker.vue';
    import {DateTime} from 'luxon';
    import Fuse from 'fuse.js';

    export default {
    components: {
        MainTitleComp,
        DropboxComp,
        DatePicker
    },
    methods: {
        SearchKeyword(query) {
            const fuse = new Fuse(this.tickets_from_db, {
                keys: ['subject'],
            });
            this.table_tickets = fuse.search(query).map(({ item }) => item);
            // console.log(this.table_tickets);
        },
        SearchByFilter(){
            
            let filteredTickets = this.tickets_from_db;

            if (this.requester) {
                filteredTickets = filteredTickets.filter(ticket => ticket.requester.toLowerCase().trim() === this.requester.toLowerCase().trim());
            }
            if (this.priority) {
                filteredTickets = filteredTickets.filter(ticket => ticket.priority.toLowerCase().trim() === this.priority.toLowerCase().trim());
            }

            if (this.dateValue) {
                this.dateValue =  DateTime.fromISO(this.dateValue).toFormat('M/d/yy');
                filteredTickets = filteredTickets.filter(ticket => {
                    console.log("ticket.date: ."+ticket.date+'.');
                    ticket.date == this.dateValue
                });
            }
            this.table_tickets = filteredTickets;

            console.log(this.table_tickets);
            console.log(this.requester);
            console.log(this.priority);
            console.log(this.dateValue);
        },
        resetSearch() {
            this.$refs.searchBar.value = '';
            this.table_tickets = this.tickets_from_db;
            this.searchQuery = '';
        },
        receiveDataFromRequester(data) {
            this.requester = data;
        },
        receiveDataFromPriority(data) {
            this.priority = data;
        },
        receiveDataFromDate(data) {
            this.dateValue = data;
        }
    },
    created() {
        this.table_tickets = this.tickets_from_db;
    },
    computed: {
        showClearButton() {
            return this.searchQuery != '';
        }
    },
    data() {
        return {
            searchQuery: '',
            requester : '',
            priority : '',
            dateValue : '',
            priorities_options: ['LOW', 'MEDIUM', 'HIGH'],
            requester_options: ['Pedro', 'Eduardo', 'Juan', 'Gabriela', 'Juan', 'Gabriela', 'Juan', 'Gabriela', 'Juan', 'Gabriela', 'Juan', 'Gabriela', 'Juan', 'Gabriela'],
            table_tickets: [],
            tickets_from_db: [
                {
                    id: 1,
                    subject: 'Hygiene Issues',
                    requester: 'Pablo',
                    priority: 'LOW',
                    status: 'Open',
                    date: '4/10/24',
                    assigned_to: 'Eduardo Carim'
                },
                {
                    id: 2,
                    subject: 'Dog Issues',
                    requester: 'Eduardo',
                    priority: 'HIGH',
                    status: 'CLOSE',
                    date: '4/10/22',
                    assigned_to: 'Eduardo Carim'
                },
                {
                    id: 3,
                    subject: 'Cat Issues',
                    requester: 'Carlos',
                    priority: 'MEDIUM',
                    status: 'OPEN',
                    date: '4/10/23',
                    assigned_to: 'Gabriela'
                },
                {
                    id: 4,
                    subject: 'Bird Issues',
                    requester: 'Karol',
                    priority: 'LOW',
                    status: 'CLOSE',
                    date: '4/10/25',
                    assigned_to: 'Juan'
                },
                {
                    id: 5,
                    subject: 'Fish Issues',
                    requester: 'Uriel',
                    priority: 'MEDIUM',
                    status: 'OPEN',
                    date: '4/10/26',
                    assigned_to: 'Eduardo Marques'
                },
                {
                    id: 6,
                    subject: 'Snake Issues',
                    requester: 'Juan',
                    priority: 'HIGH',
                    status: 'CLOSE',
                    date: '4/10/27',
                    assigned_to: 'Robinson'
                },
                {
                    id: 7,
                    subject: 'Spider Issues',
                    requester: 'Robinson',
                    priority: 'HIGH',
                    status: 'OPEN',
                    date: '4/10/28',
                    assigned_to: 'Pablo'
                },
                {
                    id: 8,
                    subject: 'Bug Issues',
                    requester: 'Eduardo Marques',
                    priority: 'LOW',
                    status: 'CLOSE',
                    date: '4/10/29',
                    assigned_to: 'Karol'
                }
            ],

        }
        
    }
    };
</script>