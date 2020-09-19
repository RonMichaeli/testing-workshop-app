import React, { FC } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import { ButtonLabel } from "../../consts";

const NUM_OF_COLUMNS = 4;
const NUM_OF_ROWS = 5;
const BUTTONS = [
    ButtonLabel.Clear,
    ButtonLabel.Delete,
    ButtonLabel.Percentage,
    ButtonLabel.Divide,
    ButtonLabel.One,
    ButtonLabel.Two,
    ButtonLabel.Three,
    ButtonLabel.Multiply,
    ButtonLabel.Four,
    ButtonLabel.Five,
    ButtonLabel.Six,
    ButtonLabel.Subtract,
    ButtonLabel.Seven,
    ButtonLabel.Eight,
    ButtonLabel.Nine,
    ButtonLabel.Add,
    ButtonLabel.Blank,
    ButtonLabel.Zero,
    ButtonLabel.Dot,
    ButtonLabel.Result
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
    onClick: (buttonLabel: ButtonLabel) => void;
};

const ButtonPanel: FC<ButtonPanelProps> = (props: ButtonPanelProps): JSX.Element => {
    const { className, onClick } = props;

    return (
        <StyledButtonPanel className={className}>
            {BUTTONS.map((label, index) => (
                <StyledButton
                    key={index}
                    col={(index % NUM_OF_COLUMNS) + 1}
                    row={(index / NUM_OF_ROWS) + 1}
                    label={label}
                    onClick={() => onClick(label)}
                />
            ))}
        </StyledButtonPanel>
    );
};

export default ButtonPanel;