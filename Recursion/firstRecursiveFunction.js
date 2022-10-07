/* 
    Write a function that takes a number N
    and prints out a sequence of numbers that
    count down to zero.
*/

function countDown(num) {
    // Is number less than or equal to input?
    if (num <= 0) {
        console.log("All done!");
        return; // Return terminates our recursion
    }
    // If not, let's print the number
    console.log(num);
    // Then we decrement the number
    num--;
    // Call countdown with num one less than the previous input
    countDown(num);
}

countDown(5);