import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { ButtonLabel, EMPTY_EXPRESSION } from "../consts";
import { Expression } from "../types";
import { calculateExpression } from "../utils";
import ButtonPanel from "./ButtonPanel";
import { SimpleDisplay, CurrencyDisplay } from "./Displays";

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
        0 3px 5px -1px rgba(0,0,0,0.2),
        0px 6px 10px 0px rgba(0,0,0,0.14),
        0px 1px 18px 0px rgba(0,0,0,0.12);
`;

const StyledSimpleDisplay = styled(SimpleDisplay)`
    min-height: 50px;
    width: 245px;
`;

const StyledCurrencyDisplay = styled(CurrencyDisplay)`
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
            <StyledCurrencyDisplay expression={expression} rate={3.5}/>
            {/*<StyledSimpleDisplay expression={expression}/>*/}
            <StyledButtonPanel onClick={handleButtonClick}/>
        </StyledApp>
    );
};

export default App;
