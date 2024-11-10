import { useState } from 'react';
import './Incomes.css';

export default function Incomes({ incomes, setIncomes }) {

    const [isShowingExpenses, setIsShowingExpenses] = useState(true);

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
                        <tr style={{ backgroundColor: "lightgrey", color: "black" }}>
                            <td>{incomes[0].day}</td>
                            <td>1324.50</td>
                            <td>Soles</td>
                            <td>Salary</td>
                        </tr>
                    </table>
                    <button className='add' onClick={() => setIsShowingExpenses(false)}>+</button>
                </div> :
                <div>
                    <h3 style={{color: 'white'}}>Create new income</h3>
                    <table>
                        <tr style={{ backgroundColor: "gray", color: "black" }}>
                            <th>Day</th>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>Source of money</th>
                        </tr>
                        <tr style={{ backgroundColor: "lightgrey", color: "black" }}>
                            <td><input type="text" /></td>
                            <td><input type="number" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                    </table>
                    <button className='add'>Cancel</button>
                    <button>Save</button>
                </div>}
        </div>
    );
}