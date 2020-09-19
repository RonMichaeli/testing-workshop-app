import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import CalculatorScreen from "./Components/CalculatorScreen";
import ButtonPanel from "./Components/ButtonPanel";
import { ButtonContent, OPERATORS } from "./Consts";

type Expression = string;

const EMPTY_EXPRESSION: Expression = "0";

const StyledApp = styled.div`
    width: fit-content;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    background-color: steelblue;
    border-radius: 25px;
    box-shadow:
        0px 3px 5px -1px rgba(0,0,0,0.2),
        0px 6px 10px 0px rgba(0,0,0,0.14),
        0px 1px 18px 0px rgba(0,0,0,0.12);
`;

const StyledCalculatorScreen = styled(CalculatorScreen)`
    height: 50px;
    width: 95%;
    background-color: #7a8870;
    border: dimgray 1px solid;
    font-family: monospace;
    font-size: xx-large;
`;

const StyledButtonPanel = styled(ButtonPanel)`
    width: 100%;
    margin-top: 5px;
`;

const isLastCharOperator = (expression: Expression): boolean => {
    const lastChar = expression[expression.length - 1] as ButtonContent;
    return OPERATORS.includes(lastChar);
};

const removeLastChar = (str: string): string => str.slice(0, -1);

const cleanExpression = (expression: Expression): Expression => {
    return isLastCharOperator(expression) ? removeLastChar(expression) : expression;
};

const calculateExpression = (currentExpression: Expression, buttonContent: ButtonContent): Expression => {
    switch (buttonContent) {
        case ButtonContent.Clear:
            return EMPTY_EXPRESSION;
        case ButtonContent.Delete:
            return currentExpression.length === 1 ? EMPTY_EXPRESSION : removeLastChar(currentExpression);
        case ButtonContent.Blank:
            return currentExpression;
        case ButtonContent.Percentage:
            return isLastCharOperator(currentExpression) ? currentExpression : eval(`${currentExpression} / 100`);
        case ButtonContent.Result:
            return eval(cleanExpression(currentExpression));
        case ButtonContent.Add:
        case ButtonContent.Divide:
        case ButtonContent.Multiply:
        case ButtonContent.Subtract:
            return cleanExpression(currentExpression) + buttonContent;
        default:
            return currentExpression === EMPTY_EXPRESSION ? buttonContent : currentExpression + buttonContent;
    }
};

const App: FC = () => {
    const [expression, setExpression] = useState<Expression>(EMPTY_EXPRESSION);

    const handleButtonClick = (buttonContent: ButtonContent): void => {
        const newExpression = calculateExpression(expression, buttonContent);
        setExpression(`${newExpression}`);
    };

    return (
        <StyledApp>
            <StyledCalculatorScreen expression={expression}/>
            <StyledButtonPanel onClick={handleButtonClick}/>
        </StyledApp>
    );
};

export default App;
