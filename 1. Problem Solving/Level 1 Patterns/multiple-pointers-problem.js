/*
    Implement a function called countUniqueValues
    which accepts a sorted array, and counts the
    unique values in the array. There can be negative
    numbers in the array, but it will always be sorted.
*/

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4

// My solution has a time of O(3N) and a space of O(3)

function countUniqueValues(arr) {
    // Initialize our counter
    let uniqueValues = 0;

    // Initialize our pointers
    let left = 0;
    let right = left + 1;

    // If the pointers reach the end, then terminate
    while (right <= arr.length) {
        /* If LEFT is not equal to RIGHT, 
        then increase our unique values
        move LEFT to the position of RIGHT
        and increment RIGHT by one */
        if (arr[left] !== arr[right]) {
            uniqueValues++;
            left = right;
            right++
        }
        // If LEFT is equal to RIGHT, then increment right 
        else {
            right++;
        }
    }
    return uniqueValues;
}

// Here is the instructor's solution using a variation of the MP strategy
// only here the values are stored in the array we're indexing over

function countUniqueValues_alt(arr) {
    if (arr.lengh === 0) {
        return 0;
    }
    // initialize our first pointer
    let firstIndex = 0;
    // initialize our second pointer
    for (let secondIndex = 1; secondIndex < arr.length; secondIndex++) {
        if (arr[firstIndex] !== arr[secondIndex]) {
            // increment first index up
            firstIndex++;
            // Store our value into the first index
            arr[firstIndex] = arr[secondIndex];
        }
    }
    return firstIndex + 1;
}