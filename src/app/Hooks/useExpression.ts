import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Expression } from "../types";
import { EMPTY_EXPRESSION } from "../consts";
import { calculateExpression } from "../utils";

export type UseExpression = {
    expression: Expression;
    setExpression: (expression: Expression) => void;
    handleButtonClick: (button: Button) => void;
};

const useExpression = (): UseExpression => {
    const [expression, setExpression] = useState<Expression>(EMPTY_EXPRESSION);
    const [shouldCalculateExpression, setShouldCalculateExpression] = useState<boolean>(false);

    const lastClickedButton = useRef<Button | null>(null);

    useEffect(() => {
        if (shouldCalculateExpression) {
            const newExpression = calculateExpression(expression, lastClickedButton.current!);
            setExpression(newExpression);
            setShouldCalculateExpression(false);
        }
    }, [shouldCalculateExpression, expression]);

    const handleButtonClick = useCallback((button: Button): void => {
        lastClickedButton.current = button;
        setShouldCalculateExpression(true);
    }, []);

    return {
        expression,
        setExpression,
        handleButtonClick
    };
};

export default useExpression;