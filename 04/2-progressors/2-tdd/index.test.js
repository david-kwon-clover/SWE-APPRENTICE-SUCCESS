// import the functions from `subtractTwoNumbers.js`, `multiplyTwoIntegers.js`, `addingArrays.js`, and write tests for the functions in this file.
import subtractTwoNumbers from "./subtractTwoNumbers.js";
import multiplyTwoIntegers from "./multiplyTwoIntegers.js";
import addingArrays from "./addingArrays.js";

describe("subtractTwoNumbers", () => {
    let num1, num2, num3, num4;
    beforeEach(() => {
        num1 = 17;
        num2 = 6;
        num3 = 38;
        num4 = 71;
    })

    test("should correctly subtract two numbers", () => {
        const test1 = subtractTwoNumbers(num1, num2);
        const test2 = subtractTwoNumbers(num2, num1);
        const test3 = subtractTwoNumbers(num4, num3);
        const test4 = subtractTwoNumbers(num3, num1);
        expect(test1).toEqual(11);
        expect(test2).toEqual(-11);
        expect(test3).toEqual(33);
        expect(test4).toEqual(21);
    })

})