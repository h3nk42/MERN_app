import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Header from "../../Header/Header";

const ApiLanding = () => {

    let [data, setData] = useState();
    let [loading, setLoading] = useState(true);

    const colorScheme = {main: '#264653',
        second: '#2a9d8f',
        third: '#e9c46a',
        fourth: '#f4a261',
        fifth: '#e76f51' }

    useEffect( () => {
        fetch('https://trefle.io/api/v1/', {mode:'no-cors'})
            .then((data) => data.json())
            .then((res) => {
                setData(res.data)
                setLoading(false)}).catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
        return function cleanUp() {}
    }, [])

    return (
        loading ?
            <div>
                <Header colorScheme={colorScheme}> </Header>
                loading
            </div>
            :
            <div>
                <h1> test </h1>
            </div>
    )
}

export default ApiLanding
