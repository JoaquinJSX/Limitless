import { useState } from 'react';
import './Incomes.css';

export default function Incomes({ incomes, setIncomes }) {

    const [isShowingExpenses, setIsShowingExpenses] = useState(true);
    const [newIncome, setNewIncome] = useState({
        day: null,
        amount: null,
        currency: null,
        source: null
    });

    function padStart(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function addNewIncome() {
        if (newIncome.day && newIncome.amount && newIncome.currency && newIncome.source) {
            setIncomes(i => [...i, newIncome]);
            setIsShowingExpenses(true);
        }
    }

    return (
        <div className='incomes'>
            {isShowingExpenses ?
                <div>
                    <table>
                        <tr style={{ backgroundColor: "gray", color: "black" }}>
                            <th>Day</th>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>Source of money</th>
                        </tr>
                        {incomes.map((income, index) =>
                            <tr key={index} style={{ backgroundColor: "lightgrey", color: "black" }}>
                                <td>{income.day}</td>
                                <td>{income.amount}</td>
                                <td>{income.currency}</td>
                                <td>{income.source}</td>
                            </tr>)}
                    </table>
                    <button
                        className='add'
                        onClick={() => setIsShowingExpenses(false)}
                    >
                        +
                    </button>
                </div> :
                <div className='add-income'>
                    <h3 style={{ color: 'white' }}>Create new income</h3>
                    <table>
                        <tr style={{ backgroundColor: "gray", color: "black" }}>
                            <th>Day</th>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>Source of money</th>
                        </tr>
                        <tr style={{ backgroundColor: "lightgrey", color: "black" }}>
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
                                    <option value="Dolars">Dolars</option>
                                </select>
                            </td>
                            <td>
                                <select
                                    name="sourceOfMoney"
                                    onChange={e => setNewIncome(i => ({ ...i, source: e.target.value }))}
                                >
                                    <option value="Launch">Launch</option>
                                    <option value="Drugs">Drugs</option>
                                    <option value="Bitchs">Bitchs</option>
                                    <option value="Others">Others</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <button
                        className='cancel'
                        onClick={() => setIsShowingExpenses(true)}
                    >
                        Cancel
                    </button>
                    <button onClick={addNewIncome}>Save</button>
                    <p style={{ color: 'white' }}>{newIncome.currency}</p>
                </div>}
        </div>
    );
}