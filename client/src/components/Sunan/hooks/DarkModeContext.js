import React, {createContext, useState, useEffect} from "react";

export const DarkModeContext = createContext({
    darkMode: true,
    toggleDarkMode: () => {
    }
});

export default props => {
    const [darkMode, setDarkMode] = useState(getDefaultTheme());

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode))
    }, [darkMode])

    function getDefaultTheme() {
        const selectedTheme = JSON.parse(localStorage.getItem('dark'))
        return selectedTheme || false
    }

    function toggleDarkMode() {
        setDarkMode(darkMode => !darkMode);
    }

    return (
        <DarkModeContext.Provider
            value={{
                darkMode,
                toggleDarkMode
            }}>
            {props.children}
        </DarkModeContext.Provider>
    );
};
