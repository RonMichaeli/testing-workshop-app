import userEvent from "@testing-library/user-event";
import { fireEvent, RenderResult } from "@testing-library/react";
import { Button, Key } from "../../../app/types";

export type TestUIActions = {
    getButton: (button: Button) => HTMLElement | null;
    clickButtons: (buttons: Button[]) => void;
    getScreen: () => HTMLElement;
    pressKeys: (keys: Key[]) => void;
};

export const getTestUIActions = ({ queryByTestId }: RenderResult): TestUIActions => {
    const getButton = (button: Button): HTMLElement | null => queryByTestId(`testId-button-${button}`);

    const clickButtons = (buttons: Button[]): void => {
        for (const button of buttons) {
            userEvent.click(getButton(button)!);
        }
    };

    const getScreen = (): HTMLElement => queryByTestId("testId-calculation-tab-screen")!;

    const pressKeys = (keys: Key[]): void => {
        for (const key of keys) {
            fireEvent.keyDown(document, { key });
        }
    };

    return {
        getButton,
        clickButtons,
        getScreen,
        pressKeys
    };
};