import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import CalculatorScreen from "./CalculatorScreen";
import { Expression } from "../../types";

const StyledScreenContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledCurrencyIconContainer = styled.div`
    margin-left: 5px;
    font-size: large;
`;

const StyledCalculatorScreen = styled(CalculatorScreen)<{ isSelected: boolean }>`
    border: ${({ isSelected }) => isSelected ? "cyan 2px" : "dimgray 1px"} solid;
    cursor: pointer;
`;

const Padder = styled.div<{ height?: number; width?: number }>`
    height: ${({ height }) => height || 0}px;
    width: ${({ width }) => width || 0}px;
`;

enum SelectedCurrency {
    NIS,
    USD,
}

type CurrencyCalculatorScreenProps = {
    isSelected: boolean;
    expression: Expression;
    currencyIcon: string;
    onClick: () => void;
};

const CurrencyCalculatorScreen: FC<CurrencyCalculatorScreenProps> = (props: CurrencyCalculatorScreenProps): JSX.Element => {
    const { isSelected, expression, currencyIcon, onClick } = props;

    return (
        <StyledScreenContainer>
            <StyledCalculatorScreen
                isSelected={isSelected}
                expression={expression}
                onClick={onClick}
            />
            <StyledCurrencyIconContainer>
                {currencyIcon}
            </StyledCurrencyIconContainer>
        </StyledScreenContainer>
    );
};

type CurrencyScreenProps = {
    className?: string;
    expression: Expression;
};

const CurrencyScreen: FC<CurrencyScreenProps> = (props: CurrencyScreenProps): JSX.Element => {
    const { className, expression } = props;

    const [selectedCurrency, setSelectedCurrency] = useState<SelectedCurrency>(SelectedCurrency.NIS);

    return (
        <div className={className}>
            <CurrencyCalculatorScreen
                isSelected={selectedCurrency === SelectedCurrency.NIS}
                expression={expression}
                currencyIcon={"₪"}
                onClick={() => setSelectedCurrency(SelectedCurrency.NIS)}
            />
            <Padder height={5}/>
            <CurrencyCalculatorScreen
                isSelected={selectedCurrency === SelectedCurrency.USD}
                expression={expression}
                currencyIcon={"$"}
                onClick={() => setSelectedCurrency(SelectedCurrency.USD)}
            />
        </div>
    );
};

export default CurrencyScreen;