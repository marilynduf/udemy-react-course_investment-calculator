import { useState } from "react";

const initialNumbers = {
    InitInitialInvestment: 10000,
    AnnualInvestment: 1200,
    Expectedreturn: 6,
    DurationYear: 10,
};

export default function Form() {
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
        <section id="user-input">
            <p>
                <label htmlFor="initialInvestment">Initial Investment</label>
                <input
                    type="number"
                    id="initialInvestment"
                    value={userInput.initialInvestment}
                    onChange={(e) =>
                        handleChangeInput("initialInvestment", e.target.value)
                    }
                    required
                />
            </p>
            <p>
                <label htmlFor="annualInvestment">Annual Investment</label>
                <input
                    type="number"
                    id="annualInvestment"
                    value={userInput.annualInvestment}
                    onChange={(e) =>
                        handleChangeInput("annualInvestment", e.target.value)
                    }
                    required
                />
            </p>
            <p>
                <label htmlFor="expectedReturn">Expected Return</label>
                <input
                    type="number"
                    id="expectedReturn"
                    value={userInput.expectedReturn}
                    onChange={(e) =>
                        handleChangeInput("expectedReturn", e.target.value)
                    }
                    required
                />
            </p>
            <p>
                <label htmlFor="durationYear">Duration Year</label>
                <input
                    type="number"
                    id="durationYear"
                    value={userInput.durationYear}
                    onChange={(e) =>
                        handleChangeInput("durationYear", e.target.value)
                    }
                    required
                />
            </p>
        </section>
    );
}
