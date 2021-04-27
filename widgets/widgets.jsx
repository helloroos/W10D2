import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMcontentLoaded', () => {
    const root = document.getElementById('root');
    const dummy = <h1>Hello</h1>;
    ReactDOM.render(dummy, root);
});