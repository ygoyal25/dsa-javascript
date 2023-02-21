function pattern1(rows) {
    let row = 0;
    while(row < rows) {
        let col = row + 1;
        let str = ''
        while(col > 0) {
            str += '*';
            col--;
        }
        row++
        console.log(str);
    }
}

export default pattern1;