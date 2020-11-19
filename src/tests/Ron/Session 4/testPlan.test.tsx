import React from "react";
import { render } from "@testing-library/react";
import { EMPTY_EXPRESSION } from "../../../app/consts";
import { Button, Currency, Key } from "../../../app/types";
import { getTestUIActions, TestUIActions } from "./testUtils";
import Calculator from "../../../app/Components/Calculator";

const OPERATORS: Button[] = [
    Button.Add,
    Button.Multiply,
    Button.Subtract,
    Button.Divide,
    Button.Dot,
];

describe("Calculator tests", () => {
    let clickButtons: TestUIActions["clickButtons"],
        getButton: TestUIActions["getButton"],
        getScreen: TestUIActions["getScreen"],
        pressKeys: TestUIActions["pressKeys"];

    const expectScreenContent = (expectedContent: string): void => {
        expect(getScreen().textContent).toBe(expectedContent);
    };

    beforeEach(() => {
        const renderResult = render(<Calculator exchangeRates={{ [Currency.USD]: 3.86, [Currency.ILS]: 1 }}/>);
        const { clickButtons: _clickButtons, getButton: _getButton, getScreen: _getScreen, pressKeys: _pressKeys } = getTestUIActions(renderResult);

        clickButtons = _clickButtons;
        getButton = _getButton;
        getScreen = _getScreen;
        pressKeys = _pressKeys;
    });

    describe("Functional tests", () => {
        it.each(Object.values(Button))("should display '%s' button", (button) => {
            expect(getButton(button)).not.toBeNull();
        });

        it("should display an empty expression on initial load", () => {
            expectScreenContent(EMPTY_EXPRESSION);
        });

        it("should display numbers in the same order they were clicked on", () => {
            clickButtons([
                Button.One,
                Button.Three,
                Button.Nine,
                Button.Nine,
                Button.OpenParentheses,
                Button.CloseParentheses,
                Button.CloseParentheses,
            ]);

            expectScreenContent("1399())");
        });

        it("should delete the last character when clicking the delete button once", () => {
            clickButtons([
                Button.One,
                Button.Three,
                Button.Nine,
                Button.Nine,
                Button.Delete,
            ]);

            expectScreenContent("139");
        });

        it("should display an empty expression when deleting the all characters", () => {
            clickButtons([
                Button.One,
                Button.Three,
                Button.Nine,
                Button.Nine,
                Button.Delete,
                Button.Delete,
                Button.Delete,
                Button.Delete,
            ]);

            expectScreenContent(EMPTY_EXPRESSION);
        });

        it("should display an empty expression when clicking the delete button multiple times with an empty expression", () => {
            clickButtons([
                Button.Delete,
                Button.Delete,
                Button.Delete,
                Button.Delete,
            ]);

            expectScreenContent(EMPTY_EXPRESSION);
        });

        it("should display an empty expression when clicking the clear button multiple times with an empty expression", () => {
            clickButtons([
                Button.Clear,
                Button.Clear,
                Button.Clear,
            ]);

            expectScreenContent(EMPTY_EXPRESSION);
        });

        it("should display an empty expression when clicking the clear button with a non-empty expression", () => {
            clickButtons([
                Button.One,
                Button.Three,
                Button.Nine,
                Button.Nine,
                Button.Clear,
            ]);

            expectScreenContent(EMPTY_EXPRESSION);
        });

        it("should do nothing when clicking the result button with an invalid expression", () => {
            clickButtons([
                Button.OpenParentheses,
                Button.OpenParentheses,
                Button.Divide,
                Button.Three,
                Button.Nine,
                Button.Subtract,
                Button.CloseParentheses,
                Button.Add,
                Button.Zero,
                Button.Multiply,

                Button.Result,
            ]);

            expectScreenContent("((÷39-)+0×");
        });

        it("should do nothing when dividing by zero", () => {
            clickButtons([
                Button.Four,
                Button.Divide,
                Button.Zero,

                Button.Result,
            ]);

            expectScreenContent("4÷0");
        });

        it.each(OPERATORS)("should display '%s' once at the end of the expression when clicking it multiple times", (operator) => {
            clickButtons([
                Button.Four,
                operator,
                operator,
                operator,
                operator,
            ]);

            expectScreenContent(`4${operator}`);
        });

        it("should display only the last clicked operator at the end of the expression", () => {
            clickButtons([
                Button.Four,
                Button.Add,
            ]);
            expectScreenContent("4+");

            clickButtons([Button.Subtract]);
            expectScreenContent("4-");

            clickButtons([Button.Divide]);
            expectScreenContent("4÷");

            clickButtons([Button.Multiply]);
            expectScreenContent("4×");

            clickButtons([Button.Dot]);
            expectScreenContent("4.");
        });

        it("should add two positive numbers", () => {
            clickButtons([
                Button.Five,
                Button.Four,

                Button.Add,

                Button.Seven,
                Button.One,

                Button.Result,
            ]);

            expectScreenContent("125");
        });

        it("should add two negative numbers", () => {
            clickButtons([
                Button.OpenParentheses,
                Button.Subtract,
                Button.Five,
                Button.Four,
                Button.CloseParentheses,

                Button.Add,

                Button.OpenParentheses,
                Button.Subtract,
                Button.Seven,
                Button.One,
                Button.CloseParentheses,

                Button.Result,
            ]);

            expectScreenContent("-125");
        });

        it("should multiply two positive numbers", () => {
            clickButtons([
                Button.Five,
                Button.Four,

                Button.Multiply,

                Button.Seven,
                Button.One,

                Button.Result,
            ]);

            expectScreenContent("3834");
        });

        it("should multiply two negative numbers", () => {
            clickButtons([
                Button.OpenParentheses,
                Button.Subtract,
                Button.Five,
                Button.Four,
                Button.CloseParentheses,

                Button.Multiply,

                Button.OpenParentheses,
                Button.Subtract,
                Button.Seven,
                Button.One,
                Button.CloseParentheses,

                Button.Result,
            ]);

            expectScreenContent("3834");
        });

        it("should round result to 4 fraction digits", () => {
            clickButtons([
                Button.One,
                Button.Divide,
                Button.Three,

                Button.Result,
            ]);

            expectScreenContent("0.3333");
        });

        it("should display less than 4 fraction digits", () => {
            clickButtons([
                Button.One,
                Button.Divide,
                Button.Four,

                Button.Result,
            ]);

            expectScreenContent("0.25");
        });

        it("should apply numbers display logic when using keyboard", () => {
            pressKeys([
                Key.One,
                Key.Two,
                Key.Three,
                Key.Four,
                Key.Five,
                Key.Six,
                Key.Seven,
                Key.Eight,
                Key.Nine,
                Key.Zero,
                Key.OpenParentheses,
                Key.CloseParentheses,
                Key.CloseParentheses,
            ]);

            expectScreenContent("1234567890())");
        });

        it("should apply operators display logic when using keyboard", () => {
            pressKeys([Key.Dot]);
            expectScreenContent(`${EMPTY_EXPRESSION}.`);

            pressKeys([Key.Add]);
            expectScreenContent(`${EMPTY_EXPRESSION}+`);

            pressKeys([Key.Subtract]);
            expectScreenContent(`${EMPTY_EXPRESSION}-`);

            pressKeys([Key.Multiply]);
            expectScreenContent(`${EMPTY_EXPRESSION}×`);

            pressKeys([Key.Divide]);
            expectScreenContent(`${EMPTY_EXPRESSION}÷`);

            pressKeys([
                Key.Add,
                Key.Add,
                Key.Add,
                Key.Add,
            ]);
            expectScreenContent(`${EMPTY_EXPRESSION}+`);
        });

        it("should apply display-only logic when using keyboard", () => {
            pressKeys([
                Key.One,
                Key.Two,
                Key.Three,
                Key.Four,
                Key.Five,
                Key.Six,
                Key.Seven,
                Key.Eight,
                Key.Nine,
                Key.Zero,
                Key.OpenParentheses,
                Key.CloseParentheses,
                Key.CloseParentheses,

                Key.Backspace,
                Key.Backspace,
                Key.Backspace,
            ]);
            expectScreenContent("1234567890");

            pressKeys([
                Key.Add,
                Key.One,

                Key.Enter,
            ]);
            expectScreenContent("1234567891");
        });

        it("should do nothing on unmapped key press", () => {
            pressKeys([
                Key.One,
                Key.Two,
                "n",
                "!",
                "Delete",
                "Ctrl"
            ] as Key[]);

            expectScreenContent("12");
        });
    });

    describe("UX tests", () => {
        it.todo("should keep screen width fixed and extend height when expression is too long to fit");

        it.todo("should display the buttons in 4 columns and 5 rows");
    });
});