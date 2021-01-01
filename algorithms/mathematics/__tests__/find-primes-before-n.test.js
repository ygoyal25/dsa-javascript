import { findPrimesBeforeN } from "../find-primes-before-n";

test('Check Primes Before N', () => {
    let primes = findPrimesBeforeN(10)
    expect(primes).toEqual([2,3,5,7]);
});