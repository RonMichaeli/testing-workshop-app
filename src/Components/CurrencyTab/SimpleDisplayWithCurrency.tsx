import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import { Expression } from "../../types";
import { Padder, SimpleDisplay } from "../Common";

const StyledContainer = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
`;

const StyledCurrencyIconContainer = styled.div`
    font-size: 25px;
    color: white;
`;

const StyledSimpleDisplay = styled(SimpleDisplay)<{ isSelected: boolean }>`
    border: ${({ isSelected }) => isSelected ? "white 3px" : "dimgray 1px"} solid;
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
        <StyledContainer>
            <StyledSimpleDisplay
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

export default memo(SimpleDisplayWithCurrency);