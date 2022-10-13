/*
    Given an array of integers and a number, write a function
    called maxSubarraySum, which finds the maximum sum of a 
    subarray with the length of the number passed to the function.

    Note: the subarray must consist of CONSECUTIVE elements from the 
    original array. In the first example below, [100, 200, 300] is a
    subarray of the original array, but [100, 300] is not.
*/

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null

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
