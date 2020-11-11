import { getExchangeRates } from "../../../app/Services/exchangeRates";

describe("Exchange Rates Service", () => {
    const originalFetch = global.fetch;
    const mockedFetch = jest.fn();

    beforeAll(() => {
        global.fetch = mockedFetch
    });

    afterAll(() => {
        global.fetch = originalFetch;
    });

    beforeEach(() => {
        mockedFetch.mockClear();
    });

    it("should return rates if all okay", async () => {
        mockedFetch.mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve({rates: { USD: 3.42 }})
        }));

        const rates = await getExchangeRates();
        expect(rates.USD).toBe(3.42);
    });

    it("should throw an error on connection issues", async () => {
        mockedFetch.mockImplementationOnce(() => Promise.reject("DNS Lookup Failed"));

        expect.assertions(1);

        try {
            await getExchangeRates();
        }
        catch (error) {
            expect(error).toBeDefined();
        }
    });

    it("should throw an error on unexpected response", async () => {
        mockedFetch.mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve({colors: { primary: "red" }})
        }));

        expect.assertions(1);

        try {
            await getExchangeRates();
        }
        catch (error) {
            expect(error).toBeDefined();
        }
    });
});