/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/
function Solve(args){
	
	findPrimes(args);
function findPrimes() {

    if (arguments.length !== 2) {
        throw new Error();
    }

    var value = arguments[0],
        result = [];

    function nextPrime(value) {
        if (value > 2) {
            var i, q;
            do {
                i = 3;
                value += 2;

                q = Math.floor(Math.sqrt(value));
                while (i <= q && value % i) {
                    i += 2;
                }
            } while (i <= q);
            return value;
        }
        return value === 2 ? 3 : 2;
    }
    console.log(nextPrime(value));

    if (nextPrime(value) < arguments[1]) {
        while (nextPrime(value) <= arguments[1]) {
            value = nextPrime(value);
            result.push(value);
        }
    }
    console.log(result);

    return result;


}}
findPrimes(1, 5);
module.exports = findPrimes;