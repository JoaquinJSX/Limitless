import './Relation.css';

export default function Relation({incomes}) {
    return(
        <div className="relation">
            <h3>
                In this month you've earned {incomes[0].amount} and you've speended a lot of that too.
            </h3>
        </div>
    );
}