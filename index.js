const selected=document.getElementById("selected")
const quran =  document.getElementById("quran")
const ahzabN =  document.getElementById("ahzab")
const formN =  document.getElementById("from")
const toN =  document.getElementById("to")
const name =  document.getElementById("name")

quran.style.display = "none";
ahzabN.style.display = "none";
const todaydate= document.getElementById("date")



const users = {
               AbdElssamia_Rakaa: [7,8],
               Yahya_Rakaa: [15,16],
               HajMuhamed_Rakaa: [3,4]
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
    quran.style.display = "block";
    ahzabN.style.display = "block";
})


//get today Date
let today = new Date(); 
todaydate.innerText = today

// convert a date to a number so we can use it to change Ahzab based on that date
const dateN = today.getDate()

//get a date in Ramadan using the start date of ramadan and today's date 
function dateInRamadan(tDate, rStart){
  const result = tDate >=rStart ? tDate-rStart +1 : tDate-rStart +31
  return result
}

// a function that take inital ahzab for the first day of ramadan and return the current ahzab based of today date
const getTodayAhzab=(arr)=>{

    const start = (arr[0] + 2*(dateInRamadan(dateN, 14) -1 )) <= 60 ? (arr[0] + 2*(dateInRamadan(dateN, 14) -1 )) : (arr[0] + 2*(dateInRamadan(dateN, 14) -1 ))-60
    const end = (arr[1] + 2*(dateInRamadan(dateN, 14) -1 )) <= 60 ? (arr[1] + 2*(dateInRamadan(dateN, 14) -1 )) : (arr[1] + 2*(dateInRamadan(dateN, 14) -1 ))-60
    
    formN.innerText=11
    toN.innerText=13
}

