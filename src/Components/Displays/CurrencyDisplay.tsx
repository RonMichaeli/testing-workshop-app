import React, { FC, memo, useState } from "react";
import styled from "@emotion/styled";
import SimpleDisplayWithCurrency from "./SimpleDisplayWithCurrency";
import { Currency, Expression } from "../../types";
import { calculateResult, roundNumber } from "../../utils";

const ILS_ICON = "₪";
const USD_ICON = "$";

const Padder = styled.div<{ height?: number; width?: number }>`
    height: ${({ height }) => height || 0}px;
    width: ${({ width }) => width || 0}px;
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
            1{USD_ICON} = {roundNumber(1 / rate)}{ILS_ICON}
            <Padder height={5}/>
            <SimpleDisplayWithCurrency
                isSelected={isIlsSelected}
                expression={isIlsSelected ? expression : conversionResult}
                currencyIcon={ILS_ICON}
                onClick={() => setSelectedCurrency(Currency.ILS)}
            />
            <Padder height={5}/>
            <SimpleDisplayWithCurrency
                isSelected={!isIlsSelected}
                expression={!isIlsSelected ? expression : conversionResult}
                currencyIcon={USD_ICON}
                onClick={() => setSelectedCurrency(Currency.USD)}
            />
        </div>
    );
};

export default memo(CurrencyDisplay);