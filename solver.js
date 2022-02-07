
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
            if(grid[startRow][startRow][startCol] == currNum){
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

    if(!find){
        return true;
    }else{
        let [row,col] = find;
        for(let n = 1; n <= 9; n++){
            if(isValid(grid, find, n)){
                grid[row][col] = n

                if(solve(grid)){
                    return true;
                }
            }else{
                grid[row][col] = 0
            }
        }
    }
    return false;
}






const grid = 
[[0,2,0,0,0,4,3,0,0],
[9,0,0,0,2,0,0,0,8], 
[0,0,0,6,0,9,0,5,0], 
[0,0,0,0,0,0,0,0,1], 
[0,7,2,5,0,3,6,8,0], 
[6,0,0,0,0,0,0,0,0], 
[0,8,0,2,0,5,0,0,0], 
[1,0,0,0,9,0,0,0,3], 
[0,0,9,8,0,0,0,6,0]]

let s = solve(grid)
console.log(s)
console.log(...grid)