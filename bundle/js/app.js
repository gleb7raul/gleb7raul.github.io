/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drawable; });

class Drawable {
    constructor() {
        this.canvasWidth = 0;
        this.canvasHeight = 0;
    }
    init(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {}
};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attackWindow", function() { return attackWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartButton", function() { return restartButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartGame", function() { return restartGame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loaders_imgLoader_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loaders_soundLoader_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Hero__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Monster__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Drawable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Health__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__capitals__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__draggable__ = __webpack_require__(10);










if (!localStorage.players) {
    localStorage.setItem('players', '[]');
};

window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

window.listening = Object(__WEBPACK_IMPORTED_MODULE_1__loaders_soundLoader_js__["a" /* soundLoader */])({
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

window.actions = Object(__WEBPACK_IMPORTED_MODULE_1__loaders_soundLoader_js__["a" /* soundLoader */])({
    'explosion': '../audio/actions/explosion.mp3',
    'wick': '../audio/actions/wick.mp3',
    'brick': '../audio/actions/brick.mp3',
    'stars': '../audio/actions/stars.mp3',
    'lightning': '../audio/actions/lightning.mp3',
    'mortalkombat': '../audio/actions/mortalkombat.mp3'
});

window.imgs = Object(__WEBPACK_IMPORTED_MODULE_0__loaders_imgLoader_js__["a" /* imgsLoader */])({
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
    'close': '../images/close.png'
});

fetch('../vocabular.json').then(function (response) {
    return response.json();
}).then(function (vocabular) {
    window.vocabular = vocabular;
}).catch(function (err) {
    console.log(err);
});

window.missingLetters = {
    "dr..w": "a",
    "tig..r": "e",
    "ele..hant": "p",
    "ras..berry": "p",
    "bl..eberry": "u",
    "Austra..ia": "l",
    "kang..roo": "a",
    "achi..ve": "e",
    "appear..nce": "a",
    "biza..re": "r",
    "immed..ately": "i"
};

window.firstName = ['Ужасный', 'Злобный', 'Сопливый'];
window.middleName = ['Эльф', 'Гном', 'Голум'];
window.lastName = ['Валера', 'Толик', 'Егор', 'Костя', 'Павлик'];

function animate() {
    game.hero.updateHero();
    game.monster.updateMonster();
    requestAnimFrame(animate);
}

let attackWindow = document.getElementById('attack');
let tasksWindow = document.getElementById('tasks');

let buttonPick = document.getElementById('pick');
let buttonSolve = document.getElementById('solve');

let userInputValue = document.getElementById('user-input');

let task = document.getElementById('task');

let right = document.getElementById('right');
let wrong = document.getElementById('wrong');

buttonPick.addEventListener('click', hideAttacks);
buttonSolve.addEventListener('click', checkAnswer);

function hideAttacks() {
    let radioButtons = document.getElementsByName('attacking');
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].type === 'radio' && radioButtons[i].checked) {
            if (radioButtons[i].value === 'snow') {
                attackWindow.style.display = 'none';
                if (Math.random() > 0.5) {
                    openTaskMath();
                } else {
                    openTaskDraggable();
                }
            } else if (radioButtons[i].value === 'glazier') {
                attackWindow.style.display = 'none';
                if (Math.random() > 0.5) {
                    openTaskTranslate();
                } else {
                    openTaskCapitals();
                }
            } else if (radioButtons[i].value === 'ice') {
                attackWindow.style.display = 'none';
                if (Math.random() > 0.5) {
                    openTaskMisspelling();
                } else {
                    openTaskListening();
                }
            }
        }
    }
}

function openTaskMath() {
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to crunch following numbers to fulfield your attack otherwise it's gonna be monster's turn to attack";
    let operationSign = ['+', '-', '*', '+'];
    task.innerHTML = `${Math.floor(Math.random() * 201)}${operationSign[Math.floor(Math.random() * 4)]}${Math.floor(Math.random() * 201)}`;
    task.setAttribute('data-task', 'math');
    tasksWindow.style.display = 'flex';
}

function openTaskTranslate() {
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to translate the word into Russian language to fulfield your attack otherwise it's gonna be monster's turn to attack";
    let vocabularArrayProps = Object.keys(window.vocabular);
    let randomVocabularProp = vocabularArrayProps[Math.floor(Math.random() * vocabularArrayProps.length)];
    task.innerHTML = randomVocabularProp;
    task.setAttribute('data-task', 'translate');
    tasksWindow.style.display = 'flex';
}

function openTaskMisspelling() {
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to write missing letter to fulfield your attack otherwise it's gonna be monster's turn to attack";
    let misspellingArrayProps = Object.keys(window.missingLetters);
    let randomMisspellingProp = misspellingArrayProps[Math.floor(Math.random() * misspellingArrayProps.length)];
    task.innerHTML = randomMisspellingProp;
    task.setAttribute('data-task', 'misspelling');
    tasksWindow.style.display = 'flex';
}

function openTaskListening() {
    window.actions.mortalkombat.volume = 0;
    let taskDescription = document.getElementById('task-description');
    task.innerHTML = '';
    taskDescription.innerHTML = "You have to write the word in english that you have just heard to fulfield your attack otherwise it's gonna be monster's turn to attack";
    let listeningArrayProps = Object.keys(window.listening);
    let randomListeningProp = listeningArrayProps[Math.floor(Math.random() * listeningArrayProps.length)];
    window.randomListeningProp = randomListeningProp;
    task.appendChild(window.listening[randomListeningProp]);
    let playpausebtn = document.createElement('button');
    playpausebtn.id = 'playpausebtn';
    playpausebtn.style.outline = 'none';
    playpausebtn.classList.add('playpause');
    task.parentNode.appendChild(playpausebtn);
    playpausebtn.addEventListener('click', () => {
        window.listening[randomListeningProp].play();
    });
    window.listening[randomListeningProp].play();
    task.setAttribute('data-task', 'listening');
    tasksWindow.style.display = 'flex';
}

function openTaskCapitals() {
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to write the capital of the country that is shown to fulfield your attack otherwise it's gonna be monster's turn to attack.";
    let capitalsArrayProps = Object.keys(__WEBPACK_IMPORTED_MODULE_7__capitals__["a" /* capitals */]);
    let randomCapitalsProp = capitalsArrayProps[Math.floor(Math.random() * capitalsArrayProps.length)];
    task.innerHTML = randomCapitalsProp;
    task.setAttribute('data-task', 'capitals');
    tasksWindow.style.display = 'flex';
}

function openTaskDraggable() {
    task.innerHTML = '';
    userInputValue.style.display = 'none';
    let taskDescription = document.getElementById('task-description');
    taskDescription.innerHTML = "You have to compose a word by dragging letters to fulfield your attack otherwise it's gonna be monster's turn to attack.";
    let draggableArrayProps = Object.keys(__WEBPACK_IMPORTED_MODULE_8__draggable__["a" /* draggable */]);
    let randomDraggableProp = draggableArrayProps[Math.floor(Math.random() * draggableArrayProps.length)];
    window.randomDraggableProp = randomDraggableProp;
    let sortableDiv = document.getElementById('sortable');
    let shuffledRandomDraggableProp = shuffleLetters(randomDraggableProp);
    for (let i = 0; i < shuffledRandomDraggableProp.length; i++) {
        let li = document.createElement('li');
        li.classList.add('letters');
        li.innerHTML = shuffledRandomDraggableProp[i];
        sortableDiv.appendChild(li);
    }
    task.setAttribute('data-task', 'draggable');
    sortableDiv.style.display = 'flex';
    tasksWindow.style.display = 'flex';
}

function checkAnswerMath() {
    if (eval(task.innerHTML) == userInputValue.value) {
        userInputValue.value = '';
        right.style.display = 'flex';
        setTimeout(() => {
            right.style.display = 'none';
        }, 3000);
        setTimeout(() => {
            game.hero.attack();
        }, 3500);
    } else {
        userInputValue.value = '';
        wrong.style.display = 'flex';
        setTimeout(() => {
            wrong.style.display = 'none';
        }, 3000);
        setTimeout(() => {
            game.monster.monsterAttack();
        }, 3500);
    };
    tasksWindow.style.display = 'none';
}

function checkAnswerTranslate() {
    for (let i = 0; i < window.vocabular[task.innerHTML].length; i++) {
        if (window.vocabular[task.innerHTML][i] === userInputValue.value) {
            userInputValue.value = '';
            right.style.display = 'flex';
            setTimeout(() => {
                right.style.display = 'none';
            }, 3000);
            setTimeout(() => {
                game.hero.attackLightning();
            }, 3500);
            tasksWindow.style.display = 'none';
            return;
        };
    };
    userInputValue.value = '';
    wrong.style.display = 'flex';
    setTimeout(() => {
        wrong.style.display = 'none';
    }, 3000);
    setTimeout(() => {
        game.monster.monsterAttack();
    }, 3500);
    tasksWindow.style.display = 'none';
}

function checkAnswerMisspelling() {
    if (window.missingLetters[task.innerHTML] === userInputValue.value) {
        userInputValue.value = '';
        right.style.display = 'flex';
        setTimeout(() => {
            right.style.display = 'none';
        }, 3000);
        setTimeout(() => {
            game.hero.attackFire();
        }, 3500);
        tasksWindow.style.display = 'none';
        return;
    };
    userInputValue.value = '';
    wrong.style.display = 'flex';
    setTimeout(() => {
        wrong.style.display = 'none';
    }, 3000);
    setTimeout(() => {
        game.monster.monsterAttack();
    }, 3500);
    tasksWindow.style.display = 'none';
}

function checkAnswerListening() {
    window.actions.mortalkombat.volume = 0.3;
    let playpausebtn = document.getElementById('playpausebtn');
    playpausebtn.parentNode.removeChild(playpausebtn);
    if (window.randomListeningProp === userInputValue.value) {
        userInputValue.value = '';
        right.style.display = 'flex';
        setTimeout(() => {
            right.style.display = 'none';
        }, 3000);
        setTimeout(() => {
            game.hero.attackFire();
        }, 3500);
        tasksWindow.style.display = 'none';
        return;
    };
    userInputValue.value = '';
    wrong.style.display = 'flex';
    setTimeout(() => {
        wrong.style.display = 'none';
    }, 3000);
    setTimeout(() => {
        game.monster.monsterAttack();
    }, 3500);
    tasksWindow.style.display = 'none';
}

function checkAnswerCapitals() {
    if (__WEBPACK_IMPORTED_MODULE_7__capitals__["a" /* capitals */][task.innerHTML] === userInputValue.value) {
        userInputValue.value = '';
        right.style.display = 'flex';
        setTimeout(() => {
            right.style.display = 'none';
        }, 3000);
        setTimeout(() => {
            game.hero.attackLightning();
        }, 3500);
        tasksWindow.style.display = 'none';
        return;
    };
    userInputValue.value = '';
    wrong.style.display = 'flex';
    setTimeout(() => {
        wrong.style.display = 'none';
    }, 3000);
    setTimeout(() => {
        game.monster.monsterAttack();
    }, 3500);
    tasksWindow.style.display = 'none';
}

function checkAnswerDraggable() {
    userInputValue.style.display = 'block';
    let tempArray = [];
    let liS = document.querySelectorAll('.letters');
    for (let i = 0; i < liS.length; i++) {
        tempArray.push(liS[i].innerHTML);
    }
    let answer = tempArray.join('');
    if (answer === window.randomDraggableProp) {
        userInputValue.value = '';
        right.style.display = 'flex';
        for (let i = 0; i < liS.length; i++) {
            liS[i].parentNode.removeChild(liS[i]);
        };
        setTimeout(() => {
            right.style.display = 'none';
        }, 3000);
        setTimeout(() => {
            game.hero.attack();
        }, 3500);
        tasksWindow.style.display = 'none';
        return;
    };
    for (let i = 0; i < liS.length; i++) {
        liS[i].parentNode.removeChild(liS[i]);
    };
    userInputValue.value = '';
    wrong.style.display = 'flex';
    setTimeout(() => {
        wrong.style.display = 'none';
    }, 3000);
    setTimeout(() => {
        game.monster.monsterAttack();
    }, 3500);
    tasksWindow.style.display = 'none';
}

function checkAnswer() {
    if (task.getAttribute('data-task') === 'math') {
        checkAnswerMath();
    } else if (task.getAttribute('data-task') === 'translate') {
        checkAnswerTranslate();
    } else if (task.getAttribute('data-task') === 'misspelling') {
        checkAnswerMisspelling();
    } else if (task.getAttribute('data-task') === 'listening') {
        checkAnswerListening();
    } else if (task.getAttribute('data-task') === 'capitals') {
        checkAnswerCapitals();
    } else if (task.getAttribute('data-task') === 'draggable') {
        checkAnswerDraggable();
    }
}

let startButton = document.getElementById('start-game');
startButton.addEventListener('click', startGame);

function startGame() {
    window.actions.mortalkombat.currentTime = 0.0;
    window.actions.mortalkombat.loop = true;
    window.actions.mortalkombat.volume = 0.3;
    window.actions.mortalkombat.play();
    let startDiv = document.getElementById('start');
    startDiv.style.display = 'none';
    const game = new __WEBPACK_IMPORTED_MODULE_2__Game__["a" /* Game */]();
    window.game = game;
    if (game.init()) {
        game.start();
    };
    setTimeout(() => {
        attackWindow.style.display = 'flex';
    }, 3000);
};

let restartButton = document.getElementById('restart-game');
restartButton.addEventListener('click', restartGame);

function restartGame() {
    window.actions.mortalkombat.currentTime = 0.0;
    window.actions.mortalkombat.loop = true;
    window.actions.mortalkombat.volume = 0.3;
    let restartDiv = document.getElementById('restart');
    restartDiv.style.display = 'none';
    const game = new __WEBPACK_IMPORTED_MODULE_2__Game__["a" /* Game */]();
    window.game = game;
    if (game.init()) {
        game.start();
    };
    setTimeout(() => {
        attackWindow.style.display = 'flex';
    }, 3000);
};

function shuffleLetters(str) {
    var a = str.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Drawable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Monster__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Hero__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Health__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(1);






class Game {
    constructor() {
        this.deadMonsters = 0;
    }
    init() {
        this.canvas = document.getElementById("canvas");
        if (this.canvas.getContext) {
            this.context = this.canvas.getContext("2d");
            this.background = window.imgs.background;
            this.context.drawImage(this.background, 0, 0);

            this.hero = new __WEBPACK_IMPORTED_MODULE_2__Hero__["a" /* Hero */]();
            this.hero.drawHero();
            this.monster = new __WEBPACK_IMPORTED_MODULE_1__Monster__["a" /* Monster */]();
            this.monster.drawMonster();
            this.health = new __WEBPACK_IMPORTED_MODULE_3__Health__["a" /* Health */]();
            this.health.drawHealth();
            return true;
        } else {
            return false;
        }
    }
    start() {
        Object(__WEBPACK_IMPORTED_MODULE_4__app__["animate"])();
    }
    reset() {
        console.log('reset');
        this.monster.tick_count = 0;
        this.monster.frame = 0;
        this.monster.slideX = 0;
        this.monster.temp = false;
        this.monster.tempMonster = 0;
        this.monster.frameX = 0;
        this.monster.frameY = 0;
        this.monster.particles = [];
        this.monster.destroyFrame = 0;
        this.monster.destroyed = false;

        this.hero.tick_count = 0;
        this.hero.frame = 0;
        this.hero.frameX = 0;
        this.hero.frameY = 0;
        this.hero.temp = 0;
        this.hero.tempFire = 0;
        this.hero.fireSlideX = 0;

        this.health.frameX = 0;
    }
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Hero__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Drawable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Health__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(1);






class Monster extends __WEBPACK_IMPORTED_MODULE_2__Drawable__["a" /* Drawable */] {
    constructor() {
        super();
        this.headArray = [window.imgs.head1, window.imgs.head2, window.imgs.head3];
        this.bodyArray = [window.imgs.body1, window.imgs.body2, window.imgs.body3];
        this.weapoonArray = [window.imgs.monsterweapoon1, window.imgs.monsterweapoon2, window.imgs.monsterweapoon3];
        this.fullName = `${window.firstName[Math.floor(Math.random() * window.firstName.length)]} ${window.middleName[Math.floor(Math.random() * window.middleName.length)]} ${window.lastName[Math.floor(Math.random() * window.lastName.length)]}`;
        this.headImage = this.headArray[Math.floor(Math.random() * 3)];
        this.bodyImage = this.bodyArray[Math.floor(Math.random() * 3)];
        this.weapoonImage = this.weapoonArray[Math.floor(Math.random() * 3)];
        this.x = 0;
        this.y = 0;
        this.width = 116;
        this.height = 80;
        this.tick_count = 0;
        this.frame = 0;
        this.slideX = 0;
        this.temp = false;
        this.tempMonster = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.bombImage = window.imgs.brick;
        this.explodeImage = window.imgs.stunned;
        this.particles = [];
        this.destroyFrame = 0;
        this.destroyed = false;

        this.brickSound = window.actions.brick;
        this.starsSound = window.actions.stars;
        this.delay = 0;
    }
    drawMonster() {
        this.canvas = document.getElementById("monster-canvas");
        this.context = this.canvas.getContext("2d");
        this.context.font = "bold 28px serif";
        this.context.fillText(this.fullName, this.canvas.width - 320, 75);
        this.bodyImage.onload = () => {
            this.context.drawImage(this.bodyImage, 0, 0, 116, 80, this.canvas.width - 400, this.canvas.height - this.height, this.width, this.height);
        };
        this.headImage.onload = () => {
            this.context.drawImage(this.headImage, 0, 0, 88, 67, this.canvas.width - 400, this.canvas.height - this.height - 80, this.width, this.height);
        };
        this.weapoonImage.onload = () => {
            this.context.drawImage(this.weapoonImage, 0, 0, 169, 148, this.canvas.width - 455, this.canvas.height - this.height - 40, this.width, this.height);
        };
    }
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.slideX === 20) {
            this.temp = true;
        }
        if (this.slideX === 0) {
            this.temp = false;
        }
        if (this.temp) {
            this.slideX -= 4;
        } else {
            this.slideX += 4;
        };

        this.context.font = "bold 28px serif";
        this.context.fillText(this.fullName, this.canvas.width - 320, 75);
        this.context.drawImage(this.bodyImage, 0, 0, 116, 80, this.canvas.width - 400 + this.slideX, this.canvas.height - this.height, this.width, this.height);
        this.context.drawImage(this.headImage, 0, 0, 88, 67, this.canvas.width - 400 + this.slideX, this.canvas.height - this.height - 80, this.width, this.height);
        this.context.drawImage(this.weapoonImage, 0, 0, 169, 148, this.canvas.width - 455 + this.slideX, this.canvas.height - this.height - 40, this.width, this.height);
    }
    tick() {
        if (this.tick_count > 20) {
            this.draw();
            this.tick_count = 0;
        }
        this.tick_count += 1;
    }
    updateMonster() {
        if (this.destroyed === true) {
            return;
        }
        this.tick();
    }
    monsterAttack() {
        this.brickSound.currentTime = 0.4;
        this.brickSound.play();
        this.context.drawImage(this.bombImage, 0, 0, 50, 50, 180, 0, 50, 50);
        this.updateMonsterAttack();
    }
    updateMonsterAttack() {
        if (this.tempMonster < this.canvas.height - game.hero.height) {
            if (this.tempMonster === this.canvas.height - game.hero.height - 50) {
                this.context.clearRect(0, 0, this.canvas.width / 2, this.canvas.height);
                this.context.drawImage(this.explodeImage, 0, 0, 64, 64, 180, this.tempMonster, 64, 64);
                requestAnimFrame(this.drawMonsterExplosion.bind(this));
                this.starsSound.currentTime = 8.5;
                this.starsSound.play();
                return;
            } else {
                this.context.clearRect(0, 0, this.canvas.width / 2, this.canvas.height);
                this.context.drawImage(this.bombImage, 0, 0, 50, 50, 180, this.tempMonster, 50, 50);
            }
        }
        this.tempMonster += 2;
        requestAnimFrame(this.updateMonsterAttack.bind(this));
    }
    drawMonsterExplosion() {
        if (this.delay === 8) {
            this.delay = 0;
            this.frameX += 64;
            if (this.frameX === 320) {
                this.frameY += 64;
                this.frameX = 0;
                if (this.frameY === 384) {
                    game.health.damageHero();
                    return;
                };
            };
        };
        this.delay++;
        this.context.clearRect(0, 0, this.canvas.width / 2, this.canvas.height);
        this.context.drawImage(this.explodeImage, this.frameX, this.frameY, 64, 64, 150, this.tempMonster, 64, 64);
        requestAnimFrame(this.drawMonsterExplosion.bind(this));
    }
    destroy() {
        this.destroyed = true;
        this.context.clearRect(this.canvas.width / 2, this.canvas.height / 4, this.canvas.width / 2, this.canvas.height * 3 / 4);
        this.particles = [];
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: this.canvas.width - 400 + this.slideX + this.bodyImage.width / 2,
                y: this.canvas.height - this.bodyImage.height / 2,
                xv: (Math.random() - 0.5) * 2.0 * 5.0,
                yv: (Math.random() - 0.5) * 2.0 * 5.0,
                age: 0
            });
        };
        this.updateDestroy();
    }
    updateDestroy() {
        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i];
            p.x += p.xv;
            p.y += p.yv;
            this.context.fillRect(p.x, p.y, 3, 3);
            this.context.clearRect(p.x, p.y, 3, 3);
            p.age++;
        };
        if (this.destroyFrame === this.particles.length) {
            game.deadMonsters++;
            setTimeout(() => {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }, 2000);
            setTimeout(() => {
                game.init();
            }, 2000);
            setTimeout(() => {
                __WEBPACK_IMPORTED_MODULE_4__app__["attackWindow"].style.display = 'flex';
            }, 4000);
            return;
        }
        this.destroyFrame += 1;
        requestAnimFrame(this.updateDestroy.bind(this));
    }
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Drawable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Monster__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Health__ = __webpack_require__(5);





class Hero extends __WEBPACK_IMPORTED_MODULE_1__Drawable__["a" /* Drawable */] {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.width = 86;
        this.height = 160;
        this.heroImage = window.imgs.hero;
        this.tick_count = 0;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.playername = document.getElementById("player-name").value || 'Игрок';
        this.bombImage = window.imgs.bomb;
        this.explodeImage = window.imgs.explode;
        this.lightningImage = window.imgs.lightning;
        this.fireImage = window.imgs.fire;
        this.temp = 0;
        this.explosionSound = window.actions.explosion;
        this.wickSound = window.actions.wick;
        this.lightningSound = window.actions.lightning;
        this.tempLightning = 0;
        this.tempFire = 0;
        this.fireSlideX = 0;
    }
    drawHero() {
        this.canvas = document.getElementById("hero-canvas");
        this.context = this.canvas.getContext("2d");
        this.context.font = "bold 28px serif";
        this.context.fillText(this.playername, 10, 75);
        this.heroImage.onload = () => {
            this.context.drawImage(this.heroImage, 0, 0, 43, 80, this.canvas.width - 900, this.canvas.height - this.height, this.width, this.height);
        };
    }
    draw() {
        this.context.clearRect(this.canvas.width - 900, this.canvas.height - this.height, this.width, this.height);
        this.context.font = "bold 28px serif";
        this.context.fillText(this.playername, 10, 75);
        this.frame = this.frame === 612 ? 0 : this.frame += 102;
        this.context.drawImage(this.heroImage, this.frame, 0, 43, 80, this.canvas.width - 900, this.canvas.height - this.height, this.width, this.height);
    }
    tick() {
        if (this.tick_count > 20) {
            this.draw();
            this.tick_count = 0;
        }
        this.tick_count += 1;
    }
    updateHero() {
        this.tick();
    }
    attack() {
        this.wickSound.currentTime = 0.0;
        this.wickSound.play();
        this.context.drawImage(this.bombImage, 0, 0, 50, 50, this.canvas.width - 360, 0, 50, 50);
        this.updateAttack();
    }
    updateAttack() {
        if (this.temp < this.canvas.height - game.monster.headImage.height - game.monster.bodyImage.height) {
            if (this.temp === this.canvas.height - game.monster.headImage.height - game.monster.bodyImage.height - 50) {
                this.context.clearRect(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);
                this.context.drawImage(this.explodeImage, 0, 0, 64, 64, this.canvas.width - 360, this.temp, 64, 64);
                requestAnimFrame(this.drawExplosion.bind(this));
                return;
            } else {
                this.context.clearRect(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);
                this.context.drawImage(this.bombImage, 0, 0, 50, 50, this.canvas.width - 360, this.temp, 50, 50);
            }
        }
        this.temp += 1;
        requestAnimFrame(this.updateAttack.bind(this));
    }
    drawExplosion() {
        this.explosionSound.play();
        this.frameX += 64;
        if (this.frameX === 320) {
            this.frameY += 64;
            this.frameX = 0;
            if (this.frameY === 384) {
                this.wickSound.pause();
                game.health.damage();
                return;
            };
        };
        this.context.clearRect(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);
        this.context.drawImage(this.explodeImage, this.frameX, this.frameY, 64, 64, this.canvas.width - 360, this.temp, 64, 64);
        requestAnimFrame(this.drawExplosion.bind(this));
    }
    attackLightning() {
        this.lightningSound.currentTime = 0.0;
        this.lightningSound.play();
        this.context.drawImage(this.lightningImage, 0, 0, 128, 512, this.canvas.width - 430, 0, 128, 512);
        this.updateAttackLightning();
    }
    updateAttackLightning() {
        if (this.tempLightning === 10) {
            this.frameX = 0;
            this.tempLightning = 0;
            this.context.clearRect(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);
            game.health.damage();
            return;
        }
        if (this.frameX === 1024) {
            this.frameX = 0;
            this.tempLightning++;
        }

        this.context.clearRect(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);
        this.context.drawImage(this.lightningImage, this.frameX, 0, 64, 64, this.canvas.width - 430, 0, 128, 512);
        this.frameX += 128;
        requestAnimFrame(this.updateAttackLightning.bind(this));
    }
    attackFire() {
        this.wickSound.currentTime = 0.0;
        this.wickSound.play();
        this.context.drawImage(this.fireImage, 0, 0, 79.625, 80, this.canvas.width - this.canvas.width * 3 / 4 - 60, this.canvas.height * 3 / 4, 79.625, 80);
        this.drawExplosionFire();
    }
    drawExplosionFire() {
        if (this.tempFire === 10) {
            this.tempFire = 0;
            this.frameX += 79.625;
            if (this.frameX === 637) {
                this.frameY += 80;
                this.frameX = 0;
                if (this.frameY === 240) {
                    this.wickSound.pause();
                    this.context.clearRect(this.canvas.width - this.canvas.width * 3 / 4 - 40, this.canvas.height * 3 / 4 - 70, this.canvas.width * 3 / 4 + 40, this.canvas.height * 3 / 4 + 70);
                    game.health.damage();
                    return;
                };
            };
        }
        this.explosionSound.play();
        this.tempFire++;
        this.fireSlideX += 1.9;
        this.context.clearRect(this.canvas.width - this.canvas.width * 3 / 4 - 40, this.canvas.height * 3 / 4 - 70, this.canvas.width * 3 / 4 + 40, this.canvas.height * 3 / 4 + 70);
        this.context.drawImage(this.fireImage, this.frameX, this.frameY, 79.625, 80, this.canvas.width - this.canvas.width * 3 / 4 - 60 + this.fireSlideX, this.canvas.height * 3 / 4, 79.625, 80);
        requestAnimFrame(this.drawExplosionFire.bind(this));
    }
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Health; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Hero__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Drawable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Monster__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(1);






class Health extends __WEBPACK_IMPORTED_MODULE_2__Drawable__["a" /* Drawable */] {
    constructor() {
        super();
        this.heroHealth = 0;
        this.monsterHealth = 0;
        this.frameX = 0;
    }
    drawHealth() {
        this.canvas = document.getElementById("health-canvas");
        this.context = this.canvas.getContext("2d");
        this.context.fillRect(10, 20, 200, 20);
        this.context.fillRect(this.canvas.width - 210, 20, 200, 20);
    }
    damage() {
        if (this.frameX <= 50) {
            this.context.clearRect(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);
            this.context.fillRect(this.canvas.width - 210 + this.monsterHealth, 20, 200 - this.monsterHealth, 20);
            if (this.monsterHealth === 200) {
                game.monster.destroy();
                return;
            };
            if (this.frameX === 50) {
                setTimeout(() => {
                    game.monster.monsterAttack();
                }, 1500);
                this.frameX = 0;
                return;
            };
        }
        this.frameX += 1;
        this.monsterHealth += 1;
        requestAnimFrame(this.damage.bind(this));
    }
    damageHero() {
        if (this.frameX <= 50) {
            this.context.clearRect(0, 0, this.canvas.width / 2, this.canvas.height);
            this.context.fillRect(10, 20, 200 - this.heroHealth, 20);
            if (this.heroHealth === 200) {
                let lost = document.getElementById('lost');
                let mainDiv = document.body.querySelector('.main');
                lost.style.display = 'flex';
                let recordArray = JSON.parse(localStorage.players);
                recordArray.push({
                    "name": game.hero.playername,
                    "score": game.deadMonsters
                });
                window.localStorage.setItem('players', JSON.stringify(recordArray));
                recordArray.sort((a, b) => b.score - a.score);
                setTimeout(() => {
                    lost.style.display = 'none';
                    let restartDiv = document.getElementById('restart');
                    restartDiv.style.display = 'flex';
                }, 3000);
                let table = document.createElement('table');
                table.classList.add('record-table');
                let tr = document.createElement('tr');
                let tdName = document.createElement('td');
                let tdCountBeaten = document.createElement('td');
                let span = document.createElement('span');
                tdName.innerHTML = 'Name';
                span.innerHTML = 'Record';
                tdCountBeaten.appendChild(span);
                window.imgs.close.id = 'close-image';

                tdCountBeaten.appendChild(window.imgs.close);
                tr.appendChild(tdName);
                tr.appendChild(tdCountBeaten);
                table.appendChild(tr);
                table.classList.add("table", "table-dark");
                let temp = 0;
                for (let i = 0; i < recordArray.length; i++) {
                    temp++;
                    let tr = document.createElement('tr');
                    let tdName = document.createElement('td');
                    let tdCountBeaten = document.createElement('td');
                    tdName.innerHTML = recordArray[i].name;
                    tdCountBeaten.innerHTML = recordArray[i].score;
                    tr.appendChild(tdName);
                    tr.appendChild(tdCountBeaten);
                    table.appendChild(tr);
                    if (temp === 5) {
                        setTimeout(() => {
                            mainDiv.appendChild(table);
                        }, 2000);
                        window.imgs.close.addEventListener('click', () => {
                            table.style.display = 'none';
                        });
                        return;
                    }
                }
                return;
            };
            if (this.frameX === 50) {
                setTimeout(() => {
                    __WEBPACK_IMPORTED_MODULE_4__app__["attackWindow"].style.display = 'flex';
                }, 3000);
                game.reset();
                return;
            };
        }
        this.frameX += 1;
        this.heroHealth += 1;
        requestAnimFrame(this.damageHero.bind(this));
    }
}



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(11);
module.exports = __webpack_require__(12);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const imgsLoader = function (sources, callback) {
    const images = {};
    let loadedImages = 0;
    let numImages = 0;
    for (let src in sources) {
        numImages++;
    }
    for (let src in sources) {
        images[src] = new Image(); //        
        images[src].onload = function () {
            if (++loadedImages >= numImages && callback) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
    return images;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = imgsLoader;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const soundLoader = function (sources, callback) {
    const sounds = {};
    let loadedSounds = 0;
    let numSounds = 0;
    for (let src in sources) {
        numSounds++;
    }
    for (let src in sources) {
        sounds[src] = new Audio();
        sounds[src].onload = function () {
            if (++loadedSounds >= numSounds && callback) {
                callback(sounds);
            }
        };
        sounds[src].src = sources[src];
    }
    return sounds;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = soundLoader;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitals; });
let capitals = {
        "Argentina": "Buenos Aires",
        "Armenia": "Yerevan",
        "Australia": "Canberra",
        "Austria": "Vienna",
        "Azerbaijan": "Baku",
        "Belarus": "Minsk",
        "Belgium": "Brussels",
        "Brazil": "Brasilia",
        "Bulgaria": "Sofia",
        "Canada": "Ottawa",
        "China": "Beijing",
        "Croatia": "Zagreb",
        "Czech Republic": "Prague",
        "Egypt": "Cairo",
        "Estonia": "Tallinn",
        "Finland": "Helsinki",
        "France": "Paris",
        "Greece": "Athens",
        "Hungary": "Budapest",
        "Iceland": "Reykjavik",
        "India": "New Delhi",
        "Israel": "Jerusalem",
        "Italy": "Rome",
        "Japan": "Tokyo",
        "Malaysia": "Kuala Lumpur",
        "Malta": "Valletta",
        "Norway": "Oslo",
        "Russia": "Moscow",
        "Singapore": "Singapore",
        "Slovakia": "Bratislava",
        "Sweden": "Stockholm",
        "Switzerland": "Bern"
};



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return draggable; });
let draggable = {
    "crocodile": "crocodile",
    "antelope": "antelope",
    "beaver": "beaver",
    "butterfly": "butterfly",
    "dinosaur": "dinosaur",
    "dolphin": "dolphin",
    "elephant": "elephant",
    "giraffe": "giraffe",
    "gorilla": "gorilla",
    "horse": "horse"
};



/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map