import { useNavigate } from "react-router-dom";
import './signUp.css';
import { useState } from "react";

function SignUp() {

    const navigate = useNavigate();
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function createUser() {
        const user = {
            userName,
            password,
        }

        const url = "http://127.0.0.1:5000/create_user";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }
        const response = await fetch(url, options);
        if(response.status !== 201 && response.status !== 200) {
            const data = await response.json();
            alert(data.message);
        } else {
            alert("User created successfully");
            navigate('/finantial-control');
        }
    }

    return (
        <div className="signUp-container">
            <h2>Sign Up</h2>
            User name: <input
                type="text"
                value={userName}
                onChange={e => setUsername(e.target.value)}
            />
            Password: <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={createUser}>Create account</button>
            <footer>{new Date().getFullYear()} &copy; Limitless</footer>
        </div>
    )
}
export default SignUp;