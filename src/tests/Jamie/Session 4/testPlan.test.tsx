import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../../../app/Components/Calculator";
import { Button } from "../../../app/types";

describe("Requirement 12: Result is rounded to a maximum of 4 decimal digits", () => {
    it("should output four decimal points after rounding down", () => {
        const { getByTestId } = render(<Calculator exchangeRates={{ USD: 1.0, ILS: 1.0 }}/>);

        //Using testId because getting by text is ambiguous (e.g., "0")
        const buttonClear = getByTestId(`testId-button-${Button.Clear}`);
        const buttonOne = getByTestId(`testId-button-${Button.One}`);
        const buttonZero = getByTestId(`testId-button-${Button.Zero}`);
        const buttonThree = getByTestId(`testId-button-${Button.Three}`);
        const buttonDivide = getByTestId(`testId-button-${Button.Divide}`);
        const buttonResult = getByTestId(`testId-button-${Button.Result}`);

        const result = getByTestId("testId-calculation-tab-screen");

        //Clear the calculator
        userEvent.click(buttonClear);

        //Evaluate 10/3
        userEvent.click(buttonOne);
        userEvent.click(buttonZero);
        userEvent.click(buttonDivide);
        userEvent.click(buttonThree);
        userEvent.click(buttonResult);

        expect(result).toHaveTextContent(/^3\.3333$/);
    });

    it("should output four decimal points after rounding up", () => {
        const { getByTestId } = render(<Calculator exchangeRates={{ USD: 1.0, ILS: 1.0 }}/>);

        //Using testId because getting by text is ambiguous (e.g., "0")
        const buttonClear = getByTestId(`testId-button-${Button.Clear}`);
        const buttonTwo = getByTestId(`testId-button-${Button.Two}`);
        const buttonZero = getByTestId(`testId-button-${Button.Zero}`);
        const buttonThree = getByTestId(`testId-button-${Button.Three}`);
        const buttonDivide = getByTestId(`testId-button-${Button.Divide}`);
        const buttonResult = getByTestId(`testId-button-${Button.Result}`);

        const result = getByTestId("testId-calculation-tab-screen");

        //Clear the calculator
        userEvent.click(buttonClear);

        //Evaluate 20/3
        userEvent.click(buttonTwo);
        userEvent.click(buttonZero);
        userEvent.click(buttonDivide);
        userEvent.click(buttonThree);
        userEvent.click(buttonResult);

        expect(result).toHaveTextContent(/^6\.6667$/);
    });
});

describe("Requirement 3: The tabs are named \"CALC\" (left tab) and \"CONVERT\" (right tab)", () => {
    it("should contain the text \"CALC\"", () => {
        const { getByTestId } = render(<Calculator exchangeRates={{ USD: 1.0, ILS: 1.0 }}/>);

        const button = getByTestId("testId-calculation-tab");
        expect(button).toHaveTextContent(/^CALC$/);
    });

    it("should contain the text \"CONVERT\"", () => {
        const { getByTestId } = render(<Calculator exchangeRates={{ USD: 1.0, ILS: 1.0 }}/>);

        const button = getByTestId("testId-currency-tab");
        expect(button).toHaveTextContent(/^CONVERT$/);
    });
});