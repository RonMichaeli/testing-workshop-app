import { EMPTY_EXPRESSION } from "./consts";
import { Button, Expression } from "./types";

const BUTTON_LABEL_TO_VALUE: Record<string, string> = {
    [Button.Add]: "+",
    [Button.Subtract]: "-",
    [Button.Multiply]: "*",
    [Button.Divide]: "/",
};

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
            .map((label) => BUTTON_LABEL_TO_VALUE[label] ?? label)
            .join("");
        // eslint-disable-next-line no-eval
        const result: number = eval(cleanExpression(parsedExpression));
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
