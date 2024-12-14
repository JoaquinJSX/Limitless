import './nav.css';
import { contentContext } from '../../UI';
import { useContext, useState } from 'react';

export default function NavBar() {
    const setContentDisplayed = useContext(contentContext);
    const [activeSection, setActiveSection] = useState('Income');

    return (
        <nav>
            <button
                className={activeSection == 'Income' ? 'active' : 'default'}
                onClick={() => {
                    setContentDisplayed('Incomes');
                    setActiveSection('Income');
                }}
            >
                Incomes
            </button>
            <button
                className={activeSection == 'Expenses' ? 'active' : 'default'}
                onClick={() => {
                    setContentDisplayed('MonthExpenses');
                    setActiveSection('Expenses');
                }}
            >
                Expenses
            </button>
            <button
                className={activeSection == 'Relation' ? 'active' : 'default'}
                onClick={() => {
                    setContentDisplayed('Relation');
                    setActiveSection('Relation');
                }}
            >
                Relation Incomes/Expenses
            </button>
            <button
                className={activeSection == 'Goals' ? 'active' : 'default'}
                onClick={() => {
                    setContentDisplayed('Goals');
                    setActiveSection('Goals');
                }}
            >
                Finantial goals
            </button>
        </nav>
    );
}