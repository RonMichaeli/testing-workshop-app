import { Button, Expression } from "../../../app/types";
import { calculateExpression } from "../../../app/utils";

type CalculateExpressionTestCase = [
    string, //name
    { expression: Expression; button: Button }, // input
    Expression  // expected output
];

describe("Utils", () => {
    describe("calculateExpression()", () => {
        const testCases: CalculateExpressionTestCase[] = [
            [ "should accept initial digit", { expression: "", button: Button.Eight }, "8" ],
            [ "should accept an operator after a digit", { expression: "8", button: Button.Add }, "8+" ],
            [ "should accept a decimal point after a digit if no decimal point already exists", { expression: "8", button: Button.Dot }, "8." ],
            [ "should not accept a decimal point after a non-digit", { expression: "8.", button: Button.Dot }, "8." ],
            [ "should not accept a decimal point after a digit if a decimal point already exists", { expression: "8.8", button: Button.Dot }, "8.8" ],
        ];

        it.each(testCases)("%s", (name, params, result) => {
            expect(calculateExpression(params.expression, params.button)).toBe(result);
        });
    });
});
