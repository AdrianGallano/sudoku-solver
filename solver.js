const solveBtn = document.getElementById("solver-btn");
const generateBtn = document.getElementById("generate-btn");
const uiGrid = document.getElementById("grid");
let gridGenerated;
let currGrid;
let randNum;
let solved = true;
let delayDisplayData = 0;
let milisecondsIncrement = 0;

fetch("./sudoku-problems.JSON")
  .then((res) => res.json())
  .then((data) => {
    gridGenerated = Array.from(data);
  });

function isValid(grid, currAddress, currNum) {
  // validation
  let [row, col] = currAddress;

  displaySingleData(row, col, currNum);
  // checks horizontal
  if (grid[row].includes(currNum)) {
    return false;
  }

  // checks vertical
  if (grid.map((x) => x[col]).includes(currNum)) {
    return false;
  }

  // checks box
  let startRow = row - (row % 3);
  let startCol = col - (col % 3);
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if (grid[startRow + y][startCol + x] == currNum) {
        return false;
      }
    }
  }

  return true;
}

function isEmpty(grid) {
  // returns address [y,x]
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] == 0) {
        return [y, x];
      }
    }
  }
  return null;
}

function solve(grid) {
  let find = isEmpty(grid);
  if (!find) {
    return grid;
  } else {
    let [row, col] = find;
    for (let n = 1; n < 10; n++) {
      if (isValid(grid, find, n)) {
        grid[row][col] = n;
        if (solve(grid)) {
          return grid;
        }
      }
      revertSingleData(row, col);
      grid[row][col] = 0;
    }
  }

  return false;
}

function displayGrid(grid) {
  // start grid
  let delay = 0;
  for (let y = 0; y < grid.length; y++) {
    let uiCol = uiGrid.children[y];
    for (let x = 0; x < grid[y].length; x++) {
      let uiRow = uiCol.children[x];

      if (grid[y][x] == 0) {
        uiRow.setAttribute("data-state", "in-process");
        continue;
      }

      setTimeout(() => {
        uiRow.textContent = grid[y][x];
      }, delay);
      delay += 50;
    }
  }
}

function clearUiGrid(grid) {
  for (let y = 0; y < grid.length; y++) {
    let uiCol = uiGrid.children[y];
    for (let x = 0; x < grid[y].length; x++) {
      let uiRow = uiCol.children[x];
      uiRow.setAttribute("data-state", "neutral");
      uiRow.textContent = "";
    }
  }
}

function generateRandomGrid(grid) {
  randNum = Math.floor(Math.random() * grid.length);
  return structuredClone(grid[randNum]);
}

function displaySingleData(row, col, n) {
  setTimeout(() => {
    uiGrid.children[row].children[col].textContent = n;
  }, delayDisplayData);
  
  delayDisplayData += milisecondsIncrement;
}

function revertSingleData(row, col) {
  setTimeout(() => {
    uiGrid.children[row].children[col].textContent = "";
  }, delayDisplayData);
}

generateBtn.addEventListener("click", () => {
  if (!solved) return;

  currGrid = generateRandomGrid(gridGenerated);
  clearUiGrid(currGrid);
  displayGrid(currGrid);
  solved = false;
});

solveBtn.addEventListener("click", () => {
  if (solved) return;

  solveBtn.disabled = true
  solve(currGrid)
  setTimeout(()=>{
    solved = true
    solveBtn.disabled = false
  },delayDisplayData)
  delayDisplayData = 0;

});

// module.exports = solve;
