import { useState } from 'react';
import './Goals.css';

export default function Goals() {

    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState('');
    const [isShowingGoals, setIsShowingGoals] = useState(true);

    return (
        <div className='goals'>
            {isShowingGoals ?
                <div className='goals-container'>
                    <button
                        className='add'
                        onClick={() => setIsShowingGoals(false)}
                    >
                        +
                    </button>
                    {goals.length != 0 ?
                        <ul>
                            {goals.map((goal, index) => <li key={index}>{goal}</li>)}
                        </ul> :
                        <h2>There is no goals to show.</h2>}
                </div> :
                <div className='create-goal-field'>
                    <button className='quit'>x</button>
                    <h2>Write a new goal</h2>
                    <div className='input-field'>
                        <input type='text'
                         placeholder='Enter a goal'
                         value={newGoal}
                         onChange={e => setNewGoal(e.target.value)}
                        />
                        <button
                            className='add-goal'
                            onClick={() => {
                                setGoals(g => [...g, newGoal]);
                                setIsShowingGoals(true);
                                setNewGoal('');
                            }}
                        >
                            Add
                        </button>
                    </div>
                </div>}
        </div>
    );
}