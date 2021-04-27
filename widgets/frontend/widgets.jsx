import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    const root = <div><Clock /></div>;
    ReactDOM.render(root, main);
});