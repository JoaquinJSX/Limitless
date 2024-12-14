import { useState } from 'react';
import './Incomes.css';

export default function Incomes({ incomes, setIncomes }) {

    const [isShowingIncomes, setIsShowingIncomes] = useState(true);
    const [newIncome, setNewIncome] = useState({
        day: null,
        amount: null,
        currency: 'Soles',
        source: 'Salary'
    });

    function padStart(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function setDecimal(number) {
        if (number % 1 !== 0) {
            return number;
        } else {
            return `${number}.00`;
        }
    }

    function saveIncome(e) {
        if (newIncome.day != null && newIncome.amount != null) {
            setIncomes(i => [...i, newIncome]);
            setIsShowingIncomes(true);
            resetValues();
        } else {
            e.preventDefault();
        }
    }

    function resetValues() {
        setNewIncome({
            day: '',
            amount: '',
            currency: 'Soles',
            source: 'Salary'
        })
    }

    return (
        <div className='incomes'>
            {isShowingIncomes ?
                <div className='incomesContainer'>
                    {incomes.length != 0 ?
                        <table>
                            <thead>
                                <tr style={{ backgroundColor: "gray", color: "black" }}>
                                    <th>Day</th>
                                    <th>Amount</th>
                                    <th>Currency</th>
                                    <th>Source of money</th>
                                </tr>
                            </thead>
                            <tbody>
                                {incomes.map((income, index) =>
                                    <tr key={index} style={{ backgroundColor: "lightgrey", color: "black" }}>
                                        <td>{padStart(income.day)}</td>
                                        <td>{setDecimal(income.amount)}</td>
                                        <td>{income.currency}</td>
                                        <td>{income.source}</td>
                                    </tr>)}
                            </tbody>
                        </table> : <h2 style={{ color: 'white', marginTop: '100px' }}>There is no incomes</h2>}
                    <button
                        className='add'
                        onClick={() => setIsShowingIncomes(false)}
                    >
                        +
                    </button>
                </div> :
                <div className='add-income'>
                    <h3 style={{ color: 'white' }}>Create new income</h3>
                    <table>
                        <thead style={{ backgroundColor: "gray", color: "black" }}>
                            <th>Day</th>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>Source of money</th>
                        </thead>
                        <tbody style={{ backgroundColor: "lightgrey", color: "black" }}>
                            <td>
                                <input
                                    type="number"
                                    placeholder='Insert data'
                                    value={newIncome.day}
                                    onChange={e => setNewIncome(i => ({ ...i, day: e.target.value }))}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    placeholder='Insert data'
                                    onChange={e => setNewIncome(i => ({ ...i, amount: e.target.value }))}
                                />
                            </td>
                            <td>
                                <select
                                    name="currency"
                                    onChange={e => setNewIncome(i => ({ ...i, currency: e.target.value }))}
                                >
                                    <option value="Soles">Soles</option>
                                </select>
                            </td>
                            <td>
                                <select
                                    name="sourceOfMoney"
                                    onChange={e => setNewIncome(i => ({ ...i, source: e.target.value }))}
                                >
                                    <option value="Salary">Salary</option>
                                    <option value="Food vaucher">Food vaucher</option>
                                    <option value="Perquisites">Perquisites</option>
                                    <option value="Investment commissions">Investment commissions</option>
                                    <option value="Bonuses">Bonuses</option>
                                    <option value="Others">Others</option>
                                </select>
                            </td>
                        </tbody>
                    </table>
                    <button
                        className='save'
                        onClick={saveIncome}
                    >
                        Save
                    </button>
                    <button
                        className='cancel'
                        onClick={() => setIsShowingIncomes(true)}
                    >
                        Cancel
                    </button>
                </div>}
        </div>
    );
}