import React, {useState} from 'react';
import FormInput from './form-input';

export default function SearchBar(props) {
    let name = props.name;      // The type of 'thing' we are searching for
    let onChange = props.onChange;
    let onSubmit = props.onSubmit;

    return (
        <div id="search">
            <form onSubmit={onSubmit}>
                <FormInput type="text" name={`Search ${name}`} onChange={onChange} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}