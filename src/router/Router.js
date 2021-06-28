import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import NewImage from '../pages/NewImage'
const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/new-image" component={NewImage}/>  
         <Route exact path="/singup" component={SignUp}/> 
         <Route exact path="/login" component={Login}/> 
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;