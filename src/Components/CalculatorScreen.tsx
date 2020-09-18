import React, { FC } from "react";
import { TextField } from "@material-ui/core";

type CalculatorScreenProps = {
    className?: string;
    expression: string;
};

const CalculatorScreen: FC<CalculatorScreenProps> = (props: CalculatorScreenProps): JSX.Element => {
    const { className, expression } = props;

    return (
        <TextField
            className={className}
            variant={"filled"}
            value={expression}
        />
    );
};

export default CalculatorScreen;