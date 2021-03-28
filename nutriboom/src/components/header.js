import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Header(props) {
    let title = props.title;
    let navHidden = props.navHidden;

    // const resetTitle = (e) => {
    //     console.log(title);
    //     if (window.location.pathname == "/home" || window.location.pathname == "/calendar") {
    //         title = "Welcome, user!";
    //     } else if (window.location.pathname == "/login") {
    //         title = "Please log in or click 'Register' to sign up!";
    //     } else if (window.location.pathname == "/logout") {
    //         title = "Thank you for using Nutriboom! Have a nice day!";
    //     } else if (window.location.pathname == "/register") {
    //         title = "Please type out your information in the form below.";
    //     } else if (window.location.pathname == "/error") {
    //         title = "Oops! Something went wrong! Please try again later.";
    //     }
    // }
    // resetTitle();

    // Resets the header every half-second for a more dynamic header.
    //setInterval(Header, 1000);

    if (navHidden) {
        return (
            <div id="header">
                <header class="header">
                    <h1 id="title">{title}</h1>
                </header>
            </div>
        )
    }
    else {
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
}
