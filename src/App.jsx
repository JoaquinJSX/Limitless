import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LogIn from './LogIn/LogIn.jsx';
import SignIn from './SignIn/SignIn.jsx';
import UI from './UI/UI.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<UI />} />
                    <Route path='/LogIn' element={<LogIn />} />
                    <Route path='/SignIn' element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;