'use strict';

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

const userElem = document.getElementById('userInfo');
const planetElem = document.getElementById('startingPlanet');

// add event listener for submitting user info

// userElem.addEventListener('submit', inputUserInfo);

// add event listener for starting planet
planetElem.addEventListener('submit', startingPlanet);

function inputUserInfo(event) {
  event.preventDefault();
  let userName = event.target.name.value;
  let age = parseFloat(event.target.age.value);
  let favPlanet = event.target.planet.value;
  storeUserInfo(userName, age, favPlanet);
  event.target.reset();
}
// above function dosnt do anything at the moment

// store results in local storage
function storeUserInfo(name, age, planet) {
  let userInfo = JSON.stringify([name, age, planet]);
  localStorage.setItem('userInfo', userInfo);
}

function startingPlanet(){
  let selectElem = document.getElementById('planet');
  let planet = JSON.stringify(selectElem.value);
  if (selectElem.value === 'random'){
    console.log('here')
    let index = randomIndex();
    planet = JSON.stringify(planets[index]);
  } 
  
  localStorage.setItem('planet', planet);
  // linking to planet page
  console.log(planet);
}

// random index function
function randomIndex(){
  return Math.floor(Math.random() * planets.length);
}
