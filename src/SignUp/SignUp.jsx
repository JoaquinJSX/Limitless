import { useNavigate } from "react-router-dom";
import './signUp.css';

function SignUp() {

    const navigate = useNavigate();

    return (
        <div className="signUp-container">
            <h2>Sign Up</h2>
            User name: <input type="text" />
            Email: <input type="email" />
            Password: <input type="password" />
            <button onClick={() => navigate('/')}>Create account</button>
            <footer>{new Date().getFullYear()} &copy; Limitless</footer>
        </div>
    )
}
export default SignUp;