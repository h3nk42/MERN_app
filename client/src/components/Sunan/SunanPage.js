import React, {useState} from 'react'
import Header from "../Header/Header";
import '../../styles/ImageStyleBg.css';

const SunanPage = () => {

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
        backgroundColor: darkMode ? "black" : "white",
    }

    return (
        <div className='backgroundDiv'>
            <img
                src={'https://images.unsplash.com/photo-1591324822933-88ec781f419a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80'}
                alt={'The beauty of nature'}
                className='backgroundImg'
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
                <button style={{backgroundColor: "white"}} onClick={enableDarkMode}>Click me!</button>
            </div>
        </div>
    )
}

export default SunanPage
