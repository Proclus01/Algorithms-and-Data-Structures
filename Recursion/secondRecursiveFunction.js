/*
    Write a function that takes a number N as its input
    and sums the integers from N to N-k until 1.
*/

function sumRange(num) {
    // Base case: stop at 1
    if (num === 1) return 1;
    // 4 + fn(3 + fn(2 + fn(1)))
    return num + sumRange(num - 1);
}

console.log(sumRange(10)); // 55