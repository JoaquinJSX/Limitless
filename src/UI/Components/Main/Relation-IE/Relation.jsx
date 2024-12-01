import './Relation.css';

export default function Relation({incomes, expenses}) {
    
    const income = incomes.length != 0 ? parseFloat(incomes[0].amount) : null;
    const expense = incomes.length != 0 ? parseFloat(expenses[0].amount) : null;
    const actualAmount = income && expense != null ? income - expense : null;

    return(
        <div className="relation">
            {incomes.length != 0 ? <h3>
                In this month you've earned {incomes[0].amount} soles and you've spent {expenses[0].amount}.<br/>
                That means you have now {`${actualAmount}0`}.
            </h3>: <h3>There are no incomes or expenses to show.</h3>}
        </div>
    );
}