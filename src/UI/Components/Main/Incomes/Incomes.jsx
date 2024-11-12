import { useState } from 'react';
import './Incomes.css';

export default function Incomes({ incomes, setIncomes }) {

    const [isShowingIncomes, setIsShowingIncomes] = useState(true);
    const [newIncome, setNewIncome] = useState({
        day: null,
        amount: null,
        currency: 'Soles',
        source: 'Launch'
    });

    function padStart(number) {
        return (number < 10 ? '0' : '') + number;
    }

    return (
        <div className='incomes'>
            {isShowingIncomes ?
                <div className='incomesContainer'>
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
                        onClick={() => setIsShowingIncomes(false)}
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
                                    <option value="Salary">Salary</option>
                                    <option value="Food vaucher">Food vaucher</option>
                                    <option value="Perquisites">Perquisites</option>
                                    <option value="Others">Others</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <button
                        className='save'
                        onClick={() => {
                            setIncomes(i => [...i, newIncome]);
                            setIsShowingIncomes(true);
                        }}
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