import React, { FC, memo, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getExchangeRates } from "../Services/exchangeRates";
import { ExchangeRates } from "../types";
import { CircularProgress } from "@material-ui/core";
import Calculator from "./Calculator";

const StyledLoading = styled(CircularProgress)`
    position: absolute;
    top: 45%;
    left: 45%;
`;

const App: FC = (): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(true);
    const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null);

    useEffect(() => {
        setLoading(true);
        getExchangeRates()
            .then((rates) => {
                setExchangeRates(rates);
            })
            .catch((err) => {
                alert(err);
                throw err;
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        loading ? <StyledLoading size={80}/> : <Calculator exchangeRates={exchangeRates!}/>
    );
};

export default memo(App);