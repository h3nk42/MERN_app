import React, {useState, useEffect} from 'react';

import { Layout, Menu } from 'antd';
import Icon from '@ant-design/icons';
import 'antd/dist/antd.css';
import PlantSvg from "./img/PlantSvg";


import DbExchange from "./components/DB/DbExchange";
import RenderItems from "./components/DB/RenderItems";
import Items from "./components/Items";
import MyHeader from "./components/MyHeader";

const { Header, Footer, Content} = Layout



function App() {

    const colorScheme = {
                        main: '#4E6E5D',
                        second: '#4DA167',
                        third: '#3BC14A',
                        fourth: '#CFCFCF',
                        fifth: '#4D5057'
    }


    return (
        <div >
            <Layout style={{minHeight: '100vh'}} >
                <MyHeader colorScheme={colorScheme}/>
                <Content style={{ height: '100%'}} >
                    <div style={{ padding: '100px 100px', minHeight: '900px', backgroundColor: 'white' }}>
                        <div style={{  height: '100%',width:'100%', backgroundColor: colorScheme.fourth }} >
                            <Items/>
                        </div>
                    </div>
                </Content>
                <Footer style={{  textAlign: 'center'}} > <h3> Share your Plant   //   created by Henk van der Sloot   //   ©2020 </h3>  </Footer>
            </Layout>
        </div>
    )
}

export default App;
