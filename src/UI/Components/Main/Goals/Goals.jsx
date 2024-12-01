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
                    new Goal<input type='text' placeholder='Enter a goal'/>
                </div>}
        </div>
    );
}