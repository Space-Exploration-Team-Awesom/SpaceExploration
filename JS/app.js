'use strict';

// global variables/functions
const imgElem = document.getElementById('planetImg');
const infoElem = document.getElementById('planetInfo');
const planetNameElem = document.getElementById('planetName');
const quizElem = document.getElementById('quiz');
const mainElem = document.getElementById('main');
const buttonElem = document.getElementById("button");

let currentPlanet;

// planet array
let planetArray =[];

// counter for questions answered correctly
let correct = 0;
  

// We need a planet constructor
// takes in name, image, info about the planet, quiz questions (in an array)
function Planet(name, img, info, quiz) {
  this.name = name;
  this.img = img;
  this.info = info;
  this.quiz = quiz;
  planetArray.push(this);
}

// prototype function that renders a planet and info to the page
Planet.prototype.renderPlanet = function() {
  planetNameElem.textContent = `${this.name}`;
  imgElem.src = this.img;
  infoElem.textContent = this.info;
  quizElem.innerHTML = '';
}

// loading function 
function loadPlanet() {
  let checkData = localStorage.getItem('planet');
  let planet = JSON.parse(checkData);
  for(let p of planetArray){
    if( p.name === planet){
      p.renderPlanet();
      currentPlanet = p
      // maybe clear the local storage later
    }
  }
}

// function to handle click on planet
function handleClick(event) {
  let planet = event.target.id;
  for(let p of planetArray) {
    if( p.name === planet) {
      p.renderPlanet();
      currentPlanet = p
      console.log(currentPlanet)
    }
  }
}

// function for button click to quiz
function handleButtonClick(event) {
  quizElem.innerHTML = '';
  for (let i = 0; i < currentPlanet.quiz.length; i++) {
    let pElem = document.createElement('p');
    pElem.textContent = currentPlanet.quiz[i];
    quizElem.appendChild(pElem);
        
  }
}

// We need a function that when you click on a planet, it loads up the correct planet/info from the planet object array
// add event listener
mainElem.addEventListener('click', handleClick);

buttonElem.addEventListener('click', handleButtonClick);

// We're going to need some quiz code for multiple choice and text input (using forms and buttons)

// function to create planets
function createPlanet() {
  new Planet('Mercury','./IMG/Mercury.png', ["Mercury is the smallest planet in the Solar System and the closest to the Sun. It takes 87.97 Earth days to orbit the Sun, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), the messenger of the gods.  At twilight it may appear as a bright star-like object that can be seen by the naked eye, though it can be difficult to observe. Mercury's surface appears heavily cratered and is similar in appearance to the Moon's. It has almost no atmosphere to retain heat, so its surface day temperatures vary more than on any other planet in the Solar System. Its temperatures can range from −280 °F at night to 800 °F during the day! Mercury has no moon."],[ "Question 2 If Earth is the 3rd planet away from the Sun, what position is Mercury?", "Question 3 What astronomical body does Mercury most look like?"]);
  new Planet('Venus','./IMG/Venus.png', [ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
  new Planet('Earth','./IMG/Earth.png', [ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
  new Planet('Mars','./IMG/Mars.png', [ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
  new Planet('Jupiter','./IMG/Jupiter.png', [ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
  new Planet('Saturn','./IMG/Saturn.png', [ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
  new Planet('Uranus','./IMG/Uranus.png', [ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
  new Planet('Neptune','./IMG/Neptune.png', [ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
  new Planet('Pluto','./IMG/Pluto.png', [ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
}

createPlanet();
//planetArray[0].renderPlanet();
loadPlanet();