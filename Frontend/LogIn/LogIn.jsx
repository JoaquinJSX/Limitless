import { useEffect, useState } from 'react';
import './logIn.css';
import { useNavigate } from 'react-router-dom';

function LogIn({ users, setUserAccount }) {

    const navigate = useNavigate();
    const [userField, setUserField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    function getIn() {
        let userId = 0;

        for (let i in users) {
            if (users[i].userName != userField) {
                userId++;
                if (userId == users.length) {
                    alert('Nombre de usuario no encontrado');
                }
            } else {
                if (users[userId].password != passwordField) {
                    alert('Incorrect password');
                } else {
                    setUserAccount(userId);
                    navigate('/finantial-control');
                }
            }
        }
    }

    return (
        <div className="login-container">
            <h2>Log In</h2>
            User name: <input type="text" value={userField} onChange={e => setUserField(e.target.value)} />
            Password: <input type="password" value={passwordField} onChange={e => setPasswordField(e.target.value)}/>
            <button onClick={getIn}>Get into</button>
            <a onClick={() => navigate('/sign-up')}>You don't have an account?</a>
            <footer>{new Date().getFullYear()} &copy; Limitless</footer>
        </div>);
}
export default LogIn;