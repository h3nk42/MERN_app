import React, {useState} from 'react';
import Helmet from "react-helmet";
import Header from "../Header/Header";

const About = () => {

    const [darkMode, setDarkMode] = useState(false);

    const enableDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const colorScheme = {
        main: '#264653',
        second: '#2a9d8f',
        third: '#e9c46a',
        fourth: '#f4a261',
        fifth: '#e76f51'
    }

    const headerStyle = {
        fontFamily: 'Quicksand, sans-serif',
        backgroundColor: darkMode ? "black" : "white"
    }

    return (
        <div>
            <Helmet>
                <title>ShareYourPlant | About</title>
            </Helmet>
            <div style={headerStyle}>
                <Header dark={darkMode} colorScheme={colorScheme}/>
            </div>
        </div>
    )
}

export default About;