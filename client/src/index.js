import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import DarkModeContextWrapper from "./components/Sunan/hooks/DarkModeContext";
import Layout from "./components/Sunan/components/Layout";

ReactDOM.render(
    <React.StrictMode>
        <DarkModeContextWrapper>
            <Layout>
                <HashRouter>
                    <Router/>
                </HashRouter>
            </Layout>
        </DarkModeContextWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
