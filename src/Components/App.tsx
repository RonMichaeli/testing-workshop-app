import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import CalculatorScreen from "./Screens/CalculatorScreen";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import { ButtonLabel, EMPTY_EXPRESSION } from "../consts";
import { Expression } from "../types";
import { calculateExpression } from "../utils";
import CurrencyScreen from "./Screens/CurrencyScreen";

const StyledApp = styled.div`
    width: fit-content;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    background-color: steelblue;
    border-radius: 25px;
    font-family: monospace;
    box-shadow:
        0 3px 5px -1px rgba(0,0,0,0.2),
        0px 6px 10px 0px rgba(0,0,0,0.14),
        0px 1px 18px 0px rgba(0,0,0,0.12);
`;

const StyledCalculatorScreen = styled(CalculatorScreen)`
    min-height: 50px;
    width: 245px;
`;

const StyledCurrencyScreen = styled(CurrencyScreen)`
    width: 245px;
`;

const StyledButtonPanel = styled(ButtonPanel)`
    width: 100%;
    margin-top: 5px;
`;

const App: FC = () => {
    const [expression, setExpression] = useState<Expression>(EMPTY_EXPRESSION);

    const handleButtonClick = (buttonLabel: ButtonLabel): void => {
        const newExpression = calculateExpression(expression, buttonLabel);
        setExpression(`${newExpression}`);
    };

    return (
        <StyledApp>
            <StyledCurrencyScreen expression={expression}/>
            {/*<StyledCalculatorScreen expression={expression}/>*/}
            <StyledButtonPanel onClick={handleButtonClick}/>
        </StyledApp>
    );
};

export default App;
