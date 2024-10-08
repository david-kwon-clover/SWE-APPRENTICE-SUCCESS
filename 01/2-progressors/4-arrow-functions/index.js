// 1. Define an arrow function, `isTooMuch`, that takes in an amount and a limit, and returns a boolean indicating whether or not the amount is greater than the limit.
/* 
Examples:
isTooMuch(5,10) should return false
isTooMuch(15,10) should return true
*/
const isTooMuch = (amount, limit) => {
    return amount > limit;
} 

// 2. Define an arrow function, `isWeekend`, that takes in a string of a day of the week and returns a boolean indicating whether or not it is the weekend.
/* 
Examples:
isWeekend("Monday") should return false
isWeekend("Sunday") should return true
*/
const isWeekend = (day) => {
    return day === "Sunday" || day === "Saturday";
}

// 3. Define an arrow function, `sumOfSquares`, that takes two numbers as arguments and returns the sum of their squares.
/*
Examples:
sumOfSquares(3, 4) returns 25 (3^2 + 4^2 = 9 + 16 = 25)
sumOfSquare(2, 2) returns 8 (2^2 + 2^2 = 4 + 4 = 8)
*/
const sumOfSquares = (num1, num2) => {
    return (num1 ** 2) + (num2 ** 2);
}

// 4. Create an arrow function, `findMax`, that takes two numbers as arguments and returns the larger of the two numbers.
/*
Examples:
findMax(8, 12) returns 12
findMax(25, 25) returns 25
*/
const findMax = (num1, num2) => {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// 5. Create an arrow function, `reverseString`, that takes a string as an argument and returns the reversed version of the string.
/*
Examples:
reverseString("hello") returns "olleh"
*/
const reverseString = (string) => {
    return string.split("").reverse().join("");
}






export { isTooMuch, isWeekend, sumOfSquares, findMax, reverseString };