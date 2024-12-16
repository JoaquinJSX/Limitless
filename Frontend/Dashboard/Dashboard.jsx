import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import relation from './Images/relationIE-image.jpg';
import goals from './Images/goals-image.jpg';
import incomes from './Images/incomes-image.jpg';
import expenses from './Images/expense-image.jpg';

export default function Dashboard() {

    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <header>
                <h1>Welcome to your finantial App!</h1>
                <div className="buttons">
                    <button className='logIn-button'
                    onClick={() => {
                        navigate('/log-in');
                    }}
                    >
                        Log In
                    </button>
                    <button
                        className='signUp-button'
                        onClick={() => {
                            navigate('/sign-up');
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </header>
            <section className='about'>
                <section>
                    <h3>Here you can manage your incomes</h3>
                    <img src={incomes} />
                </section>
                <section>
                    <h3>Also you can manage your expenses</h3>
                    <img src={expenses} />
                </section>
                <section>
                    <h3>There are options to see the relation against incomes and expenses</h3>
                    <img src={relation} />
                </section>
                <section>
                    <h3>Also it have options to set goals to get save or invest your money</h3>
                    <img src={goals} />
                </section>
            </section>
            <footer>
                &copy; 2024 Limitless
            </footer>
        </div>
    );
}