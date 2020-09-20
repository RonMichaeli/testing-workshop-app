export type Expression = string;

export enum ButtonLabel {
    Clear = "C",
    Delete = "🠔",
    Percentage = "%",
    Add = "+",
    Subtract = "-",
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
    Zero = "0",
}

export enum Currency {
    USD = "USD",
    ILS = "ILS",
}

export type ExchangeRates = Record<Currency, number>;