export function findPrimesBeforeN(n) {
    let primeArr = [];
    for(let i = 3; i <= n; i += 2) {
        // primeArr.push({
        //     val: i,
        //     prime: true,
        // });
        primeArr.push(i);
    }

    for(let i = 0; i < primeArr.length; i++) {
        const curr = 2*i + 3;
        if (primeArr[i]) {
            for(let j = curr*curr; j <= n; j += 2*curr) {
                if (j % curr === 0) {
                    const index = (j - 3) / 2;
                    primeArr[index] = 0
                }
            }
        }
    }

    // primeArr.unshift({ val: 2, prime: true });

    return [2].concat(primeArr.map((p,i) => p ? 2 * i + 3 : 0).filter(p => p));

}