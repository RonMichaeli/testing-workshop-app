import React, { FC, memo, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useExpression } from "../../Hooks";
import { calculateResult, roundNumber } from "../../utils";
import { Button } from "../../types";
import { ButtonPanel, Padder } from "../Common";
import SimpleDisplayWithCurrency from "./SimpleDisplayWithCurrency";

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

const ILS_ICON = "₪";
const USD_ICON = "$";

enum Display {
    Top = "top",
    Bottom = "bottom",
}

type CurrencyTabProps = {
    rate: number;
};

const CurrencyTab: FC<CurrencyTabProps> = (props: CurrencyTabProps): JSX.Element => {
    const { rate } = props;

    const [selectedDisplay, setSelectedDisplay] = useState<Display>(Display.Top);
    const { expression: topExpression, setExpression: setTopExpression, handleButtonClick: handleButtonClickTop } = useExpression();
    const { expression: bottomExpression, setExpression: setBottomExpression, handleButtonClick: handleButtonClickBottom } = useExpression();

    useEffect(() => {
        if (selectedDisplay === Display.Top) {
            setBottomExpression(calculateResult(`${topExpression} * ${rate}`));
        }
        else {
            setTopExpression(calculateResult(`${bottomExpression} / ${rate}`));
        }
    }, [topExpression, bottomExpression, setBottomExpression, setTopExpression, rate]);

    return (
        <>
            <SimpleDisplayWithCurrency
                isSelected={selectedDisplay === Display.Top}
                expression={topExpression}
                currencyIcon={ILS_ICON}
                onClick={() => setSelectedDisplay(Display.Top)}
            />
            <Padder height={10}/>
            <SimpleDisplayWithCurrency
                isSelected={selectedDisplay === Display.Bottom}
                expression={bottomExpression}
                currencyIcon={USD_ICON}
                onClick={() => setSelectedDisplay(Display.Bottom)}
            />
            <Padder height={10}/>
            <StyledRateLabel>
                1{USD_ICON} = {roundNumber(1 / rate)}{ILS_ICON}
            </StyledRateLabel>
            <Padder height={10}/>
            <ButtonPanel
                numOfColumns={3}
                numOfRows={4}
                buttons={BUTTONS}
                onClick={selectedDisplay === Display.Top ? handleButtonClickTop : handleButtonClickBottom}
            />
        </>
    );
};

export default memo(CurrencyTab);