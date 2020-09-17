import React, { FC } from "react";
import { TextField } from "@material-ui/core";

type CalculatorScreenProps = {
    className?: string;
    content: number | string;
};

const CalculatorScreen: FC<CalculatorScreenProps> = (props: CalculatorScreenProps): JSX.Element => {
    const { className, content } = props;

    return (
        <TextField
            className={className}
            variant={"filled"}
            defaultValue={content}
        />
    );
};

export default CalculatorScreen;