/*---Menu Show Y Hidden---*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*---Menu Show---*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*---Menu Hidden---*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*---Remove Menu Mobile---*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav-link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
 navLink.forEach(n => n.addEventListener('click', linkAction))   


/*---Change Background Header---*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*---Dark and Light Themes---*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon =  () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*---JSON---*/ 

const dogData = [{
    Breed: "African Wild Dog",
    Description: "An African wild dog is a wild and untamed dog common in central Africa",
    Identifier: "Brown, grey, red, black, white, gold, tan",
    Weight: "17 - 36",
    Lifespan: "10 - 13",
    Temperament: "African wild dogs live in packs that are usually dominated by a monogamous breeding pair.",
    FunFact: "Also known as the painted dog!",
    photo: "../Resources/AfricanWildDog.jpg",
    tags: "1",

},
{
    Breed: "Boerboel",
    Identifier: "Cream, reddish brownm brindlem tawny",
    Description: "Steadfast, calm, highly intelligent, and incredibly loyal. Boerboels must be with their people and will not thrive unless kept as an integral part of their human family.",
    Weight: "68 - 90",
    Lifespan: "10 - 12",
    Temperament: "Smart, Confident, Obedient, Territorial",
    FunFact: "Boerboels love their human families and are especially known for being protectors of their children.",
    photo: "../Resources/Boerboel.jpg",
    tags: "2",

},
{
    Breed: "American Pit Bull Terrier",
    Identifier: "Brown, black, white, tan, brindle",
    Description: "American pit bull terriers generally have a friendly and affectionate personality. They also usually have a very playful temperament and love to engage in games and dog sports with their humans. They also tend to take well to training.",
    Weight: "14 - 27",
    Lifespan: "8 - 15",
    Temperament: "Friendly, loyal, playful, affectionate, and slightly stubborn sometimes",
    FunFact: "These dogs are very energetic and would be up for a game at any given point of time",
    photo: "../Resources/American Pitbull.jpg",
    tags: "3",

},
{
    Breed: "Boston Terrier",
    Identifier: "Brown, grey, red, black, white, tan",
    Description: "Bostons tend to be good-natured, playful dogs. For people who want a cheerful companion, the Boston can be great choice. Bostons generally get along well with other pets, even cats, especially if they are raised together.",
    Weight: "4,5 -11",
    Lifespan: "13 - 15",
    Temperament: "Strong, friendly and devoted",
    FunFact: "The Boston Terrier is people-oriented, always preferring to be with you.",
    photo: "../Resources/Boston.jpg",
    tags: "4",

},
{
    Breed: "Bull Terrier",
    Identifier: "Brown, black, white, tan",
    Description: "Bull terriers are gentle, affectionate and playful with family members. They also are loyal pets that will guard the family.",
    Weight: "22 - 38",
    Lifespan: "10 - 14",
    Temperament: "Friendly and alert but stubborn",
    FunFact: "Bull terriers are extremely powerful dogs.",
    photo: "../Resources/Bull Terrier.jpg",
    tags: "5",

},
{
    Breed: "Bulldog",
    Identifier: "Brown, fawn, black, white, tan",
    Description: "Sweet, gentle disposition. Dependable and predictable, the bulldog is a wonderful family pet and loving to most children.",
    Weight: "18 - 23",
    Lifespan: "8 - 10",
    Temperament: "Gentle, calm and affectionate",
    FunFact: "They were bred to fight bulls",
    photo: "../Resources/Bulldog.jpg",
    tags: "6",

},
{
    Breed: "Doberman",
    Identifier: "Rust and Blue, Red, Tan, Brown, White Black",
    Description: "Dobermans are very intelligent, learn easily, respond quickly, and make loving and fun companions. However, they are very strong dogs and can become pushy, destructive, and unmanageable if not raised properly.",
    Weight: "32,2 - 44,9",
    Lifespan: "10 - 12",
    Temperament: "Energetic, Obedient",
    FunFact: "The Doberman is one of the only dog breeds that has kept the name of its founder.",
    photo: "../Resources/Doberman.jpg",
    tags: "7",

},
{
    Breed: "German Shepherd",
    Identifier: "Black, Black & Tan, Sable, Red & Black, Black & Silver, Grey",
    Description: "Gentle and loving with their families. Their affectionate and dedicated personalities are a bonus of the breed, and they can be particularly fond of children.",
    Weight: "43-50",
    Lifespan: "10-12",
    Temperament: "Highly active and fearless dogs!",
    FunFact: "German Shepherds were tasked with watching over flocks of sheep and herding them from field to field.",
    photo: "../Resources/German Shepard.jpg",
    tags: "8",

},
{
    Breed: "Golden Retriever",
    Identifier: "Dark Golden, Light Golden, Cream, Golden",
    Description: "The golden retriever is even-tempered, intelligent and affectionate. Golden retrievers are playful, yet gentle with children, and they tend to get along well with other pets and strangers.",
    Weight: "34-36",
    Lifespan: "12-13",
    Temperament: "Trusting, kind and gentle!",
    FunFact: "Golden Retrievers trace their history back to Scotland.",
    photo: "../Resources/Golden Retriever.jpg",
    tags: "9",

},
{
    Breed: "Pug",
    Identifier: "Black, Fawn, Apricot, Silver Fawn",
    Description: "Pugs can be stubborn but normally want to please. These are fairly laid-back dogs, not usually given to extensive barking, digging or chewing. Pugs tend to get along well with other dogs and are sturdy enough to get along with children.",
    Weight: "8-10",
    Lifespan: "11-14",
    Temperament: "Charming, Clever, Playful, Mischievous, Stubborn, Docile, Sociable, Affectionate, Attentive, Loving, Quiet, Calm.",
    FunFact: "They were bred to be lap dogs.",
    photo: "../Resources/Pug.jpg",
    tags: "10",

},
{
    Breed: "Rottweiler",
    Identifier: "Black, tan",
    Description: "The ideal Rottweiler is calm, confident, and courageous, never shy. He has a self-assured aloofness and doesn't make friends with people immediately or indiscriminately. With his family, he's affectionate, often following them around the house.",
    Weight: "59,9",
    Lifespan: "12",
    Temperament: "Loyal, affectionate, calm, quiet, sensitive and protective",
    FunFact: "The Rottweiler is thought to be one of the oldest breeds of dog in the world, dating back to Ancient Rome.",
    photo: "../Resources/Rottweiler.jpg",
    tags: "11",

}
// {
//     Breed: "",
//     Identifier: "",
//     Description: "",
//     Weight: "",
//     Lifespan: "",
//     Temperament: "",
//     FunFact: "",
//     photo: "../Resources/Placeholder.png",
//     tags: "",

// }
];

const catData = [{
    Breed: "Abyssinian",
    Identifier: "Brown, grey, black, white, beige",
    Weight: "2,7 - 4,5",
    Lifespan: "13 - 15",
    Temperament: "Intelligent and curious",
    FunFact: "The oldest breed of cat in the world!",
    photo: "../Resources/Abyssinian.jpg",
    tags: "",

},
// {
//     Breed: "",
//     Identifier: "",
//     Weight: "",
//     Lifespan: "",
//     Temperament: "",
//     FunFact: "",
//     photo: "../Resources/Placeholder.png",
//     tags: "",

// }
];


//Creation of card divs function
function cardTemplate(card) {

    return `

    <div id="${card.Breed}" onclick="saveDogBreed(this.id)" id="${card.Breed}">
        <a href="../html/symptoms.html">
            <div class="breedCard">
                <img src="../Resources/${card.photo}"  alt="" class="breed_image" id="${card.Breed}">
                <div class="card_details" id="${card.Breed}">
                    <p class="breed__title">${card.Breed}</p>
                    <p class="breed__description">${card.Description}</p>
                </div>
            </div>
        </a>
    </div>
`

}

//Goes through json storage for each animal type
var dataValue = localStorage.getItem('data');

var cardDataValue;

if(dataValue === "dogData"){
    cardDataValue = dogData
}

if(dataValue === "catData"){
    cardDataValue = catData
}

if(dataValue === "birdData"){
    cardDataValue = birdData
}

if(dataValue === "rodentData"){
    cardDataValue = rodentData
}

//Cycles threw all the data and runs cardTemplate to create a card for each of the data objects
document.getElementById("cards").innerHTML = `

${cardDataValue.map(cardTemplate).join("")}

`

//Saves Breed data
function saveDogBreed(breed){
    localStorage.setItem('dogBreedPicked', breed);
}

//Search bar keyup function that uses jquery
$("#SearchBar").keyup(function() {

    var filter = $(this).val(),
        count = 0;

    $('#cards div').each(function() {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).animate({ "opacity": "hide", top: "100" }, 200);
        } else {
            $(this).animate({ "opacity": "show", top: "100" }, 200);
            count++;
        }
    });
});

//Inserting data into sympton page
function loadDogBreedData(){
    var dogBreedValue = localStorage.getItem('dogBreedPicked');
    

        var Title = "empty";
        var SubTitle = "empty";
        var Description = "empty";
        var Weight = "empty";
        var Lifespan = "empty";
        var FunFact = "empty";
        var Identifier = "empty";
        var Image = "empty";

        dogData.forEach(function(element, index) {
            if (element['Breed'] === dogBreedValue) {
                Title = element.Breed;
                SubTitle = element.Temperament;
                Description = element.Description;
                Weight = element.Weight;
                Lifespan = element.Lifespan;
                FunFact = element.FunFact;
                Identifier = element.Identifier;
                Image = element.photo;
            }
        })

       var breed__title = document.getElementById("breed__title");
       breed__title.innerHTML = Title;

       var breed__subtitle = document.getElementById("breed__subtitle");
       breed__subtitle.innerHTML = SubTitle;

       var breed__description = document.getElementById("breed__description");
       breed__description.innerHTML = Description;
        
       var breed__image = document.getElementById("breed__image");
       breed__image.src = Image;

       var breed__weight = document.getElementById("breed__weight");
       breed__weight.innerHTML = "Weight:&nbsp&nbsp " + Weight + "&nbsp Kg";

       var breed__lifespan = document.getElementById("breed__lifespan");
       breed__lifespan.innerHTML = "Lifespan:&nbsp&nbsp " + Lifespan + "&nbsp years";

       var breed__funfact = document.getElementById("breed__funfact");
       breed__funfact.innerHTML = "Fun fact:&nbsp&nbsp " + FunFact;

       var breed__identifier = document.getElementById("breed__identifier");
       breed__identifier.innerHTML = "Identifiers fact:&nbsp&nbsp " + Identifier;

    }

    //404 page not found particles
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 5,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fcfcfc"
          },
          "shape": {
            "type": "circle",
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.2,
              "sync": false
            }
          },
          "size": {
            "value": 140,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 40,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
          },
          "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
          "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false
            },
            "onclick": {
              "enable": false
            },
            "resize": true
          }
        },
        "retina_detect": true
      });



