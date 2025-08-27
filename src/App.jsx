import Header from "./components/Header";
import Form from "./components/Form";
import ResultTable from "./components/Result";
import { useState } from "react";

const initialNumbers = {
    InitInitialInvestment: 10000,
    AnnualInvestment: 1200,
    Expectedreturn: 6,
    DurationYear: 10,
};

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        durationYear: 10,
    });

    function handleChangeInput(inputId, newValue) {
        setUserInput((prevUserInput) => {
            return { ...prevUserInput, [inputId]: newValue };
        });
    }

    return (
        <>
            <Header />
            <Form userInput={userInput} onChangeInput={handleChangeInput} />
            <ResultTable />
        </>
    );
}

export default App;
