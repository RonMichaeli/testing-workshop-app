import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { EMPTY_EXPRESSION } from "../consts";
import { calculateExpression } from "../utils";
import { ButtonLabel, Currency, ExchangeRates, Expression } from "../types";
import ButtonPanel from "./ButtonPanel";
import { CurrencyDisplay, SimpleDisplay } from "./Displays";

const StyledContainer = styled.div`
    width: fit-content;
    padding: 20px 10px 10px 10px;
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
    margin-top: 10px;
`;

type CalculatorProps = {
    exchangeRates: ExchangeRates;
};

const Calculator: FC<CalculatorProps> = (props: CalculatorProps): JSX.Element => {
    const [expression, setExpression] = useState<Expression>(EMPTY_EXPRESSION);
    const [shouldCalculateExpression, setShouldCalculateExpression] = useState<boolean>(false);
    const lastClickedButton = useRef<ButtonLabel | null>(null);

    useEffect(() => {
        if (shouldCalculateExpression) {
            const newExpression = calculateExpression(expression, lastClickedButton.current!);
            setExpression(newExpression);
            setShouldCalculateExpression(false);
        }
    }, [expression, shouldCalculateExpression]);

    const handleButtonClick = useCallback((buttonLabel: ButtonLabel): void => {
        lastClickedButton.current = buttonLabel;
        setShouldCalculateExpression(true);
    }, []);

    return (
        <StyledContainer>
            <StyledCurrencyDisplay expression={expression} rate={props.exchangeRates[Currency.USD]}/>
            <StyledSimpleDisplay expression={expression}/>
            <StyledButtonPanel onClick={handleButtonClick}/>
        </StyledContainer>
    );
};

export default memo(Calculator);