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
let location = ""

madInput1.addEventListener('keydown', function(e){

 if (e.key === 'Enter')
 {
    
 }

})




madLibBtn.addEventListener('click', async function(){

    const promise = await fetch ("https://evaluationmmadlib-asfqhkgke2e5hxf9.westus-01.azurewebsites.net/madlib/madlib");
    const data = await promise.json();
    console.log(data)




})