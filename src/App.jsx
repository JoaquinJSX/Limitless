import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard.jsx';
import LogIn from './LogIn/LogIn.jsx';
import SignUp from './SignUp/SignUp.jsx';
import UI from './UI/UI.jsx';
import './App.css';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/log-in' element={<LogIn />} />
                    <Route path="/finantial-control" element={<UI />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;