/*
    Write a function that collects all of the odd values of an array input
    and returns the new array containing only the odd values
*/

function collectOddValues(arr) {
    // Declare our return value outside of the recursive function
    let result = [];

    // Write our recursive function inside of the main function
    function helper(helperInput) {
        // Set a base case
        if (helperInput.length === 0) {
            return;
        }

        // Push the odd values into the result variable
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        // Call itself with the first element of the array cut off
        helper(helperInput.slice(1));
    } 

    helper(arr);

    return result;
}