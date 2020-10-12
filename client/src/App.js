import React, {useState, useEffect} from 'react';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';


import DbExchange from "./components/DB/DbExchange";
import RenderItems from "./components/DB/RenderItems";
import Items from "./components/Items";

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
        <div>
            <Layout>
                <Header style={{color:'#19601C'}}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Plants</Menu.Item>
                        <Menu.Item key="3">Contact</Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <div style={{ padding: '100px 100px', height: '1000px', backgroundColor: 'white' }}>
                        <div style={{ height: '100%',width:'100%', backgroundColor: colorScheme.fourth }} >
                            <Items></Items>
                        </div>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center'}} > Share your Plant   //   created by Henk van der Sloot   //   ©2020  </Footer>
            </Layout>
        </div>
    )
}

export default App;
