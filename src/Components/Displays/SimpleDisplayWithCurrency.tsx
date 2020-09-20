import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import SimpleDisplay from "./SimpleDisplay";
import { Expression } from "../../types";

const StyledScreenContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledCurrencyIconContainer = styled.div`
    margin-left: 5px;
    font-size: 25px;
    color: white;
`;

const StyledSimpleDisplay = styled(SimpleDisplay)<{ isSelected: boolean }>`
    border: ${({ isSelected }) => isSelected ? "cyan 2px" : "dimgray 1px"} solid;
    cursor: pointer;
`;

type SimpleDisplayWithCurrencyProps = {
    isSelected: boolean;
    expression: Expression;
    currencyIcon: string;
    onClick: () => void;
};

const SimpleDisplayWithCurrency: FC<SimpleDisplayWithCurrencyProps> = (props: SimpleDisplayWithCurrencyProps): JSX.Element => {
    return (
        <StyledScreenContainer>
            <StyledSimpleDisplay
                isSelected={props.isSelected}
                expression={props.expression}
                onClick={props.onClick}
            />
            <StyledCurrencyIconContainer>
                {props.currencyIcon}
            </StyledCurrencyIconContainer>
        </StyledScreenContainer>
    );
};

export default memo(SimpleDisplayWithCurrency);