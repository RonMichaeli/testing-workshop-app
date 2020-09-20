import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import SimpleDisplay from "./SimpleDisplay";
import Padder from "../Common/Padder";
import { Expression } from "../../types";

const StyledScreenContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledCurrencyIconContainer = styled.div`
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
            <Padder width={10}/>
            <StyledCurrencyIconContainer>
                {props.currencyIcon}
            </StyledCurrencyIconContainer>
        </StyledScreenContainer>
    );
};

export default memo(SimpleDisplayWithCurrency);