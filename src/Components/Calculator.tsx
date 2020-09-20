import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Tabs, Tab } from "@material-ui/core";
import { EMPTY_EXPRESSION } from "../consts";
import { calculateExpression } from "../utils";
import { ButtonLabel, Currency, ExchangeRates, Expression } from "../types";
import { CurrencyDisplay, SimpleDisplay } from "./Displays";
import Padder from "./Common/Padder";
import ButtonPanel from "./ButtonPanel";

const StyledContainer = styled.div`
    width: fit-content;
    padding: 20px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    background-color: steelblue;
    border-radius: 25px;
    border: 0.5px darkblue solid;
    box-shadow:
        0 3px 5px -1px rgba(0,0,0,0.2),
        0px 6px 10px 0px rgba(0,0,0,0.14),
        0px 1px 18px 0px rgba(0,0,0,0.12);
`;

const StyledSimpleDisplay = styled(SimpleDisplay)`
    min-height: 50px;
    width: 24vw;
`;

const StyledCurrencyDisplay = styled(CurrencyDisplay)`
    width: 24vw;
`;

const StyledButtonPanel = styled(ButtonPanel)`
    width: 100%;
    margin-top: 10px;
`;

enum Mode {
    Calculator = "calculator",
    Currency = "currency",
}

type CalculatorProps = {
    exchangeRates: ExchangeRates;
};

const Calculator: FC<CalculatorProps> = (props: CalculatorProps): JSX.Element => {
    const [expression, setExpression] = useState<Expression>(EMPTY_EXPRESSION);
    const [shouldCalculateExpression, setShouldCalculateExpression] = useState<boolean>(false);
    const [selectedMode, setSelectedMode] = useState<Mode>(Mode.Calculator);

    const lastClickedButton = useRef<ButtonLabel | null>(null);

    useEffect(() => {
        setExpression(EMPTY_EXPRESSION);
    }, [selectedMode]);

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

    const handleTabChange = (event: unknown, selectedMode: Mode): void => {
        setSelectedMode(selectedMode);
    };

    return (
        <StyledContainer>
            <Tabs value={selectedMode} onChange={handleTabChange}>
                <Tab value={Mode.Calculator} label={"CALC"}/>
                <Tab value={Mode.Currency} label={"CONVERT"}/>
            </Tabs>
            <Padder height={10}/>
            {selectedMode === Mode.Calculator && (
                <StyledSimpleDisplay expression={expression}/>
            )}
            {selectedMode === Mode.Currency && (
                <StyledCurrencyDisplay expression={expression} rate={props.exchangeRates[Currency.USD]}/>
            )}
            <StyledButtonPanel onClick={handleButtonClick}/>
        </StyledContainer>
    );
};

export default memo(Calculator);