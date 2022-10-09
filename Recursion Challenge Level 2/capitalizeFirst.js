/*
    Write a recursive function called capitalizeFirst. 
    Given an array of strings, capitalize the first letter 
    of each string in the array.
*/

function capitalizeFirst(array) {
    // Base case
    if (array.length === 1) {
        // Take the first array element, select the first string and upper case it
        // then join it with the remaining string from position 1 to end
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }

    // Recur over the remaining array elements
    const res = capitalizeFirst(array.slice(0, -1));

    // Take the string one less from the end of the array,
    // Select the first string and uppercase it,
    // and then join it with the remaining strings from pos. 1 to end
    const string =
        array.slice(array.length - 1)[0][0].toUpperCase() +
        array.slice(array.length - 1)[0].substr(1);

    // Push the next string into the recurrence
    res.push(string);

    return res;
}
