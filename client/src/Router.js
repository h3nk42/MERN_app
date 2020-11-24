import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import ApiLanding from "./components/plantApi/ApiLanding/ApiLanding";
import React from "react";
import FelixPage from "./components/Felix/FelixPage";
import FranziPage from "./components/Franzi/FranziPage";
import SunanPage from "./components/Sunan/SunanPage";



const Router = () => {

    return (
            <Switch>
                <Route  exact path="/" render={props => <Home {...props} />} />
                <Route  path="/api" render={props => <ApiLanding {...props} />} />
                <Route  path="/felix" render={props => <FelixPage {...props} />} />
                <Route  path="/franzi" render={props => <FranziPage {...props} />} />
                <Route  path="/sunan" render={props => <SunanPage {...props} />} />
            </Switch>
    )
}

export default Router;
