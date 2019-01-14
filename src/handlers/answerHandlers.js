import { capitals } from '../constants/capitals';
import { tasksWindow, userInputValue, task } from '../commonUnchangableEls';

const right = document.getElementById('right');
const wrong = document.getElementById('wrong');

export function checkAnswer() {
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
  if (capitals[task.innerHTML] === userInputValue.value) {
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
