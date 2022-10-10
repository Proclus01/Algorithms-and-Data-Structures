/*
    Implement Insertion Sort
*/

// Define our helper function to swap elements
function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        // Begin by picking the second element in the array
        let currentVal = array[i];
        // Initialize our second counter
        let j = i - 1;
        
        // If our array at index is still too bag, then copy the value 
        // to the right to make room to copy the smaller value back in
        while ( (j >= 0 ) && (currentVal < array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        // Put the currentVal into the spot we've made for it
        array[j + 1] = currentVal;
    }
    return array;
}

console.log(
    insertionSort([76, 9, 1, 2, 4]) // [ 1, 2, 4, 9, 76 ]
)