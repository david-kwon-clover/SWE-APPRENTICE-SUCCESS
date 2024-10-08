// 1. Create a function called sumToN that takes a value n and sums up all the numbers between 1 and the value n. Return 0 if n is less than 1.
/*
Example:
sumToN(2) // returns 3; (1 + 2)
sumToN(5) // returns 15; (1 + 2 + 3 + 4 + 5)
sumToN(-2) // returns 0;
*/
const sumToN = (n) => {
    if(n < 1) {
        return 0;
    }
    let sum = 0;
    while(n >= 1) {
        sum += n;
        n--;
    }
    return sum;
}

// 2. Create a function called batman that accepts a number, n, as an argument. It should add n number of Na to the before string "Batman!" Return just "Batman!" (no space) if n is less than 1
/*
Example:
batman(5) // returns "NaNaNaNaNa Batman!"
batman(2) // returns "NaNa Batman!"
batman(0) // returns "Batman!"
*/
function batman(n) {
    if(n < 1) {
        return "Batman!";
    }

    let chant = "";
    while(n >= 1) {
        chant += "Na";
        n--;
    }
    return chant + " Batman!";
}

// 3. Create a function called addEvensOnly that sums ONLY the even numbers between 1 and the value n provided as an argument. If the value of n is less than 1, return zero.

/*
Example:
addEvenOnly(4) // returns 6; (2 + 4)
addEvenOnly(10) // returns 30; (2 + 4 + 6 + 8 + 10)
addEvenOnly(-5) // returns 0;
*/
function addEvenOnly(n) {
    if(n < 1) {
        return 0;
    }

    let sum = 0;
    while(n >= 1) {
        if(n % 2 === 0) {
            sum += n;
        }
        n--;
    }
    return sum;
}

// DO NOT EDIT BELOW
export { sumToN, batman, addEvenOnly };
