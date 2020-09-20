import React, { FC, useMemo, useState } from "react";
import styled from "@emotion/styled";
import SimpleDisplayWithCurrency from "./SimpleDisplayWithCurrency";
import { Expression } from "../../types";
import { calculateResult } from "../../utils";

const NIS_ICON = "₪";
const USD_ICON = "$";

enum SelectedCurrency {
    NIS,
    USD,
}

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

    const [selectedCurrency, setSelectedCurrency] = useState<SelectedCurrency>(SelectedCurrency.NIS);

    const isNisSelected = selectedCurrency === SelectedCurrency.NIS;
    const conversionResult = useMemo(() => calculateResult(`${expression} ${isNisSelected ? "/" : "*"} ${rate}`), [expression]);

    return (
        <div className={className}>
            1{USD_ICON} = {rate}{NIS_ICON}
            <Padder height={5}/>
            <SimpleDisplayWithCurrency
                isSelected={isNisSelected}
                expression={isNisSelected ? expression : conversionResult}
                currencyIcon={NIS_ICON}
                onClick={() => setSelectedCurrency(SelectedCurrency.NIS)}
            />
            <Padder height={5}/>
            <SimpleDisplayWithCurrency
                isSelected={!isNisSelected}
                expression={!isNisSelected ? expression : conversionResult}
                currencyIcon={USD_ICON}
                onClick={() => setSelectedCurrency(SelectedCurrency.USD)}
            />
        </div>
    );
};

export default CurrencyDisplay;