class Line{
    constructor(x1,y1,x2,y2){
        this.pos = createVector(x1,y1);
        this.dir = createVector(x2,y2);
    }

    draw(){
        line(this.pos.x,this.pos.y,
            this.dir.x,this.dir.y);
        stroke(255);
    }

    lookAt(){
        this.mouse = createVector(mouseX,mouseY);
        this.look = p5.Vector.sub(this.mouse,this.dir);
        this.dir.add(this.look);
    }

    collision(collisor){
        this.denominator = ((this.dir.x - this.pos.x) *
        (collisor.dir.y - collisor.pos.y)) -
        ((this.dir.y - this.pos.y) * 
        (collisor.dir.x - collisor.pos.x));

        this.numerator1 = ((this.pos.y - collisor.pos.y) *
                            (collisor.dir.x - collisor.pos.x)) -
                            ((this.pos.x - collisor.pos.x) *
                            (collisor.dir.y - collisor.pos.y));
        
        this.numerator2 = ((this.pos.y - collisor.pos.y) *
                            (this.dir.x - this.pos.x)) -
                            ((this.pos.x - collisor.pos.x) *
                            (this.dir.y - this.pos.y));
        
        this.r = this.numerator1 / this.denominator;
        this.s = this.numerator2 / this.denominator;

        this.collisionX = this.pos.x + this.r * (this.dir.x - this.pos.x);
        this.collisionY = this.pos.y + this.r * (this.dir.y - this.pos.y);

        this.colPos = createVector(this.collisionX,this.collisionY);

        return (this.r >= 0 && this.r <= 1) && (this.s >= 0 && this.s <= 1);
    }
}