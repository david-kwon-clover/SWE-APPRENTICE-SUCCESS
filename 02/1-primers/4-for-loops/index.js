// 1. Write a function called stringRange that uses a loop to return a string of all the numbers from a to b (included) separated by a blank space
/*
Examples:
stringRang(2, 5) // returns "2 3 4 5"
stringRang(1, 2) // returns "1 2"
stringRang(3, 10) // returns "1 2 3 4 5 6 7 8 9 10"
*/

function stringRange(a, b) {
    let result = "";
    for(let i = a; i <= b; i++) {
        if(i === b) {
            result += `${i}`;
        } else {
            result += `${i} `;
        }
    }
    return result;
}

// 2. Create a function called factorial that accepts an argument n. Use a loop to return the factorial of n. E.g. N.b. The factorial of 5 is 1 * 2 * 3 * 4 * 5 = 120. See here https://en.wikipedia.org/wiki/Factorial). Assume that n is always a positive integer greater than 0.
/*
Examples:
factorial(2) => 2
factorial(4) => 24
factorial(5) => 120
*/

function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 3. Write a function called countDigits that uses a loop to count the number of digits in a given integer, n, that is provided as an argument.
/*
Examples:
countDigits(73184792) => 8
countDigits(32) => 2
countDigits(12345) => 5
*/

function countDigits(n) {
    return n.toString().length;
}

// 4. Write a function called sumOfDigits that uses a loop to return the sum of the digits in a number, n, that is given as an argument.
/*
Examples:
sumOfDigits(417) => 12
sumOfDigits(21) => 3
sumOfDigits(1223) => 8
*/
function sumOfDigits(num) {
    let digitString = String(num);
    let digitStringList = digitString.split("");
    let digitNumberList = digitStringList.map((element) => {
        return parseInt(element);
    })
    return digitNumberList.reduce((sum, element) => {
        sum += element;
        return sum;
    })
}

// DO NOT EDIT BELOW
export { stringRange, factorial, countDigits, sumOfDigits };
