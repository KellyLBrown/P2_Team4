import React, {useState} from 'react';
import {fetchUser} from '../actions/actions';

export default function FormInput(props) {
    let type = props.type;
    let value = props.value;

    const handleChange = props.handleChange;
    
    return (
        <div class="col-sm" className="col-sm">
            <label for={value}>{value}: </label>
            <input type={type} value={value} onChange={handleChange}/>
        </div>
    )
}