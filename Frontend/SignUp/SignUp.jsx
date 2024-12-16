import { useNavigate } from "react-router-dom";
import './signUp.css';
import { useState } from "react";

function SignUp({ users, setUsers }) {

    const navigate = useNavigate();
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function fetchUsers() {
        fetch("http://127.0.0.1:5000/users")
        .then(response => response.json())
        .then(data => setUsers(data.users));
    }

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

        if (users.some(user => user.userName === userName)) {
            alert('User name already exists');
        } else if (password.length < 4) {
            alert('Password must have at least 4 characters');
        } else {
            const response = await fetch(url, options);
            if (response.status !== 201 && response.status !== 200) {
                const data = await response.json();
                alert(data.message);
            } else {
                fetchUsers();
                navigate('/log-in');
            }
        }
        /*if (users[i].userName === userName) {
            alert("Username already exists");
            break;
        } else if (password.length < 4) {
            alert("Password must have at least 4 characters");
            break;
        } else {
            const response = await fetch(url, options);
            if (response.status !== 201 && response.status !== 200) {
                const data = await response.json();
                alert(data.message);
                break;
            } else {
                await setUserAccount(users[i]);
                navigate('/finantial-control');
                break;
            }
        }*/
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