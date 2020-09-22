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

type ScreenProps = {
    className?: string;
    expression: Expression;
    onClick?: () => void;
};

const Screen: FC<ScreenProps> = (props: ScreenProps): JSX.Element => {
    return (
        <StyledContainer className={props.className} onClick={props.onClick}>
            {props.expression}
        </StyledContainer>
    );
};

export default memo(Screen);