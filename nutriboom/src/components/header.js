import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { logOut } from '../actions/actions';


export default function Header(props) {
    let [title, setTitle] = useState(props.title);
    let navHidden = props.navHidden;
    let currentUser = useSelector(state => state.user);
    //console.log(currentUser.data);
    const dispatch = useDispatch();

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

    function signOut(){
        dispatch(logOut());

    }

    useEffect(() => {resetTitle();}, [])
    // Resets the header every half-second for a more dynamic header.
    // setInterval(resetTitle, 1000);

    if (navHidden) {
        return (
            <div id="header">
                <header className="header">
                    <h1 id="title">{title}</h1>
                </header>
            </div>
        )
    }
    else {
        return (
            <div id="header">
                <header className="header" >
                    <div className="topnav">
                        <div className="row">
                            <div className="column left">
                                <a ><Link to="./home">Home</Link></a>
                                <a ><Link to="./calendar">Calendar</Link></a>
                                <a ><Link to="./recipe-builder">Recipe Builder</Link></a>
                                <a ><Link to="./view-my-recipes">Recipe Viewer</Link></a>
                                <a onClick={signOut}><Link to="./login">Log Out</Link></a>
                                
                            </div>
                            <div className="column right">
                                <h1 id="title">{title}</h1>
                            </div>
                            <div className="column padding"></div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
