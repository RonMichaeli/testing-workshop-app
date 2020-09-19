import React, { FC } from "react";
import styled from "@emotion/styled";
import { Expression } from "../../types";

const StyledContainer = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    background-color: #7a8870;
    border: dimgray 1px solid;
    font-size: xx-large;
    word-break: break-word;
`;

type CalculatorScreenProps = {
    className?: string;
    expression: Expression;
    onClick?: () => void;
};

const CalculatorScreen: FC<CalculatorScreenProps> = (props: CalculatorScreenProps): JSX.Element => {
    const { className, expression, onClick } = props;

    return (
        <StyledContainer className={className} onClick={onClick}>
            {expression}
        </StyledContainer>
    );
};

export default CalculatorScreen;