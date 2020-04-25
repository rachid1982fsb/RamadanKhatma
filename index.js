const selected=document.getElementById("selected")
const quran =  document.getElementById("quran")
const ahzabN =  document.getElementById("ahzab")
const formN =  document.getElementById("from")
const toN =  document.getElementById("to")
const name =  document.getElementById("name")


const todaydate= document.getElementById("date")



const users = {HajMuhamed_Rakaa: [1,6],
               HajHassan_Rakaa: [7,12],
               Simohammed_Rakaa: [13,14],
               Said_Elkriti: [15,16],
               Abdelmoumen_Rakaa: [17,18],
               Mastapha_Mouarif: [19,20],
               Omar_Rakaa: [21,22],
               Abdelwadoud_Rakaa: [23,24],
               Miloud_Mouarif: [25,26],
               Hamza_Mouarif: [27,28],
               Abdelssamad_Rakaa: [29,30],
               Adil_Rakaa: [31,32],
               Rachid_Rakaa: [33,34],
               Abdelwahab_Rakaa: [35,36],
               Amine_Mouarif: [37,38],
               Ayoub_Mouarif: [39,40],
               Mohammed_Atari: [41,42],
               Sadiq_Rakaa: [43,44],
               Mohamed_Lakriti: [45,46],
               Khalid_Rakaa: [47,48],
               Ahmed_Rakaa: [49,50],
               AbdEllah_Rakaa: [51,52],
               Aziz_Rakaa: [53,54],
               Aziz_Lakriti: [55,56],
               Abdelhaq_Qadach: [57,58],
               Abderrahman_Rakaa: [59,60]
            }
            


const usersNames= Object.keys(users)


const mapUsers = () =>{
    usersNames.map( user => {
        const option = document.createElement('option');
        option.innerText= user
        option.value= user
        selected.append(option)

    } )
    
}


mapUsers()
selected.addEventListener('change', event => {
    event.preventDefault();
 
    const ahzab = users[selected.value] ? users[selected.value] : [0,0]
    name.innerText=" "+selected.value + " "
    // quran.innerText= "The Ahazab that "+ selected.value + " need to read to day is:"
    // ahzabN.innerText= getTodayAhzab(ahzab)
    getTodayAhzab(ahzab)
})

//get today Date
let today = new Date(); 
todaydate.innerText = today

// convert a date to a number so we can use it to change Ahzab based on that date
var dateN = (today.getMonth()+1)+today.getDate()

// a function that take inital ahzab for the first day of ramadan and return the current ahzab based of today date
const getTodayAhzab=(arr)=>{
    const start = (arr[0] + 2*(dateN - 29)) <= 60 ? (arr[0] + 2*(dateN - 29)) : (arr[0] + 2*(dateN - 29))-60
    const end = (arr[1] + 2*(dateN - 29)) <= 60 ? (arr[1] + 2*(dateN - 29)) : (arr[1] + 2*(dateN - 29))-60
    console.log(dateN)
    formN.innerText=start
    toN.innerText=end
    //  return "form Hizb "+start + " to " + "Hizb "+end
}

