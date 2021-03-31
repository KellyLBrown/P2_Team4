import React, {useState} from 'react';
import FormInput from './form-input';

export default function SearchBar(props) {
    let name = props.name;      // The type of 'thing' we are searching for
    let onSubmit = (e) => {
        props.onSubmit(e);
    }
    const handleChange = props.handleChange;


    return (
        <div id="search">
            <form onSubmit={onSubmit}>
                <FormInput type="text" name={`Search ${name}`} handleChange={handleChange} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}