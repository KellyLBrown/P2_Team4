import React, {useState} from 'react';
import { fetchUser } from '../actions/actions';
import FormInput from './form-input';
import {Redirect, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { AUTH_LOGIN } from '../actions/types';
import { connect, useSelector } from 'react-redux';
import {store} from '../store';

/*export default*/ function LoginForm(props) {
    // const state = useSelector(store => store);
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState({username: null, password: null});
    let currentUser = useSelector(state => state.user);
    //console.log(currentUser);
    
    const handleChange = (e) => {
        // //console.log(e.target.value);
        // console.log(e.target.name);
        // //console.log(e.target);
        if (e.target.name == 'Username') {
            setUser({username: e.target.value, password:user.password});
        } else if (e.target.name == 'Password') {
            setUser({username: user.username, password: e.target.value});
        } else {
            setUser({username: user.username, password: user.password})
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        //store.dispatch(fetchUser());
        await fetchUser();
        currentUser = store.getState().user.currentUser;
        //console.log(store.getState().user.currentUser);
        //console.log(currentUser.username == user.username);
        //console.log(currentUser.password == user.password);
        //console.log(currentUser.username == user.username && currentUser.password == user.password);
        if (user.username == currentUser.username && user.password == currentUser.password) {
           // console.log("In redirect to home");
            setLogged(true);
        } else {
            //console.log("In redirect to login");
        }
    }

    if (logged) {
        return (
            <Redirect to="/home" />
        )
    }
    else {
        return (
            <div id="login" className="row" class="row">
                <form onSubmit={handleSubmit}>
                    <FormInput type="text" name="Username" value={user.username} handleChange={handleChange} />
                    <FormInput type="password" name="Password" value={user.password} handleChange={handleChange} />
                    <input type="submit" value="Log in" />
                </form>
            </div>
        )
    }
}

// LoginForm.propTypes = {
//     fetchUser: PropTypes.func.isRequired,
//     currentUser: PropTypes.object,
//     isLoggedIn: PropTypes.bool.isRequired
// }

// const mapStateToProps = state => ({
//     currentUser: state.props.user,
//     isLoggedIn: state.props.isLoggedIn
// })

export default LoginForm;