"use strict";
// import {
//   ROOT_ELEMENT,
//   DATA_THEME,
//   invertKeys,
//   isDarkMode,
//   getColorMode,
//   applyMode,
// } from './darkMode.js';
const btn = document.querySelector('.switch-mode');
const setText = () => {
    const mode = ROOT_ELEMENT.getAttribute(DATA_THEME);
    if (btn)
        mode
            ? (btn.textContent = `${invertKeys[mode]} mode!`)
            : (btn.textContent = `${invertKeys[isDarkMode()]} mode!`);
};
btn &&
    btn.addEventListener('click', () => {
        applyMode(getColorMode());
        setText();
    });
setText();
