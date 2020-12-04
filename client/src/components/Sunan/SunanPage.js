import React, {useState, useEffect} from 'react'
import Helmet from "react-helmet";
import Header from "../Header/Header";
import '../../styles/ImageStyleBg.css';

const SunanPage = () => {

    const storedDarkMode = localStorage.getItem("DARK_MODE");

    const [darkMode, setDarkMode] = useState(storedDarkMode);

    const enableDarkMode = () => {
        setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        console.log(`Is in dark mode? ${darkMode}`);
        localStorage.setItem("DARK_MODE", darkMode);
    }, [darkMode]);

    const colorScheme = {
        main: '#264653',
        second: '#2a9d8f',
        third: '#e9c46a',
        fourth: '#f4a261',
        fifth: '#e76f51'
    }

    const headerStyle = {
        fontFamily: 'Quicksand, sans-serif',
        backgroundColor: darkMode === 'dark' ? "black" : "white"
    }

    const btnStyle = {
        cursor: 'pointer',
        fontFamily: 'Quicksand, sans-serif',
        background: darkMode === 'dark' ? "black" : "white",
        color: darkMode === 'dark' ? "white" : "black",
        padding: '7px 20px'
    }

    return (
        <div>
            <Helmet>
                <title>ShareYourPlant | Sunan</title>
            </Helmet>
            <img
                src={'https://images.unsplash.com/photo-1591324822933-88ec781f419a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80'}
                className='backgroundImg'
                alt='The beauty of nature'
            />
            <div style={headerStyle}>
                <Header dark={darkMode} colorScheme={colorScheme}/>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: "80vh",
            }}>
                <button style={btnStyle} onClick={enableDarkMode}>
                    {darkMode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </div>
        </div>
    )
}

export default SunanPage
