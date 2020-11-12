import { getExchangeRates } from "../../../app/Services/exchangeRates";
import { Currency } from "../../../app/types";

describe("Exchange Rates Service", () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    it("should return rates when request is successful", async () => {
        // ToDo: write a test for the first requirement
        const mockedRates = { [Currency.USD]: 22.79 };
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({ rates: mockedRates })
        });

        const exchangeRates = await getExchangeRates();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(exchangeRates).toBe(mockedRates);
    });

    it("should throw an error when request fails", () => {
        // ToDo: write a test for the second requirement
        const errorMessage: string = 'TEST ERROR';
        global.fetch = jest.fn().mockRejectedValue(errorMessage);

        expect(getExchangeRates()).rejects.toThrowError(`Could not get exchange rates from "https://api.exchangeratesapi.io/latest"\n` + errorMessage);
    });

    it("should throw an error when request is ssuccessful but data doesn't match", async () => {
        // ToDo: write a test for the third requirement
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue("no rates here")
        });

        expect(getExchangeRates()).rejects.toThrow();
    });
});