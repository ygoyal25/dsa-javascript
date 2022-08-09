function nQueen(n) {
    let rows = n, cols = n;

    let mat = []
    for(let i = 0; i < rows; i++) {
        mat[i] = Array(rows).fill('.');
    }
    
    let arr = [];
    placeQueen(0);
    function placeQueen(row) {
        // console.log('Top', { row, mat, rowsDone, colsDone });

        if (row >= n) {
            arr.push(mat.map(m => [...m]));
            return;
        }

        for(var j = 0; j < cols; j++) {
            // console.log('Inside For', { row, j });
            if (!checkIsSafe(row, j)) {
                continue
            }
            mat[row][j] = 'Q';
            placeQueen(row + 1, 0);
            mat[row][j] = '.';
        }
    }
    return arr.map(a => a.map(s => s.join('')));

    function checkIsSafe(row, col) {
        let isSafe = true;
        if (row > 0) {
            // Check up direction - same col upwards
            let r = row - 1;
            while(isSafe && r >= 0) {
                isSafe = mat[r][col] !== 'Q';
                r--;
            }

            // Check left diagonal
            r = row - 1;
            c = col - 1;
            while(isSafe && r >= 0 && c >= 0) {
                isSafe = mat[r][c] !== 'Q';
                r--;
                c--;
            }

            // Check right diag
            r = row - 1;
            c = col + 1
            while(isSafe && r >= 0 && c < cols) {
                isSafe = mat[r][c] !== 'Q';
                r--;
                c++
            }
        }
        // console.log(isSafe);
        return isSafe;
    }
}

console.log(nQueen(5));