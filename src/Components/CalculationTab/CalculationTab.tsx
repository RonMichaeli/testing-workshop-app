import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import { useExpression } from "../../Hooks";
import { Button } from "../../types";
import { ButtonPanel, Padder, Screen } from "../Common";

const StyledScreen = styled(Screen)`
    min-height: 50px;
    width: 300px;
`;

const BUTTONS: Button[] = [
    Button.Delete,
    Button.OpenParentheses,
    Button.CloseParentheses,
    Button.Divide,
    Button.One,
    Button.Two,
    Button.Three,
    Button.Multiply,
    Button.Four,
    Button.Five,
    Button.Six,
    Button.Subtract,
    Button.Seven,
    Button.Eight,
    Button.Nine,
    Button.Add,
    Button.Clear,
    Button.Zero,
    Button.Dot,
    Button.Result
];

const CalculationTab: FC = (): JSX.Element => {
    const { expression, handleButtonClick } = useExpression();

    return (
        <>
            <StyledScreen expression={expression}/>
            <Padder height={10}/>
            <ButtonPanel
                numOfColumns={4}
                numOfRows={5}
                buttons={BUTTONS}
                onClick={handleButtonClick}
            />
        </>
    );
};

export default memo(CalculationTab);