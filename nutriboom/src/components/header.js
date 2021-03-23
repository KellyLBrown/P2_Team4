import React, {useState} from 'react';

export default function Header(props) {
    let title = props.title;

    return (
        <header class="header">
            <h1 id="title">{title}</h1>
        </header>
    )
}
