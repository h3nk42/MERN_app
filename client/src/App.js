import React, {useState, useEffect} from 'react';

import { Layout, Menu, Checkbox } from 'antd';
import Icon, {LoadingOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import PlantSvg from "./img/PlantSvg";




import DbExchange from "./components/plantComponents/DbExchange";
import RenderItems from "./components/plantComponents/RenderItems";
import Items from "./components/Items";
import MyHeader from "./components/MyHeader";
import PlantViewComponent from "./components/plantComponents/PlantViewComponent";
import CheckboxConnection from "./components/CheckboxConnection";
import RadioConnection from "./components/RadioConnection";
import MyFooter from "./components/MyFooter";
import './styles/ImageStyleBg.css'


const { Footer, Content } = Layout



function App() {

    const urls = ['https://shareyourplant.herokuapp.com/api', 'http://localhost:5001/shareyourplant-b5c9a/us-central1/app/api' ]
    const [devMode, setDevMode] = useState(false)
    const [intervalIsSet, setIntervalIsSet] = useState(null)
    const [url, setUrl] = useState(urls[0])
    const [plantView, setPlantView] = useState(false)
    const [loading, setLoading] = useState(true)
    const [imgLoading, setImgLoading] = useState(true)



    const colorScheme = {
                        main: '#264653',
                        second: '#2a9d8f',
                        third: '#e9c46a',
                        fourth: '#f4a261',
                        fifth: '#e76f51'
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
                <PlantViewComponent colorScheme={colorScheme} toggleLoading={toggleLoading} handlePlantView={handlePlantView} />
            :
            <div className='flex flex-column items-center justify-center'  >
                <Items colorScheme={colorScheme} loading={loading} setLoading={setLoading} handlePlantView={handlePlantView} url={url}/>
            </div>
    }

    const handlePlantView = () => {
        setPlantView(!plantView);
    }

    const onChange = (bool) => {
        setDevMode(bool)
        setUrl( devMode ?
            urls[0]
        :
            urls[1]
        )
         setLoading(true)
    }

    const returnHiddenStyle = () => {
        return imgLoading ?
            {display: 'none'}
            :
            {}
    }

    const returnLoadingPage = () => {
        return imgLoading ?
        <div className='flex flex-column item-center justify-center' style={{ height:'100vh', width: '100vw', backgroundColor: 'white'}}>
            <LoadingOutlined style={{ fontSize: '100px', color: 'black' }} />
        </div>
            :
            <div></div>
    }

    return (
        <div>
            {returnLoadingPage()}
            <div style={returnHiddenStyle()}>
                <Layout style={{minHeight: '100vh'}} >
                        <MyHeader colorScheme={colorScheme}/>
                    <Content style={{ height: '100%',}} >
                        <div className='backgroundDiv' >
                            <img
                                src={'https://i.ibb.co/b5DH4nY/djnglHD.jpg'}
                                alt={'https://i.ibb.co/b5DH4nY/djnglHD.jpg'}
                                className='backgroundImg'
                                onLoad={()=>{console.log('loading done')
                                    setImgLoading(false)}}
                        />
                            <div className='flex flex-column' style={{ padding: '100px 100px', minHeight: '100vh',backgroundSize: '2300px 1080px', backgroundImage: `url('https://i.ibb.co/b5DH4nY/djnglHD.jpg')`}}>
                                <h2 style={{color: 'white'}} className='self-center'>connected to heroku!</h2>
                                {renderContent()}
                            </div>
                        </div>
                    </Content>
                   <MyFooter colorScheme={colorScheme}/>
                </Layout>
            </div>
        </div>
    )
}

//onLoad={() => {
//                         console.log('loading done')
//                         setImgLoading(false)
//                     }}

export default App;
