import { Currency, ExchangeRates } from "../types";

const API = "https://api.exchangeratesapi.io/latest";

type Response = {
    date: Date;
    base: Currency;
    rates: ExchangeRates;
};

export const getExchangeRates = async (baseCurrency = Currency.ILS): Promise<Response["rates"]> => {
    try {
        const response = await fetch(`${API}?base=${baseCurrency}`);
        const responseJson: Response = await response.json();
        return responseJson.rates;
    }
    catch (err) {
        throw new Error(`Could not get exchange rates from ${API}.\n${err}`);
    }
};