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

    JImg.src = data.img_url
    JTitle.innerText = data.name
    JText.innerText = data.description
    jacobContainer.classList.add("show")

}

q1IsaiahBtn.addEventListener('click', function() {
    IsaiahFunc()
})

async function IsaiahFunc()
{
    const promise = await fetch ("https://evaluationmmadlib-asfqhkgke2e5hxf9.westus-01.azurewebsites.net/Isaiah/Isaiah");
    const data = await promise.json();
    console.log(data);

    IImg.src = data.img_url
    ITitle.innerText = data.name
    IText.innerText = data.description
    IsaiahContainer.classList.add("show")

}

q1CatBtn.addEventListener('click', function() {
    CatFunc()
})

async function CatFunc()
{
    const promise = await fetch ("https://evaluationmmadlib-asfqhkgke2e5hxf9.westus-01.azurewebsites.net/Cat/cat");
    const data = await promise.json();
    console.log(data);
    console.log("the CFA Url doesnt exist anymore");
    // the CFA Url doesnt exist anymore
    CImg.src = data.cfa_url
    CTitle.innerText = data.name
    CText.innerText = data.description
    CatContainer.classList.add("show")

}

q1FortniteBtn.addEventListener('click', function() {
    FortFunc()
})

async function FortFunc()
{
    const promise = await fetch ("https://fortnite-api.com/v2/cosmetics/br/Backpack_AbstractMirror");
    const data = await promise.json();
    console.log(data);

    FImg.src = data.data.images.icon
    FTitle.innerText = data.data.name
    FText.innerText = data.data.description
    FortniteContainer.classList.add("show")

}