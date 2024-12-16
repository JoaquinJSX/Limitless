import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './Dashboard/Dashboard.jsx';
import LogIn from './LogIn/LogIn.jsx';
import SignUp from './SignUp/SignUp.jsx';
import UI from './UI/UI.jsx';
import './App.css';

function App() {

    const [users, setUsers] = useState([]);
    const [userAccount, setUserAccount] = useState(null);

    useEffect(() => {

        fetch("http://127.0.0.1:5000/users")
        .then(response => response.json())
        .then(data => setUsers(data.users));

    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/log-in' element={<LogIn users={users} setUserAccount={setUserAccount} />} />
                    <Route path="/finantial-control" element={<UI users={users} userAccount={userAccount} />} />
                    <Route path="/sign-up" element={<SignUp users={users} setUsers={setUsers}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;