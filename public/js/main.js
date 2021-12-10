import {todayAnimation} from './libs/animation.js';
import {close} from './libs/close.js';
import {eventList} from './libs/event/event.js';

// let display = document.getElementById('display');
// let api = "https://www.prevision-meteo.ch/services/json/toulon";

// fetch(api).then(response => response.json()).then(data => {
//     console.log(data);
//     //permet de comparer la date actuelles avec la date de la data api
//     let date = new Date();
//     date = parseInt(date.getHours());

//     let d = data.current_condition.hour;
//     for(let i = 0 ; i <= d.length; i++) {
    
//         let dateApi = d[0]+d[1];
//         dateApi = parseInt(dateApi);

//         if(dateApi === date) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     }
//     //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    

//     let html = ``;
//     html+= `<div id="app">`;
//     html += head(data);
//     html += nextday(data);
//     html += body(data);
//     html += `</div>`;
//     display.innerHTML = html;
//     todayAnimation();
//     close();
// });
todayAnimation();
close();
eventList();