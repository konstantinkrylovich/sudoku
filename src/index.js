
const findNextCellToFill = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

const isValueValid = (matrix, i, j, elem) => {
    let rowValid = !matrix[i].includes(elem);
    if (rowValid) {
        let colValid = true;
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][j] == elem) {
                return false;
            }
        }
        if (colValid) {
            let sectorTopX = Math.floor(i / 3) * 3;
            let sectorTopY = Math.floor(j / 3) * 3;
            for (let i = sectorTopX; i < sectorTopX + 3; i++) {
                for (let j = sectorTopY; j < sectorTopY + 3; j++) {
                    if (matrix[i][j] == elem) {
                        return false;
                    }
                }
            }
            return true;
        }
    }

    return false;
}

const Solve = (matrix, i = 0, j = 0) => {
    //debugger;
    [i, j] = [...findNextCellToFill(matrix)];
    if (i == -1) {
        return true;
    }

    for (let elem = 1; elem < 10; elem++) {
        if (isValueValid(matrix, i, j, elem)) {
            matrix[i][j] = elem;
            if (Solve(matrix, i, j)) {
                return true;
            }

        }
    }
    matrix[i][j] = 0;
    return false;
}


module.exports = function solveSudoku(matrix) {
    // your solution
    let i = 0;
    let j = 0;
    Solve(matrix, i, j);
    return matrix;
}


