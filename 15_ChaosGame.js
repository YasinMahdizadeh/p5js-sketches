let ax, ay;
let bx, by;
let cx, cy;
let dx, dy;

let nx, ny;


function setup() {
    createCanvas(windowWidth,windowHeight);
    ax = random(width);
    ay = random(height);
    bx = random(width);
    by = random(height);
    cx = random(width);
    cy = random(height);
    dx = random(width);
    dy = random(height);

    nx = random(width);
    ny = random(height);

    background(0);
    stroke(255);
    strokeWeight(8);
    point(ax,ay);
    point(bx,by);
    point(cx,cy);
    point(dx,dy);

}

function draw() {
    strokeWeight(2);
    for ( let x = 0; x < 500; x++) {

   
        point(nx,ny);

        let r = floor(random(4));

        if ( r == 0) {
            stroke(255,255,0);
            nx = lerp(nx,ax,0.5);
            ny = lerp(ny,ay,0.5);
        } else if ( r == 1) {
            stroke(0,255,255);
            nx = lerp(nx,bx,0.5);
            ny = lerp(ny,by,0.5);
        } else if ( r == 2 ) {
            stroke(255,0,255);
            nx = lerp(nx,cx,0.5);
            ny = lerp(ny,cy,0.5);
        } else if ( r == 3 ) {
            stroke(120,120,255);
            nx = lerp(nx,dx,0.5);
            ny = lerp(ny,dy,0.5);
        }
    }

}