import React, {useState, useEffect} from 'react';

import { Layout, Menu, Checkbox } from 'antd';
import Icon from '@ant-design/icons';
import 'antd/dist/antd.css';
import PlantSvg from "./img/PlantSvg";



import DbExchange from "./components/plantComponents/DbExchange";
import RenderItems from "./components/plantComponents/RenderItems";
import Items from "./components/Items";
import MyHeader from "./components/MyHeader";
import PlantViewComponent from "./components/plantComponents/PlantViewComponent";
import CheckboxConnection from "./components/CheckboxConnection";

const { Footer, Content } = Layout



function App() {

    const urls = ['https://us-central1-shareyourplant-b5c9a.cloudfunctions.net/app/api', 'http://localhost:5001/shareyourplant-b5c9a/us-central1/app/api' ]
    const [devMode, setDevMode] = useState(true)
    const [intervalIsSet, setIntervalIsSet] = useState(null)
    const [url, setUrl] = useState(urls[1])
    const [plantView, setPlantView] = useState(false)
    const [loading, setLoading] = useState(true)



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

    const toggleLoading = () => {
        setLoading(!loading);
    }

    const renderContent = () => {
        return plantView ?
            <div style={{  height: '100%',width:'100%', backgroundColor:'white' }} >
                <PlantViewComponent toggleLoading={toggleLoading} handlePlantView={handlePlantView} />
            </div>
            :
            <div className='flex flex-column items-center justify-center' style={{  height: '100%',width:'100%', backgroundColor:'white' }} >
                <Items loading={loading} setLoading={setLoading} handlePlantView={handlePlantView} url={url}/>
            </div>
    }

    const handlePlantView = () => {
        setPlantView(!plantView);
    }

    const onChange = () => {
        setDevMode(!devMode)
        setUrl( devMode ?
            urls[0]
        :
            urls[1]
        )
         setLoading(true)
    }

    return (
        <div >
            <Layout style={{minHeight: '100vh'}} >
                <MyHeader colorScheme={colorScheme}/>
                <Content style={{ height: '100%'}} >
                    <div className='flex flex-column' style={{ padding: '100px 100px', minHeight: '100vh', backgroundColor: 'white' }}>
                       <CheckboxConnection onChange={onChange}/>
                        {renderContent()}
                    </div>
                </Content>
                <Footer style={{  textAlign: 'center'}} > <h3> Share your Plant   //   created by Henk van der Sloot   //   ©2020 </h3>  </Footer>
            </Layout>
        </div>
    )
}

export default App;
