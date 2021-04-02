import React, {useState} from 'react';
import FormInput from './form-input';

export default function SearchBar(props) {
    let name = props.name;      // The type of 'thing' we are searching for
    let isForm = props.isForm;

    if (isForm == null || isForm == undefined) {
        isForm = false;
    }

    let onSubmit = (e) => {
        props.onSubmit(e);
    }
    const handleChange = props.handleChange;

    if (isForm) {
        return (
            <div id="search">
                <form onSubmit={onSubmit}>

                    <FormInput type="text" name={name} display={`Search ${name}`} handleChange={handleChange} />

                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    } else {
        return (
            <div id="search">

                <FormInput type="text" name={name} display={`Search ${name}`} handleChange={handleChange} />

                <button onClick={onSubmit}>Search</button>
            </div>
        )
    }
}