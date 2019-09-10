import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "../../containers/Login";
import Home from "../../containers/Home";
import Signup from "../../containers/Signup";
import Footer from "../../components/Footer";
import Search from "../../components/Search";



const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/search" component={Search} />
            <Route exact path="/" component={Signin} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Main;



