import React, {useState} from 'react';
import {updateUser} from '../actions/actions';
import {store} from '../store';
import FormInput from './form-input'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from './header';


export default function Settings(props) {

    const [user, setUser] = useState(useSelector(state => state.user.currentUser.data));
    const [upass, setUpass] = useState('');
    const[confirm, setConfirm] = useState('');
    console.log(user);
    console.log(upass);
    const handleChange = (e) => {
        if(e.target.name == 'Password') {
            setConfirm(e.target.value);
        }
        if (e.target.name == 'confirm') {
            if(confirm == e.target.value){
                setUpass(e.target.value);
            }
        }
        
        if (e.target.name == 'email') {
            setUser({id: user.id, username: user.username, firstname:user.firstName, lastname:user.lastName, email: e.target.value});
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        let getUser = await updateUser(user.id, upass, user.email);
        await getUser(store.dispatch);
    }

    return (
        <div  className="row" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://nutriboom.s3.us-east-2.amazonaws.com/spices+in+spoons.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
          }}>
            <Header />
            <form  id="register-form" onSubmit={handleUpdate}>
                <FormInput type="password" name="Password" value={user.password} handleChange={handleChange} />
                <FormInput type="password" name="confirm" value={user.confirm} handleChange={handleChange} />
                <FormInput type="email" name="email" value={user.email} handleChange={handleChange} />
                <input type="submit" value="Update" />
            </form>


        </div>
    )
}
