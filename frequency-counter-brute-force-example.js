/*
    Write a function called Same, which accepts two arrays.
    The function should return true if every value in the 
    array has its corresponding value squared in the second array.
    The frequency of values must be the same.
*/

// Example Inpouts and Outputs

same([1,2,3], [4, 1, 9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

/* 
    Here is a Brute Force O(N^2) Approach:
*/

function same(arr1, arr2) {
    // First edge case: if the arrays do not match, return false
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Loop over the first array as a reference
    for (let i = 0; i < arr1.length; i++) {
        // Check if arr2 contains an element of arr1 squared
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // If correctIndex is false, then return false and exit the loop
        if (correctIndex === -1) {
            return false;
        }
        // If we pass the above condition, remove the current element from arr2
        // and loop over the remaining elements until there are none left
        arr2.splice(correctIndex, 1);
    }
    // If we exit the loop, then we have passed all checks, so return true
    return true;
}