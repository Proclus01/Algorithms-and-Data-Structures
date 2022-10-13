/*
    Write a function called isSubsequence which takes in two strings and 
    checks whether the characters in the first string form a subsequence
    of characters in the second string. In other words, the function
    should check whether the characters in the first string appear 
    somewhere in the second string, WITHOUT THEIR ORDER CHANGING.
*/

// Examples
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// there are two strings
// initialize pointer to the beginning of one string
// and initialize pointer to the beginning of the other string
// compare:
//      does ptr1 = ptr2? if yes, then increment both to the next
//      if not, increment ptr2

function isSubsequence(str1, str2) {
    // initialize pointers
    let pointer1 = 0;
    let pointer2 = 0;

    // Empty set is always a member of the subset
    if (!str1) {
        return true;
    }

    // Iterate over the superstring
    while (pointer2 < str2.length) {
        // If there's a match at the index, increment left pointer
        if (str2[pointer2] === str1[pointer1]) {
            pointer1++;
        }
        // If pointer1 is as big as the substring's length, then we're done
        if (pointer1 === str1.length) {
            return true;
        }
        // Otherwise continue increment pointer2 until the end
        pointer2++;
    }
    return false;
}