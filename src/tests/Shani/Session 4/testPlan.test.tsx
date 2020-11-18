import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../../../app/Components/Calculator";
import { Button } from "../../../app/types";
import { calculateExpression } from "../../../app/utils";

describe("Clicking the same operator consecutively adds only one operator to the end of the expression", () => {
    it("should display the last clicked operator", () => {
        const { getByTestId } = render(<Calculator exchangeRates={{ USD: 1.0, ILS: 3.4 }} />);

        userEvent.click(getByTestId(`testId-button-${Button.Clear}`));
        userEvent.click(getByTestId(`testId-button-${Button.One}`));
        userEvent.click(getByTestId(`testId-button-${Button.Subtract}`));
        userEvent.click(getByTestId(`testId-button-${Button.Subtract}`));

        expect(getByTestId("testId-calculation-tab-screen")).toHaveTextContent("1-");
    });
    it("should display the last clicked operator", () => {
        const { getByTestId } = render(<Calculator exchangeRates={{ USD: 1.0, ILS: 3.4 }} />);

        userEvent.click(getByTestId(`testId-button-${Button.Subtract}`));
        userEvent.click(getByTestId(`testId-button-${Button.Subtract}`));

        expect(getByTestId("testId-calculation-tab-screen")).toHaveTextContent("-");
    });

    it("should display the last clicked operator", () => {
        const { getByTestId } = render(<Calculator exchangeRates={{ USD: 1.0, ILS: 3.4 }} />);

        userEvent.click(getByTestId(`testId-button-${Button.Clear}`));
        userEvent.click(getByTestId(`testId-button-${Button.One}`));
        userEvent.click(getByTestId(`testId-button-${Button.Subtract}`));
        userEvent.click(getByTestId(`testId-button-${Button.Subtract}`));
        userEvent.click(getByTestId(`testId-button-${Button.Two}`));

        expect(getByTestId("testId-calculation-tab-screen")).toHaveTextContent("1-2");
    });
});

describe("calculateExpression ", () => {
    it("should return the number button's value", () => {
        expect(calculateExpression("0", Button.One)).toBe("1");
    });
});