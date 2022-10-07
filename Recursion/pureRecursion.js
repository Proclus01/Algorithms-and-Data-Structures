/*
    Write a function that collects all of the odd values of an array input
    and returns the new array containing only the odd values
*/

function collectOddValues(arr) {
    // Redefine the new array each time we pass through the function
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    // Concatenate all the arrays at the very end and return that
    // We use concat to build up the result
    newArr = newArr.concat(
        // slice out [0] and [1] + [2] + [3] + [4] + [5] ...
        collectOddValues(arr.slice(1))
    );

    return newArr;
}

// collectOddValues([1,2,3,4,5]) // [1, 3, 5]
//         [1].concat(collectOddValues([2,3,4,5])) // [1] + [3, 5]
//                 [].concat(collectOddValues([3,4,5])) // [] + [3, 5]
//                     [3].concat(collectOddValues([4, 5])) // [3] + [5]
//                             [].concat(collectOddValues([5])) // [] + [5]
//                                     [5].concat(collectOddValues([])) // [5] + []
//                                             []
// Then we concatenate everything together: [] + [5] + [] + [3] + [1] = [1, 3, 5]