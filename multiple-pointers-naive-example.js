/*
    Write a funcction called sumZero which accepts a SORTED
    array of integers. The function should find the first pair
    where the sum is 0. Return an array that includes both
    values that sum to zero or undefined if a pair doesn't exist.
*/

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined

/* 
    Here is a Brute Force example with O(N^2) time complexity and O(1) space complexity
*/

function sumZero(arr) {
    // Start at the first element
    for (let i = 0; i < arr.length; i++) {
        // Then initialize j to loop over the rest of the array
        for (let j = i + 1; j< arr.length; j++) {
            // and find if something in the rest of the array adds to 0
            if (arr[i] + [arr[j] === 0]) {
                return [arr[i], arr[j]];
            }
        }
    }
}