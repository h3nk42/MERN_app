import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";
import { Layout } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './styles/ImageStyleBg.css'
import Items from "./components/Items";
import MyHeader from "./components/Header/MyHeader";
import PlantViewComponent from "./components/plantComponents/PlantViewComponent";
import MyFooter from "./components/Footer/MyFooter";
const { Content } = Layout



function App() {
//https://shareyourplant.herokuapp.com/api'http://localhost:3001/
    const urls = ['https://shareyourplant.herokuapp.com/', 'http://localhost:5001/shareyourplant-b5c9a/us-central1/app/api' ]
    const [devMode, setDevMode] = useState(false)
    const [url, setUrl] = useState(urls[0])
    const [plantView, setPlantView] = useState(false)
    const [loading, setLoading] = useState(true)
    const [imgLoading, setImgLoading] = useState(true)
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(socketIOClient(url))
        return function cleanUp() { if (socket) socket.disconnect(); }
    },[])

    const colorScheme = {main: '#264653',
                        second: '#2a9d8f',
                        third: '#e9c46a',
                        fourth: '#f4a261',
                        fifth: '#e76f51' }



    const renderContent = () => {
        return plantView ?
            <PlantViewComponent
                colorScheme={colorScheme}
                toggleLoading={toggleLoading}
                handlePlantView={handlePlantView}
            />
            :
            <div className='flex flex-column items-center justify-center'>
                <Items
                    socket={socket}
                    colorScheme={colorScheme}
                    loading={loading}
                    setLoading={setLoading}
                    handlePlantView={handlePlantView}
                    url={url}
                />
            </div>
    }

    const handlePlantView = () => {
        setPlantView(!plantView);
    }

    const toggleLoading = () => {
        setLoading(!loading);
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
            <div className='flex flex-column item-center justify-center' style={{
                height:'100vh',
                width: '100vw',
                backgroundColor: 'white'}}>
                <LoadingOutlined style={{ fontSize: '100px', color: 'black' }} />
            </div>
            :
            <div></div>
    }

    return (
        <div className='wrappingContainer ' style={{
            fontFamily: 'Quicksand, sans-serif'}}>
            {returnLoadingPage()}
            <div style={returnHiddenStyle()}>
                <Layout>
                    <Content>
                        <div className='backgroundDiv'>
                            <img
                                src={'https://i.ibb.co/b5DH4nY/djnglHD.jpg'}
                                alt={'https://i.ibb.co/b5DH4nY/djnglHD.jpg'}
                                className='backgroundImg'
                                onLoad={()=>{
                                        console.log('loading done')
                                        setImgLoading(false)
                                    }
                                }
                            />
                            <div className='flex flex-column items-center justify-start' style={{
                                minHeight: '100vh',
                                backgroundSize: '3000px 2000px',
                                backgroundImage: `url('https://i.ibb.co/b5DH4nY/djnglHD.jpg')`}}>

                                    <MyHeader colorScheme={colorScheme}/>
                                <div style={{
                                    padding: '5% 5%',
                                    marginBottom: 'auto'}}>
                                    {renderContent()}
                                </div>
                                    <MyFooter colorScheme={colorScheme}/>
                            </div>
                        </div>
                    </Content>
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
