"use strict";
// Define constants
const ROOT_ELEMENT = document.documentElement;
const STORAGE_KEY = 'color-mode';
const DATA_THEME = 'data-theme';
// Wrapper localStorage function
const setMode = (k, v) => {
    try {
        localStorage.setItem(k, v);
    }
    catch (e) {
        console.error(e);
    }
};
const removeMode = (k) => {
    try {
        localStorage.removeItem(k);
    }
    catch (e) {
        console.error(e);
    }
};
const getMode = (k) => {
    try {
        return localStorage.getItem(k);
    }
    catch (e) {
        console.error(e);
        return null;
    }
};
const validKeys = {
    dark: true,
    light: true,
};
const invertKeys = {
    dark: 'light',
    light: 'dark',
};
// Determin whether it is in media query mode
const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
};
// Reset to media query mode
const resetMode = () => {
    ROOT_ELEMENT.removeAttribute(DATA_THEME);
    removeMode(STORAGE_KEY);
};
// Get currently color mode
const getColorMode = () => {
    // Fetch value from localStorage
    const currentSetting = getMode(STORAGE_KEY);
    let mode;
    // If has value
    if (currentSetting && validKeys[currentSetting]) {
        // Invert it, get next mode
        mode = invertKeys[currentSetting];
    }
    else if (currentSetting === null) {
        // If has not value, inver media query
        mode = invertKeys[isDarkMode()];
    }
    else {
        return;
    }
    // Set value to localStorage
    setMode(STORAGE_KEY, mode);
    return mode;
};
//  Apply color mode
const applyMode = (mode = getMode(STORAGE_KEY)) => {
    if (mode === isDarkMode()) {
        resetMode();
    }
    else if (mode && validKeys[mode]) {
        ROOT_ELEMENT.setAttribute(DATA_THEME, mode);
    }
    else {
        resetMode();
    }
};
applyMode();
// console.log('test');
// export {
//   ROOT_ELEMENT,
//   DATA_THEME,
//   invertKeys,
//   isDarkMode,
//   getColorMode,
//   applyMode,
// };
