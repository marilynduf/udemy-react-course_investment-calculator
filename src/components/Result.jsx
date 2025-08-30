import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((data) => {
                    const totalInterest =
                        data.valueEndOfYear -
                        data.annualInvestment * data.year -
                        initialInvestment;
                    const totalAmountInvested =
                        data.valueEndOfYear - totalInterest;
                    data.valueEndOfYear - totalInterest;
                    return (
                        <tr key={data.year}>
                            <th>{data.year}</th>
                            <th>{formatter.format(data.valueEndOfYear)}</th>
                            <th>{formatter.format(data.interest)}</th>
                            <th>{formatter.format(totalInterest)}</th>
                            <th>{formatter.format(totalAmountInvested)}</th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
