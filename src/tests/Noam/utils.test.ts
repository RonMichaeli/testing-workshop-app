import { calculateResult } from "../../app/utils";

describe("Test utils", () => {
    it.each([
        ["1+1", "2"],
        ["1 * 1 ", "1"],
        ["5 / 5 ", "1"],
        ["abc ", "abc "],
        ["Enter", "Enter"],
        ["1 /0", "1 /0"],
        ["1.23456789 + 1", "2.2346"], // BUG!
    ])("should return %s for %s", (expression, result) =>{
        expect(calculateResult(expression)).toEqual(result);
    });
})