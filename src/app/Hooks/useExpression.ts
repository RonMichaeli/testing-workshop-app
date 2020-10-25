import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Expression, Key } from "../types";
import { EMPTY_EXPRESSION, KEY_TO_BUTTON_MAP } from "../consts";
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

    const handleButtonClick = useCallback((button: Button): void => {
        lastClickedButton.current = button;
        setShouldCalculateExpression(true);
    }, []);

    useEffect(() => {
        const keyDownEventListener = (event: KeyboardEvent): void => {
            const matchingButton: Button | undefined = KEY_TO_BUTTON_MAP[event.key as Key];
            
            if (matchingButton) {
                handleButtonClick(matchingButton);
            }
        };

        document.addEventListener("keydown", keyDownEventListener);

        return () => {
            document.removeEventListener("keydown", keyDownEventListener);
        };
    }, [handleButtonClick]);

    useEffect(() => {
        if (shouldCalculateExpression) {
            const newExpression = calculateExpression(expression, lastClickedButton.current!);
            setExpression(newExpression);
            setShouldCalculateExpression(false);
        }
    }, [shouldCalculateExpression, expression]);

    return {
        expression,
        setExpression,
        handleButtonClick
    };
};

export default useExpression;