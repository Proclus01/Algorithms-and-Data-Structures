/*
    Implement Bubble Sort
*/

// Define our helper function to swap elements
function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function bubbleSort(array) {
    // Loop over the array from the end towards the beginning
    for (let i = array.length - 1; i >= 0; i--) {
        // Start an inner loop from the beginning until i - 1
        for (let j = 0; j <= i - 1; j++) {
            // Swap if j is larger than j + 1
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

console.log(
    bubbleSort([5, 1, 12, 9, 3, 24, 18]) // [ 1,  3,  5, 9, 12, 18, 24 ]
);

// This is O(N^2) and also goes out of bounds at the end of the array because of j+1
function bubbleSort_naive(array) {
    // Iterate from the beginning to the end
    for (let i = 0; i < array.length; i++) {
        // Have a second loop do a double pass over the array
        for (let j = 0; j < array.length; j++) {
            // Swap if j is larger than j + 1
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

// This version of Bubble Sort does not do a final pass if no swaps were made in the array
function bubbleSort_optimized(array) {
    // Declare a variable called noSwaps which will tell us if we have made any swaps
    let noSwaps;
    
    for (let i = array.length - 1; i >= 0; i--) {
        // We set noSwaps to true
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                // If we did a swap, then we set noSwaps to false
                noSwaps = false;
            }
        }
        // Break out of our loop if noSwaps is still true
        if (noSwaps) {
            break;
        }
    }
    return array;
}