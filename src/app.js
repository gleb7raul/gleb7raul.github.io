import './utils/polifills/requestAnimationFrame';
import './baseInstall';
import {startGame, restartGame} from './handlers/gameHandlers';
import { hideAttacks } from './handlers/attackHandlers';
import { checkAnswer } from './handlers/answerHandlers';

// Starting/restarting game
const startButton = document.getElementById('start-game');
startButton.addEventListener('click', startGame);

const restartButton = document.getElementById('restart-game');
restartButton.addEventListener('click', restartGame);

// Attack
const buttonPick = document.getElementById('pick');
buttonPick.addEventListener('click', hideAttacks);

// Check solving
const buttonSolve = document.getElementById('solve');
buttonSolve.addEventListener('click', checkAnswer);
