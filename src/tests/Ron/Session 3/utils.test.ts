import { Button, Expression } from "../../../app/types";
import { calculateExpression } from "../../../app/utils";

/** Notes:
 * The last test case fails.
 * Having multiple dots in single operand looks weird to us because it's an invalid mathematical expression.
 * But it's not a bug by definition, because the software is working as expected by the requirements. The "bug" is in the requirements.
 * In this case we can truly say - it's not a bug, it's a feature.
 * **/

type CalculateExpressionTestCase = [
    { expression: Expression; button: Button }, // input
    Expression  // expected output
];

describe("Utils", () => {
    describe("calculateExpression()", () => {
        const testCases: CalculateExpressionTestCase[] = [
            [{ expression: "0", button: Button.Six }, "6"],
            [{ expression: "12", button: Button.Eight }, "128"],
            [{ expression: "8+", button: Button.Subtract }, "8-"],
            [{ expression: "(", button: Button.Subtract }, "(-"],
            [{ expression: "((", button: Button.OpenParentheses }, "((("],
            [{ expression: "2.2", button: Button.Dot }, "2.2"],
        ];

        it.each(testCases)("should calculate expression properly", ({ expression, button }, expectedOutput) => {
            expect(calculateExpression(expression, button)).toBe(expectedOutput);
        });
    });
});
