/*
    Implement Quick Sort
*/

// Define our helper function to swap elements
function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

// First implement our pivot helper function
function pivot(array, start = 0, end = array.length - 1) {
    // Grab the pivot from the start of the array
    let pivot = array[start];

    // Store the current pivot index inside of a variable
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        // If the pivot is greater than the current element
        if (pivot > array[i]) {
            // Increment the pivot index variable
            pivotIndex++;
            // And swap the current element with the element at the pivot index
            swap(array, pivotIndex, i);
        }
    }
    // Swap the starting element (the pivot) with the pivot index
    swap(array, start, pivotIndex);
    // Return only the pivot index
    return pivotIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        // Call the pivot helper on the array
        let pivotIndex = pivot(array, left, right);

        // When the helper returns to you the updated pivot index,
        // recur over the subarray to the left of the index, 
        // and the subarray to the right of the index

        // Left
        quickSort(array, left, pivotIndex - 1);
        // Right
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}

console.log(
    quickSort([4,6,9,1,2,5,3])
)