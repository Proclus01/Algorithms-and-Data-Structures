/*
    Write a recursive function called reverse which 
    accepts a string and returns a new string in reverse.
*/

function reverse(str){
	if (str.length <= 1) {
        return str;
    }
	return reverse(str.slice(1)) + str[0];

    // string 
    // f(tring) + s -> gnirts
    // f(ring) + t -> gnirt
    // f(ing) + r -> gnir
    // f(ng) + i -> gni
    // f(g) + n -> gn
    // g
}