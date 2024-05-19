let grid;
let resolution = 4;
let cols ;
let rows ; 

function make2DArray(cols,rows) {
    let arr = new Array(cols);

     for( let i = 0 ; i < cols ; i++) {
        arr[i] = new Array(rows);
     }

     return arr;
}

//Setup
function  setup() {

    createCanvas(800,800);

    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols,rows);
    for( let i = 0 ; i < cols ; i++) {
        for( let j = 0 ; j < rows ; j++) {
            grid[i][j] = floor(random(2)-0.4);
        }
     }

     frameRate(30);
     

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

function checkIndex(index) {
    
    let size = cols;
    
    if (index < 0) {
        index += size;
    }
    if (index >= size) {
        index -= size;
    }
    return index;
}


function sumOfNeighbors(grid,x,y) {

    let sum = 0;

    for( let i = -1 ; i < 2 ; i++) {
        for( let j = -1 ; j < 2 ; j++) {
            let index_1 = checkIndex(x+i);
            let index_2 = checkIndex(y+j);

           sum += grid[index_1][index_2];
        }
    }

    sum -= grid[x][y];

    return sum;
}

    

//Draw
function draw() {

    background(255);
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
            else if ((state == 1 && n > 3) || (state == 1 && n < 2)) {
                next[i][j] = 0;
            }
            else {
                next[i][j] = state;
            }
        }
     }

    //  let ne = make2DArray(cols,rows);

    //  for( let i = 0 ; i < cols ; i++) {
    //     for( let j = 0 ; j < rows ; j++) {
    //         ne[i][j] = sumOfNeighbors(grid,i,j);
    //     }
    // }
     
     grid = next;

}

