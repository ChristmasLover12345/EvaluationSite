// https://evaluationmmadlib-asfqhkgke2e5hxf9.westus-01.azurewebsites.net/madlib/madlib

let madLibBtn = document.getElementById('madLibBtn')
let madLib = document.getElementById('madLib')

let madInput1 = document.getElementById('madInput1')
let madInput2 = document.getElementById('madInput2')
let madInput3 = document.getElementById('madInput3')
let madInput4 = document.getElementById('madInput4')
let madInput5 = document.getElementById('madInput5')
let madInput6 = document.getElementById('madInput6')
let madInput7 = document.getElementById('madInput7')



let place = ""
let adjective = ""
let animal = ""
let verb = ""
let noun = ""
let pluralNoun = ""
let loc = ""

madInput1.addEventListener('keydown', function(e){

 if (e.key === "Enter")
 {
    place = madInput1.value.trim()
 }

})

madInput2.addEventListener('keydown', function(e){

    if (e.key === "Enter")
    {
       adjective = madInput2.value.trim()
    }
   
})

madInput3.addEventListener('keydown', function(e){

    if (e.key === "Enter")
    {
       animal = madInput3.value.trim()
    }
   
})
   
madInput4.addEventListener('keydown', function(e){
   
    if (e.key === "Enter")
    {
      verb = madInput4.value.trim()
    }
      
})

madInput5.addEventListener('keydown', function(e){

    if (e.key === "Enter")
    {
       noun = madInput5.value.trim()
    }
   
})
   
madInput6.addEventListener('keydown', function(e){
   
   if (e.key === "Enter")
   {
      pluralNoun = madInput6.value.trim()
   }
      
})
   
madInput7.addEventListener('keydown', function(e){
   
   if (e.key === "Enter")
   {
      loc = madInput7.value.trim()
   }
      
})


madLibBtn.addEventListener('click', async function(){

    const promise = await fetch ("https://evaluationmmadlib-asfqhkgke2e5hxf9.westus-01.azurewebsites.net/madlib/madlib");
    const data = await promise.json();
    console.log(data)

    madLib.innerText = `${data.value[0]}${place} ${data.value[2]}${adjective} ${data.value[4]}${animal} ${data.value[6]}${verb} ${data.value[8]}${noun} ${data.value[10]}${pluralNoun} ${data.value[12]}${loc} ${data.value[14]}.`


})