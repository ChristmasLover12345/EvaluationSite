
let q3Body = document.getElementById('q3Body');
let q3NavBar = document.getElementById('q3NavBar');
let q3NavText = document.getElementById('q3NavText')
let discriptionDiv = document.getElementById('discriptionDiv');
let buttonDiv = document.getElementById('buttonDiv');
let btnDark = document.getElementById('btnDark');
let btnLight = document.getElementById('btnLight');

btnDark.addEventListener('click', function(){

q3Body.classList.add('darkGreyBg')
q3NavBar.classList.add('blackBg')
q3NavText.classList.add('whiteText')
discriptionDiv.classList.add('blackBg')
discriptionDiv.classList.add('whiteText')
buttonDiv.classList.add('blackBg')
buttonDiv.classList.add('whiteText')

})

btnLight.addEventListener('click', function(){

    q3Body.classList.remove('darkGreyBg')
    q3NavBar.classList.remove('blackBg')
    q3NavText.classList.remove('whiteText')
    discriptionDiv.classList.remove('blackBg')
    discriptionDiv.classList.remove('whiteText')
    buttonDiv.classList.remove('blackBg')
    buttonDiv.classList.remove('whiteText')
    
    })