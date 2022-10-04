/*
    Write a function called Same, which accepts two arrays.
    The function should return true if every value in the 
    array has its corresponding value squared in the second array.
    The frequency of values must be the same.
*/

// Example Inpouts and Outputs

console.log(same([1,2,3], [4, 1, 9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)

/* 
    Here is an example using the Frequency Counter Strategy
    This has O(N) complexity because we loop over each array one time, individually.
    We do not have to use a nested loop to check the second array against the first.
*/

function same(arr1, arr2) {
    // Check if the arrays are not the same length and return false right away if that's the case
    // Remember, the frequency of each value must be the same!
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Initialize our frequency counter object
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Count up our frequencies
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // Loop over the keys inside our first array's frequency counter
    for (let key in frequencyCounter1) {
        // Do the keys correspond?
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // Do the values correspond?
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    // If we pass all conditions in the loop, then return true
    return true;
}

