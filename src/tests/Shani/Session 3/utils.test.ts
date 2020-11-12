import { Expression, Button } from "../../../app/types";
import { calculateExpression } from "../../../app/utils";

type CalculateExpressionTestCase = [
    { expression: Expression; button: Button }, // input
    Expression  // expected output
];

describe("Utils", () => {
    describe("calculateExpression()", () => {
        const testCases: CalculateExpressionTestCase[] = [
            // ToDo: have at least 5 different test cases. Try to find a test case that exposes a "bug" in calculateExpression() and let the test fail on that case
            [{ expression: "1+1", button: Button.Add }, "1+1+"],
            [{ expression: "1.", button: Button.Two }, "1.2"],
            [{ expression: "3", button: Button.Five }, "35"],
            [{ expression: "1+1", button: Button.Clear }, "0"],
            [{ expression: "1+1", button: Button.Delete }, "1+"],
            [{ expression: "1+1+", button: Button.Add }, "1+1+"]
        ];

        // ToDo: name the 'it' according the convention we've learned
        it.each(testCases)("should calculate expression and return the proper result", ({ expression, button }, expectedResult) => {
            const receivedOutput: Expression = calculateExpression(expression, button);
            expect(receivedOutput).toBe(expectedResult)
        });
    });
});
