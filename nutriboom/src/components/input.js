import React, {useState} from "react";

export default function Login(props) {
    let uname = props.uname;
    let pword = props.pword;

    const [logged, setLogged] = useState({uname: null, pword: null});
    const getUser = async () => {
        let res = await getByCredentials(uname, pword);
        console.log(res.username);
        if (res.username == uname && res.password == pword) {
            setLogged({uname: res.username, pword: res.password});
        }
    }

    return (
        <div>
            <button class="btn btn-primary" onClick={getUser}>Log In</button>
        </div>
    )
}