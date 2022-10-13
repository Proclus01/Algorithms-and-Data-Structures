/* 
    Write a function called sameFrequency.
    Given two positive integers, 
    find if the two numbers have the same frequency of digits.
*/

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false

function sameFrequency(num1, num2) {
    // Convert INT to STR
    let str1 = num1.toString();
    let str2 = num2.toString();

    // Catch edge case: frequencies are identical
    if (str1.length !== str2.length) {
        return false;
    }

    // Initialize our frequency counter objects
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Count up our frequencies
    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // Loop over the keys inside our first array's frequency counter
    for (let key in frequencyCounter1) {
        // Do the keys correspond?
        if (!(key in frequencyCounter2)) {
            return false;
        }
        // Do the values correspond?
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    // If we pass all conditions in the loop, then return true
    return true;
}