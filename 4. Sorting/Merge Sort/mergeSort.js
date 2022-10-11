/*
    Implement Merge Sort
*/

// Write a function to merge two sorted arrays
function merge(array1, array2) {
    // Create an empty array to store our results
    let results = [];

    // Initialize our pointers, one for each array to move through individually
    let i = 0;
    let j = 0;

    while(i < array1.length && j < array2.length) {
        // If one array element is greater than the other array element
        if (array2[j] > array1[i]) {
            // Then push the first array element
            results.push(array1[i]);
            i++;
        } else {
            // Otherwise push in the second
            results.push(array2[j]);
            j++;
        }
    }
    // Run our first pointer until the end
    while (i < array1.length) {
        results.push(array1[i]);
        i++;
    }
    // Then run the second pointer until the end
    while (j < array2.length) {
        results.push(array2[j]);
        j++;
    }

    return results;
}

function mergeSort(array) {
    // Base case: the smallest array size
    if (array.length <= 1) {
        return array;
    }
    
    // Define our midpoint
    let midpoint = Math.floor(array.length / 2);

    // Call mergeSort on the two halves of the array
    let left = mergeSort(array.slice(0, midpoint));
    let right = mergeSort(array.slice(mid));

    // Return our merged arrays
    return merge(left, right);
}