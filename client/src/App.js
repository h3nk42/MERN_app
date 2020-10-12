import React, {useState, useEffect} from 'react';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

import DbExchange from "./components/DB/DbExchange";

const { Header, Footer, Content} = Layout



function App() {

    
    return (
        <div>
            <Layout>
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Plants</Menu.Item>
                        <Menu.Item key="3">Contact</Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <div style={{ height: '800px', backgroundColor: 'white' }}>
                        <DbExchange/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center'}} > Share your Plant   //   created by Henk van der Sloot   //   ©2020  </Footer>
            </Layout>
        </div>
    )
}

export default App;
