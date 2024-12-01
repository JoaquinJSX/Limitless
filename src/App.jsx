import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LogIn from './LogIn/LogIn.jsx';
import SignIn from './SignIn/SignIn.jsx';
import UI from './UI/UI.jsx';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LogIn />} />
                    <Route path="/finantial-control" element={<UI />} />
                    <Route path="/sign-in" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;