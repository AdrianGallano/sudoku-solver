function sudokuSolver(problem){
    let currNum  = 1;
    const currAddress = [];
    const historyOfAddress = [];

    
    function horizontalChecker(currAddress, currNum){ // checks x
        if(!problem[currAddress[0]].includes(currNum)){
            return true;
        }
        return false;
    }
    
    function verticalChecker(currAddress, currNum){ // checks y
        if(!problem.map(x => x[currAddress[1]]).includes(currNum)){
            return true;
        }
        return false
    }

    function boxChecker(currAddress, currNum){
        const currArr = []
        if(currAddress[1] < 3){
            if(currAddress[0] < 3){
                for(let y = 0; y < 3; y++){
                    for(let x = 0; x < 3; x++){
                        currArr.push(problem[y][x])
                    }
                }
            }
            else if(currAddress[0] < 6){ // x
                for(let y = 0; y < 3; y++){ // y = 0 
                    for(let x = 3; x < 6; x++){ // x = 3
                        console.log(problem[y])
                        currArr.push(problem[y][x])
                    }
                }
            }else{
                for(let y = 0; y < 3; y++){
                    for(let x = 6; x < 9; x++){
                        currArr.push(problem[y][x])
                    }
                }
            }
        }
        
        
        
        else if(currAddress[1] < 6){
            if(currAddress[0] < 6){
                for(let y = 3; y < 6; y++){
                    for(let x = 0; x < 3; x++){
                        currArr.push(problem[y][x])
                    }
                }
            }
            else if(currAddress[0] < 6){
                for(let y = 3; y < 6; y++){
                    for(let x = 3; x < 6; x++){
                        currArr.push(problem[y][x])
                    }
                }
            }else{
                for(let y = 3; y < 6; y++){
                    for(let x = 6; x < 9; x++){
                        currArr.push(problem[y][x])
                    }
                }
            }
        }
        
        
        else{ 
            if(currAddress[0] < 3){
                for(let y = 6; y < 9; y++){
                    for(let x = 0; x < 3; x++){
                        currArr.push(problem[y][x])
                    }
                }
            }
            else if(currAddress[0] < 6){
                for(let y = 6; y < 9; y++){
                    for(let x = 3; x < 6; x++){
                        currArr.push(problem[y][x])
                    }
                }
            }else{
                for(let y = 6; y < 9; y++){
                    for(let x = 6; x < 9; x++){
                        currArr.push(problem[y][x])
                    }
                }
            }
        }
        return (!currArr.includes(currNum)) ? true : false;
    }




    // currAddress[0] = x
    // currAddress[1] = y

}


sudokuSolver([        
    [0,2,0,0,0,4,3,0,0],
    [9,0,0,0,2,0,0,0,8], 
    [0,0,0,6,0,9,0,5,0], 
    [0,0,0,0,0,0,0,0,1], 
    [0,7,2,5,0,3,6,8,0], 
    [6,0,0,0,0,0,0,0,0], 
    [0,8,0,2,0,5,0,0,0], 
    [1,0,0,0,9,0,0,0,3], 
    [0,0,9,8,0,0,0,6,0]])


module.exports = sudokuSolver

// 0,0,0
// 0,7,2
// 6,0,0

//[3,2]

// y < 6
// x > 3
// 0,0,4, 
// 0,2,0, 
// 6,0,9

