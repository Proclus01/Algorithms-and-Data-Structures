/*
    Write a function called linearSearch that accepts an array and a value.
    Check if the array contains the value, and return the index if found,
    or -1 if not found.
*/

const testArray = [5, 6, 2, 3, 8, 9, 0, 12, 1];

console.log(
    linearSearch(testArray, 55)
);

function linearSearch(array, value) {
    // Iterate over the array
    for (let i = 0; i < array.length; i++) {
        // If we have a match, return the index
        if (array[i] === value) {
            return i;
        }
    }
    // If we exit the loop without a match, return -1
    return -1;
}