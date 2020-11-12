import { Button, Expression } from "../../../app/types";
import { calculateExpression } from "../../../app/utils";

type CalculateExpressionTestCase = [
    { expression: Expression; button: Button }, // input
    Expression  // expected output
];

describe("Utils", () => {
    describe("calculateExpression()", () => {
        const testCases: CalculateExpressionTestCase[] = [
            // ToDo: have at least 5 different test cases. Try to find a test case that exposes a "bug" in calculateExpression() and let the test fail on that case
        ];

        // ToDo: name the 'it' according the convention we've learned
        it.each(testCases)("should", () => {
        });
    });
});
