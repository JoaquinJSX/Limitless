import { useNavigate } from "react-router-dom";
import './signIn.css';

function SignIn() {

    const navigate = useNavigate();

    return (
        <div className="signIn-container">
            <h2>Sign In</h2>
            User name: <input type="text" />
            Email: <input type="email" />
            Password: <input type="password" />
            <button onClick={() => navigate('/')}>Create account</button>
            <footer>{new Date().getFullYear()} &copy; Limitless</footer>
        </div>
    )
}
export default SignIn;