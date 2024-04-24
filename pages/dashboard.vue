<template>
  <div class="flex dark:bg-black h-[100vh] w-screen flex-row">
    <Menu />
    <div class="p-2">
      <!--Title and button-->
      <div
        class="flex flex-row max-[1000px]:w-[90vw] min-[1001px]:w-[90vw] items-center justify-between"
      >
        <h1
          class=" dark:text-white tracking-wide pl-8 text-[12.5vh]"
        >
          Dashboard
        </h1>

              <router-link to="/createTicket" class="bg-custom-red-wine milkstore-text text-xl w-[150px] h-[45px] hover:bg-red-500 text-white font-bold py-2 px-4 inline-flex items-center justify-center">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                        fill="#ffffff" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                        fill="#ffffff" />
                </svg>
                <span class="pl-2">Create Ticket</span>
            </router-link to="/createTicket">
  
      </div>
      <!--Dashboard-->

      <!--Dashboard-->
      <div
        class="flex items-center flex-row justify-center h-[75vh] p-4 ml-8 bg-[#8A2424] rounded-lg shadow-xl w-6/6"
      >
        <!--Numbers Summary-->

        <div class="grid grid-cols-5 w-full h-full grid-rows-2 gap-2">
          <div
            class="col-start-3 row-start-1 p-4 dark:bg-black rounded-md shadow-lg flex flex-col justify-center items-center bg-white"
          >
            <h1
              class="text-black dark:text-white dark:text-whitetext-2xl tracking-wide milkstore-text"
            >
              Tickets Created By You
            </h1>
            <h1 class="text-red-500 text-6xl tracking-wide milkstore-text">
              17
            </h1>
          </div>
          <client-only>
            <div
              class="col-start-1 col-span-2 row-start-1 dark:bg-black rounded-md shadow-lg flex flex-col justify-center items-center bg-white"
            >
              <apexchart
                type="bar"
                height="100"
                width="450"
                :options="scoreboard.chartOptions"
                :series="scoreboard.series"
                class="mt-10"
              ></apexchart>
            </div>
          </client-only>
          <div
            class="dark:bg-black rounded-md shadow-lg p-4 flex flex-col justify-center items-center bg-white"
          >
            <h1
              class="text-black dark:text-white dark:text-whitetext-2xl tracking-wide milkstore-text"
            >
              Tickets Created By You
            </h1>
            <h1 class="text-red-500 text-6xl tracking-wide milkstore-text">
              17
            </h1>
          </div>
          <div
            class="dark:bg-black p-4 rounded-md shadow-lg flex flex-col justify-center items-center bg-white"
          >
            <h1
              class="text-black dark:text-white dark:text-whitetext-2xl tracking-wide milkstore-text"
            >
              Tickets Created By You
            </h1>
            <h1 class="text-red-500 text-6xl tracking-wide milkstore-text">
              {{t_created}}
            </h1>
          </div>
          <div
            class="col-start-1 dark:bg-black rounded-md shadow-lg p-4 flex flex-col justify-center items-center bg-white"
          >
            <h1
              class="text-black dark:text-white dark:text-whitetext-2xl tracking-wide milkstore-text"
            >
              Tickets Created By You
            </h1>
            <h1 class="text-red-500 text-6xl tracking-wide milkstore-text">
              17
            </h1>
          </div>

          <div
            class="col-start-2 col-span-2 dark:bg-black rounded-md auto-cols-max shadow-lg  overflow-y-hidden flex flex-col overflow-x-scroll justify-center items-center bg-white"
          >
            <div class="overflow-scroll   shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
          </div>

          <client-only>
            <div
              class="col-start-4 col-span-2 dark:bg-black rounded-md shadow-lg p-4 flex flex-col justify-center items-center bg-white"
            >
              <apexchart
                width="300px"
                :options="chartOptions"
                :series="series"
                :markers="markers"
              ></apexchart>
            </div>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css">
@import "../src/assets/css/general-styles.css";
</style>
<script setup lang="js">
import { db } from "../firebaseConfig.js";
import { getDatabase, ref, onValue } from "firebase/database";

const count =0;
const ticketref= ref(db,'tickets/');
let t_created =0;
const set_created=(value)=>{
  t_created=value;
}


//Tickets  Created
onValue(ticketref, (snapshot) => {
snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
      console.log(childData['ticket_author']);
    if(childData['ticket_author']==="Marlon Gaitan"){
      console.log(count);
      count++;
   
    }
  

  });
  
   set_created(4);
},
);


const scoreboard = {

          series: [{
            name: 'Inflation',
            data: [2.3, 3.1, 4.0, 10.1, 4.0]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "%";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },

            xaxis: {
              categories: ["Carlos", "Janes", "Alex", "Apr", "May"],
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "%";
                }
              }

            },
            title: {
              text: 'Tickets Answered',
              floating: true,
              offsetY: 330,
              align: 'center',
              style: {
                color: '#444'
              }
            }
          },


        };



const chartOptions = {
  chart: {
    type: 'donut',
    id: "vuechart-example",
  },
  colors: ["#8A2432","#FFB900","#4285F4"],
  fill: {
  colors: ["#8A2432","#FFB900","#4285F4"],

},
  plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      showAlways: true,
                      show: true
                    }
                  }
                }
              }
            },
            labels: ["High", "Medium", "Low"],
            dataLabels: {
              enabled: false,
              dropShadow: {
                blur: 3,
                opacity: 0.8
              },

          },
          legend:{
          markers: {
          width: 20,
          height: 20,
          radius: 0,
              },},
};

const series = [30, 30, 40];

const appData = {
  stats: [
    { title: "Tickets Answered Today", value: "17" },
    { title: "Tickets Unanswered", value: "18" },
    { title: "Ticket Answered", value: "50" }
  ],


 oldIndex: null,
 newIndex: null,
};
const methods = {
  handleDragstart(oldIndex) {
    appData.oldIndex = oldIndex;
  },
  handleDragover(newIndex) {
    if (newIndex !== appData.oldIndex) {
      appData.newIndex = newIndex;
    }
  },
  handleDrop() {
    const elRemoved = appData.stats.splice(appData.oldIndex, 1)[0];
    appData.stats.splice(appData.newIndex, 0, elRemoved);
  },
  handleDragend() {
    appData.oldIndex = null;
    appData.newIndex = null;
  }
};
</script>
