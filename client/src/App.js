import React, {useState, useEffect} from 'react';

import { Layout, Menu, Checkbox } from 'antd';
import Icon from '@ant-design/icons';
import 'antd/dist/antd.css';
import PlantSvg from "./img/PlantSvg";


import DbExchange from "./components/DB/DbExchange";
import RenderItems from "./components/DB/RenderItems";
import Items from "./components/Items";
import MyHeader from "./components/MyHeader";

const { Footer, Content } = Layout



function App() {

    const [devMode, setDevMode] = useState(false)
    const [intervalIsSet, setIntervalIsSet] = useState(null)
    const [url, setUrl] = useState('https://us-central1-shareyourplant-b5c9a.cloudfunctions.net/app/api')

    const colorScheme = {
                        main: '#4E6E5D',
                        second: '#4DA167',
                        third: '#3BC14A',
                        fourth: '#CFCFCF',
                        fifth: '#4D5057'
    }

/*
    useEffect(() => {
        if (!intervalIsSet) {
            let interval = setInterval(() => {
                console.log(devMode)
                console.log(url)
            }, 1000);
            setIntervalIsSet(interval);
        }
        return function cleanUp() {
            if (intervalIsSet) {
                clearInterval(intervalIsSet);
                setIntervalIsSet(null);
            }
        }
    })
*/

    const onChange = () => {

        setDevMode(!devMode)

        setUrl( devMode ?
            'https://us-central1-shareyourplant-b5c9a.cloudfunctions.net/app/api'
        :
            'http://localhost:5001/shareyourplant-b5c9a/us-central1/app/api'
    )


    }


    return (
        <div >
            <Layout style={{minHeight: '100vh'}} >
                <MyHeader colorScheme={colorScheme}/>
                <Content style={{ height: '100%'}} >
                    <div className='flex flex-column items-end' style={{ padding: '100px 100px', minHeight: '100vh', backgroundColor: 'white' }}>
                        <Checkbox onChange={onChange}>devMode</Checkbox>
                        <div style={{  height: '100%',width:'100%', backgroundColor: colorScheme.fourth }} >
                            <Items url={url}/>
                        </div>
                    </div>
                </Content>
                <Footer style={{  textAlign: 'center'}} > <h3> Share your Plant   //   created by Henk van der Sloot   //   ©2020 </h3>  </Footer>
            </Layout>
        </div>
    )
}

export default App;
