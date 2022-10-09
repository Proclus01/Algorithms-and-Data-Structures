/*
    Define a function that takes two strings.
    It takes the larger string and the pattern we're looking for.
    Loop over each character in the longer stirng.
    Loop over each character in the shorter string.
    If the characters don't match, break out of the inner loop.
    If the characters do match, keep going.
    If you complete the inner loop and find a match, increment the count of matches.
    Return the count.
*/

function naiveStringSearch(largerString, pattern) {
    // Initialize the counter
    let counter = 0;

    // Iterate over the larger string
    for (let i = 0; i < largerString.length; i++) {
        // Then iterate over the smaller string
        for (let j = 0; j < pattern.length; j++) {
            // If there's no match, break out of the smaller loop
            // To match, we need to look ahead. If i is fixed, we need to look
            // into the larger string at j positions ahead of the match at i. 
            if (pattern[j] !== largerString[i + j]) {
                break;
            }
            // If j gets to the size of the pattern string, then we found a match!
            if (j === pattern.length - 1) {
                counter++;
            }
        }
    }
    return counter;
}

let refString = "omgzomgyomg";
let patternString = "omg"
console.log(
    naiveStringSearch(refString, patternString)
);