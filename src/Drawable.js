
class Drawable {
    constructor(){
        this.canvasWidth = 0;
	    this.canvasHeight = 0;
    }
    init(x,y){
        this.x = x;
        this.y = y;
    };
    draw(){};
};

export {Drawable};