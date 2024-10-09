// 1. Create a function called excludeNum that accepts a value of n between 1 and 10. Create a string that contains all values between 1 and 10 with the value n excluded.
/*
Examples:
excludeNum(2) => "1 3 4 5 6 7 8 9 10"
excludeNum(9) => "1 2 3 4 5 6 7 8 10"
*/

function excludeNum(n) {
    let result = "";
    for(let i = 1; i <= 10; i++) {
        if(i === n) {
            continue;
        } else {
            result += `${i} `;
        }
    }
    return result.trimEnd();
}

// 2. Create a function called noVowels that accepts a string as an argument. The function should return the same string without any vowels. For this exercise vowels are a, e, i, o, and u.
/*
Examples:
noVowels("multiverse") => "mltvrs"
noVowels("coding") => "cdng"
noVowels("Bootcamp") => "Btcmp"
*/
function noVowels(word) {
    let letters = word.split("");
    const vowels = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < letters.length; i++) {
        if(vowels.includes(letters[i])) {
            letters.splice(i, 1);
            i--;
        }
    }
    return letters.join("");
 }

// 3. Create a function called magicLetter that accepts a string and a letter as arguments. The function should return the original string up until, but not including, the provided letter. NOTE: Case matters. If the provided letter is an uppercase letter then it should be looking for an uppercase letter.
/*
Examples:
magicLetter("Multiverse", "i") => "Mult";
magicLetter("coding", "d") => "co";
magicLetter("Hello", "h") => "Hello"
magicLetter("Loops", "z") => "Loops";
*/

function magicLetter(str, letter) {
    const cutOffIndex = str.indexOf(letter);
    if(cutOffIndex < 0) {
        return str;
    } else {
        return str.slice(0, (cutOffIndex));
    }
} 

// 4. create a function called createPyramid that accepts a number n and creates a simple pyramid shape of asterisks. NOTE: Use the escape character "\n" to create a new line between levels.  The very last level should also contain the \n escape character
/*
Examples:
createPyramid(2) 

*
**

createPyramid(5)
*
**
***
****
*****

*/

function createPyramid(n) {
    let result = "";
    const star = "*";
    for(let i = 1; i <= n; i++) {
        result += `${star.repeat(i)}\n`;
    }
    return result;
}

// DO NOT EDIT BELOW
export { excludeNum, noVowels, magicLetter, createPyramid };
