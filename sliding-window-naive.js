/*
    Write a function called maxSubarraySum which accepts
    an array of integers and a number called n. The function
    should calculate the maximum sum of n CONSECUTIVE
    elements in the array.
*/

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null

// if n is 2, what's the maximum consecutive sum of 2 elements?
// if n is 4, what's the maximum consecutive sum of 4 elements? 

// The inputs are an array, and a variable that sets the size of our max consecutive sum
// The output is a max consecutive sum of n array elements, 
// e.g. 1+2+3+4 = 10 for n=4 and arr = [1,2,3,4]

/*
    Here is a brute force O(N^2) solution
*/

function maxSubarraySum(arr, num) {
    // If the window is bigger than the array size, terminate
    if (num > arr.length) {
        return null;
    }
    // Make max maximally negative in case our array is all negative numbers
    var max = -Infinity;
    // Take an array and go until the end of the array minus the left edge of the window
    for (let i = 0; i < arr.length - num + 1; i++) {
        // temp will store the sums of each window
        let temp = 0;
        // go over each element in the window
        for (let j = 0; j < num; j++) {
            // sum everything inside the window
            temp += arr[i + j];
        }
        // if temp is larger than the old max, then make temp the new max
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}