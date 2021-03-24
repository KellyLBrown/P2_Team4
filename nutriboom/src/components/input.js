import React, {useState} from "react";
import {Link, BrowserRouter as Route, Redirect} from "react-router-dom";
import { fetchUser } from "../actions/postactions";
import Home from './home';


let clicked = false;
console.log(clicked);

export const getByCredentials = async (username, password) => {
    let user = fetchUser();
    //console.log(user);
    console.log(password);
    console.log(user.password);
    if (user.username == username && user.password == password) {
        console.log(user);
        return user;
    }
    return null;
}

export default function Login(props) {
    let uname = props.uname;
    let pword = props.pword;

    const [logged, setLogged] = useState({uname: null, pword: null});
    const getUser = async (e) => {
        e.preventDefault();
        let res = await getByCredentials(uname, pword);
        //console.log(res);
        if (res == null) {
            setLogged({uname: undefined, pword: undefined});
        } else if (res.username == uname && res.password == pword) {
            setLogged({uname: res.username, pword: res.password});
        } else {
            setLogged({uname: undefined, pword: undefined});
        }
        clicked = true;
        console.log(clicked);

        //console.log(logged);
        if (!clicked) {
            return (
                <div>
                    <button class="btn btn-primary" onClick={getUser}>Log In</button>
                </div>
            )
        } else if ((logged.uname != uname || logged.pword != pword)) {
            console.log("Render warning message");
            return (
                <div>
                    <p id="warnMessage">Invalid Credentials! Please try again!</p>
                    <button class="btn btn-primary" onClick={getUser}>Log In</button>
                </div>
            )
        } else {
            console.log('Success');
            return (
                <Home />
            )
        }
    }

    // if (!clicked) {
    //     return (
    //         <div>
    //             <button class="btn btn-primary" onClick={getUser}>Log In</button>
    //         </div>
    //     )
    // }
    if ((logged.uname != uname || logged.pword != pword)) {
        console.log("Render warning message");
        return (
            // <div>
            //     <p id="warnMessage">Invalid Credentials! Please try again!</p>
            //     <button class="btn btn-primary" onClick={getUser}>Log In</button>
            // </div>
            <Home /> 
        )
    }
}