import { Drawable } from '../abstractClasses/Drawable';

export class Hero extends Drawable{
    constructor(){
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
    drawHero(){
    this.canvas = document.getElementById("hero-canvas");
    this.context = this.canvas.getContext("2d");
    this.context.font = "bold 28px serif";
    this.context.fillText(this.playername, 10, 75);
    this.heroImage.onload = ()=>{
        this.context.drawImage(this.heroImage,0,0,43,80,this.canvas.width-900,this.canvas.height-this.height,this.width,this.height);
        };
    };
    draw(){
        this.context.clearRect(this.canvas.width-900,this.canvas.height-this.height,this.width,this.height);
        this.context.font = "bold 28px serif";
        this.context.fillText(this.playername, 10, 75);
        this.frame = (this.frame === 612 ? 0 : this.frame += 102);
        this.context.drawImage(this.heroImage,this.frame,0,43,80,this.canvas.width-900,this.canvas.height-this.height,this.width,this.height);
    };
    tick(){
        if(this.tick_count > 20){
            this.draw();
            this.tick_count = 0;
        }
        this.tick_count += 1;
    };
    updateHero(){
        this.tick();
    };
    attack(){
        this.wickSound.currentTime = 0.0;
        this.wickSound.play();
        this.context.drawImage(this.bombImage,0,0,50,50,this.canvas.width-360,0,50,50);
        this.updateAttack();

    }
    updateAttack(){
        if(this.temp < this.canvas.height - game.monster.headImage.height - game.monster.bodyImage.height){
            if(this.temp === this.canvas.height - game.monster.headImage.height - game.monster.bodyImage.height-50){
                this.context.clearRect(this.canvas.width/2,0,this.canvas.width/2,this.canvas.height);
                this.context.drawImage(this.explodeImage,0,0,64,64,this.canvas.width-360,this.temp,64,64);
                requestAnimFrame(this.drawExplosion.bind(this));
                return;
            } else {
                this.context.clearRect(this.canvas.width/2,0,this.canvas.width/2,this.canvas.height);
                this.context.drawImage(this.bombImage,0,0,50,50,this.canvas.width-360,this.temp,50,50);
            }
        }
        this.temp += 1;
        requestAnimFrame(this.updateAttack.bind(this));
    }
    drawExplosion(){
        this.explosionSound.play();
        this.frameX += 64;
        if(this.frameX === 320){
            this.frameY += 64;
            this.frameX = 0;
            if(this.frameY === 384){
                this.wickSound.pause();
                game.health.damage();
                return;
            };
        };
        this.context.clearRect(this.canvas.width/2,0,this.canvas.width/2,this.canvas.height);
        this.context.drawImage(this.explodeImage,this.frameX,this.frameY,64,64,this.canvas.width-360,this.temp,64,64);
        requestAnimFrame(this.drawExplosion.bind(this));
    }
    attackLightning(){
        this.lightningSound.currentTime = 0.0;
        this.lightningSound.play();
        this.context.drawImage(this.lightningImage,0,0,128,512,this.canvas.width-430,0,128,512);
        this.updateAttackLightning();

    }
    updateAttackLightning(){
        if(this.tempLightning === 10){
            this.frameX = 0;
            this.tempLightning = 0;
            this.context.clearRect(this.canvas.width/2,0,this.canvas.width/2,this.canvas.height);
            game.health.damage();
            return;
        }
        if(this.frameX === 1024){
            this.frameX = 0;
            this.tempLightning++;
        }

        this.context.clearRect(this.canvas.width/2,0,this.canvas.width/2,this.canvas.height);
        this.context.drawImage(this.lightningImage,this.frameX,0,64,64,this.canvas.width-430,0,128,512);
        this.frameX += 128;
        requestAnimFrame(this.updateAttackLightning.bind(this));
    }
    attackFire(){
        this.wickSound.currentTime = 0.0;
        this.wickSound.play();
        this.context.drawImage(this.fireImage,0,0,79.625,80,this.canvas.width - this.canvas.width*3/4 - 60,this.canvas.height*3/4,79.625,80);
        this.drawExplosionFire();

    }
    drawExplosionFire(){
        if(this.tempFire === 10){
            this.tempFire = 0;
            this.frameX += 79.625;
            if(this.frameX === 637){
                this.frameY += 80;
                this.frameX = 0;
                if(this.frameY === 240){
                    this.wickSound.pause();
                    this.context.clearRect(this.canvas.width - this.canvas.width*3/4 - 40,this.canvas.height*3/4 - 70,this.canvas.width*3/4 + 40,this.canvas.height*3/4 + 70);
                    game.health.damage();
                    return;
                };
            };
        }
        this.explosionSound.play();
        this.tempFire++;
        this.fireSlideX += 1.9;
        this.context.clearRect(this.canvas.width - this.canvas.width*3/4 - 40,this.canvas.height*3/4 - 70,this.canvas.width*3/4 + 40,this.canvas.height*3/4 + 70);
        this.context.drawImage(this.fireImage,this.frameX,this.frameY,79.625,80,this.canvas.width - this.canvas.width*3/4 - 60 + this.fireSlideX,this.canvas.height*3/4,79.625,80);
        requestAnimFrame(this.drawExplosionFire.bind(this));
    }
};
