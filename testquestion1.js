let bird;
let background, birdImg;


function preload(){
    birdImg = loadImage('assets/bird.png');
    background = loadImage('assets/background.png');
}


function setup(){
    new Canvas(400, 600);
    bird = new Sprite();
    bird.width = 30;
    bird.height = 30;
    bird.x = width / 2;
    bird.y = height / 2;
    bird.image = birdImg;
}


function draw(){
    image(background, 0, 0, width, height);
}

