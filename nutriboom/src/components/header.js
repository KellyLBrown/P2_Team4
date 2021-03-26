import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
    let title = props.title;

    return (
        <div id="header">
            <header class="header">
                <h1 id="title">{title}</h1>
            </header>
            <nav>
                <ul id="nav-links">
                    <li class="link" className="link"><Link to="./home">Home</Link></li>
                    <li class="link" className="link"><Link to="./calendar">Calendar</Link></li>
                    <li class="link" className="link"><Link to="./logout">Log Out</Link></li>
                </ul>
            </nav>
        </div>
    )
}
