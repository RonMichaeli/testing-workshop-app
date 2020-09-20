import { BUTTON_LABEL_TO_VALUE, ButtonLabel, EMPTY_EXPRESSION, NUMBERS } from "./consts";
import { Expression } from "./types";

const endsWithNumber = (expression: Expression): boolean => {
    const lastChar = expression[expression.length - 1] as ButtonLabel;
    return NUMBERS.includes(lastChar);
};

const removeLastChar = (str: string): string => str.slice(0, -1);

const cleanExpression = (expression: Expression): Expression => {
    return endsWithNumber(expression) ? expression : removeLastChar(expression);
};

export const calculateResult = (expression: Expression): Expression => {
    let parsedExpression: Expression = "";
    for (const char of expression) {
        parsedExpression += (BUTTON_LABEL_TO_VALUE[char] ?? char);
    }
    // eslint-disable-next-line no-eval
    const result: number = eval(cleanExpression(parsedExpression));
    return `${parseFloat(result.toFixed(4))}`;
};

export const calculateExpression = (currentExpression: Expression, buttonLabel: ButtonLabel): Expression => {
    switch (buttonLabel) {
        case ButtonLabel.Clear:
            return EMPTY_EXPRESSION;
        case ButtonLabel.Delete:
            return currentExpression.length === 1 ? EMPTY_EXPRESSION : removeLastChar(currentExpression);
        case ButtonLabel.Blank:
            return currentExpression;
        case ButtonLabel.Percentage:
            return endsWithNumber(currentExpression) ? calculateResult(`${currentExpression} / 100`) : currentExpression;
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
