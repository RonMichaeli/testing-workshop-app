import React, { FC, memo, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useExpression } from "../../Hooks";
import { calculateResult, roundNumber } from "../../utils";
import { Button } from "../../types";
import { ButtonPanel, Padder } from "../Common";
import ScreenWithCurrency from "./ScreenWithCurrency";

const BUTTONS: Button[] = [
    Button.One,
    Button.Two,
    Button.Three,
    Button.Four,
    Button.Five,
    Button.Six,
    Button.Seven,
    Button.Eight,
    Button.Nine,
    Button.Clear,
    Button.Zero,
    Button.Delete,
];

const StyledRateLabel = styled.div`
    display: flex;
    justify-content: center;
    color: white;
`;

enum Screen {
    Top = "top",
    Bottom = "bottom",
}

type CurrencyTabProps = {
    rate: number;
    topScreenCurrencyIcon: string;
    bottomScreenCurrencyIcon: string;
};

const CurrencyTab: FC<CurrencyTabProps> = (props: CurrencyTabProps): JSX.Element => {
    const { rate, topScreenCurrencyIcon, bottomScreenCurrencyIcon } = props;

    const [selectedScreen, setSelectedScreen] = useState<Screen>(Screen.Top);
    const { expression: topExpression, setExpression: setTopExpression, handleButtonClick: handleButtonClickTop } = useExpression();
    const { expression: bottomExpression, setExpression: setBottomExpression, handleButtonClick: handleButtonClickBottom } = useExpression();

    useEffect(() => {
        if (selectedScreen === Screen.Top) {
            setBottomExpression(calculateResult(`${topExpression} * ${rate}`));
        }
        else {
            setTopExpression(calculateResult(`${bottomExpression} / ${rate}`));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topExpression, bottomExpression, setBottomExpression, setTopExpression, rate]);

    return (
        <>
            <ScreenWithCurrency
                isSelected={selectedScreen === Screen.Top}
                expression={topExpression}
                currencyIcon={topScreenCurrencyIcon}
                onClick={() => setSelectedScreen(Screen.Top)}
            />
            <Padder height={10}/>
            <ScreenWithCurrency
                isSelected={selectedScreen === Screen.Bottom}
                expression={bottomExpression}
                currencyIcon={bottomScreenCurrencyIcon}
                onClick={() => setSelectedScreen(Screen.Bottom)}
            />
            <Padder height={10}/>
            <StyledRateLabel>
                1{topScreenCurrencyIcon} = {roundNumber(rate)}{bottomScreenCurrencyIcon}
            </StyledRateLabel>
            <Padder height={10}/>
            <ButtonPanel
                numOfColumns={3}
                numOfRows={4}
                buttons={BUTTONS}
                onClick={selectedScreen === Screen.Top ? handleButtonClickTop : handleButtonClickBottom}
            />
        </>
    );
};

export default memo(CurrencyTab);