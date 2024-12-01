import { useState } from 'react';
import './Expenses.css';

export default function Expenses({ expenses, setExpenses }) {

    const [isShowingExpenses, setIsShowingExpenses] = useState(true);
    const [newExpense, setNewExpense] = useState({ day: null, amount: null, currency: 'Soles', to: 'Launch' })

    function saveExpense(e) {
        if (newExpense.day != null && newExpense.day != 0 && newExpense.amount != null) {
            setExpenses(i => [...i, newExpense]);
            setIsShowingExpenses(true);
            resetValues();
        } else {
            e.preventDefault();
        }
    }

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

    function resetValues() {
        setNewExpense({
            day: '',
            amount: '',
            currency: 'Soles',
            to: 'Launch'
        })
    }

    return (
        <div className="expenses">
            {isShowingExpenses ?
                <div className="expensesContainer">
                    {expenses.length != 0 ?
                        <table>
                            <thead style={{ backgroundColor: "gray", color: "black" }}>
                                <th>Day</th>
                                <th>Amount</th>
                                <th>Currency</th>
                                <th>To</th>
                            </thead>
                            {expenses.map((expense, index) =>
                                <tbody key={index} style={{ backgroundColor: "lightgrey", color: "black" }}>
                                    <td>{padStart(expense.day)}</td>
                                    <td>{setDecimal(expense.amount)}</td>
                                    <td>{expense.currency}</td>
                                    <td>{expense.to}</td>
                                </tbody>)}
                        </table> : <h2 style={{ color: 'white', marginTop: '100px' }}>There is no expenses</h2>}
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
                        <thead style={{ backgroundColor: "gray", color: "black" }}>
                            <th>Day</th>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>To</th>
                        </thead>
                        <tbody style={{ backgroundColor: "lightgrey", color: "black" }}>
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
                                </select>
                            </td>
                            <td>
                                <select
                                    name="sourceOfMoney"
                                    onChange={e => setNewExpense(i => ({ ...i, to: e.target.value }))}
                                >
                                    <option value="Launch">Launch</option>
                                    <option value="Toiletries">Toiletries</option>
                                    <option value="Articles of clothing">Articles of clothing</option>
                                    <option value="Internet">Internet</option>
                                    <option value="Books">Books</option>
                                    <option value="Investments">Investments</option>
                                    <option value="Bitchs">Bitchs</option>
                                    <option value="Others">Others</option>
                                </select>
                            </td>
                        </tbody>
                    </table>
                    <button
                        className='save'
                        onClick={saveExpense}
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