import React, { FC } from 'react';
import Button from "./Components/Button";
import CalculatorScreen from "./Components/CalculatorScreen";
import './App.css';
import ButtonPanel from "./Components/ButtonPanel";

const App: FC = () => {
    return (
        <>
            <ButtonPanel/>
            {/*<Button content={"8"} onClick={() => alert("clicked!")}/>*/}
            {/*<CalculatorScreen content={"Hi"} />*/}
        </>
    );
};

export default App;
