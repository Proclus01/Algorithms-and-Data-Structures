/*
    Found on Udemy c.o. Ashley Barrow's reply to Karim's comment on Lecture  86
    in Colt Steele's Algorithms and Data Structures Masterclass,
    Reply Date: Oct 4, 2022
*/

export{};

function merge(first: number[], second: number[]) {
    let output: number[] = [];
 
    let pointerOne = 0;
    let pointerTwo = 0;
 
    while (output.length < first.length + second.length) {
        let shouldPushFirst =
            pointerTwo > second.length - 1 || // second is exhausted
            first[pointerOne] <= second[pointerTwo]; // first is lower or equal
 
        let shouldPushSecond =
            pointerOne > first.length - 1 || // first is exhausted
            second[pointerTwo] <= first[pointerOne]; // second is lower or equal
 
        if (shouldPushFirst) {
            output.push(first[pointerOne]);
            pointerOne++;
        } else if (shouldPushSecond) {
            output.push(second[pointerTwo]);
            pointerTwo++;
        }
    }
 
    return output;
}