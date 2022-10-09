/*
    Write a recursive function called isPalindrome which 
    returns true if the string passed to it is 
    a palindrome (reads the same forward and backward). 
    Otherwise it returns false.
*/

function isPalindrome(str){
    // Base cases
    if(str.length === 1) {
        return true;
    }
    if(str.length === 2) {
        return str[0] === str[1];
    }

    // If the beginning and end are the same,
    // then recur on the next inner 2 until we reach the base cases
    if(str[0] === str.slice(-1)) {
        return isPalindrome(str.slice(1,-1));
    }

    // If we exit the recurrence and the base cases, return false
    return false;
}