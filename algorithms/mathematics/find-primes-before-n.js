export function findPrimesBeforeN(n) {
    let primeArr = [];
    for(let i=3; i<=n; i+=2) {
        primeArr.push({
            val: i,
            prime: true,
        });
    }

    for(let i=0; i<primeArr.length; i++) {
        const curr = primeArr[i];
        if (curr.prime) {
            for(let j=curr.val*curr.val; j<=n; j+=2*curr.val) {
                if (j % curr.val === 0) {
                    const index = (j - 3) / 2;
                    primeArr[index].prime = false
                }
            }
        }
    }

    primeArr.unshift({ val: 2, prime: true });

    return primeArr.filter(p => p.prime).map(p => p.val);

}