import React, { FC } from "react";
import { Fab } from "@material-ui/core";

type ButtonProps = {
    className?: string;
    content: string;
    onClick: () => void;
};

const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
    const { className, content, onClick } = props;

    return (
        <Fab className={className} onClick={onClick}>
            {content}
        </Fab>
    );
};

export default Button;