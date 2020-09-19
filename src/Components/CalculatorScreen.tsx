import React, { FC } from "react";
import styled from "@emotion/styled";

const StyledCalculatorScreen = styled.div`
    display: flex;
    align-items: flex-end;
`;

type CalculatorScreenProps = {
    className?: string;
    expression: string;
};

const CalculatorScreen: FC<CalculatorScreenProps> = (props: CalculatorScreenProps): JSX.Element => {
    const { className, expression } = props;

    return (
        <StyledCalculatorScreen className={className}>
            {expression}
        </StyledCalculatorScreen>
    );
};

export default CalculatorScreen;