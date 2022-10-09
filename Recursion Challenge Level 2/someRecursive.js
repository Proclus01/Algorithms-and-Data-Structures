/*
    Write a recursive function called someRecursive 
    which accepts an array and a callback. The function 
    returns true if a single value in the array returns true 
    when passed to the callback. Otherwise it returns false.
*/

function someRecursive(array, callback) {
    // Base case
    if (array.length === 0) {
        return false;
    }
    // Pass into the callback the array's first element
    if (callback(array[0])) {
        return true;
    }

    // Recur over the array while cutting down the size by 1
    return someRecursive(array.slice(1), callback);
}