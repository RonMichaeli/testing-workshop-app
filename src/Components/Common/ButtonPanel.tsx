import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import { Button as TButton } from "../../types";

const StyledContainer = styled.div<Pick<ButtonPanelProps, "numOfRows" | "numOfColumns">>`
    display: grid;
    grid-template-columns: repeat(${({ numOfColumns }) => numOfColumns}, 1fr);
    grid-template-rows: repeat(${({ numOfRows }) => numOfRows}, 1fr);
    justify-items: center;
    width: 100%;
`;

const StyledButton = styled(Button)<{ col: number; row: number }>`
    grid-column: ${({ col }) => col} / span 1;
    grid-row: ${({ row }) => row} / span 1;
    margin: 5px !important;
    box-shadow: none !important;
    font-size: larger !important;
    border: 0.5px black solid !important;
`;

type ButtonPanelProps = {
    className?: string;
    numOfRows: number;
    numOfColumns: number;
    buttons: TButton[];
    onClick: (button: TButton) => void;
};

const ButtonPanel: FC<ButtonPanelProps> = (props: ButtonPanelProps): JSX.Element => {
    return (
        <StyledContainer
            className={props.className}
            numOfRows={props.numOfRows}
            numOfColumns={props.numOfColumns}
        >
            {props.buttons.map((label, index) => (
                <StyledButton
                    key={index}
                    col={(index % props.numOfColumns) + 1}
                    row={(index / props.numOfRows) + 1}
                    label={label}
                    onClick={() => props.onClick(label)}
                />
            ))}
        </StyledContainer>
    );
};

export default memo(ButtonPanel);