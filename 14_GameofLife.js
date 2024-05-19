let grid;
let resolution = 40;
let cols ;
let rows ; 

function make2DArray(cols,rows) {
    let arr = new Array(cols);

     for( let i = 0 ; i < cols ; i++) {
        arr[i] = new Array(rows);
     }

     return arr
}

//Setup
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

function PrintGrid(g) {
    
    for( let i = 0 ; i < cols ; i++) {
        for( let j = 0 ; j < rows ; j++) {
            x = i * resolution;
            y = j * resolution;
            if(g[i][j] == 1) {
                fill(0);
                rect(x,y,resolution,resolution);
            }
        }
    }

}

function sumOfNeighbors(grid,x,y) {

    let sum = 0;

    for( let i = -1 ; i < 2 ; i++) {
        for( let j = -1 ; j < 2 ; j++) {
           sum += grid[x+i][y+j];
        }
    }

    sum -= grid[x][y];

    return sum;
}

    

//Draw
function draw() {

    //Print Grid
    PrintGrid(grid);


    //Calculate Next


    let next = make2DArray(cols,rows);

    for( let i = 0 ; i < cols ; i++) {
        for( let j = 0 ; j < rows ; j++) {

            let state = grid[i][j];
            let n = sumOfNeighbors(grid,i,j);
            if ( state == 0 && (n == 3 || n==2)) {
                next[i][j] = 1;
            }
            else if ((state == 1 && n > 3) || (state == 1 && n < 1)) {
                next[i][j] = 0;
            }
            else {
                next[i][j] = grid[i][j];
            }
        }
     }


     grid = next;

}

