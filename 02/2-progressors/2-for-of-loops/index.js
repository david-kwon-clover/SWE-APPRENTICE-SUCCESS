// 1. Create a function called addIt that accepts two arrays, arr1 and arr2. addIt should return the total sum of two arrays. Use for...of loops to solve this problem.
/* 
Example: 
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // total = 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // total = 351

addIt(arr_1, arr_2); => returns 627
*/

function addIt(arr1, arr2) {
    let arr1Sum = 0;
    let arr2Sum = 0;
    for(const element of arr1) {
        arr1Sum += element;
    }
    for(const element of arr2) {
        arr2Sum += element;
    }
    return arr1Sum + arr2Sum;
}

// 2. Create a function called capitalizeAll that accepts a string and letter as an arguments. capitalizeAll should return the same string with the specified now capitalized.
/*
Examples:
capitalizeAll("cool", "o"); => "cOOl"
capitalizeAll("Coding is fun", "i"); => "CodIng Is fun" 
capitalizeAll("Multiverse", "z"); => "Multiverse"
*/

function capitalizeAll(str, letter) {
    return str.replaceAll(letter, letter.toUpperCase());
}

// 3. Create a function called cleanUp that accepts an array as an argument. Coerce each element to a number if possible, otherwise remove the element. The function should return an array of only numbers. You can assume the array is 1 dimensional.
/*
Example:
cleanUp([1, '2', 'three', false]); => [1, 2, 0]
*/

function cleanUp(arr) {
    if(arr.length === 0) {
        return [];
    } 
    let result = [];
    for(const element of arr) {
        if(!isNaN(Number(element))) {
            result.push(Number(element));
        } 
    }
    return result;
}

// 4. Create a function called bigWords that accepts an array of strings as an argument. bigWords should return an array of words in the input array which are bigger than or equal to the average word length for the array.

/*
Example
bigWords(['i', 'am', 'soo', 'hungry']); => ['soo', 'hungry']
bigWords(['there', 'are', 'some', 'big', 'words']); => ['these', 'some', 'words']
*/

function bigWords(words) {
    const totalLength = words.reduce((length, word) => {
        length += word.length;
        return length;
    }, 0)
    const averageLength = totalLength / words.length;
    let result = [];
    for(const word of words) {
        if(word.length >= averageLength) {
            result.push(word);
        }
    }
    return result;
}

// 5. Create a function called unduplicate that accepts an array of numbers as an argument. Return an array that contains all the numbers of the original array exactly once. Don't change the order of the elements
/* 
unduplicate([1, 2, 2, 3, 4, 5, 5, 6]); => [1, 2, 3, 4, 5, 6]
unduplicate([1, 2, 2, 3, 4]); => [1, 2, 3, 4]
*/

function unduplicate(arr) {
    arr.sort();
    const duplicateTracker = arr.reduce((duplicates, element) => {
        if(!duplicates[`${element}:${typeof element}`]) {
            duplicates[`${element}:${typeof element}`] = 1;
        } else {
            duplicates[`${element}:${typeof element}`] += 1;
        }
        return duplicates;
    }, {})

    console.log(duplicateTracker);
    

    for(const element of arr) {
        if(duplicateTracker[`${element}:${typeof element}`] > 1) {
            arr.splice(arr.indexOf(element), (duplicateTracker[`${element}:${typeof element}`] - 1));
        }
    }
    return arr;
}

console.log(unduplicate([1, 2, "2", 3]));


// DO NOT EDIT BELOW THIS LINE
export { addIt, capitalizeAll, cleanUp, bigWords, unduplicate };
