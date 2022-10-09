/*
    Write a recursive function called flatten which 
    accepts an array of arrays and returns a new 
    array with all values flattened.
*/

function flatten(oldArr){
    // Initialize our new array
    var newArr = []

    // Iterate over the old array
    for(var i = 0; i < oldArr.length; i++){
        // Check if the item is an array or array element
        if(Array.isArray(oldArr[i])){
            // If it's an array then recur over the old array and concatenate the results
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            // If it's not an array then push the element into the new array
            newArr.push(oldArr[i]);
        }
    } 
    return newArr;
  }