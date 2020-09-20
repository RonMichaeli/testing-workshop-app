import { EMPTY_EXPRESSION } from "./consts";
import { ButtonLabel, Expression } from "./types";

const BUTTON_LABEL_TO_VALUE: Record<string, string> = {
    [ButtonLabel.Add]: "+",
    [ButtonLabel.Subtract]: "-",
    [ButtonLabel.Multiply]: "*",
    [ButtonLabel.Divide]: "/",
};

const NUMBERS: Set<ButtonLabel> = new Set([
    ButtonLabel.Zero,
    ButtonLabel.One,
    ButtonLabel.Two,
    ButtonLabel.Three,
    ButtonLabel.Four,
    ButtonLabel.Five,
    ButtonLabel.Six,
    ButtonLabel.Seven,
    ButtonLabel.Eight,
    ButtonLabel.Nine,
    ButtonLabel.OpenParentheses,
    ButtonLabel.CloseParentheses,
]);

const endsWithNumber = (expression: Expression): boolean => {
    const lastChar = expression[expression.length - 1] as ButtonLabel;
    return NUMBERS.has(lastChar);
};

const removeLastChar = (str: string): string => str.slice(0, -1);

const cleanExpression = (expression: Expression): Expression => {
    return endsWithNumber(expression) ? expression : removeLastChar(expression);
};

export const roundNumber = (num: number, fractionDigits: number = 4): number => parseFloat(num.toFixed(fractionDigits));

export const calculateResult = (expression: Expression): Expression => {
    try {
        let parsedExpression: Expression = "";
        for (const char of expression) {
            parsedExpression += (BUTTON_LABEL_TO_VALUE[char] ?? char);
        }
        // eslint-disable-next-line no-eval
        const result: number = eval(cleanExpression(parsedExpression));
        return `${roundNumber(result)}`;
    }
    catch (err) {
        return expression;
    }
};

export const calculateExpression = (currentExpression: Expression, buttonLabel: ButtonLabel): Expression => {
    switch (buttonLabel) {
        case ButtonLabel.Clear:
            return EMPTY_EXPRESSION;
        case ButtonLabel.Delete:
            return currentExpression.length === 1 ? EMPTY_EXPRESSION : removeLastChar(currentExpression);
        case ButtonLabel.Result:
            return calculateResult(currentExpression);
        case ButtonLabel.Add:
        case ButtonLabel.Divide:
        case ButtonLabel.Multiply:
        case ButtonLabel.Subtract:
        case ButtonLabel.Dot:
            return cleanExpression(currentExpression) + buttonLabel;
        default:
            return currentExpression === EMPTY_EXPRESSION ? buttonLabel : currentExpression + buttonLabel;
    }
};
