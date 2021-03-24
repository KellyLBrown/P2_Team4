import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function Meal(props) {
    let name = props.name;
    let ingredients = props.ingredients;

    return (
        <div class="recipe">
            <p><b>{name}</b></p>
            <p>{ingredients}</p>
        </div>
    )
}