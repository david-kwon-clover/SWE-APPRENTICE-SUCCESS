const fruits = ["pineapple", "apple", "grape", "refined uranium", "banana"];

/*  Using the provided fruits array, complete the following 
    Because we're mutating the array as we go, the number of elements will change as will indexes of items.
    It will help to follow the instructions sequentially.
*/

// 1. CREATE
// a. Add "orange" to the beginning of the array
fruits.unshift("orange");

// b. Add "raspberry" to the end of the array
fruits.push("raspberry");

// c. Insert "mango" into the fruits array as the 6th item
fruits.splice(5, 0, "mango");

// 2. READ
// a. Check if the fruits array contains an element with value of 'pineapple' and store the value inside the variable of isPineapple
let isPineapple;
isPineapple = fruits.includes("pineapple");

// b. Check if the fruits array contains an element with value of 'carrot' and store the value inside the variable isCarrot
let isCarrot;
isCarrot = fruits.includes("carrot");

// c. What is the index of 'grape'? Save it in the variable grapeIndex
let grapeIndex;
grapeIndex = fruits.indexOf("grape");

// d. Update the variable element5 to contain the 5th element in the array.
let element5;
element5 = fruits[4];

// 3. UPDATE
// a. That fifth element doesn't look right...update it to "Leeloo Dallas Multipass"
fruits[4] = "Leeloo Dallas Multipass";

// 4. DELETE

// a. The bananas are too bendy! Find 'banana' and delete it!
fruits.splice(fruits.indexOf("banana"), 1);

// DO NOT EDIT BELOW THIS LINE
export { fruits, isPineapple, isCarrot, grapeIndex, element5 };
