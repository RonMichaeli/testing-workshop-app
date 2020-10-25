import { BUTTON_TO_VALUE_MAP, EMPTY_EXPRESSION } from "./consts";
import { Button, Expression } from "./types";

const NUMBERS: Set<Button> = new Set([
    Button.Zero,
    Button.One,
    Button.Two,
    Button.Three,
    Button.Four,
    Button.Five,
    Button.Six,
    Button.Seven,
    Button.Eight,
    Button.Nine,
    Button.OpenParentheses,
    Button.CloseParentheses,
]);

const endsWithNumber = (expression: Expression): boolean => {
    const lastChar = expression[expression.length - 1] as Button;
    return NUMBERS.has(lastChar);
};

const removeLastChar = (str: string): string => str.slice(0, -1);

const cleanExpression = (expression: Expression): Expression => {
    return endsWithNumber(expression) ? expression : removeLastChar(expression);
};

export const roundNumber = (num: number, fractionDigits: number = 4): number => parseFloat(num.toFixed(fractionDigits));

export const calculateResult = (expression: Expression): Expression => {
    try {
        const parsedExpression = expression
            .split("")
            .map((button) => BUTTON_TO_VALUE_MAP[button] ?? button)
            .join("");
        // eslint-disable-next-line no-eval
        const result: number = eval(cleanExpression(parsedExpression));
        if (result === Infinity) {
            throw new Error("Invalid expression. Why would you divide by zero?");
        }
        return `${roundNumber(result)}`;
    }
    catch (err) {
        return expression;
    }
};

export const calculateExpression = (currentExpression: Expression, button: Button): Expression => {
    switch (button) {
        // Display-only
        case Button.Clear:
            return EMPTY_EXPRESSION;
        case Button.Delete:
            return currentExpression.length === 1 ? EMPTY_EXPRESSION : removeLastChar(currentExpression);
        case Button.Result:
            return calculateResult(currentExpression);

        // Operators
        case Button.Add:
        case Button.Divide:
        case Button.Multiply:
        case Button.Subtract:
        case Button.Dot:
            return cleanExpression(currentExpression) + button;

        // Numbers
        default:
            return currentExpression === EMPTY_EXPRESSION ? button : currentExpression + button;
    }
};
