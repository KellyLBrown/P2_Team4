import React, {useState} from 'react';
import {fetchUser} from '../actions/actions';

export default function FormInput(props) {
    let type = props.type;
    let name = props.name;

    //console.log(type);
    //console.log(name);

    const handleChange = props.handleChange;
  //  console.log(handleChange);
    
    return (
        <div class="col-sm" className="col-sm">
            <label>{name}: </label>
            <input type={type} name={name} onChange={handleChange}/>
        </div>
    )
}