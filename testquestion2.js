let square;

function setup(){
    new Canvas(400, 600);
    world.gravity.y = 10;
    square = new Sprite();
}

function draw(){
    background("grey");
    if (mouse.presses() === true) {
        square.velocity.y = -10;
    }
}
