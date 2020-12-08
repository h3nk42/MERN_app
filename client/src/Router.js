import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import ApiLanding from "./components/plantApi/ApiLanding/ApiLanding";
import React from "react";
import FelixPage from "./components/Felix/FelixPage";
import FranziPage from "./components/Franzi/FranziPage";
import SunanPage from "./components/Sunan/SunanPage";
import Profile from "./components/Profile/Profile";
import ShowPlantData from './components/plantApi/Data/ShowPlantData'

const Router = () => {

    return (
        <Switch>
            <Route exact path="/" render={props => <Home {...props} />}/>
            <Route exact path="/api" render={props => <ApiLanding state={true} {...props} />}/>
            <Route path="/felix" render={props => <FelixPage {...props} />}/>
            <Route path="/franzi" render={props => <FranziPage {...props} />}/>
            <Route path="/sunan" render={props => <SunanPage {...props} />}/>
            <Route path="/profile" render={props => <Profile {...props} />}/>
            <Route path="/api/showData" render={props => <ApiLanding state={false} {...props} />}/>
        </Switch>
    )
}

export default Router;
