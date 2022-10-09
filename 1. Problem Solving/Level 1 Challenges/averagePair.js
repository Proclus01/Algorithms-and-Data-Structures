/*
    Write a function called averagePair. Given a sorted array of integers and 
    a target average, determine if there is a pair of values in the array 
    where the average of the pair equals to the target average. There may be
    more than one pair that matches the average target.
*/

console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) // true
console.log(averagePair([-1,0,3,4,5,6,], 4.1)) // false
console.log(averagePair([], 4)) // false

function averagePair(arr, num) {
    // Initialize our pointers to beginning and end of array
    let left = 0;
    let right = arr.length - 1;

    // Terminate if pointers meet in the middle
    while (left < right) {
        // Declare average value
        let average = (arr[left] + arr[right]) / 2;

        // If the left and right pointers meet the average, return true
        if (average === num) {
            return true;
        }
        // If average is more than the target, decrement right
        else if (average > num) {
            right--;
        } 
        // If average is less than the target, increment left
        else {
            left++;
        }
    }
    // Otherwise return false
    return false;
}