import { Button, Expression, Key } from "./types";

export const EMPTY_EXPRESSION: Expression = "0";

export const BUTTON_TO_VALUE_MAP: Record<string, string> = {
    [Button.Add]: "+",
    [Button.Subtract]: "-",
    [Button.Multiply]: "*",
    [Button.Divide]: "/",
};

export const KEY_TO_BUTTON_MAP: Record<Key, Button> = {
    [Key.Backspace]: Button.Delete,
    [Key.Enter]: Button.Result,
    [Key.Add]: Button.Add,
    [Key.Subtract]: Button.Subtract,
    [Key.Multiply]: Button.Multiply,
    [Key.Divide]: Button.Divide,
    [Key.Dot]: Button.Dot,
    [Key.OpenParentheses]: Button.OpenParentheses,
    [Key.CloseParentheses]: Button.OpenParentheses,
    [Key.One]: Button.One,
    [Key.Two]: Button.Two,
    [Key.Three]: Button.Three,
    [Key.Four]: Button.Four,
    [Key.Five]: Button.Five,
    [Key.Six]: Button.Six,
    [Key.Seven]: Button.Seven,
    [Key.Eight]: Button.Eight,
    [Key.Nine]: Button.Nine,
    [Key.Zero]: Button.Zero,
};