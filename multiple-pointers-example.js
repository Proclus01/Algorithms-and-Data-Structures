/*
    Write a funcction called sumZero which accepts a SORTED
    array of integers. The function should find the first pair
    where the sum is 0. Return an array that includes both
    values that sum to zero or undefined if a pair doesn't exist.
*/

// This solution has a time complexity of O(N) and a space complexity of O(1)

function sumZero(arr) {
    // Initialize our first pointer to the beginning of the array
    let left = 0;
    // And initialize our second pointer to the end of the array
    let right = arr.length - 1;

    // If the pointers meet in the middle and no match is found, then terminate
    while (left < right) {
        let sum = arr[left] + arr[right];

        // If we find a match, then return our pair
        if (sum === 0) {
            return [arr[left], arr[right]];
        // If the value is too high, decrement the second pointer
        } else if (sum > 0) {
            right--;
        // If the value is too low, increment the first pointer
        } else {
            left++;
        }
    }
}