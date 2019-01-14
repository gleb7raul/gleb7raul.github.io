import { attackWindow, tasksWindow, userInputValue, task } from '../commonUnchangableEls';
import { shuffleLetters } from '../utils/common';
import { draggable } from '../constants/draggable';
import { capitals } from '../constants/capitals';

export function hideAttacks() {
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
  let capitalsArrayProps = Object.keys(capitals);
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
  let draggableArrayProps = Object.keys(draggable);
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