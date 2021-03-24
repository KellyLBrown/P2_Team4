import React, {useState} from 'react';
import Login from './input';

export default function LoginForm(props) {
    const [user, setUser] = useState({username: null, password: null});

    function handleChange(e) {
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

    return (
        <div class="container-sm" id="login-container">
            <form>
               <label for="username">Username: </label>
               <input name='username' type='text' onChange={handleChange} />
               <br />
               <label for="password">Password: </label>
               <input name='password' type='password' onChange={handleChange}/>
               <Login uname={user.username} pword={user.password} />
           </form>
        </div>
    )
}