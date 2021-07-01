'use strict';

//----------------Global Variables----------------//
// let nameElem = document.getElementById('dev-name');
// let imgElem = document.getElementById('dev-img');
// let bioElem = document.getElementById('dev-bio');
let aboutDevSection = document.getElementById('about-dev');

//----------------Constructor---------------------//
function Dev(name, img, bio){
    this.name = name;
    this.img = img;
    this.bio = bio;

    this.devArray.push(this);
    
}
Dev.prototype.devArray = [];


//-----------------Prototype Functions------------//
Dev.prototype.render = function(){
    
    for(let i = 0; i < this.devArray.length; i++){       
        let dev = this.devArray[i].name;
        let devDiv = document.createElement('div')
        aboutDevSection.appendChild(devDiv)
        

        //create header elem for each dev
        let nameElem = document.createElement('h2');
        nameElem.textContent = dev;
        //nameElem.className('dev-name');
        devDiv.appendChild(nameElem);

        //create img elem for each dev
        let imgElem = document.createElement('img');
        imgElem.src = this.devArray[i].img;
        //imgElem.className('dev-img');
        devDiv.appendChild(imgElem);

        //create bio elem for each dev
        let bioElem = document.createElement('p');
        bioElem.textContent = this.devArray[i].bio;
        //bioElem.className('dev-bio');
        devDiv.appendChild(bioElem);

    }
}

//-----------------Global Function----------------//
function renderDevs(){
    Dev.prototype.render();
}

//------------------Object Declarations-----------//
 new Dev('Kyle', './IMG/devImg/Kyle.PNG', 'Hello. My name is Kyle Cohen, I am from south east Michigan. I recently made a leap from a job in the HVAC trade as a Sheetmetal worker, into the world of software development. I love the outdoors and if I"m not coding, then you can find me bass fishing.');
 new Dev('Tray', './IMG/devImg/Tray.jpg', 'My name is Tray, and I am a Seattle based Software Developer.  Iam an air force veteran. My hobbies include: anything food related, botany/plants, snowboarding, knitting, polishing opals, and fawning over my cat. I have a knack for oddball adventures like climbing up city rooftops and looking for artist graffiti all over town to photograph. I also have a thriving curiosity for all things language. Imagine this; from point of origin of human civilization, somehow, we have come up with thousands of different languages that span the entire planet. How? And why?');
 new Dev('Gina', './IMG/devImg/Gina.jpeg', 'My name is Gina and I am from Oklahoma City, Oklahoma. I am a former IT Helpdesk professional that is making the transition to software development. I love animals and am currently fostering a dog that has quickly become a part of my home and my heart.');
 new Dev('Tianyi (Tim)', './IMG/devImg/Tim.jpg', 'My name is Tianyi Ma and I am a Seattle based Software Developer. I worked as an electrical engineer at Intel with a solid engineering background and collaboration skills. Currently working as a certified nursing assistant at Virginia Mason hospital. Excellent in listening and providing solutions to meet clients’ needs. I am in the process of a certified program in Advanced Software Development in Full-Stack JavaScript.');
 new Dev('Peter', './IMG/devImg/Peter.jpeg', 'My name is Peter and I am an Army veteran who has experience in IT support. I have always been interested in coding, and decided to take the leap to find a job that will constantly challenge me and allow me to grow. When I"m not challenging myself to learn new things, you"ll find me spending time with my four kids, and reading books, such as Game of Thrones and the Witcher series.');

renderDevs();