/*
    Implement Selection Sort
*/

// Define our helper function to swap elements
function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function selectionSort(array) {
    // Loop over the array
    for (let i = 0; i < array.length; i++) {
        // Store the first element as the smallest seen so far
        let minimum = i;

        // Compare each element to the next element and shrink our window of comparison
        for (let j = i + 1; j < array.length; j++) {
            // If a smaller number is found, designate that smaller number 
            // to be the new minimum and continue until the end of the array
            if (array[j] < array[minimum]) {
                minimum = j;
            }
        }
        // If the minimum is not the value (index) you initially began with, 
        if (i !== minimum) {
            // then swap the two values
            swap(array, i, minimum);
        }
    }
    return array;
}

console.log(
    selectionSort([34, 22, 10, 19, 17]) // [ 10, 17, 19, 22, 34 ]
);