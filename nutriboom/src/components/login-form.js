import React, {useState} from 'react';
import { fetchUser } from '../actions/actions';
import FormInput from './form-input';
import {Redirect} from 'react-router-dom';

export default function LoginForm(props) {
    const [user, setUser] = useState({uname: null, pword: null});

    function handleChange(e) {
        console.log(e.target.value);
        if (e.target.name == 'uname') {
            setUser({uname:e.target.value, pword:user.pword});
        } else if (e.target.name == 'pword') {
            setUser({uname: user.uname, pword: e.target.value});
        } else {
            setUser({uname: user.uname, pword: user.pword})
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let currentUser = await fetchUser();
        console.log(currentUser);
        if (user.uname == currentUser.username && user.pword == currentUser.password) {
            <Redirect to="./home" />
        } else {
            <Redirect to="./login" />
        }
    }

    return (
        <div id="login" className="row" class="row">
            <form onSubmit={handleSubmit}>
                <FormInput type="text" value={user.uname} onChange={handleChange} />
                <FormInput type="password" value={user.uname} onChange={handleChange} />
                <input type="submit" value="Log in" />
            </form>
        </div>
    )
}