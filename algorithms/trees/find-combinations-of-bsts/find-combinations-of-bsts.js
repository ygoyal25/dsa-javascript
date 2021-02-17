function bstCombinations(n) {
    if (n === 1 || n == 0) {
        return 1;
    }
    let combinations = 0
    for (var i = 1; i <= n; i++) {
        combinations += bstCombinations(i - 1) * bstCombinations(n - i);
    }
    return combinations;
}

export default bstCombinations;

