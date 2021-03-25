import React, {useState} from 'react';

export default function FormInput(props) {
    return (
        <div className="col-sm">
            <label for={props.name}>{`${props.name}: `}</label>
            <input type={props.type} name={props.name} onChange={props.onChange} />
        </div>
    )
}