/*
    Write a function called binarySearch that a sorted array and a value.
    Create a left pointer at the start of the array, and a right pointer
    at the end of the array. 
    While the left pointer comes before the right pointer:
        Check if the element is equal to the middle
        If you find the value, return the index
        If the value is too small, move the left pointer up
        If the value is too lage, move the right pointer down
    If you never find the value, return -1
*/

function binarySearch(arr, val) {
    // Initialize the pointers
    let leftPtr = 0;
    let rightPtr = arr.length;

    while (leftPtr < rightPtr) {
        // Define the middle
        let middle = Math.floor( (leftPtr + rightPtr) / 2 );

        // Check if the element is equal to the middle
        if (arr[middle] === val) {
            return middle;
        }
        // If the value is too small, move the left pointer up
        if (val > arr[middle]) {
            leftPtr++;
        }
        // If the value is too lage, move the right pointer down
        if (val < arr[middle]) {
            rightPtr--;
        }
    }
    // If you never find the value, return -1
    return -1;
}

console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10)); // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95)); // 16
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100)); // -1
