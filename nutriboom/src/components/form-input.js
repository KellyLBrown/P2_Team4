import React, {useState} from 'react';

export default function FormInput(props) {
    let type = props.type;
    let name = props.name;
    
    // Only use these if the type property is "radio2".
    let checked;
    let val1;
    let val2;

    if (type == "radio2") {
        //checked = props.checked;
        val1 = props.val1;
        val2 = props.val2;
    }

    const handleChange = props.handleChange;
    
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
                <input type="radio" name={name} value={val1} checked={checked} onChange={handleChange}/>
                <label htmlFor={name}>{val1}: </label>                
                <input type="radio" name={name} value={val2} checked={checked} onChange={handleChange}/>
                <label htmlFor={name}>{val2}: </label>
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