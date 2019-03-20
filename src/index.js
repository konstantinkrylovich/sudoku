module.exports = function solveSudoku(matrix) {
<<<<<<< HEAD
  // your solution
  const findNextCellToFill = (matrix) => {
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        if (matrix[i][j] == 0) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  }
=======
  const findNextCellToFill = (matrix) => {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

const isValueValid  = (matrix, i, j, elem) => {
    let rowValid = !matrix[i].includes(elem);
    if(rowValid) {
        let colValid = true;
        for(let k = 0; k < matrix.length; k++) {
            if(matrix[i][k] == elem){
                return false;
            }
        }
        if(colValid) {
            let sectorTopX = (i/3) * 3;
            let sectorTopY = (j/3) * 3;
            for(let i = sectorTopX; i < sectorTopX+3; i++) {
                for(let j = sectorTopY; j < sectorTopY+3; j++) {
                    if(matrix[i][j] == elem) {
                        return false;
                    }
                }
            }
            return true;
        }
    }
    
    return false;  
}
>>>>>>> d3ea04011fe9bec33e37d5c0585938a25d0d3ba6
}
