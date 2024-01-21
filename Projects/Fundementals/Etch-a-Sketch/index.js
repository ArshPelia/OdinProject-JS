console.log("Script init...")

// let grid = [];
// const container = document.querySelector('#container');

// creategrid();

// console.log(grid);

// function creategrid() {
//     for (let x = 0; x < 16; x++) {
//     				grid[x] = [];
//         for (let y = 0; y < 16; y++) {
//             addCell(x, y); 
//         }
//     }
// }

// function addCell(x, y) {
//     // const newDiv = document.createElement("div");
//     grid[x][y] = cell(x,y); // create a new object on x and y
//     // grid[x][y] = newDiv; // create a new object on x and y
// }

// function cell(x,y) {
// 	return (x+1)+":"+(y+1);
// }

const container = document.querySelector('#container');

function makeDivs(numDivs) {
    for (let d = 0; d < numDivs; d++){
        let cells = document.createElement('div');
        cells.className = "cell"
        cells.textContent = d
        container.appendChild(cells)    
        }
}

makeDivs(256);