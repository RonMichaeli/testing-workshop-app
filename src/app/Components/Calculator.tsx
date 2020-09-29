import React, { FC, memo, useState } from 'react';
import styled from '@emotion/styled';
import { Tab, Tabs } from "@material-ui/core";
import { Currency, ExchangeRates } from "../types";
import CalculationTab from "./CalculationTab";
import CurrencyTab from "./CurrencyTab";
import { Padder } from "./Common";

const StyledContainer = styled.div`
    width: fit-content;
    min-height: 450px;
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

const StyledTab = styled(Tab)`
    background-color: #E0E0E0 !important;
    border-radius: 5px !important;
`;

enum Mode {
    Calculation = "calculation",
    Currency = "currency",
}

type CalculatorProps = {
    exchangeRates: ExchangeRates;
};

const Calculator: FC<CalculatorProps> = (props: CalculatorProps): JSX.Element => {
    const [selectedMode, setSelectedMode] = useState<Mode>(Mode.Calculation);

    const handleTabChange = (event: unknown, selectedMode: Mode): void => {
        setSelectedMode(selectedMode);
    };

    return (
        <StyledContainer>
            <Tabs value={selectedMode} onChange={handleTabChange} indicatorColor={"primary"}>
                <StyledTab value={Mode.Calculation} label={"CALC"} data-testid={"testId-calculation-tab"}/>
                <StyledTab value={Mode.Currency} label={"CONVERT"} data-testid={"testId-currency-tab"}/>
            </Tabs>
            <Padder height={10}/>
            {selectedMode === Mode.Calculation && <CalculationTab/>}
            {selectedMode === Mode.Currency && (
                <CurrencyTab
                    rate={props.exchangeRates[Currency.USD]}
                    baseCurrencyIcon={"₪"}
                    otherCurrencyIcon={"$"}
                />
            )}
        </StyledContainer>
    );
};

export default memo(Calculator);