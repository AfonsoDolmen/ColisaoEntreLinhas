let ray;
let surface;

function setup(){
    createCanvas(400,400);

    ray = new Line(100,200,300,200);
    surface = new Line(300,100,300,300);
}

function draw(){
    background(0);

    ray.draw();
    ray.lookAt();

    surface.draw();

    if(ray.collision(surface)){
        circle(ray.colPos.x,ray.colPos.y,10);
    }
}