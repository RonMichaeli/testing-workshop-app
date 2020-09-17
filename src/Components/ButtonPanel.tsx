import React, { FC } from "react";
import styled from "@emotion/styled";
import Button from "./Button";

const NUM_OF_COLUMNS = 4;
const NUM_OF_ROWS = 5;

const BUTTON_CONTENT = ["C", "DEL", "%", "÷", "1", "2", "3", "×", "4", "5", "6", "-", "7", "8", "9", "+", "", "0", ".", "="];

const StyledButtonPanel = styled.div`
    display: grid;
    grid-template-columns: repeat(${NUM_OF_COLUMNS}, 1fr);
    grid-template-rows: repeat(${NUM_OF_ROWS}, 1fr);
`;

const StyledButton = styled(Button)<{ col: number; row: number }>`
    grid-column: ${({ col }) => col} / span 1;
    grid-row: ${({ row }) => row} / span 1;
`;

type ButtonPanelProps = {};

const ButtonPanel: FC<ButtonPanelProps> = (props: ButtonPanelProps): JSX.Element => {
    return (
        <StyledButtonPanel>
            {BUTTON_CONTENT.map((buttonContent, index) => (
                <StyledButton
                    col={(index % NUM_OF_COLUMNS) + 1}
                    row={(index / NUM_OF_ROWS) + 1}
                    content={buttonContent}
                    onClick={() => null}
                />
            ))}
        </StyledButtonPanel>
    );
};

export default ButtonPanel;