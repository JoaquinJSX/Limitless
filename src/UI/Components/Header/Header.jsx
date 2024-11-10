import { useState } from 'react';
import './header.css';

export default function Header() {

    const [user, setUser] = useState('Joaquin')

    return(
        <header>
            <h1>Limitless / {user}</h1>
            <hr />
            <h2>Month: November</h2>
        </header>
    );
}