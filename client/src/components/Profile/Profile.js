import React, {useState} from 'react';
import Helmet from "react-helmet";
import Header from "../Header/Header";

const Profile = () => {

    const colorScheme = {
        main: '#264653',
        second: '#2a9d8f',
        third: '#e9c46a',
        fourth: '#f4a261',
        fifth: '#e76f51'
    }

    const headerStyle = {
        background: "white"
    }

    return (
        <div className="wrappingContainer" style={{
            fontFamily: 'Quicksand, sans-serif'
        }}>
            <Helmet>
                <title>ShareYourPlant | Profile</title>
            </Helmet>
            <div style={headerStyle}>
                <Header colorScheme={colorScheme}/>
            </div>
        </div>
    )
}

export default Profile;