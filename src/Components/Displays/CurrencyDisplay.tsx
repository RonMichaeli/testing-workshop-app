import React, { FC, memo, useState } from "react";
import styled from "@emotion/styled";
import Padder from "../Common/Padder";
import SimpleDisplayWithCurrency from "./SimpleDisplayWithCurrency";
import { Currency, Expression } from "../../types";
import { calculateResult, roundNumber } from "../../utils";

const ILS_ICON = "₪";
const USD_ICON = "$";

const StyledCurrencyLabel = styled.div`
    display: flex;
    justify-content: center;
    color: white;
`;

type CurrencyDisplayProps = {
    className?: string;
    expression: Expression;
    rate: number;
};

const CurrencyDisplay: FC<CurrencyDisplayProps> = (props: CurrencyDisplayProps): JSX.Element => {
    const { className, expression, rate } = props;

    const [selectedCurrency, setSelectedCurrency] = useState<Currency>(Currency.ILS);

    const isIlsSelected = selectedCurrency === Currency.ILS;
    const conversionResult = calculateResult(`${expression} ${isIlsSelected ? "*" : "/"} ${rate}`);

    return (
        <div className={className}>
            <SimpleDisplayWithCurrency
                isSelected={isIlsSelected}
                expression={isIlsSelected ? expression : conversionResult}
                currencyIcon={ILS_ICON}
                onClick={() => setSelectedCurrency(Currency.ILS)}
            />
            <Padder height={10}/>
            <SimpleDisplayWithCurrency
                isSelected={!isIlsSelected}
                expression={!isIlsSelected ? expression : conversionResult}
                currencyIcon={USD_ICON}
                onClick={() => setSelectedCurrency(Currency.USD)}
            />
            <Padder height={10}/>
            <StyledCurrencyLabel>
                1{USD_ICON} = {roundNumber(1 / rate)}{ILS_ICON}
            </StyledCurrencyLabel>
        </div>
    );
};

export default memo(CurrencyDisplay);