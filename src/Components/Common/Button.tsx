import React, { FC, memo } from "react";
import { Fab } from "@material-ui/core";

type ButtonProps = {
    className?: string;
    label: string;
    onClick: () => void;
};

const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
    return (
        <Fab className={props.className} onClick={props.onClick}>
            {props.label}
        </Fab>
    );
};

export default memo(Button);