export enum Button {
    Clear = "C",
    Delete = "🠔",
    OpenParentheses = "(",
    CloseParentheses = ")",
    Add = "+",
    Subtract = "-",
    Multiply = "×",
    Divide = "÷",
    Dot = ".",
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

export type Expression = string;

export type ExchangeRates = Record<Currency, number>;