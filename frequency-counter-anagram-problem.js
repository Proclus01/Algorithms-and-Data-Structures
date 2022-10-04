/*
    Given two strings, write a function to determine if the
    second string is an anagram of the first. An anagram is
    a word, phrase, or name formed by rearranging the letters
    of another, such as cinema, formed from iceman
*/

// Inputs: assume we are just entering lowercase letters, no spaces, numerics, or symbols

function validAnagram(str1, str2) {
    // The frequency of each value must be the same!
    if (str1.length !== str2.length) {
        return false;
    }

    // Initialize our frequency counter object
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

/*
    Here is an alternative way to do this problem without using For ... In loops
*/

function validAnagram_alt(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // If letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // If there is no letter, OR if the letter is zero by the time we get to it,
        // then it's not an anagram (since we're decrementing our letters frequency as we go)
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
        return true;
    }
}