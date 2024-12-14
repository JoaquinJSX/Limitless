import './header.css';

export default function Header({users, userAccount}) {

    return(
        <header>
            <h1>Limitless / {users[userAccount].userName}</h1>
            <hr />
            <h2>Month: November</h2>
        </header>
    );
}