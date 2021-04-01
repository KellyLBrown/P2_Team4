import React, {useState} from 'react';
import {fetchUser} from '../actions/actions';

export default function FormInput(props) {
    let type = props.type;
    let name = props.name;
    
    // Only use these if the type property is "radio2".
    let val1;
    let val2;


    if (props.val1 != null && props.val1 != undefined) {
        val1 = props.val1;
    }
    if (props.val2 != null && props.val2 != undefined) {
        val2 = props.val2;
    }

    //console.log(type);
    //console.log(name);

    const handleChange = props.handleChange;
  //  console.log(handleChange);
    
    if (type == "textarea") {
        return (
            <div className="col-sm">
                <label>{name}: </label>
                <textarea name={name} onChange={handleChange}></textarea>
            </div>
        )
    } else if (type == "ingredient") {
        return (
            <div className="col-sm">
                <label>{name}: </label>
                <input type="number" name="measurement" placeholder="1" onChange={handleChange} />
                <input type="text" name="unit" placeholder="Type a measurement" onChange={handleChange} />
                <input type="text" name={name} placeholder="Type an ingredient name" onChange={handleChange} />
            </div>
        )
    } else if (type == "radio2") {
        return (
            <div className="col-sm">
                <input type="radio" name={name} value={val1} onChange={handleChange}/>
                <label htmlFor={name}>{name}: </label>                
                <input type="radio" name={name} value={val2} onChange={handleChange}/>
                <label htmlFor={name}>{name}: </label>
            </div>
        )
    } 
    else {
        return (
            <div class="col-sm" className="col-sm">
                <label>{name}: </label>
                <input type={type} name={name} onChange={handleChange}/>
            </div>
        )
    }
}