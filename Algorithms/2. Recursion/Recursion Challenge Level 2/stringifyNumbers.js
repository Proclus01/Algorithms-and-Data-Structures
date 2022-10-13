/*
    Write a function called stringifyNumbers which 
    takes in an object and finds all of the values 
    which are numbers and converts them to strings. 
    Recursion would be a great way to solve this!
*/

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

function stringifyNumbers(obj) {
    // Initialize a new object
    var newObj = {};

    // Iterate over our input object
    for (var key in obj) {
        // If a value is a number...
        if (typeof obj[key] === 'number') {
            // then stringify it
            newObj[key] = obj[key].toString();
        } 
        // but if a value is an object but not an array
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            // then recur over that nested object
            newObj[key] = stringifyNumbers(obj[key]);
        } 
        // otherwise push any values into the new object
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}