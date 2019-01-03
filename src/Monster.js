import {Game} from './Game';
import {Hero} from './Hero';
import {Drawable} from './Drawable';
import {Health} from './Health';
import {attackWindow} from './app';

class Monster extends Drawable{
    constructor(){
        super();
        this.headArray = [window.imgs.head1,window.imgs.head2,window.imgs.head3];
        this.bodyArray = [window.imgs.body1,window.imgs.body2,window.imgs.body3];
        this.weapoonArray = [window.imgs.monsterweapoon1,window.imgs.monsterweapoon2,window.imgs.monsterweapoon3];
        this.fullName = `${window.firstName[Math.floor(Math.random()*window.firstName.length)]} ${window.middleName[Math.floor(Math.random()*window.middleName.length)]} ${window.lastName[Math.floor(Math.random()*window.lastName.length)]}`;
        this.headImage = this.headArray[Math.floor(Math.random()*3)];
        this.bodyImage = this.bodyArray[Math.floor(Math.random()*3)];
        this.weapoonImage = this.weapoonArray[Math.floor(Math.random()*3)];
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
    drawMonster(){
        this.canvas = document.getElementById("monster-canvas");
        this.context = this.canvas.getContext("2d");
        this.context.font = "bold 28px serif";
        this.context.fillText(this.fullName, this.canvas.width - 320, 75);
        this.bodyImage.onload = ()=>{this.context.drawImage(this.bodyImage,0,0,116,80,this.canvas.width-400,this.canvas.height-this.height,this.width,this.height);};
        this.headImage.onload = ()=>{this.context.drawImage(this.headImage,0,0,88,67,this.canvas.width-400,this.canvas.height-this.height-80,this.width,this.height);};
        this.weapoonImage.onload = ()=>{this.context.drawImage(this.weapoonImage,0,0,169,148,this.canvas.width-455,this.canvas.height-this.height-40,this.width,this.height);};
    };
    draw(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        
        if(this.slideX === 20){
            this.temp = true;
        }
        if(this.slideX === 0){
            this.temp = false;
        }
        if(this.temp){
            this.slideX -= 4;
        } else {
            this.slideX += 4;
        };

        this.context.font = "bold 28px serif";
        this.context.fillText(this.fullName, this.canvas.width - 320, 75);
        this.context.drawImage(this.bodyImage,0,0,116,80,this.canvas.width-400 + this.slideX,this.canvas.height-this.height,this.width,this.height);
        this.context.drawImage(this.headImage,0,0,88,67,this.canvas.width-400 + this.slideX,this.canvas.height-this.height-80,this.width,this.height);
        this.context.drawImage(this.weapoonImage,0,0,169,148,this.canvas.width-455 + this.slideX,this.canvas.height-this.height-40,this.width,this.height);
    };
    tick(){
        if(this.tick_count > 20){
            this.draw();
            this.tick_count = 0;
        }
        this.tick_count += 1;
    };
    updateMonster(){
        if(this.destroyed === true){
            return;
        }
        this.tick();
    };
    monsterAttack(){
        this.brickSound.currentTime = 0.4;
        this.brickSound.play();
        this.context.drawImage(this.bombImage,0,0,50,50,180,0,50,50);
        this.updateMonsterAttack();

    }
    updateMonsterAttack(){
        if(this.tempMonster < this.canvas.height - game.hero.height){
            if(this.tempMonster === this.canvas.height - game.hero.height-50){
                this.context.clearRect(0,0,this.canvas.width/2,this.canvas.height);
                this.context.drawImage(this.explodeImage,0,0,64,64,180,this.tempMonster,64,64);
                requestAnimFrame(this.drawMonsterExplosion.bind(this));
                this.starsSound.currentTime = 8.5;
                this.starsSound.play();
                return;
            } else {
                this.context.clearRect(0,0,this.canvas.width/2,this.canvas.height);
                this.context.drawImage(this.bombImage,0,0,50,50,180,this.tempMonster,50,50);
            }
        }
        this.tempMonster += 2;
        requestAnimFrame(this.updateMonsterAttack.bind(this));
    }
    drawMonsterExplosion(){
        if(this.delay === 8){
            this.delay = 0;
            this.frameX += 64;
            if(this.frameX === 320){
                this.frameY += 64;
                this.frameX = 0;
                if(this.frameY === 384){
                    game.health.damageHero();
                    return;
                };
            };
        };
        this.delay++;
        this.context.clearRect(0,0,this.canvas.width/2,this.canvas.height);
        this.context.drawImage(this.explodeImage,this.frameX,this.frameY,64,64,150,this.tempMonster,64,64);
        requestAnimFrame(this.drawMonsterExplosion.bind(this));
    }
    destroy(){
        this.destroyed = true;
        this.context.clearRect(this.canvas.width/2,this.canvas.height/4,this.canvas.width/2,this.canvas.height*3/4);
        this.particles =[];
        for(let i = 0; i < 50; i++){
            this.particles.push({
                x: this.canvas.width-400 + this.slideX + this.bodyImage.width/2,
                y: this.canvas.height - this.bodyImage.height/2,
                xv: (Math.random()-0.5)*2.0*5.0,  
                yv: (Math.random()-0.5)*2.0*5.0,  
                age: 0,
            });
        };
        this.updateDestroy();   
    };
    updateDestroy(){
        for(let i=0; i < this.particles.length; i++) {
            let p = this.particles[i];
            p.x += p.xv;
            p.y += p.yv;
            this.context.fillRect(p.x,p.y,3,3);
            this.context.clearRect(p.x,p.y,3,3);
            p.age++;
        };
        if(this.destroyFrame === this.particles.length){
            game.deadMonsters++;
            setTimeout(()=>{this.context.clearRect(0,0,this.canvas.width,this.canvas.height);},2000);
            setTimeout(()=>{game.init();},2000);
            setTimeout(()=>{
                attackWindow.style.display = 'flex';
            },4000);
            return;
        }
        this.destroyFrame += 1;
        requestAnimFrame(this.updateDestroy.bind(this));
    };
};

export {Monster};