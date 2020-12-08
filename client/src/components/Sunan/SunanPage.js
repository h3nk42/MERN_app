import React, {useState, useEffect} from 'react'
import Helmet from "react-helmet";
import Header from "../Header/Header";
import Layout from "./components/Layout";
import '../../styles/ImageStyleBg.css';

const SunanPage = () => {

    const colorScheme = {
        main: '#264653',
        second: '#2a9d8f',
        third: '#e9c46a',
        fourth: '#f4a261',
        fifth: '#e76f51'
    }

    const headerStyle = {
        fontFamily: 'Quicksand, sans-serif',
    }

    return (
        <Layout>
            <Helmet>
                <title>ShareYourPlant | Sunan</title>
            </Helmet>
            <div style={headerStyle}>
                <Header colorScheme={colorScheme}/>
            </div>
        </Layout>
    )
}

export default SunanPage
