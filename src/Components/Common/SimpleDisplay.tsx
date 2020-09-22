import React, { FC, memo } from "react";
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
    return (
        <StyledContainer className={props.className} onClick={props.onClick}>
            {props.expression}
        </StyledContainer>
    );
};

export default memo(SimpleDisplay);