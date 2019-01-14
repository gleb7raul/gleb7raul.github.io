import {Monster} from './persons/Monster';
import {Hero} from './persons/Hero';
import {Health} from './persons/Health';
import {animate} from '../utils/common';

export class Game {
    constructor(){
        this.deadMonsters = 0;
    }
    init(){
        this.canvas = document.getElementById("canvas");
        if (this.canvas.getContext){
            this.context = this.canvas.getContext("2d");
            this.background = window.imgs.background;
            this.context.drawImage(this.background, 0, 0);

            this.hero = new Hero();
            this.hero.drawHero();
            this.monster = new Monster();
            this.monster.drawMonster();
            this.health = new Health();
            this.health.drawHealth();
            return true;
        } else {
            return false;
        }
    };
    start(){
		animate();
    };
    reset(){
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

    };
}
