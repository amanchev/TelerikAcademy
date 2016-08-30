/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum() {
    var sumOfArray = 0;
    if (arguments[0].length === 0) {
        return null;
    }

    for (num of arguments[0]) {
        var numm = parseInt(num);
        if (isNaN(numm)) {
            throw new Error();
        } else {
            sumOfArray += numm;
        }
    }

    return sumOfArray;
}
sum([1, 2, 4, 3]);

module.exports = sum;