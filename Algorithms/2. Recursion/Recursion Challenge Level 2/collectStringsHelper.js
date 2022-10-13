/*
    Write a function called collectStrings which accepts 
    an object and returns an array of all the values in 
    the object that have a typeof string

    This function should use Helper Method Recursion.
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
 
    // Make our helper method
    function gatherStrings(o) {
        // Iterate over the values in the object
        for(var key in o) {
            // If it's a string, then add it to our new array
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            // but if it's an object then recur over that object
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    // Call our helper method
    gatherStrings(obj);
 
    return stringsArr;
}