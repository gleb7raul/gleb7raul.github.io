import { imgsLoader } from './loaders/imgLoader.js';
import { soundLoader } from './loaders/soundLoader.js';
import { vocabular } from './constants/vocabular';
import { missingLetters, firstName, middleName, lastName } from './constants/config';

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

window.vocabular = vocabular;

window.missingLetters = missingLetters

window.firstName = firstName;
window.middleName = middleName;
window.lastName = lastName;

if (!localStorage.players) {
  localStorage.setItem('players', '[]');
};
