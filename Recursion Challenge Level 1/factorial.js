/*
    Write a function called factorial, which accepts a number
    and returns the factorial of that number. A factorial is 
    the product of an integer and all the integers below it,
    e.g. factorial of 4 is equal to 24 because 4 * 3 * 2 * 1 = 24
    and factorial of zero is always 1.
*/

function factorial(num) {
    if (num == 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(0));