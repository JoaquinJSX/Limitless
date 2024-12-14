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

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard setUsers={setUsers}/>} />
                    <Route path='/log-in' element={<LogIn users={users} setUserAccount={setUserAccount}/>} />
                    <Route path="/finantial-control" element={<UI users={users} userAccount={userAccount}/>} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;