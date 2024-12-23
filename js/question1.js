// Jacob API url 'https://evaluationmmadlib-asfqhkgke2e5hxf9.westus-01.azurewebsites.net/jacoozi/jacoozi'
// Isaiah API url 'https://evaluationmmadlib-asfqhkgke2e5hxf9.westus-01.azurewebsites.net/Isaiah/Isaiah'
// Cat API url 'https://evaluationmmadlib-asfqhkgke2e5hxf9.westus-01.azurewebsites.net/Cat/cat'
// FortNite API url 'https://fortnite-api.com/v2/cosmetics/br/Backpack_AbstractMirror'

let q1JacobBtn = document.getElementById('q1JacobBtn');
let q1IsaiahBtn = document.getElementById('q1IsaiahBtn');
let q1CatBtn = document.getElementById('q1CatBtn');
let q1FortniteBtn = document.getElementById('q1FortniteBtn');

let jacobContainer = document.getElementById('jacobContainer');
let IsaiahContainer = document.getElementById('IsaiahContainer');
let CatContainer = document.getElementById('CatContainer');
let FortniteContainer = document.getElementById('FortniteContainer');

let JImg = document.getElementById('JImg');
let IImg = document.getElementById('IImg');
let CImg = document.getElementById('CImg');
let FImg = document.getElementById('FImg');

let JTitle = document.getElementById('JTitle');
let ITitle = document.getElementById('ITitle');
let CTitle = document.getElementById('CTitle');
let FTitle = document.getElementById('FTitle');

let JText = document.getElementById('JText');
let IText = document.getElementById('IText');
let CText = document.getElementById('CText');
let FText = document.getElementById('FText');


q1JacobBtn.addEventListener('click', function() {
    jacobFunc()

})

async function jacobFunc()
{
    const promise = await fetch ("https://evaluationmmadlib-asfqhkgke2e5hxf9.westus-01.azurewebsites.net/jacoozi/jacoozi");
    const data = await promise.json();
    console.log(data);

    jacobContainer.classList.add("show")

}