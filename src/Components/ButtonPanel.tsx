import React, { FC } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import { ButtonContent } from "../Consts";

const NUM_OF_COLUMNS = 4;
const NUM_OF_ROWS = 5;
const BUTTONS = [
    ButtonContent.Clear,
    ButtonContent.Delete,
    ButtonContent.Percentage,
    ButtonContent.Divide,
    ButtonContent.One,
    ButtonContent.Two,
    ButtonContent.Three,
    ButtonContent.Multiply,
    ButtonContent.Four,
    ButtonContent.Five,
    ButtonContent.Six,
    ButtonContent.Subtract,
    ButtonContent.Seven,
    ButtonContent.Eight,
    ButtonContent.Nine,
    ButtonContent.Add,
    ButtonContent.Blank,
    ButtonContent.Zero,
    ButtonContent.Dot,
    ButtonContent.Result
];

const StyledButtonPanel = styled.div`
    display: grid;
    grid-template-columns: repeat(${NUM_OF_COLUMNS}, 1fr);
    grid-template-rows: repeat(${NUM_OF_ROWS}, 1fr);
    justify-items: center;
`;

const StyledButton = styled(Button)<{ col: number; row: number }>`
    grid-column: ${({ col }) => col} / span 1;
    grid-row: ${({ row }) => row} / span 1;
    margin: 5px !important;
    box-shadow: none !important;
    font-size: larger !important;
    font-family: monospace !important;
`;

type ButtonPanelProps = {
    className?: string;
    onClick: (buttonContent: ButtonContent) => void;
};

const ButtonPanel: FC<ButtonPanelProps> = (props: ButtonPanelProps): JSX.Element => {
    const { className, onClick } = props;

    return (
        <StyledButtonPanel className={className}>
            {BUTTONS.map((buttonContent, index) => (
                <StyledButton
                    key={index}
                    col={(index % NUM_OF_COLUMNS) + 1}
                    row={(index / NUM_OF_ROWS) + 1}
                    content={buttonContent}
                    onClick={() => onClick(buttonContent)}
                />
            ))}
        </StyledButtonPanel>
    );
};

export default ButtonPanel;