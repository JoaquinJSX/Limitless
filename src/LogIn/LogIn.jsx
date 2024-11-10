import './logIn.css';
import { useNavigate } from 'react-router-dom';
 
function LogIn(){
    const navigate = useNavigate();

    return(
    <div className="login-container">
        <h2>Log In</h2>
        User name: <input type="text" />
        Email: <input type="email" />
        Password: <input type="password" />
        <button>Get into</button>
        <a onClick={() => navigate('/SignIn')}>You don't have an account?</a>
        <footer>{new Date().getFullYear()} &copy; Limitless</footer>
    </div>);
}
export default LogIn;