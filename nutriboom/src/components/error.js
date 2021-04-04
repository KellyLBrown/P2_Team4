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

    

    

    if (logged) {
        return (
            
            <div className="container" style={{
                width: "100%",
                height: "100%",
                backgroundImage: "url('https://nutriboom.s3.us-east-2.amazonaws.com/spilled.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom"
              }}>
                <h1>Error</h1>
                <h6>Someone made a mistake.</h6>
                
                <p>Return <Link to="./home">home</Link>.</p>
            </div>
        )
    }
    else {
        return (
        <div className="container" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://nutriboom.s3.us-east-2.amazonaws.com/spilled.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
          }}>
            <h1>Error</h1>
            <h6>Someone made a mistake.</h6>
            
            <p>Return to <Link to="./login">login</Link>.</p>
        </div>
        )
    }
}