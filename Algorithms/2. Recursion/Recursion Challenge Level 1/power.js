/*
    Write a function which accepts a base and an exponent.
    The function should return the power of the base to the exponent.
    This function should mimic the functionality of Math.pow().
    Do not worry about negative bases and negative exponents.
*/

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

console.log(power(2, 5)); // 16