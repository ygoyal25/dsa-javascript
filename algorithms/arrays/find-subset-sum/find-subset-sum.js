function subsetSum(arr) {
    let sumArr = [];
    getSum(arr, 0, 0, sumArr);
    return sumArr.sort((a, b) => a - b);
}

function getSum(arr, i, prevSum = 0, sumArr = []) {
    if (i >= arr.length) {

        sumArr.push(prevSum);
        return sumArr;
    }

    getSum(arr, i + 1, prevSum + arr[i], sumArr);
    getSum(arr, i + 1, prevSum, sumArr);
}

console.log(subsetSum([5,2,1]))


function uniqueSubsets(arr) {
    let subsets = [];
    getUniqueSubsets(arr, 0, [], subsets);
    return subsets;
}

function getUniqueSubsets(arr, i, currSet = [], subSets = []) {
    // if (i >= arr.length) {
    subSets.push(currSet);

    for(var ind = i; ind < arr.length; ind++) {
        if (ind > i && arr[ind - 1] === arr[ind]) {
            continue;
        }
        getUniqueSubsets(arr, ind + 1, [...currSet, arr[ind]], subSets);
    }
}

console.log(uniqueSubsets([1,2,2]))


function uniqueCombinations(arr, target) {
    const comb = [];
    getUniqueCombinations(0, []);
    console.log(comb)

    function getUniqueCombinations(i, currComb, prevSum = 0) {
        if (prevSum === target) {
            comb.push(currComb);
            return
        }
        if (i >= arr.length || prevSum > target) {
            return;
        }

        for(var ind = i; ind < arr.length; ind++) {
            if (ind > 0 && arr[ind] === arr[ind - 1]) {
                continue;
            }
            getUniqueCombinations(ind, [...currComb, arr[ind]], prevSum + arr[ind]);
        }
    }
}

uniqueCombinations([2,3,6,7], 7)



function uniqueCombinationsNoRep(arr, target) {
    arr = arr.sort((a, b) => a - b);
    const comb = [];
    getUniqueCombinationsNoRep(0, []);
    return comb;

    function getUniqueCombinationsNoRep(i, currComb, prevSum = 0) {
        // console.log('here', { i, prevSum, currComb });
        if (prevSum === target) {
            comb.push(currComb);
            return
        }
        if (i >= arr.length || prevSum > target) {
            return;
        }

        // for(var ind = i; ind < arr.length; ind++) {
        // getUniqueCombinationsNoRep(i + 1, [...currComb, arr[i]], prevSum + arr[i]);
        // getUniqueCombinationsNoRep(i + 1, currComb, prevSum);
        // }

        for(var ind = i; ind < arr.length; ind++) {
            if (ind > i && arr[ind - 1] === arr[ind]) {
                continue;
            }
            getUniqueCombinationsNoRep(ind + 1, [...currComb, arr[ind]], prevSum + arr[ind]);
        }
    }
}

console.log(uniqueCombinationsNoRep([10,1,2,1,7,6,1,5], 8))