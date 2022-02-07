
function isValid(grid, currAddress, currNum){
    let [row,col] = currAddress;
    
    // checks horizontal
    if(grid[row].includes(currNum)){
        return false;
    }

    // checks vertical
    if(grid.map(x => x[col]).includes(currNum)){
        return false;
    }

    // checks box
    let startRow = row - row % 3;
    let startCol =  col - col % 3;
    for(let y = 0; y < 3; y++){
        for(let x = 0; x < 3; x++){
            if(grid[startRow+y][startCol+x] == currNum){
                return false
            }
        }
    }

    return true;
}

function isEmpty(grid){ // returns address [y,x]
    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            if(grid[y][x] == 0){
                return [y,x]
            }
        }
    }
    return null
}


function solve(grid){
    let find = isEmpty(grid)


    //fix this
    if(!find){
        return [...grid];
    }else{
        let [row,col] = find;
        for(let n = 1; n < 10; n++){
            if(isValid(grid, find, n)){
                grid[row][col] = n
    
                if(solve(grid)){
                    return grid;
                }
            }
            grid[row][col] = 0
        }
    }

    return false;
}

function printBoard(grid){
    for(let y = 0; y < grid.length; y++){
        if(y % 3 == 0){
            console.log("--------------------")
            console.log(`${grid[y].slice(0,3).join(' ')} | ${grid[y].slice(3,6).join(' ')} | ${grid[y].slice(6,9).join(' ')}`)
        }else{
            console.log(`${grid[y].slice(0,3).join(' ')} | ${grid[y].slice(3,6).join(' ')} | ${grid[y].slice(6,9).join(' ')}`)
        }
    }
} 

const grid = [[5,3,4,6,7,8,9,1,2], [6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7], [8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1], [7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4], [2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]

let s = solve(grid);
console.log(s)

module.exports = solve;