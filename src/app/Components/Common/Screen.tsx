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
    box-sizing: border-box;
    padding: 0 4px;
`;

type ScreenProps = {
    className?: string;
    dataTestId: string;
    expression: Expression;
    onClick?: () => void;
};

const Screen: FC<ScreenProps> = (props: ScreenProps): JSX.Element => {
    return (
        <StyledContainer className={props.className} onClick={props.onClick} data-testid={props.dataTestId}>
            {props.expression}
        </StyledContainer>
    );
};

export default memo(Screen);