import React, {useState, useEffect} from 'react';
import { fetchUser } from '../actions/actions';
import FormInput from './form-input';
import {Redirect, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { AUTH_LOGIN } from '../actions/types';
import { connect, useSelector } from 'react-redux';
import {store} from '../store';

export default function LoginForm(props) {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState({username: null, password: null});
    let currentUser = useSelector(state => state.user);
    
    const handleChange = (e) => {
        if (e.target.name == 'Username') {
            setUser({username: e.target.value, password:user.password});
        } else if (e.target.name == 'Password') {
            setUser({username: user.username, password: e.target.value});
        } else {
            setUser({username: user.username, password: user.password})
        }
    }
    
    useEffect(() => {
        if (currentUser.currentUser == null) {
            setLogged(false);
        } else {
            if (currentUser.currentUser.data == null || currentUser.currentUser.data == "") {
                setLogged(false);
            } else {
                setLogged(true);
                setUser(currentUser.currentUser);
            }}
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let getUser = await fetchUser(user.username, user.password);
        await getUser(store.dispatch);
    }

    

    if (logged) {
        return (
            <Redirect to="/home" />
        )
    }
    else {
        return (
        <div className="container" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://nutriboom.s3.us-east-2.amazonaws.com/spices+in+spoons.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
          }}>
            <div id="login" className="row">
                <form className="login" onSubmit={handleSubmit}>

                    <FormInput type="text" name="Username" value={user.username} handleChange={handleChange} />
                    <FormInput type="password" name="Password" value={user.password} handleChange={handleChange} />
                    <input type="submit" value="Log in" />
                </form>
            </div>
            <br />
            <p>Don't have an account? Please <Link to="./register">register</Link>.</p>
        </div>
        )
    }
}