let blue, red;
let img;

function preload() {
    img = loadImage('data/base.png');
}

function setup() {
    pixelDensity(1);
    createCanvas(1080, 1080);
    blue = new Riso('blue');
    red = new Riso('red');
    noLoop();
}

function draw() {
    background(255);

    clearRiso();

    // Combinación 1

    let blues = extractRGBChannel(img, "red");
    let reds = extractRGBChannel(img, "blue");

    blue.imageMode(CENTER);
    red.imageMode(CENTER);

    red.image(reds, width / 2, height / 2, width * 0.9, height * 0.9);
    blue.image(blues, width / 2, height / 2, width * 0.9, height * 0.9);

    let textGraphic = createGraphics(width, height);
    textGraphic.fill(0);
    textGraphic.textStyle(BOLD);
    textGraphic.textFont('Arial');
    textGraphic.textAlign(CENTER, CENTER);
    textGraphic.textSize(20);
    textGraphic.text('EL CAMPO...', 130, 1000);

    red.cutout(textGraphic); // cut text out of red
    blue.cutout(textGraphic); // cut text out of blue
    red.cutout(blue);

    drawRiso();
}

function mousePressed() {
    // exportRiso();
}