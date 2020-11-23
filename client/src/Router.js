import {Route, Switch} from "react-router-dom";
import App from "./App";
import ApiLanding from "./components/plantApi/ApiLanding/ApiLanding";
import React from "react";



const Router = () => {

    return (
            <Switch>
                <Route  exact path="/" render={props => <App {...props} />} />
                <Route  path="/api" render={props => <ApiLanding {...props} />} />
            </Switch>
    )
}

export default Router;
