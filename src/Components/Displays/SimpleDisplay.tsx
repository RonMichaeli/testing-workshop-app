import React, { FC } from "react";
import styled from "@emotion/styled";
import { Expression } from "../../types";

const StyledContainer = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    background-color: #7a8870;
    border: dimgray 1px solid;
    font-family: monospace;
    font-size: xx-large;
    word-break: break-word;
`;

type SimpleDisplayProps = {
    className?: string;
    expression: Expression;
    onClick?: () => void;
};

const SimpleDisplay: FC<SimpleDisplayProps> = (props: SimpleDisplayProps): JSX.Element => {
    const { className, expression, onClick } = props;

    return (
        <StyledContainer className={className} onClick={onClick}>
            {expression}
        </StyledContainer>
    );
};

export default SimpleDisplay;