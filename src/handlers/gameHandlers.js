import { attackWindow } from '../commonUnchangableEls';
import { Game } from '../models/Game';

export function startGame() {
  window.actions.mortalkombat.currentTime = 0.0;
  window.actions.mortalkombat.loop = true;
  window.actions.mortalkombat.volume = 0.3;
  window.actions.mortalkombat.play();
  let startDiv = document.getElementById('start');
  startDiv.style.display = 'none';
  const game = new Game();
  window.game = game;
  if (game.init()) {
    game.start();
  };
  setTimeout(() => {
    attackWindow.style.display = 'flex';
  }, 3000)
};

export function restartGame() {
  window.actions.mortalkombat.currentTime = 0.0;
  window.actions.mortalkombat.loop = true;
  window.actions.mortalkombat.volume = 0.3;
  let restartDiv = document.getElementById('restart');
  restartDiv.style.display = 'none';
  window.game = new Game();
  if (game.init()) {
    game.start();
  };
  setTimeout(() => {
    attackWindow.style.display = 'flex';
  }, 3000)
};