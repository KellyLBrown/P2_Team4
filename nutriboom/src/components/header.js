import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
    let title = "Test Header";

    const resetTitle = (e) => {
        console.log(title);
        if (window.location.pathname == "/home" || window.location.pathname == "/calendar") {
            title = "Welcome, user!";
        } else if (window.location.pathname == "/login") {
            title = "Please log in or click 'Register' to sign up!";
        } else if (window.location.pathname == "/logout") {
            title = "Thank you for using Nutriboom! Have a nice day!";
        } else if (window.location.pathname == "/register") {
            title = "Please type out your information in the form below.";
        } else if (window.location.pathname == "/error") {
            title = "Oops! Something went wrong! Please try again later.";
        }
    }
    resetTitle();

    // Resets the header every half-second for a more dynamic header.
    //setInterval(Header, 1000);

    return (
        <div id="header">
            <header class="header">
                <h1 id="title">{title}</h1>
            </header>
            <nav>
                <ul id="nav-links">
                    <li class="link" className="link"><Link to="./home" onChange={resetTitle}>Home</Link></li>
                    <li class="link" className="link"><Link to="./calendar" onChange={resetTitle}>Calendar</Link></li>
                    <li class="link" className="link"><Link to="./logout" onChange={resetTitle}>Log Out</Link></li>
                </ul>
            </nav>
        </div>
    )
}
