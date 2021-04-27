import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    const root = <Clock />;
    ReactDOM.render(root, main);
});