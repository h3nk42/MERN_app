import React, {useContext} from "react";
import {DarkModeContext} from "../hooks/DarkModeContext";

export default () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const btnStyle = {
        cursor: 'pointer',
        fontFamily: 'Quicksand, sans-serif',
        padding: '7px 20px'
    }

    return (
        <button style={btnStyle} onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
};