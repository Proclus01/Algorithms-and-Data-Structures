/*
    Write a recursive function called capitalizeWords. 
    Given an array of words, return a new array containing each word capitalized.
*/

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords (array) {
    // Base case
    if (array.length === 1) {
        // If the array has one element, capitalize that element
        return [array[0].toUpperCase()];
    }

    // Recur over the array less the last element
    let res = capitalizeWords(array.slice(0, -1));

    // Push into the result the array less the last element and capitalize the first word
    res.push(array.slice(array.length-1)[0].toUpperCase());

    return res;
  }