function subSet(str) {
    let totalBits = str.length;
    const totalSubStrs = Math.pow(2,totalBits);
    let i = 0;
    while(i < totalSubStrs) {
        let currBit = 0;
        let subStr = "";
        while(currBit < totalBits) {
            if ((1 << currBit) & i) {
                subStr += str[currBit];
            }
            currBit++;
        }
        console.log('SubString', subStr);
        i++
    }
}

subSet("abd");