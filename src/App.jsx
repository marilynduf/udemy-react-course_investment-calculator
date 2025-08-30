import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChangeInput(inputId, newValue) {
        setUserInput((prevUserInput) => {
            return { ...prevUserInput, [inputId]: +newValue };
        });
    }

    return (
        <>
            <Header />
            <Form userInput={userInput} onChangeInput={handleChangeInput} />
            {!inputIsValid && (
                <p className="center"> Please, enter at leat 1 year duration</p>
            )}

            {inputIsValid && <Result input={userInput} />}
        </>
    );
}

export default App;
