import React, { FC, memo } from "react";
import { Fab } from "@material-ui/core";

type ButtonProps = {
    dataTestId: string;
    className?: string;
    label: string;
    onClick: () => void;
};

const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
    return (
        <Fab className={props.className} onClick={props.onClick} data-testid={props.dataTestId}>
            {props.label}
        </Fab>
    );
};

export default memo(Button);