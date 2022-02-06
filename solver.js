function sudokuSolver(problem){
    let currNum  = 1;
    const currAddress = [1,3];
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



    }
}


sudokuSolver([        
    [0,2,0,0,0,4,3,0,0], // 0-8
    [9,0,0,0,2,0,0,0,8], // 9-17
    [0,0,0,6,0,9,0,5,0], // 18-26
    [0,0,0,0,0,0,0,0,1], // 27-35
    [0,7,2,5,0,3,6,8,0], // 36-44
    [6,0,0,0,0,0,0,0,0], // 45-53
    [0,8,0,2,0,5,0,0,0], // 54-62
    [1,0,0,0,9,0,0,0,3], // 63-71
    [0,0,9,8,0,0,0,6,0]])// 72-81


module.exports = sudokuSolver




