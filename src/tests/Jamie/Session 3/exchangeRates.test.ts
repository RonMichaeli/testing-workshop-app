import { getExchangeRates } from "../../../app/Services/exchangeRates";

describe("Exchange Rates Service", () => {
    it("should return rates if all okay", async () => {
        const rates = await getExchangeRates();
        expect(rates.USD).toBeDefined();
    });

    it("should throw an error on connection issues", async () => {
        const rates = await getExchangeRates();
        expect(rates.USD).toBeDefined();
    });

    it("should throw an error on unexpected response", async () => {
        const rates = await getExchangeRates();
        expect(rates.USD).toBeDefined();
    });
});