// ✅ 1. First Non-Repeating Character (Without Using Extra Array)

function nonRepeating(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        if (obj[character] !== undefined) {
            obj[character] = obj[character] + 1;
        } else {
            obj[character] = 1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 1) {
            return str[i];
        }
    }
    return null;
}
console.log(nonRepeating('aabbcddeff'));


// ✅ 2. Longest Consecutive Sequence (Unsorted Array)


// ✅ 3. Find Pair With Given Sum (Return Indices, Not Values)
function twoSum(arr, target) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        let requiredNumber = target - currentNumber;
        if (obj[requiredNumber] != null) {
            return [obj[requiredNumber], i];
        } else {
            obj[currentNumber] = i;
        }
    }
}
console.log(twoSum([8, 7, 2, 5, 3, 1], 10));


// ✅ 4. Group Anagrams Without Sorting

