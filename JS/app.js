'use strict';

// global variables/functions
const imgElem = document.getElementById('planetImg');
const infoElem = document.getElementById('planetInfo');
const planetNameElem = document.getElementById('planetName');
const quizElem = document.getElementById('quiz');
const mainElem = document.getElementById('main');

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
}

// loading function 
function loadPlanet() {
  let checkData = localStorage.getItem('planet');
  let planet = JSON.parse(checkData);
  for(let p of planetArray){
    if( p.name === planet){
      p.renderPlanet();
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
    }
  }
}
// We need a function that when you click on a planet, it loads up the correct planet/info from the planet object array
// add event listener
mainElem.addEventListener('click', handleClick);



// We're going to need some quiz code for multiple choice and text input (using forms and buttons)

// function to create planets
function createPlanet() {
  new Planet('Mercury','./IMG/Mercury.png', [ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
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