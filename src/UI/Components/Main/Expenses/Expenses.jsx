import './Expenses.css';

export default function Expenses() {
    return(
        <div className="expenses">
            <table>
                <tr style={{backgroundColor: "gray", color: "black"}}>
                    <th>Day</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Expense type</th>
                </tr>
                <tr style={{backgroundColor: "lightgray", color: "black"}}>
                    <td>02</td>
                    <td>200</td>
                    <td>soles</td>
                    <td>drogas</td>
                </tr>
            </table>
        </div>
    );
}