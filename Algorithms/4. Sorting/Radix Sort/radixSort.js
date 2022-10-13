/*
    Implement Radix Sort
*/

/*  getDigit(num, place) returns the digit in num at the given place value
    getDigit only works for base-10 in the current implementation
    The place variable is in reverse order, so the last digit is 0 rather than the first */
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/*  digitCount(num) returns the number of digits in num */
function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/*  mostDigits(nums) - given an array of numbers, mostDigits returns
    the number of digits in the largest numbers in the list */
// Take digitCount and run the tally over each number in the last
function mostDigits(nums) {
    // Initialize our tracking variable
    let maxDigits = 0;
    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // For every index in the array, check whether it's greater than maxDigits
        // and if it is, then update maxDigits
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Radix sort: loop over the array, split things into buckets, and join them together
function radixSort(array) {
    // Figure out how many digits the largest number has
    let maxDigitCount = mostDigits(array);

    // Loop from k = 0 up to this largest number of digits
    for (let k = 0; k < maxDigitCount; k++) {
        // Create buckets for each digit (0 to 9)
        let digitBuckets = Array.from({length: 10}, () => []);

        // Place each number in the corresponding bucket based on its kth digit
        for (let i = 0; i < array.length; i++) {
            // Get the digit of each number in the array
            let digit = getDigit(array[i], k);
            // and put array[i] in the bucket at that index
            digitBuckets[digit].push(array[i]);
        }
        // Reform the buckets into the list using the order they're currently in
        // and replace our existing array with values in our buckets, 
        // starting with 0 and going up to 9
        array = [].concat(...digitBuckets);
    }
    return array;
}

console.log(
    radixSort([32154,32454,245,245845,4,548,54,986,765])
)