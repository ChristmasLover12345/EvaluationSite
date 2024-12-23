let wickedCSSBtn = document.getElementById('wickedCSSBtn')
let wickedCssClass = document.getElementById('wickedCssClass')
let randomCSSBtn = document.getElementById('randomCSSBtn')
let result = document.getElementById('result')

let desiredClass = "";

wickedCssClass.addEventListener('blur', () => {

desiredClass = wickedCssClass.value.trim()


})




wickedCSSBtn.addEventListener('click', function(){
result.classList.add(desiredClass)
})


randomCSSBtn.addEventListener("click", () =>{

    let animation = ["barrelRoll", "fadeIn", "floater", "heartbeat", "pulse", "rollerLeft", "rollerRight", "rotateIn", "rotateInLeft", "rotateInRight", "rotation", "shake", "sideToSide", "slideDown", "slideLeft", "slideRight", "slideUp", "spinner", "wiggle", "zoomer", "zoomerOut"]

let randomIndex = Math.floor(Math.random() * animation.length );

result.classList.add(animation[randomIndex])

})