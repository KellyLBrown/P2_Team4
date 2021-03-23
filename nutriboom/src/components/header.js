import React, {useState} from 'react';

export default function Header(props) {
    let title = props.title;

    return (
        <div id="header">
            <header class="header">
                <h1 id="title">{title}</h1>
            </header>
            <nav>
                {/*TODO populate the nav bar*/ }
            </nav>
        </div>
    )
}
