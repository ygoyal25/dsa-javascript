function pattern2(rows) {
    let row = 0;
    while(row < rows) {
        let col = 0;
        let str = ''
        while(col < row + 1) {
            str += (col + 1);
            col++;
        }
        row++
        console.log(str);
    }
}

export default pattern2;