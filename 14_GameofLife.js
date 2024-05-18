function make2DArray(cols,rows) {
    let arr = new Array(cols);

     for( let i = 0 ; i < cols ; i++) {
        arr[i] = new Array(rows);
     }

     return arr
}

let grid;
let resolution = 40;
let cols ;
let rows ;


function  setup() {

    createCanvas(800,800);

    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols,rows);
    for( let i = 0 ; i < cols ; i++) {
        for( let j = 0 ; j < rows ; j++) {
            grid[i][j] = floor(random(2));
        }
     }



}       


function draw() {

    for( let i = 0 ; i < cols ; i++) {
            for( let j = 0 ; j < rows ; j++) {
                x = i * resolution;
                y = j * resolution;
                if(grid[i][j] == 1) {
                    fill(0);
                    rect(x,y,resolution,resolution);
                }
            }
        }

}