import React, {useState} from 'react';
import {registerUser} from '../actions/actions';
import {store} from '../store';
import FormInput from './form-input'

export default function RegisterForm(props) {

    const [user, setUser] = useState({username: null, password: null, firstname: null, lastname: null, email: null});

    const handleChange = (e) => {
        if (e.target.name == 'Username') {
            setUser({username: e.target.value, password:user.password, firstname:user.firstname, lastname:user.lastname, email:user.email});
        }
        
        if (e.target.name == 'Password') {
            setUser({username: user.username, password: e.target.value, firstname:user.firstname, lastname:user.lastname, email:user.email});
        }
        if (e.target.name == 'firstName') {
            setUser({username: user.username, password:user.password, firstname: e.target.value, lastName:user.lastname, email:user.email});
        }
        if (e.target.name == 'lastName') {
            setUser({username: user.username, password:user.password, firstname:user.firstname, lastname: e.target.value, email:user.email});
        }
        if (e.target.name == 'email') {
            setUser({username: user.username, password:user.password, firstname:user.firstname, lastname:user.lastname, email: e.target.value});
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        let getUser = await registerUser(user.username, user.password, user.firstname, user.lastname, user.email);
        await getUser(store.dispatch);
    }

    return (
        <div id="register-form" className="row" class="row">
            <form onSubmit={handleRegister}>
                <FormInput type="text" name="Username" value={user.username} handleChange={handleChange} />
                <FormInput type="password" name="Password" value={user.password} handleChange={handleChange} />
                <FormInput type="text" name="firstName" value={user.firstname} handleChange={handleChange} />
                <FormInput type="text" name="lastName" value={user.lastname} handleChange={handleChange} />
                <FormInput type="text" name="email" value={user.email} handleChange={handleChange} />
                <input type="submit" value="register" />
            </form>
        </div>
    )
}