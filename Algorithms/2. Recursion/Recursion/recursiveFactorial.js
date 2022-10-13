/*
    Use recursion to implement the factorial function
*/

function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(5));