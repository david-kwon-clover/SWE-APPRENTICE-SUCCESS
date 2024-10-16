// import the functions from `subtractTwoNumbers.js`, `multiplyTwoIntegers.js`, `addingArrays.js`, and write tests for the functions in this file.
import subtractTwoNumbers from "./subtractTwoNumbers.js";
import multiplyTwoIntegers from "./multiplyTwoIntegers.js";
import addingArrays from "./addingArrays.js";

describe("Subtracting and Multiplying", () => {
    let num1, num2, num3, num4;
    beforeEach(() => {
        num1 = 17;
        num2 = 6;
        num3 = 38;
        num4 = 71;
    })

    test("subtractTwoNumbers should correctly subtract two numbers", () => {
        const test1 = subtractTwoNumbers(num1, num2);
        const test2 = subtractTwoNumbers(num2, num1);
        const test3 = subtractTwoNumbers(num4, num3);
        const test4 = subtractTwoNumbers(num3, num1);
        expect(test1).toEqual(11);
        expect(test2).toEqual(-11);
        expect(test3).toEqual(33);
        expect(test4).toEqual(21);
    })
    
    test("multiplyTwoIntegers should correctly mulitply two numbers", () => {
        const test1 = multiplyTwoIntegers(num1, num2);
        const test2 = multiplyTwoIntegers(num4, num3);
        const test3 = multiplyTwoIntegers(num3, num1);
        expect(test1).toEqual(102);
        expect(test2).toEqual(2698);
        expect(test3).toEqual(646);
    })

    test("multiplyTwoIntegers should detect non-valid arguments", () => {
        const invalidInputs = multiplyTwoIntegers("14", "13");
        const invalidInputs2 = multiplyTwoIntegers(1.1, 2.2);
        expect(invalidInputs).toEqual("Inputs must be a number.");
        expect(invalidInputs2).toEqual("Integers only.");
    })

})

describe("Adding arrays", () => {
    let arr1, arr2, arr3, arr4;
    beforeEach(() => {
        arr1 = [1, 2, 3];
        arr2 = [7, 6, 5];
        arr3 = [4, 8, 2, 7];
        arr4 = ["fart", "fart", "fart"];
    })

    test("addingArrays should handle arrays of different lengths", () => {
        const differentLengths = addingArrays(arr1, arr3);
        expect(differentLengths).toEqual("Arrays are different lengths.");
    })

    test("addingArrays should detect invalid input types", () => {
        const differentTypes = addingArrays(arr2, arr4);
        expect(differentTypes).toEqual("Not all elements are numbers.");
    })

    test("addingArrays should correctly add elements from two number arrays with the same length", () => {
        const correctlyAddArrays = addingArrays(arr1, arr2);
        expect(correctlyAddArrays).toEqual([8, 8, 8]);
    })
})