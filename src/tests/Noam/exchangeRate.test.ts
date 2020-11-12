import { getExchangeRates } from "../../app/Services/exchangeRates";
import {Currency, ExchangeRates} from "../../app/types";


describe("Test exchangeRates service", () => {

    const getNeededCurrencies = (): any => Object.values(Currency)
        .reduce((acc, currency)=> ({...acc, [currency]: expect.any(Number)}), {})

    it("should get list with exchange rates for USD and ILS, where default is ILS", async () => {
        // arrange
        const neededCurrencies = getNeededCurrencies();
        neededCurrencies[Currency.ILS] = 1;

        // act
        const rates: ExchangeRates = await getExchangeRates();

        // assert
        expect(rates).toMatchObject(expect.objectContaining(neededCurrencies));
    });

    it("should get list with exchange rates for USD and ILS, explicit ILS", async () => {
        // arrange
        const neededCurrencies = getNeededCurrencies();
        neededCurrencies[Currency.ILS] = 1;

        // act
        const rates: ExchangeRates = await getExchangeRates(Currency.ILS);

        // assert
        expect(rates).toMatchObject(expect.objectContaining(neededCurrencies));
    });

    it("should get list with exchange rates for USD and ILS, explicit USD", async () => {
        // arrange
        const neededCurrencies = getNeededCurrencies();
        neededCurrencies[Currency.USD] = 1;

        // act
        const rates: ExchangeRates = await getExchangeRates(Currency.USD);

        // assert
        expect(rates).toMatchObject(expect.objectContaining(neededCurrencies));
    });

    it("should throw when using non existent currency", async () => {
        // arrange
        jest.spyOn(window, 'fetch').mockImplementation(() => Promise.reject("nope"));

        // act assert
        await expect(getExchangeRates()).rejects.toThrowError(/Could not get exchange rates/);
    });
})