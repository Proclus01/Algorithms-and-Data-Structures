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
    Here's an O(N) solution where we only loop through the array one time
*/

function maxSubarraySum(arr, num) {
    // Set our counters to zero
    let maxSum = 0;
    let tempSum = 0;

    // Capture our edge case
    if (arr.length < num) return null;

    // Create our first window of size num
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    // Now we set our first temporary sum
    tempSum = maxSum;

    // To slide our window, we don't recalculate the entire window
    // We subtract the one element from the beginning, and add one to the end
    // And store that in the variable
    for (let i = num; i < arr.length; i++) {
        // Take the sum, subtract one array value, and add a new array value
        tempSum = tempSum - arr[i - num] + arr[i];
        // And then find the largest of the two counters
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}