/* 
    Implement a function called areThereDuplicates which accepts a 
    variable number of arguments, and checks whether there are any
    duplicates among the arguments passed in. You can solve this using
    the frequency counter pattern OR the multiple pointers pattern.
*/

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

function areThereDuplicates(...inputVariables) {
  // Initialize our frequency counter object
  let frequencyCounter = {};

  // Count up our frequencies
  for (let val of inputVariables) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }

  // Loop over the keys inside our first array's frequency counter
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  // If we pass all conditions in the loop, then return false
  return false;
}

// Two pointers
function areThereDuplicates_alt1(...args) {
  // Sort the arguments array first (this is O(N) already)
  args.sort((a, b) => a > b);

  // Then initialize pointers
  let left = 0;
  let right = 1;

  // Compare values
  while (right < args.length) {
    if (args[left] === args[right]) {
      return true;
    }
    left++;
    right++;
  }
  return false;
}

// Flatten the array down into a set and then compare
function areThereDuplicates_alt2(...args) {
  return new Set(args).size !== args.length;
}
