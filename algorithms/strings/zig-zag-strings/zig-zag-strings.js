export default function zigzagString(str, numRows) {
    if (numRows === 1) {
        return str;
    }

    let i = 0;
    let newStrArr = [];
    while(i < numRows) {
        newStrArr[i++] = '';
    }

    // console.log(newStrArr);

    i = 0;
    let goDown = false;
    let row = 0;
    while(i < str.length) {
        // console.log(newStrArr[row])
        newStrArr[row] += str[i++];
        if (row === 0 || row === numRows - 1) {
            goDown = !goDown;
        }
        row += goDown ? 1 : -1;
    }

    return newStrArr.join('');
}
/*

P       A
A   P   L
Y
*/