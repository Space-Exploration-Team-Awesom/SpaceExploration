'use strict';

// global variables/functions
const imgElem = document.getElementById('planetImg');
const infoElem = document.getElementById('planetInfo');
const planetNameElem = document.getElementById('planetName');
const quizElem = document.getElementById('quiz');
const mainElem = document.getElementById('main');
const buttonElem = document.getElementById("button");

let submitElem;

let currentPlanet;

// planet array
let planetArray = [];
let quizArray = [];

// counter for questions answered correctly
let correct = 0;
  

// We need a planet constructor
// takes in name, image, info about the planet, quiz questions (in an array)
function Planet(name, img, info, quiz, answers) {
  this.name = name;
  this.img = img;
  this.info = info;
  this.quiz = quiz;
  this.answers = answers;
  planetArray.push(this);
}

// Quiz constructor for answers
function Quiz(name, quiz, answer, correctAnswer) {
  this.name = name; // takes a planet name
  this.quiz = quiz; // takes an array of quiz questions
  this.answer = answer; // takes an array of answers
  this.correctAnswer = correctAnswer; // an array of correct answers
  quizArray.push(this); // pushes planet and answers to array
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
  let brElem = document.createElement('br');
  for (let question of quizArray) {
    if (currentPlanet.name === question.name) {
      for (let i = 0; i < question.quiz.length; i++) {
        let pElem = document.createElement('p');
        pElem.textContent = question.quiz[i];
        pElem.className = 'questionText';
        quizElem.appendChild(pElem);
        console.log(question.answer);
        let formElem = document.createElement('form')
        for (let j = 0; j < question.answer[i].length; j++) {
          console.log(question.answer[i][j]);
          let answerElem = document.createElement('input');
          let labelElem = document.createElement('label');
          let brElem = document.createElement('br');
          answerElem.type = 'radio';
          answerElem.className = 'radioButton';
          labelElem.className = 'answerText';
          answerElem.id = question.answer[i][j];
          labelElem.textContent = question.answer[i][j];
          labelElem.for = question.answer[i][j];
          answerElem.name = i;
          quizElem.appendChild(answerElem);
          quizElem.appendChild(labelElem);
          quizElem.appendChild(brElem);
        }
      }
    }
  }
  submitElem = document.createElement('button');
  submitElem.textContent = 'Submit';
  quizElem.appendChild(brElem);
  quizElem.appendChild(submitElem);
  submitElem.setAttribute('id','submitQuiz');
  submitElem.addEventListener('click', handleQuizSubmitClick);
}

// read the values that were submitted with the form and compare them to our correct answer array
function handleQuizSubmitClick() {
  let submitQuizElem = document.getElementById('submitQuiz');
  
  // cycle through all the form inputs on the screen and compare the value of the selected to the answer array
    // grab the form inputs
    let answers = document.querySelectorAll('input:checked');
    console.log(answers);
    // compare them to the answer array
    
    for (let question of quizArray) {
      if (currentPlanet.name === question.name) {
        for (let i = 0; i < answers.length; i++) {
          console.log(question.correctAnswer[i]);
          if (answers[i].id === question.correctAnswer[i]) {
            let resultsElem = document.createElement('p');
            resultsElem.textContent = `Question ${i+1} is correct`
            quizElem.appendChild(resultsElem);
            
          } else {
            let resultsElem = document.createElement('p');
            resultsElem.textContent = `Question ${i+1} is wrong and the answer is ${question.correctAnswer[i]}`
            quizElem.appendChild(resultsElem);
            
          }
        }
      }
    }
}

// We need a function that when you click on a planet, it loads up the correct planet/info from the planet object array
// add event listener
mainElem.addEventListener('click', handleClick);

buttonElem.addEventListener('click', handleButtonClick);



// We're going to need some quiz code for multiple choice and text input (using forms and buttons)

// function to create planets
function createPlanet() {
  new Planet('Mercury','./IMG/Mercury.png', ["Mercury is the smallest planet in the Solar System and the closest to the Sun. It takes 87.97 Earth days to orbit the Sun, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), the messenger of the gods.  At twilight it may appear as a bright star-like object that can be seen by the naked eye, though it can be difficult to observe. Mercury's surface appears heavily cratered and is similar in appearance to the Moon's. It has almost no atmosphere to retain heat, so its surface day temperatures vary more than on any other planet in the Solar System. Its temperatures can range from −280 °F at night to 800 °F during the day! Mercury has no moon."],["Question 2 If Earth is the 3rd planet away from the Sun, what position is Mercury?", "Question 3 What astronomical body does Mercury most look like?"]);

  new Planet('Venus','./IMG/Venus.png', [`Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. It is the brightest natural object in Earth's night sky after the Moon; on rare occasions it is even visible to the naked eye in broad daylight. Venus orbits the Sun every 224.7 Earth days. Venus does not have any moons. Even though Mercury is closer to the Sun, Venus has the hottest surface of any planet in the Solar System. It has an average temperature of 867 °F and its clouds are made of sulfuric acid. Venus has been a big inspiration for writers and poets as the "morning star" and "evening star". It was even the first planet to have its motions plotted across the sky!`],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);

  new Planet('Earth','./IMG/Earth.png', [`Earth is the third planet from the Sun. It is the only planet known to harbor and support life. About 30% of Earth's surface is land and 70% is water. Much of Earth's polar regions are covered in ice. Earth's atmosphere consists mostly of nitrogen and oxygen. Severe weather, such as tropical cyclones, thunderstorms, and heatwaves, occurs in most areas and greatly impacts life.

  Earth's gravity interacts with the Moon causing tides. Earth orbits around the Sun in about 365 days. Earth is the densest planet in the Solar System and the largest and most massive of the four rocky planets. Earth formed over 4.5 billion years ago. Almost 8 billion humans live on Earth and depend on its natural resources for their survival.`],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);

  new Planet('Mars','./IMG/Mars.png', [`Mars is the fourth planet from the Sun. It is the second-smallest planet in the Solar System, and is larger than only Mercury. Mars is named after the Roman god of war. It is often referred to as the "Red Planet" because it appears red due to the iron oxide on its surface. Mars can easily be seen from Earth with the naked eye, as can its reddish coloring. Mars is the site of Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System. It is also the site of the Valles Marineris, one of the largest canyons in the Solar System. Mars has two moons, Phobos and Deimos.`],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);

  new Planet('Jupiter','./IMG/Jupiter.png', [`Jupiter named after the Roman god, the king of gods. This is due to the observed size. Primarily composed of hydrogen and a quarter made of helium, Jupiter has 2 and a half times the mass of all the other planets in our solar system combined. Jupiter does have rings around it, but its mostly known for its size. It is the fifth planet away from the Sun right before Saturn. Jupiter has 67 moons and has been visited seven times by spacecraft.`],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);

  new Planet('Saturn','./IMG/Saturn.png', [`Saturn, named after the Roman god of wealth and agriculture, took place in the naming of "Saturday" ("Saturns Day"). Mostly composed of iron-nickle and rock, Saturn is weighing in at 95 times the mass of earth. Wind speeds on Saturn can reach speeds of up to 1,100mph, not as high as Neptunes though. The most famous part of Saturn is the ring system. Composed of mostly ice particles with small rock debris and dust. There are 82 moons around Saturn and it is the sixth planet from the Sun.`],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);

  new Planet('Uranus','./IMG/Uranus.png', [`Named after the greek god of the sky, Uranus has the fourth largest mass in the solar system. It is four times the phyisical size of Earth and weighs fourteen and half times the amount of Earth! Along with Neptune, Uranus is known as a "ice giant" and is the coldest planet in our solar system. Uranus does have rings, even though Saturn is the most famous for this Uranus's rings are still visible and colorful. There are also twentyseven moons around the planet!`],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);

  new Planet('Neptune','./IMG/Neptune.png', [`Named after the Roman god of the sea, Neptune is not visible to the naked eye.. Like Jupiter and Saturn Neptune's atmosphere is composed primarily of hydrogen and helium. Neptune is the farthest planet (#8) from the sun in our solar system. Seventeen times the mass of Earth, Neptune is the 4th largest planet by diameter and the third most massive planet. Winds have been recored up to 1,200mph on Neptune!`],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);

  new Planet('Pluto','./IMG/Pluto.png', [ `Pluto is the ninth object from the Sun, and is called a dwarf planet instead of a planet. It is named after the Roman god of the underworld. Pluto is made of ice and rock and is relatively small; it is one-sixth the mass of the Moon and one-third its volume. Pluto is so far away that light from the Sun takes 5.5 hours to reach it! Pluto has five known moons: Charon, Styx, Nix, Kerberos, and Hydra.`],[ "We're going to need some quiz code for multiple choice and text input (using forms and buttons)"]);
}

function createQuiz() {
  new Quiz('Mercury', ["Question 2: If Earth is the 3rd planet away from the Sun, what position is Mercury?", "Question 3: What astronomical body does Mercury most look like?"], [["a. 1st","b. 2nd","c. 4th","d. 5th"],["a. Venus","b. Earth","c. The Moon","d. Jupiter"]], ["a. 1st", "c. The Moon"])
  new Quiz('Venus',["Question 2: If Earth is the 3rd planet away from the Sun, what position is Venus?","Question 3: What other name is Venus known by?"],[["a. 1st","b. 2nd","c. 4th","d.5th"]["a. Nebula","b. The Morning Star","c. Jupiter","d. Charon"]], ["b. 2nd", "b. The Morning Star"])
}

createPlanet();
createQuiz();
//planetArray[0].renderPlanet();
loadPlanet();