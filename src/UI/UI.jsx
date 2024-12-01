import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/Nav";
import Incomes from "./Components/Main/Incomes/Incomes";
import Expenses from "./Components/Main/Expenses/Expenses";
import Relation from "./Components/Main/Relation-IE/Relation";
import Goals from "./Components/Main/Goals/Goals";
import { createContext, useState } from "react";

export const contentContext = createContext();

export default function UI() {
    const [sectionDisplayed, setSectionDisplayed] = useState('Incomes');
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);

    function displayContent() {

        switch (sectionDisplayed) {
            case 'Incomes':
                return <Incomes incomes={incomes} setIncomes={setIncomes} />
            case 'MonthExpenses':
                return <Expenses expenses={expenses} setExpenses={setExpenses} />
            case 'Relation':
                return <Relation incomes={incomes} />
            case 'Goals':
                return <Goals />
        }
    }

    return (
        <div>
            <Header />
            <contentContext.Provider value={setSectionDisplayed}>
                <NavBar />
            </contentContext.Provider>
            <section>{displayContent()}</section>
        </div>
    );
}