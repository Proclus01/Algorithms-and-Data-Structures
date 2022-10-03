/*
    Write a function that:
    Calculates the sum of all numbers
    from 1 up to and including some number N.
*/

// Solution 1 - Iterative
function addUpToN(nthTerm) {
    // Initialize our accumulator
    let total = 0;

    // Iterate over an index and add the index to the accumulator
    for (let index = 1; index <= nthTerm; index++) {
        total += index;
    }

    // Return the accumulator
    return total;
}

// Solution 2 - Input-driven
function addUpToN_2(nthTerm) {
    // Simplified series representation returned as a formula
    return nthTerm * (nthTerm + 1) / 2;
}

// We can measure performance by timing it
let t1 = performance.now();
addUpToN_2(100000000);
let t2 = performance.now();

console.log(
    `Time Elapsed: ${(t2 - t1 )/ 1000} seconds.`
);

// However, this may not be accurate enough for fast algorithms
// And the timing mechanism will vary between computers and between programming languages
// This is why we need Big O notation to provide a common ground for measuring algorithm speed