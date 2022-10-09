/*
    Write a function called collectStrings which accepts 
    an object and returns an array of all the values in 
    the object that have a typeof string

    This function should use Pure Recursion.
*/

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj) {
    // Initialize our accumulator
    var stringsArr = [];

    // Iterate over the object
    for(var key in obj) {
        // If it's a string then push it into our array
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        // But if it's an object, then recur over the object and concatenate the results
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}