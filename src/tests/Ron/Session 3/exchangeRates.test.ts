import { getExchangeRates } from "../../../app/Services/exchangeRates";
import { Currency } from "../../../app/types";

/** Notes:
 * 1.   IMPORTANT! after each test, restore all your mocks to make sure they won't affect other tests
 * 2.   'jest.spyOn()' is the standard Jest way to mock a function, and that's what we should use to mock 'fetch'.
 *      Doing 'global.fetch = jest.fn()' will override the actual 'fetch' and we won't be able to control this mock with standard Jest tools (clear/reset/restore the mock).
 *      IMPORTANT! we should avoid overriding functions and use 'jest.spyOn' instead.
 * 3.   Given Promise 'p', 'expect(p).rejects' returns a promise of all 'p' rejections. Means we should write 'await expect(p).rejects'.
 *      We can assert the rejections just like we assert standard 'expect'. If 'p' doesn't reject the assertion fails.
 *      Same goes for 'expect(p).resolves'.
 * 4.   'expect.assertions()' is helpful when we want to make sure an expected number of assertions happened
 * 5.   The third test should rightfully fail because this requirement is not implemented
 * **/

describe("Exchange Rates Service", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should return rates if both request and response are valid", async () => {
        // arrange
        const mockedRates = { [Currency.USD]: 3.68 };

        /**
         * We could have done 'global.fetch = jest.fn() **/
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue({ rates: mockedRates })
        } as any);

        // act
        const rates = await getExchangeRates();

        // assert
        expect(rates).toEqual(mockedRates);
    });

    it("should throw an error if request wasn't sent successfully - option 1", async () => {
        // arrange
        jest.spyOn(global, "fetch").mockRejectedValue("No internet connection");

        // act + assert
        (await expect(getExchangeRates()).rejects).toThrow();
    });

    it("should throw an error if request wasn't sent successfully - option 2", async () => {
        // arrange
        jest.spyOn(global, "fetch").mockRejectedValue("No internet connection");

        expect.assertions(1);

        try {
            // act
            await getExchangeRates();
        }
        catch (err) {
            // assert
            expect(err).toBeDefined();
        }
    });

    it("should throw an error if response is invalid", async () => {
        // arrange
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue("unexpectedResponse")
        } as any);

        // act + assert
        (await expect(getExchangeRates()).rejects).toThrow();
    });
});