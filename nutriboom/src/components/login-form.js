import React, {useState} from 'react';
import Login from './input';
import FormInput from './form-input';
import { fetchUser } from "../actions/postactions";
import { Redirect } from 'react-router';

export const getByCredentials = async (username, password) => {
    let user = fetchUser();
    //console.log(user);
    console.log(password);
    console.log(user.password);
    if (user.username == username && user.password == password) {
        //console.log(user);
        return user;
    }
    return null;
}

export default function LoginForm(props) {
    let clicked = false;
    const [user, setUser] = useState({username: null, password: null});

    function handleChange(e) {
        clicked = false;
        let value = e.target.value;
        setUser({username: user.username, password: user.password});
        if (e.target.name == 'username') {
            setUser({username:value, pword: user.password});
            console.log(user.username);
        } else if (e.target.name == 'password') {
            setUser({username:user.username, password:value});
            console.log(user.password);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        clicked = true;
        const user = await getByCredentials(user.username, user.password);
        console.log(user);
        if (user != null) {
            <Redirect to="./home" />
        }
        else {
            <Redirect to="./login?attempt=failed" />
        }
    }

    return (
        <div class="container-sm" id="login-container">
            <form onSubmit={handleSubmit}>
               <FormInput type="text" name="Username" onChange={handleChange} />
               <br />
               <FormInput type="text" name="Password" onChange={handleChange} />
               <Login clicked={clicked}/>
           </form>
        </div>
    )
}