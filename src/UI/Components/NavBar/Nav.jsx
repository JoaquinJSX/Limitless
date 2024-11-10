import './nav.css';
import {contentContext} from '../../UI';
import { useContext } from 'react';

export default function NavBar() {
    const setContentDisplayed = useContext(contentContext);

    return(
        <nav>
            <button onClick={() => setContentDisplayed('Income')}>Incomes</button>
            <button onClick={() => setContentDisplayed('MonthExpenses')}>Expenses</button>
            <button onClick={() => setContentDisplayed('Relation')}>Relation Incomes/Expenses</button>
            <button onClick={() => setContentDisplayed('Goals')}>Finantial goals</button>
        </nav>
    );
}