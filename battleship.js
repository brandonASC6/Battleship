const number_of_boxes_in_row = 10;
const number_of_boxes_in_column = 10;

let box_width, box_height;

function setup(){
    createCanvas(1000,1000);
    box_height = 100;
    box_width = 100;

    for(let i = 0; i < 11 ; i++){
        
        const x = i * box_width;
        for(let j = 0; j < 11;j++){
            const y = j * box_height
            fill(255,255,255);
            rect(x,y,box_width,box_height)
        }
    }
    fill(255,0,0);
}

let grid = [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]];

function mouseClicked(){
    let xPos = mouseX;
    let yPos = mouseY;
    let fi = Math.floor(xPos/100);
    let si = Math.floor(yPos/100);

    if(grid[si][fi] == 1){
        console.log("You hit a ship");
        fill(0,255,0);
        rect(fi * 100, si * 100, box_width, box_height);
        fill(255,0,0);
    }else{
        console.log("You did not hit a ship");
        rect(fi * 100, si * 100, box_width, box_height);
    }
}
