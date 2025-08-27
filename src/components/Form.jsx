export default function Form({ onChangeInput, userInput }) {
    return (
        <section id="user-input">
            <p>
                <label htmlFor="initialInvestment">Initial Investment</label>
                <input
                    type="number"
                    id="initialInvestment"
                    value={userInput.initialInvestment}
                    onChange={(e) =>
                        onChangeInput("initialInvestment", e.target.value)
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
                        onChangeInput("annualInvestment", e.target.value)
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
                        onChangeInput("expectedReturn", e.target.value)
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
                        onChangeInput("durationYear", e.target.value)
                    }
                    required
                />
            </p>
        </section>
    );
}
