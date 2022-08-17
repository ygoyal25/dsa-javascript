function rotateMat(mat) {
    let rows = mat.length;
    let cols = mat.length;
    let newMat = mat.map(m => Array(m.length));
    for(var row = 0; row < rows; row++) {
        for(var col = 0; col < cols; col++) {
            newMat[row][col] = mat[cols - 1 - col][row];
        }
    }
    // console.log(newMat);
    return newMat;
}

export default rotateMat;