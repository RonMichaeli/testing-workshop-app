import { Expression } from "./types";

export enum ButtonLabel {
    Clear = "C",
    Delete = "🠔",
    Percentage = "%",
    Add = "+",
    Subtract = "—",
    Multiply = "×",
    Divide = "÷",
    Dot = ".",
    Blank = "",
    Result = "=",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Zero = "0"
}

export const BUTTON_LABEL_TO_VALUE: Record<string, string> = {
    [ButtonLabel.Add]: "+",
    [ButtonLabel.Subtract]: "-",
    [ButtonLabel.Multiply]: "*",
    [ButtonLabel.Divide]: "/",
    [ButtonLabel.Dot]: "."
};

export const NUMBERS: ButtonLabel[] = [
    ButtonLabel.Zero,
    ButtonLabel.One,
    ButtonLabel.Two,
    ButtonLabel.Three,
    ButtonLabel.Four,
    ButtonLabel.Five,
    ButtonLabel.Six,
    ButtonLabel.Seven,
    ButtonLabel.Eight,
    ButtonLabel.Nine,
];

export const EMPTY_EXPRESSION: Expression = "0";