import {Game} from './Game';
import {Hero} from './Hero';
import {Drawable} from './Drawable';
import {Monster} from './Monster';
import {attackWindow} from './app';


class Health extends Drawable{
    constructor(){
        super();
        this.heroHealth = 0;
        this.monsterHealth = 0;
        this.frameX = 0;
    }
    drawHealth(){
        this.canvas = document.getElementById("health-canvas");
        this.context = this.canvas.getContext("2d");
        this.context.fillRect(10,20,200,20);
        this.context.fillRect(this.canvas.width-210,20,200,20);
    }
    damage(){
        if(this.frameX <= 50){
            this.context.clearRect(this.canvas.width/2,0,this.canvas.width/2,this.canvas.height);
            this.context.fillRect(this.canvas.width-210 + this.monsterHealth,20,200 - this.monsterHealth,20);
            if(this.monsterHealth === 200){
                game.monster.destroy();
                return;
            };
            if(this.frameX === 50){
                setTimeout(()=>{
                    attackWindow.style.display = "flex";
                },1500);
                this.frameX = 0;
                return;
            };
        }
        this.frameX += 1;
        this.monsterHealth += 1;
        requestAnimFrame(this.damage.bind(this));     
    }
    damageHero(){
        if(this.frameX <= 50){
            this.context.clearRect(0,0,this.canvas.width/2,this.canvas.height);
            this.context.fillRect(10,20,200 - this.heroHealth,20);
            if(this.heroHealth === 200){
                let lost = document.getElementById('lost');
                let mainDiv = document.body.querySelector('.main');
                lost.style.display = 'flex';
                let recordArray = JSON.parse(localStorage.players);
                recordArray.push({
                    "name": game.hero.playername,
                    "score": game.deadMonsters
                });
                window.localStorage.setItem('players',JSON.stringify(recordArray));
                recordArray.sort(((a,b)=>b.score - a.score));
                setTimeout(()=>{
                    lost.style.display = 'none';
                    let restartDiv = document.getElementById('restart');
                    restartDiv.style.display = 'flex';
                },3000)
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
                for(let i = 0; i < recordArray.length; i++){
                    let tr = document.createElement('tr');
                    let tdName = document.createElement('td');
                    let tdCountBeaten = document.createElement('td');
                    tdName.innerHTML = recordArray[i].name;
                    tdCountBeaten.innerHTML = recordArray[i].score;
                    tr.appendChild(tdName);
                    tr.appendChild(tdCountBeaten);
                    table.appendChild(tr);
                
                }
                setTimeout(()=>{mainDiv.appendChild(table)},2000);
                setTimeout(()=>{window.imgs.close.addEventListener('click',()=>{table.style.display = 'none'})}); 
                return;
            };
            if(this.frameX === 50){
                setTimeout(()=>{
                attackWindow.style.display = 'flex';
                },3000);
                game.reset();
                return;
            };
        }
        this.frameX += 1;
        this.heroHealth += 1;
        requestAnimFrame(this.damageHero.bind(this));     
    }
}

export {Health};