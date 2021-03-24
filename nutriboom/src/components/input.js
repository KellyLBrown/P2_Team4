import React, {useState} from "react";
import { fetchUser } from "../actions/postactions";

export const getByCredentials = async (username, password) => {
    let user = fetchUser();
    //console.log(user);
    console.log(username);
    console.log(user.username);
    if (user.username == username /*&& user.password == password*/) {
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
        let res = await getByCredentials(uname, pword);
        //console.log(res);
        if (res.username == uname && res.password == pword) {
            setLogged({uname: res.username, pword: res.password});
        }
        //console.log(logged);
        e.preventDefault();
    }

    return (
        <div>
            <button class="btn btn-primary" onClick={getUser}>Log In</button>
        </div>
    )
}