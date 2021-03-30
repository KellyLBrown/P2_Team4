import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Header(props) {
    let [title, setTitle] = useState(props.title);
    let navHidden = props.navHidden;
    let currentUser = useSelector(state => state.user);
    //console.log(currentUser.data);

    const resetTitle = () => {
        //console.log(currentUser.currentUser);
        //console.log("In resetTitle func");
        if (currentUser.currentUser != null) {
            //console.log("*")
            setTitle(`Welcome, ${currentUser.currentUser.data.firstName}!`);
        } else {
            //console.log("**")
            setTitle(props.title);
        }
    }

    useEffect(() => {resetTitle();}, [])
    // Resets the header every half-second for a more dynamic header.
    // setInterval(resetTitle, 1000);

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
