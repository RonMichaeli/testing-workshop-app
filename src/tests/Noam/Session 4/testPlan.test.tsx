import React from "react";
import { render, act } from "@testing-library/react";
import CalculationTab from "../../../app/Components/CalculationTab";
import userEvent from "@testing-library/user-event";
import App from "../../../app";

describe("Test Calculator", () => {
    it("should set expression to 0 when user clicks 'C' (requirement 6-i-a)", () => {
        // arrange
        const expression = "1+1";
        const { getByText } = render(<CalculationTab />)

        // act
        for (const char of expression) {
            userEvent.click(getByText(char));
        }

        // assert
        const displayPanel = getByText(expression);
        expect(displayPanel).toHaveTextContent("1+1");

        // act
        userEvent.click(getByText("C"));

        // assert
        expect(displayPanel).toHaveTextContent("0");
    });

    it("should extend display panel downward (requirement 13)", () => {
        // arrange
        const expression = "1234567890";
        const { getByText } = render(<CalculationTab />)

        // act
        for (const char of expression) {
            userEvent.click(getByText(char));
        }

        // assert
        const displayPanel = getByText(expression);
        expect(displayPanel).toHaveStyle({ width: "300px" });


        // act
        for (const char of expression) {
            userEvent.click(getByText(char));
        }
        // all the expression is on screen but width didn't change
        expect(getByText(expression + expression));
        expect(displayPanel).toHaveStyle({ width: "300px" });
    });

    it("should fetch rate on initial load (requirement 21)",  () => {
        // arrange
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue({ })
        } as any);

        // act

        const { findByText } = render(<App />);

        // assert
        findByText("calc"); // wait for spinner to disappear;
        expect(global.fetch).toHaveBeenCalledTimes(1);

    });
})