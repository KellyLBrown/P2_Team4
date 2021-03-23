import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function Meal(props) {
    let title = props.title;
    let recipe = props.recipe;

    return (
        <div class="recipe">
            <p><b>{this.props.title}</b></p>
            <p>{this.props.recipe}</p>
        </div>
    )
}