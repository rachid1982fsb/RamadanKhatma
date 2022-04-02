const selected = document.getElementById("selected")
const quran =  document.getElementById("quran")
const ahzabN =  document.getElementById("ahzab")
const formN =  document.getElementById("from")
const toN =  document.getElementById("to")
const name =  document.getElementById("name")


quran.style.display = "none";
ahzabN.style.display = "none";
const todaydate= document.getElementById("date")

const urlPram=  window.location.search

let comingUsers=["Rachid","rakaa","yasser","Israa","Chorouq","Zineb"]

let users = {
               Khalid_Rakaa: [1,"سلام"],
               HajMuhamed_Rakaa: [3,"سلام"],
               Abdelwadoud_Rakaa: [5,"نتايس"],
               //Imran_Rakaa: [7,8],
               //IbnAbdelmoumen_Rakaa: [9,10],
               //HajHassan_Rakaa: [11,12],
               //Simohammed_Rakaa: [13,14],
               AbdElssamia_Rakaa: [7,8],
               //Miloud_Mouarif: [25,26],
               Adil_Rakaa: [9,"هعثص"],
               Abdelssamad_Rakaa: [11,12],
               Rachid_Rakaa: [13,14],
               Yahya_Rakaa: [15,16],
               //Mohammed_Atari: [41,42],
               Sadiq_Rakaa: [17,18],
               //Mohamed_Lakriti: [45,46],
               //Ahmed_Rakaa: [49,50],
               //AbdEllah_Rakaa: [51,52],
              // Aziz_Rakaa: [53,54],
               Abdelmoumen_Rakaa: [19,20],
               Abdelwahab_Rakaa: [21,22],
               Mastapha_Mouarif: [23,24],
               Ayoub_Mouarif: [25,26],
               Amine_Mouarif: [27,28],
               Said_Elkriti: [29,30],
               Aziz_Lakriti: [31,32],
               //Abdelhaq_Qadach: [57,58],
               Omar_Lakriti: [33,34],
               Abderrahman_Rakaa: [35,36],
               Hamza_Mouarif: [37,38]
            }
            
const usersNames = urlPram == "?yes" ? Object.keys(users) : comingUsers


const mapUsers = () =>{
    usersNames.map( user => {
        const option = document.createElement('option');
        option.innerText= user
        option.value= user
       selected.append(option)
   } )
}


mapUsers()
selected1.addEventListener('change', event => {
    event.preventDefault();
   console.log("selectd 1")
   let x = selected1.selectedIndex;
   let y = selected1.options;
  
    console.log("value: " + selected1.value + " is " + y[x].text)
   let juza=selected1.value
    name.innerText = " "+ y[x].text + " "
    const ahzab =  [(((juza)*2)-1), ((juza)*2)]? [(((juza)*2)-1), ((juza)*2)] : [0,0]
    getTodayAhzab(ahzab)

    quran.style.display = "block";
    ahzabN.style.display = "block";
})

selected.addEventListener('change', event => {
    event.preventDefault();
 
    const userHizb = users[selected.value] ? users[selected.value] : [0,""]
    name.innerText=" "+ userHizb[1] + " "
    const juza =  userHizb[0]
    const ahzab =  [(((juza)*2)-1), ((juza)*2)]? [(((juza)*2)-1), ((juza)*2)] : [0,0]
    console.log("selectd")
    //quran.innerText= "The Ahazab that "+ selected.value + " need to read to day is:"
    //ahzabN.innerText= getTodayAhzab(ahzab)
    getTodayAhzab(ahzab)
    quran.style.display = "block";
    ahzabN.style.display = "block";
})


//get today Date
let today = new Date(); 
todaydate.innerText = today

// get Hadit 
//const tohadit= document.getElementById("hadit")


//tohadit.innerText = hadit1


// convert a date to a number so we can use it to change Ahzab based on that date
const dateN = today.getDate()

//get a date in Ramadan using the start date of ramadan and today's date 
function dateInRamadan(tDate, rStart){
  const result = tDate >=rStart ? tDate-rStart +1 : tDate-rStart +31
  return result
}
const sDR=3 //the starting date of Ramadan
// a function that take inital ahzab for the first day of ramadan and return the current ahzab based of today date
const getTodayAhzab=(arr)=>{

    const start = (arr[0] + 2*(dateInRamadan(dateN, sDR) -1 )) <= 60 ? (arr[0] + 2*(dateInRamadan(dateN, sDR) -1 )) : (arr[0] + 2*(dateInRamadan(dateN, sDR) -1 ))-60
    const end = (arr[1] + 2*(dateInRamadan(dateN, sDR) -1 )) <= 60 ? (arr[1] + 2*(dateInRamadan(dateN, sDR) -1 )) : (arr[1] + 2*(dateInRamadan(dateN, sDR) -1 ))-60
    
    formN.innerText=start
    toN.innerText=end
}

