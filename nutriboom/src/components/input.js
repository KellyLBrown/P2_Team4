import React, {useState} from "react";
import {Link, BrowserRouter as Route, Redirect} from "react-router-dom";
// import { fetchUser } from "../actions/postactions";
import Home from './home';


let clicked = false;
console.log(clicked);

// export const getByCredentials = async (username, password) => {
//     let user = fetchUser();
//     //console.log(user);
//     console.log(password);
//     console.log(user.password);
//     if (user.username == username && user.password == password) {
//         //console.log(user);
//         return user;
//     }
//     return null;
// }

export default function Login(props) {
    const clicked = props.clicked;

    if (!clicked) {
        return (
            <div className="col-sm">
                <input type="submit" value="Log In" />
            </div>
        )
    }
    else {
        return (
            <div className="col-sm">
                <p id="warnMessage">Invalid Credentials! Please try again!</p>
                <input type="submit" value="Log In" />
            </div>
        )
    }


    // let uname = props.uname;
    // let pword = props.pword;
    // let cond;
    // if (props.cond == undefined) {
    //     cond = -1;
    // } else {
    //     cond = props.cond;
    // }
    // let res;

    // const [logged, setLogged] = useState({uname: null, pword: null});
    // const getUser = async (e) => {
    //     e.preventDefault();
    //     //res = await getByCredentials(uname, pword);
    //     console.log(res);
        
    //     if (res == null) {
    //         console.log("res is null");
    //         cond = 0;
    //         console.log(cond);
    //         setLogged({uname: undefined, pword: undefined});
    //         console.log(logged);
    //         return (
    //             <Login uname={logged.username} pword={logged.password} cond={cond} />
    //         )
    //     } else if (res.username == uname && res.password == pword) {
    //         console.log("correct credentials");
    //         cond = 1;
    //         console.log(cond);
    //         setLogged({uname: res.username, pword: res.password});
    //         console.log(logged);
    //         return (
    //             <Login uname={logged.username} pword={logged.password} cond={cond} />
    //         )
    //     } else {
    //         console.log("incorrect credentials");
    //         cond = 2;
    //         console.log(cond);
    //         setLogged({uname: undefined, pword: undefined});
    //         console.log(logged);
    //         return (
    //             <Login uname={logged.username} pword={logged.password} cond={cond} />
    //         )
    //     }
    // }

    // console.log(res);
    // console.log(logged);
    // console.log(cond);
    // if (cond == -1 || cond == 0) {
    //     return (
    //         <div>
    //             <button class="btn btn-primary" onClick={getUser}>Log In</button>
    //         </div>
    //     )
    // } else if (cond == 1) {
    //     return (
    //         <Redirect to="/home" />
    //     )
    // } else if (cond == 2) {
    //     return (
    //         <div>
    //             <p id="warnMessage">Invalid Credentials! Please try again!</p>
    //             <button class="btn btn-primary" onClick={getUser}>Log In</button>
    //         </div>
    //     )
    // }
}