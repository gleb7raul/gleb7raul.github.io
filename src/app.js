import { imgsLoader } from './loaders/imgLoader.js';
import { soundLoader } from './loaders/soundLoader.js';
import {Game} from './Game';
import {Hero} from './Hero';
import {Monster} from './Monster';
import {Drawable} from './Drawable';
import {Health} from './Health';
import {capitals} from '../capitals';
import {draggable} from '../draggable';


if(!localStorage.players){
    localStorage.setItem('players','[]');
};

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback, element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

window.listening = soundLoader({
    'accurately': '../audio/listening/accurately.mp3',
    'Australia': '../audio/listening/australia.mp3',
    'autumn': '../audio/listening/autumn.mp3',
    'awesome': '../audio/listening/awesome.mp3',
    'daughter': '../audio/listening/daughter.mp3',
    'exchange': '../audio/listening/exchange.mp3',
    'garage': '../audio/listening/garage.mp3',
    'immediately': '../audio/listening/immediately.mp3',
    'schedule': '../audio/listening/schedule.mp3',
    'supreme': '../audio/listening/supreme.mp3',
    'temporary': '../audio/listening/temporary.mp3',
    'word': '../audio/listening/word.mp3',
    'work': '../audio/listening/work.mp3',
    'world': '../audio/listening/world.mp3'
 });

 window.actions = soundLoader({
    'explosion': '../audio/actions/explosion.mp3',
    'wick': '../audio/actions/wick.mp3',
    'brick': '../audio/actions/brick.mp3',
    'stars': '../audio/actions/stars.mp3',
    'lightning': '../audio/actions/lightning.mp3',
    'mortalkombat': '../audio/actions/mortalkombat.mp3'
 });

 


window.imgs = imgsLoader({
    'background': '../images/bg.png',
    'hero': '../images/santa.png',
    'body1': '../images/body1.png',
    'body2': '../images/body2.png',
    'body3': '../images/body3.png',
    'head1': '../images/head1.png',
    'head2': '../images/head2.png',
    'head3': '../images/head3.png',
    'monsterweapoon1': '../images/monsterweapoon1.png',
    'monsterweapoon2': '../images/monsterweapoon2.png',
    'monsterweapoon3': '../images/monsterweapoon3.png',
    'play': '../images/play.png',
    'bomb': '../images/bomb.png',
    'explode': '../images/explode.png', 
    'brick': '../images/brick.png', 
    'stunned': '../images/stunned.png', 
    'lightning': '../images/lightning.png',
    'fire': '../images/fire.png',
    'close': '../images/close.png',
}); 



fetch('../vocabular.json')
    .then(function(response){return response.json()})
    .then(function(vocabular){window.vocabular = vocabular;})
    .catch(function(err){console.log(err)});

window.missingLetters = {
    "dr..w" : "a",
    "tig..r" : "e",
    "ele..hant": "p",
    "ras..berry": "p",
    "bl..eberry": "u",
    "Austra..ia": "l",
    "kang..roo": "a",
    "achi..ve": "e",
    "appear..nce": "a",
    "biza..re":"r",
    "immed..ately": "i"
}

window.firstName = ['Ужасный','Злобный','Сопливый'];
window.middleName = ['Эльф','Гном','Голум'];
window.lastName = ['Валера','Толик','Егор','Костя','Павлик'];


function animate() {
    game.hero.updateHero();
    game.monster.updateMonster();
    requestAnimFrame( animate );
}


let attackWindow = document.getElementById('attack');
let tasksWindow = document.getElementById('tasks');

let buttonPick = document.getElementById('pick');
let buttonSolve = document.getElementById('solve');

let userInputValue = document.getElementById('user-input');

let task = document.getElementById('task');

let right = document.getElementById('right');
let wrong = document.getElementById('wrong');

buttonPick.addEventListener('click',hideAttacks);
buttonSolve.addEventListener('click',checkAnswer);

function hideAttacks(){
    let radioButtons = document.getElementsByName('attacking');
    for(let i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].type === 'radio' && radioButtons[i].checked){
            if(radioButtons[i].value === 'snow'){
                attackWindow.style.display = 'none';
                if(Math.random() > 0.5){
                    openTaskMath();
                } else {
                    openTaskDraggable();
                }    
            } else if(radioButtons[i].value === 'glazier'){
                attackWindow.style.display = 'none'; 
                if(Math.random() > 0.5){
                    openTaskTranslate();
                } else {
                    openTaskCapitals();
                }    
            } else if(radioButtons[i].value === 'ice'){
                attackWindow.style.display = 'none';
                if(Math.random() > 0.5){
                    openTaskMisspelling();
                } else {
                    openTaskListening();
                }    
            }
        }
    }
}

function openTaskMath(){
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to crunch following numbers to fulfield your attack otherwise it's gonna be monster's turn to attack";
    let operationSign = ['+','-','*','+'];
    task.innerHTML = `${Math.floor(Math.random()*201)}${operationSign[Math.floor(Math.random()*4)]}${Math.floor(Math.random()*201)}`;
    task.setAttribute('data-task','math');
    tasksWindow.style.display = 'flex';
}

function openTaskTranslate(){
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to translate the word into Russian language to fulfield your attack otherwise it's gonna be monster's turn to attack";
    let vocabularArrayProps = Object.keys(window.vocabular);
    let randomVocabularProp = vocabularArrayProps[Math.floor(Math.random()*vocabularArrayProps.length)];
    task.innerHTML = randomVocabularProp;
    task.setAttribute('data-task','translate');
    tasksWindow.style.display = 'flex';
}

function openTaskMisspelling(){
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to write missing letter to fulfield your attack otherwise it's gonna be monster's turn to attack";
    let misspellingArrayProps = Object.keys(window.missingLetters);
    let randomMisspellingProp = misspellingArrayProps[Math.floor(Math.random()*misspellingArrayProps.length)];
    task.innerHTML = randomMisspellingProp;
    task.setAttribute('data-task','misspelling');
    tasksWindow.style.display = 'flex';
}

function openTaskListening(){
    window.actions.mortalkombat.volume = 0;
    let taskDescription = document.getElementById('task-description');
    task.innerHTML = '';
    taskDescription.innerHTML = "You have to write the word in english that you have just heard to fulfield your attack otherwise it's gonna be monster's turn to attack";
    let listeningArrayProps = Object.keys(window.listening);
    let randomListeningProp = listeningArrayProps[Math.floor(Math.random()*listeningArrayProps.length)];
    window.randomListeningProp = randomListeningProp;
    task.appendChild(window.listening[randomListeningProp]);
    let playpausebtn = document.createElement('button');
    playpausebtn.id = 'playpausebtn';
    playpausebtn.style.outline = 'none';
    playpausebtn.classList.add('playpause');
    task.parentNode.appendChild(playpausebtn);
    playpausebtn.addEventListener('click',()=>{
        window.listening[randomListeningProp].play();
    });
    window.listening[randomListeningProp].play();
    task.setAttribute('data-task','listening');
    tasksWindow.style.display = 'flex';
}

function openTaskCapitals(){
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to write the capital of the country that is shown to fulfield your attack otherwise it's gonna be monster's turn to attack.";
    let capitalsArrayProps = Object.keys(capitals);
    let randomCapitalsProp = capitalsArrayProps[Math.floor(Math.random()*capitalsArrayProps.length)];
    task.innerHTML = randomCapitalsProp;
    task.setAttribute('data-task','capitals');
    tasksWindow.style.display = 'flex';
}

function openTaskDraggable(){
    task.innerHTML = '';
    userInputValue.style.display = 'none';
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to compose a word by dragging letters to fulfield your attack otherwise it's gonna be monster's turn to attack.";
    let draggableArrayProps = Object.keys(draggable);
    let randomDraggableProp = draggableArrayProps[Math.floor(Math.random()*draggableArrayProps.length)];
    window.randomDraggableProp = randomDraggableProp;
    let sortableDiv = document.getElementById('sortable');
    let shuffledRandomDraggableProp = shuffleLetters(randomDraggableProp);
    for(let i = 0; i < shuffledRandomDraggableProp.length; i++){
        let li = document.createElement('li');
        li.classList.add('letters');
        li.innerHTML = shuffledRandomDraggableProp[i];
        sortableDiv.appendChild(li);
    }
    task.setAttribute('data-task','draggable');
    sortableDiv.style.display = 'flex';
    tasksWindow.style.display = 'flex';
}

function checkAnswerMath(){
    if(eval(task.innerHTML) == userInputValue.value){
        userInputValue.value = '';
        right.style.display = 'flex';
        setTimeout(()=>{
            right.style.display = 'none';
        },3000);
        setTimeout(()=>{
            game.hero.attack();
        },3500);
    } else { 
        userInputValue.value = '';
        wrong.style.display = 'flex';
        setTimeout(()=>{
            wrong.style.display = 'none';
        },3000);
        setTimeout(()=>{
            game.monster.monsterAttack();
        },3500);
    };
    tasksWindow.style.display = 'none';
}

function checkAnswerTranslate(){
    for(let i = 0; i < window.vocabular[task.innerHTML].length; i++){
        if(window.vocabular[task.innerHTML][i] === userInputValue.value){
            userInputValue.value = '';
            right.style.display = 'flex';
            setTimeout(()=>{
                right.style.display = 'none';
            },3000);
            setTimeout(()=>{
                game.hero.attackLightning();
            },3500);
            tasksWindow.style.display = 'none';
            return;
        };
    }; 
    userInputValue.value = '';
    wrong.style.display = 'flex';
    setTimeout(()=>{
        wrong.style.display = 'none';
    },3000);
    setTimeout(()=>{
        game.monster.monsterAttack();
    },3500);
    tasksWindow.style.display = 'none';
}

function checkAnswerMisspelling(){
    if(window.missingLetters[task.innerHTML] === userInputValue.value){
        userInputValue.value = '';
        right.style.display = 'flex';
        setTimeout(()=>{
            right.style.display = 'none';
        },3000);
        setTimeout(()=>{
            game.hero.attackFire();
        },3500);
        tasksWindow.style.display = 'none';
        return;
    }; 
    userInputValue.value = '';
    wrong.style.display = 'flex';
    setTimeout(()=>{
        wrong.style.display = 'none';
    },3000);
    setTimeout(()=>{
        game.monster.monsterAttack();
    },3500);
    tasksWindow.style.display = 'none';
}

function checkAnswerListening(){
    window.actions.mortalkombat.volume = 0.3;
    let playpausebtn = document.getElementById('playpausebtn');
    playpausebtn.parentNode.removeChild(playpausebtn);
    if(window.randomListeningProp === userInputValue.value){
        userInputValue.value = '';
        right.style.display = 'flex';
        setTimeout(()=>{
            right.style.display = 'none';
        },3000);
        setTimeout(()=>{
            game.hero.attackFire();
        },3500);
        tasksWindow.style.display = 'none';
        return;
    };
    userInputValue.value = ''; 
    wrong.style.display = 'flex';
    setTimeout(()=>{
        wrong.style.display = 'none';
    },3000);
    setTimeout(()=>{
        game.monster.monsterAttack();
    },3500);
    tasksWindow.style.display = 'none';
}

function checkAnswerCapitals(){
    if(capitals[task.innerHTML] === userInputValue.value){
        userInputValue.value = '';
        right.style.display = 'flex';
        setTimeout(()=>{
            right.style.display = 'none';
        },3000);
        setTimeout(()=>{
            game.hero.attackLightning();
        },3500);
        tasksWindow.style.display = 'none';
        return;
    }; 
    userInputValue.value = '';
    wrong.style.display = 'flex';
    setTimeout(()=>{
        wrong.style.display = 'none';
    },3000);
    setTimeout(()=>{
        game.monster.monsterAttack();
    },3500);
    tasksWindow.style.display = 'none';
}

function checkAnswerDraggable(){
    userInputValue.style.display = 'block';
    let tempArray = [];
    let liS = document.querySelectorAll('.letters');
    for(let i = 0; i < liS.length; i++){
        tempArray.push(liS[i].innerHTML);
    }
    let answer = tempArray.join('');
    if(answer === window.randomDraggableProp){
        userInputValue.value = '';
        right.style.display = 'flex';
        for(let i = 0; i < liS.length; i++){
            liS[i].parentNode.removeChild(liS[i]);
        };
        setTimeout(()=>{
            right.style.display = 'none';
        },3000);
        setTimeout(()=>{
            game.hero.attack();
        },3500);
        tasksWindow.style.display = 'none';
        return;
    };
    for(let i = 0; i < liS.length; i++){
        liS[i].parentNode.removeChild(liS[i]);
    }; 
    userInputValue.value = '';
    wrong.style.display = 'flex';
    setTimeout(()=>{
        wrong.style.display = 'none';
    },3000);
    setTimeout(()=>{
        game.monster.monsterAttack();
    },3500);
    tasksWindow.style.display = 'none';
}

function checkAnswer(){
    if(task.getAttribute('data-task') === 'math'){
        checkAnswerMath();
    } else if (task.getAttribute('data-task') === 'translate'){
        checkAnswerTranslate();
    } else if(task.getAttribute('data-task') === 'misspelling'){
        checkAnswerMisspelling();
    } else if(task.getAttribute('data-task') === 'listening'){
        checkAnswerListening();
    } else if(task.getAttribute('data-task') === 'capitals'){
        checkAnswerCapitals();
    } else if(task.getAttribute('data-task') === 'draggable'){
        checkAnswerDraggable();
    }
}


let startButton = document.getElementById('start-game');
startButton.addEventListener('click',startGame);


function startGame(){
    window.actions.mortalkombat.currentTime = 0.0;
    window.actions.mortalkombat.loop = true;
    window.actions.mortalkombat.volume = 0.3;
    window.actions.mortalkombat.play();
    let startDiv = document.getElementById('start');
    startDiv.style.display = 'none';
    const game = new Game();
    window.game = game;
    if(game.init()){
        game.start();
    };
    setTimeout(()=>{
        attackWindow.style.display = 'flex';
    },3000)
};

let restartButton = document.getElementById('restart-game');
restartButton.addEventListener('click',restartGame);


function restartGame(){
    window.actions.mortalkombat.currentTime = 0.0;
    window.actions.mortalkombat.loop = true;
    window.actions.mortalkombat.volume = 0.3;
    let restartDiv = document.getElementById('restart');
    restartDiv.style.display = 'none';
    const game = new Game();
    window.game = game;
    if(game.init()){
        game.start();
    }; 
    setTimeout(()=>{
        attackWindow.style.display = 'flex';
    },3000)
};

function shuffleLetters(str){
    var a = str.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};

export {animate, attackWindow, restartButton, restartGame};
