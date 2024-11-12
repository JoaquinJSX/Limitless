import { useState } from 'react';
import './Expenses.css';

export default function Expenses({ expenses, setExpenses }) {

    const [isShowingExpenses, setIsShowingExpenses] = useState(true);
    const [newExpense, setNewExpense] = useState({ day: '', amount: 0, currency: 'Soles', to: 'Bitchs' })

    return (
        <div className="expenses">
            {isShowingExpenses ?
                <div className="expensesContainer">
                    <table>
                        <tr style={{ backgroundColor: "gray", color: "black" }}>
                            <th>Day</th>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>To</th>
                        </tr>
                        {expenses.map((expense, index) =>
                            <tr key={index} style={{ backgroundColor: "lightgrey", color: "black" }}>
                                <td>{expense.day}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.currency}</td>
                                <td>{expense.to}</td>
                            </tr>)}
                    </table>
                    <button
                        className='add'
                        onClick={() => setIsShowingExpenses(false)}
                    >
                        +
                    </button>
                </div> :
                <div className='add-expense'>
                    <h3 style={{ color: 'white' }}>Create new expense</h3>
                    <table>
                        <tr style={{ backgroundColor: "gray", color: "black" }}>
                            <th>Day</th>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>To</th>
                        </tr>
                        <tr style={{ backgroundColor: "lightgrey", color: "black" }}>
                            <td>
                                <input
                                    type="number"
                                    placeholder='Insert data'
                                    value={newExpense.day}
                                    onChange={e => setNewExpense(i => ({ ...i, day: e.target.value }))}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    placeholder='Insert data'
                                    onChange={e => setNewExpense(i => ({ ...i, amount: e.target.value }))}
                                />
                            </td>
                            <td>
                                <select
                                    name="currency"
                                    onChange={e => setNewExpense(i => ({ ...i, currency: e.target.value }))}
                                >
                                    <option value="Soles">Soles</option>
                                    <option value="Dolars">Dolars</option>
                                </select>
                            </td>
                            <td>
                                <select
                                    name="sourceOfMoney"
                                    onChange={e => setNewExpense(i => ({ ...i, to: e.target.value }))}
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
                            setExpenses(i => [...i, newExpense]);
                            setIsShowingExpenses(true);
                        }}
                    >
                        Save
                    </button>
                    <button
                        className='cancel'
                        onClick={() => setIsShowingExpenses(true)}
                    >
                        Cancel
                    </button>
                </div>}
        </div>
    );
}