import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import { Expression } from "../../types";
import { Padder, Screen } from "../Common";

const StyledContainer = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
`;

const StyledCurrencyIconContainer = styled.div`
    font-size: 25px;
    color: white;
`;

const StyledScreen = styled(Screen)<{ isSelected: boolean }>`
    border: ${({ isSelected }) => isSelected ? "white 3px" : "dimgray 1px"} solid;
    cursor: pointer;
`;

type ScreenWithCurrencyProps = {
    isSelected: boolean;
    expression: Expression;
    currencyIcon: string;
    onClick: () => void;
};

const ScreenWithCurrency: FC<ScreenWithCurrencyProps> = (props: ScreenWithCurrencyProps): JSX.Element => {
    return (
        <StyledContainer>
            <StyledScreen
                dataTestId={`testId-currency-tab-screen-${props.isSelected ? "selected" : "unselected"}`}
                isSelected={props.isSelected}
                expression={props.expression}
                onClick={props.onClick}
            />
            <Padder width={10}/>
            <StyledCurrencyIconContainer>
                {props.currencyIcon}
            </StyledCurrencyIconContainer>
        </StyledContainer>
    );
};

export default memo(ScreenWithCurrency);