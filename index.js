const selected = document.getElementById("selected")
const quran =  document.getElementById("quran")
const ahzabN =  document.getElementById("ahzab")
const formN =  document.getElementById("from")
const toN =  document.getElementById("to")
const name =  document.getElementById("name")


quran.style.display = "none";
ahzabN.style.display = "none";
const todaydate= document.getElementById("date")

// const urlPram=  window.location.search

//let comingUsers=["Rachid","rakaa","yasser","Israa","Chorouq","Zineb"]

let users = {
  HajMuhamed_Rakaa: [1,"راكع محمد "],
  Khalid_Rakaa: [2,"راكع خالد"],
  Abdessamad_Rakaa: [3,"راكع عبد الصمد "],
  Adil_Rakaa: [4,"راكع عادل "],
  Abdalaziz_Rakaa: [5,"راكع عبد العزيز "],
  Abdelwadoud_Rakaa: [6,"راكع عبد الودود"],
  SSadiq_Rakaa: [7,"راكع صديق"],
  Abderrahim_Rakaa: [8,"راكع عبد الرحيم"],
  Hmed_Rakaa: [9,"راكع احمد"],
  Yahya_Rakaa: [10,"راكع يحيى"],
  Abdelwahab_Rakaa: [11,"راكع عبد الوهاب"],
  Rachid_Rakaa: [12,"راكع رشيد"],
  AbdEllah_Rakaa: [13,"راكع عبد الله"],
  Simohaamed_Rakaa: [14,"راكع سمحمد"],
  dessamad_aRakaa: [15,"معاريف مصطفى  "],
  Adil_Rakaaa: [16,"معاريف حمزة"],
  Abdalaziz_Raakaa: [17,"معاريف امين"],
  Abdelwadouda_Rakaa: [18,"معاريف ايوب"],
  SSadiq_Rakaaa: [19,"كريتي سعيد"],
  Abderrahiam_Rakaa: [20,"كريتي سمحمد"],
  Hmed_Rakaaa: [21,"كريتي عمر"],
  Yahya_Rakaas: [22,"كريتي عبد العزيز"],
  Abdelwahab_Raskaa: [23,"راكع عبد المومن"],
  Rachid_Rakaas: [24,"ابن عبد المومن"],
  AbdEllah_Raskaa: [25,"سرسار عبد الله"],
  Simohamed_sRakaa: [26,"سرسار عمر"],
   Abdelwasshab_Rakaa: [27,"مالكي خالد"],
  Rachid_sRakaa: [28,"راكع عبد سميع"],
  AbdElsslah_Rakaa: [29,"راكع عبد العزيز دمنات"],
  Simoshamed_Rakaa: [30,"راكع عبد الناصر المانيا"]
}
            
// const usersNames = urlPram == "?yes" ? Object.keys(users) : comingUsers
const usersNames = Object.keys(users)


const mapUsers = () =>{
    usersNames.map( user => {
        const option = document.createElement('option');
      console.log("name here: ",users.user[1])
        option.innerText= users.user[1]
        option.value= user
       selected.append(option)
   } )
}


mapUsers()


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

