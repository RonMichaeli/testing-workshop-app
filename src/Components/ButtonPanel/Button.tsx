import React, { FC } from "react";
import { Fab } from "@material-ui/core";

type ButtonProps = {
    className?: string;
    label: string;
    onClick: () => void;
};

const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
    const { className, label, onClick } = props;

    return (
        <Fab className={className} onClick={onClick}>
            {label}
        </Fab>
    );
};

export default Button;